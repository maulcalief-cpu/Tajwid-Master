
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { Mic, MicOff, Info, Volume2 } from 'lucide-react';

// Audio Helpers
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const LiveCoach: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [transcription, setTranscription] = useState<string[]>([]);
  const [status, setStatus] = useState<string>("Ready to start");
  
  const sessionRef = useRef<any>(null);
  const audioContextInRef = useRef<AudioContext | null>(null);
  const audioContextOutRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef(new Set<AudioBufferSourceNode>());

  const startSession = async () => {
    try {
      const key = process.env.API_KEY;
      if (!key) {
        setStatus("API Key missing. Please check configuration.");
        return;
      }

      const ai = new GoogleGenAI({ apiKey: key });
      
      audioContextInRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextOutRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStatus("Connecting to AI Coach...");

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setIsActive(true);
            setStatus("Coach is listening...");
            const source = audioContextInRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = audioContextInRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              sessionPromise.then(s => s.sendRealtimeInput({ media: pcmBlob }));
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(audioContextInRef.current!.destination);
          },
          onmessage: async (msg: LiveServerMessage) => {
            if (msg.serverContent?.outputTranscription) {
              setTranscription(prev => [...prev, "AI: " + msg.serverContent!.outputTranscription!.text!]);
            }
            if (msg.serverContent?.inputTranscription) {
              setTranscription(prev => [...prev, "User: " + msg.serverContent!.inputTranscription!.text!]);
            }

            const audioData = msg.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && audioContextOutRef.current) {
              const ctx = audioContextOutRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              const buffer = await decodeAudioData(decode(audioData), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = buffer;
              source.connect(ctx.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }

            if (msg.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => {
            console.error(e);
            setStatus("Error occurred.");
          },
          onclose: () => {
            setIsActive(false);
            setStatus("Session closed.");
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          outputAudioTranscription: {},
          inputAudioTranscription: {},
          systemInstruction: 'Anda adalah seorang guru Tajwid yang ramah. Tugas Anda adalah membantu pengguna belajar membaca Al-Quran dengan benar. Jika pengguna membaca sesuatu, berikan feedback tentang hukum tajwidnya. Selalu berikan respon suara yang menenangkan.'
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error(err);
      setStatus("Failed to access microphone or API.");
    }
  };

  const stopSession = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    setIsActive(false);
    setStatus("Ready to start");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500 py-10">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Live Recitation Coach</h1>
        <p className="text-slate-600">Berlatih membaca Al-Quran langsung dengan AI. Bacalah beberapa ayat dan asisten kami akan memberikan feedback.</p>
      </div>

      <div className="relative">
        <div className={`w-48 h-48 rounded-full flex items-center justify-center transition-all duration-700 ${isActive ? 'bg-emerald-600 scale-110 shadow-[0_0_50px_rgba(16,185,129,0.4)]' : 'bg-slate-200'}`}>
          {isActive ? (
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-1.5 bg-white rounded-full animate-bounce`} style={{ height: `${Math.random() * 40 + 20}px`, animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          ) : (
            <Mic size={64} className="text-slate-400" />
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className={`font-bold tracking-wide flex items-center gap-2 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`}>
          {isActive && <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span>}
          {status}
        </p>

        <button
          onClick={isActive ? stopSession : startSession}
          className={`px-10 py-4 rounded-full font-bold shadow-lg transition-all flex items-center gap-3 ${isActive ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
        >
          {isActive ? <><MicOff size={20} /> Stop Practice</> : <><Mic size={20} /> Mulai Praktik Suara</>}
        </button>
      </div>

      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-4 border-b bg-slate-50 flex items-center gap-2">
          <Volume2 size={18} className="text-emerald-600" />
          <h3 className="text-sm font-bold text-slate-700">Percakapan Terakhir</h3>
        </div>
        <div className="p-6 h-64 overflow-y-auto space-y-4 flex flex-col">
          {transcription.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-slate-400 italic text-sm">
              Belum ada percakapan. Mulailah berbicara...
            </div>
          ) : (
            transcription.map((t, i) => (
              <div key={i} className={`max-w-[80%] p-3 rounded-2xl text-sm ${t.startsWith('User:') ? 'self-end bg-emerald-50 text-emerald-900 border border-emerald-100' : 'self-start bg-slate-100 text-slate-900 border border-slate-200'}`}>
                {t}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="max-w-md bg-amber-50 p-4 rounded-xl border border-amber-100 flex gap-3 text-xs text-amber-800">
        <Info size={16} className="shrink-0" />
        <p>Fitur ini menggunakan API Live Gemini 2.5. Pastikan koneksi internet Anda stabil untuk pengalaman terbaik.</p>
      </div>
    </div>
  );
};

export default LiveCoach;
