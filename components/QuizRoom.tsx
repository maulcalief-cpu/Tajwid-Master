
import React, { useState, useEffect } from 'react';
import { generateQuiz } from '../services/geminiService';
import { QuizQuestion, QuizLevel } from '../types';
import { 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Trophy, 
  ClipboardCheck, 
  ArrowLeft, 
  Sparkles, 
  Info,
  ChevronRight,
  ShieldCheck,
  Zap,
  Flame
} from 'lucide-react';

interface QuizRoomProps {
  initialCategory?: string;
}

const QuizRoom: React.FC<QuizRoomProps> = ({ initialCategory }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  
  // Selection States
  const [step, setStep] = useState<'category' | 'level'>('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setStep('level');
    }
  }, [initialCategory]);

  const startQuiz = async (level: QuizLevel) => {
    if (!selectedCategory) return;
    
    setIsLoading(true);
    setQuizStarted(true);
    try {
      const data = await generateQuiz(selectedCategory, level);
      setQuestions(data);
      setCurrentIndex(0);
      setScore(0);
      setShowResult(false);
      setSelectedOption(null);
    } catch (err) {
      alert("Gagal memuat tes ujian. Silakan coba lagi.");
      setQuizStarted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === questions[currentIndex].correctAnswer) {
      setScore(s => s + 1);
    }
    
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(c => c + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  // Step 1: Pilih Kategori
  if (!quizStarted && step === 'category') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-in zoom-in duration-300 px-4">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mb-4 shadow-xl shadow-emerald-50">
          <ClipboardCheck size={48} strokeWidth={2.5} />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900">Pusat Tes Ujian</h1>
          <p className="text-slate-500 max-w-md mx-auto text-lg">
            Pilih kategori materi yang ingin Anda uji pemahamannya hari ini.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {['Nun Sukun', 'Mim Sukun', 'Hukum Mad', 'Alif Lam'].map(cat => (
            <button 
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setStep('level');
              }}
              className="p-6 bg-white border-2 border-slate-100 rounded-[24px] font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all shadow-sm flex flex-col items-center gap-3 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {cat === 'Nun Sukun' && '🌙'}
                {cat === 'Mim Sukun' && '🛡️'}
                {cat === 'Hukum Mad' && '✨'}
                {cat === 'Alif Lam' && '📖'}
              </span>
              <span className="text-sm">{cat}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Step 2: Pilih Level
  if (!quizStarted && step === 'level') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-in slide-in-from-right-4 duration-300 px-4">
        <button 
          onClick={() => setStep('category')}
          className="self-start flex items-center gap-2 text-slate-400 font-bold hover:text-emerald-600 transition-colors mb-4"
        >
          <ArrowLeft size={20} /> Ganti Kategori
        </button>

        <div className="space-y-2">
          <h2 className="text-sm font-black text-emerald-500 uppercase tracking-widest">{selectedCategory}</h2>
          <h1 className="text-4xl font-black text-slate-900">Pilih Tingkatan Level</h1>
          <p className="text-slate-500">Sesuaikan tantangan dengan kemampuanmu.</p>
        </div>

        <div className="grid gap-4 w-full max-w-md">
          {[
            { id: 'Dasar', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50', desc: 'Pengenalan huruf dan hukum dasar.' },
            { id: 'Menengah', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-50', desc: 'Identifikasi hukum dalam ayat pendek.' },
            { id: 'Mahir', icon: Flame, color: 'text-red-500', bg: 'bg-red-50', desc: 'Analisis mendalam dan kasus khusus.' }
          ].map((level) => (
            <button 
              key={level.id}
              onClick={() => startQuiz(level.id as QuizLevel)}
              className="flex items-center justify-between p-6 bg-white border-2 border-slate-100 rounded-[32px] group hover:border-emerald-500 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 ${level.bg} ${level.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <level.icon size={28} />
                </div>
                <div>
                  <h3 className="font-black text-slate-800 text-lg">{level.id}</h3>
                  <p className="text-slate-400 text-sm font-medium">{level.desc}</p>
                </div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <Loader2 className="animate-spin text-emerald-600" size={64} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="text-emerald-400" size={24} />
          </div>
        </div>
        <div className="text-center">
          <p className="text-slate-800 font-black text-xl mb-1">Menyiapkan Ujian {selectedCategory}</p>
          <p className="text-slate-400 font-medium animate-pulse">AI sedang menyusun soal tingkat lanjut untukmu...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="bg-white rounded-[48px] p-10 md:p-16 text-center max-w-2xl mx-auto border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] animate-in fade-in zoom-in duration-500">
        <div className="text-7xl mb-8">
          {percentage >= 80 ? '🎓' : percentage >= 50 ? '🥈' : '📚'}
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-2">Hasil Ujian Anda</h1>
        <p className="text-slate-400 mb-10 text-lg">
          {percentage >= 80 ? 'Luar biasa! Kamu menguasai materi ini dengan sangat baik.' : 'Bagus! Teruslah berlatih untuk hasil yang lebih maksimal.'}
        </p>
        
        <div className="relative inline-block mb-12">
          <div className="text-7xl font-black text-emerald-600">
            {score} <span className="text-2xl text-slate-300">/ {questions.length}</span>
          </div>
          <div className="text-sm font-black text-emerald-500 mt-2 tracking-widest uppercase">Skor Akhir</div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => {
              setQuizStarted(false);
              setStep('category');
            }}
            className="w-full bg-slate-900 text-white font-black py-5 rounded-[24px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
          >
            <ArrowLeft size={20} /> KEMBALI KE MENU UJIAN
          </button>
          <button 
            onClick={() => {
              setQuizStarted(false);
              setStep('level');
            }}
            className="w-full bg-white text-emerald-600 border-2 border-emerald-500 font-black py-5 rounded-[24px] hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
          >
            <RefreshCw size={20} /> ULANGI LEVEL INI
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-in slide-in-from-right-4 duration-300 pb-20">
      <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-black">
            {currentIndex + 1}
          </div>
          <div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress {selectedCategory}</div>
            <div className="text-sm font-bold text-slate-700">Soal {currentIndex + 1} / {questions.length}</div>
          </div>
        </div>
        <div className="h-3 w-32 md:w-48 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-700 ease-out" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] opacity-30"></div>
        
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-10 leading-tight relative z-10">
          {q?.question}
        </h2>
        
        <div className="grid gap-4 relative z-10">
          {q?.options.map((opt, i) => {
            let stateClass = "border-slate-100 hover:border-emerald-200 hover:bg-slate-50";
            if (selectedOption !== null) {
              if (i === q.correctAnswer) stateClass = "bg-emerald-50 border-emerald-500 text-emerald-900";
              else if (i === selectedOption) stateClass = "bg-red-50 border-red-500 text-red-900";
              else stateClass = "opacity-40 border-slate-50";
            }

            return (
              <button
                key={i}
                disabled={selectedOption !== null}
                onClick={() => handleAnswer(i)}
                className={`flex items-center justify-between p-6 rounded-[24px] border-2 text-left font-bold transition-all duration-300 ${stateClass}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs ${
                    selectedOption !== null && i === q.correctAnswer ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span>{opt}</span>
                </div>
                {selectedOption !== null && i === q.correctAnswer && <CheckCircle2 className="text-emerald-500" />}
                {selectedOption !== null && i === selectedOption && i !== q.correctAnswer && <XCircle className="text-red-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {selectedOption !== null && q && (
        <div className="bg-amber-50 border border-amber-100 p-8 rounded-[32px] animate-in slide-in-from-top-4 shadow-sm">
          <h4 className="font-black text-amber-900 text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
            <Info size={14} /> Pembahasan:
          </h4>
          <p className="text-amber-800 leading-relaxed font-medium">
            {q.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizRoom;
