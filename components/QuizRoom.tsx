
import React, { useState, useEffect } from 'react';
import { generateQuiz } from '../services/geminiService';
import { QuizQuestion, QuizLevel } from '../types';
import { TAJWID_RULES } from '../constants';
// Added Sparkles to the imports from lucide-react
import { 
  Loader2, 
  ClipboardCheck, 
  ArrowLeft, 
  ChevronRight,
  BookOpen,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Trophy,
  RefreshCw,
  Sparkles
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
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  const [step, setStep] = useState<'category' | 'prep' | 'level'>('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setStep('prep');
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
      setIsAnswered(false);
      setSelectedOption(null);
    } catch (err) {
      setQuizStarted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (!quizStarted && step === 'category') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center shadow-inner">
          <ClipboardCheck size={48} />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900">Pusat Latihan</h1>
          <p className="text-slate-500 font-medium">Pilih materi yang ingin kamu uji hari ini.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {['Makhraj', 'Sifat', 'Nun Sukun', 'Mim Sukun', 'Mad', 'Alif Lam'].map(cat => (
            <button 
              key={cat} 
              onClick={() => { setSelectedCategory(cat); setStep('prep'); }} 
              className="p-6 bg-white border border-slate-100 rounded-[28px] font-bold text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all shadow-sm flex flex-col items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white flex items-center justify-center transition-colors">
                <BookOpen size={18} className="text-slate-400 group-hover:text-emerald-500" />
              </div>
              {cat}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!quizStarted && step === 'prep') {
    const relevantRule = TAJWID_RULES.find(r => r.category === selectedCategory) || TAJWID_RULES[0];
    return (
      <div className="max-w-md mx-auto space-y-6 animate-in slide-in-from-right-4 duration-300">
        <button onClick={() => setStep('category')} className="flex items-center gap-2 text-slate-400 font-bold mb-4 hover:text-slate-600 transition-colors">
          <ArrowLeft size={18} /> Ganti Kategori
        </button>
        <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl space-y-6">
          <div className="flex items-center gap-4 text-emerald-600">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <RefreshCw size={24} />
            </div>
            <h2 className="font-black text-2xl">Siap Ujian?</h2>
          </div>
          <div className="space-y-4">
            <p className="text-slate-500 leading-relaxed font-medium">Review singkat untuk materi <span className="text-emerald-600 font-bold">{selectedCategory}</span>:</p>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h3 className="font-black text-slate-800 mb-2">{relevantRule.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{relevantRule.description}</p>
            </div>
          </div>
          <button onClick={() => setStep('level')} className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-700 active:scale-95 transition-all">
            PILIH LEVEL & MULAI
          </button>
        </div>
      </div>
    );
  }

  if (!quizStarted && step === 'level') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4 animate-in zoom-in duration-300">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900">Tingkat Kesulitan</h1>
          <p className="text-slate-500 font-medium">Semakin tinggi level, semakin kompleks pertanyaannya.</p>
        </div>
        <div className="grid gap-4 w-full max-w-md">
          {[
            { id: 'Dasar', desc: 'Pengenalan & Hukum Dasar' },
            { id: 'Menengah', desc: 'Identifikasi Ayat & Makhraj' },
            { id: 'Mahir', desc: 'Analisis Tajwid Kompleks' }
          ].map(lvl => (
            <button 
              key={lvl.id} 
              onClick={() => startQuiz(lvl.id as QuizLevel)} 
              className="p-6 bg-white border border-slate-100 rounded-[28px] font-bold text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/30 text-left flex justify-between items-center group shadow-sm transition-all"
            >
              <div>
                <div className="text-lg font-black">{lvl.id}</div>
                <div className="text-xs text-slate-400 font-medium">{lvl.desc}</div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (isLoading) return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
      <div className="relative">
        <Loader2 className="animate-spin text-emerald-600" size={64} />
        <Sparkles className="absolute -top-2 -right-2 text-amber-400 animate-pulse" />
      </div>
      <div className="text-center">
        <p className="font-black text-xl text-slate-800">Menyusun Soal AI...</p>
        <p className="text-slate-400 text-sm">Gemini sedang mencari ayat Al-Quran untukmu.</p>
      </div>
    </div>
  );

  if (showResult) return (
    <div className="bg-white rounded-[48px] p-12 text-center max-w-lg mx-auto border border-slate-100 shadow-2xl animate-in zoom-in duration-500">
      <div className="w-24 h-24 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Trophy size={48} />
      </div>
      <h1 className="text-4xl font-black text-slate-900 mb-2">Luar Biasa!</h1>
      <p className="text-slate-500 font-medium mb-8">Kamu telah menyelesaikan latihan {selectedCategory}.</p>
      
      <div className="bg-slate-50 rounded-[32px] p-8 mb-10">
        <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Skor Kamu</div>
        <div className="text-7xl font-black text-emerald-600">{Math.round((score / questions.length) * 100)}%</div>
        <div className="text-slate-500 font-bold mt-2">{score} dari {questions.length} Benar</div>
      </div>

      <div className="space-y-3">
        <button 
          onClick={() => { setQuizStarted(false); setStep('category'); }} 
          className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
        >
          COBA MATERI LAIN
        </button>
        <button 
          onClick={() => window.location.reload()} 
          className="w-full bg-white text-slate-400 font-bold py-4 rounded-2xl hover:text-slate-600 transition-all"
        >
          KEMBALI KE BERANDA
        </button>
      </div>
    </div>
  );

  const q = questions[currentIndex];
  
  const handleOptionClick = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === q.correctAnswer) setScore(s => s + 1);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-300 pb-24">
      <div className="flex items-center justify-between px-2">
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-500 ${
                i < currentIndex ? 'bg-emerald-500 w-8' : i === currentIndex ? 'bg-emerald-600 w-12' : 'bg-slate-200 w-4'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Soal {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        <h2 className="text-2xl font-black text-slate-800 mb-10 leading-snug">{q?.question}</h2>
        
        <div className="grid gap-4">
          {q?.options.map((opt, i) => {
            const isSelected = selectedOption === i;
            const isCorrect = i === q.correctAnswer;
            
            let btnClass = "border-slate-100 hover:border-emerald-200 bg-white text-slate-700";
            if (isAnswered) {
              if (isCorrect) btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900";
              else if (isSelected) btnClass = "bg-red-50 border-red-500 text-red-900";
              else btnClass = "opacity-50 border-slate-50 bg-white text-slate-400";
            }

            return (
              <button
                key={i}
                disabled={isAnswered}
                onClick={() => handleOptionClick(i)}
                className={`p-6 rounded-3xl border-2 text-left font-bold transition-all flex items-center justify-between group ${btnClass}`}
              >
                <span>{opt}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-500" size={20} />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500" size={20} />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-10 animate-in slide-in-from-bottom-6 duration-500">
            <div className={`p-8 rounded-[32px] border flex flex-col gap-4 ${
              selectedOption === q.correctAnswer ? 'bg-emerald-50/50 border-emerald-100' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  selectedOption === q.correctAnswer ? 'bg-emerald-500 text-white' : 'bg-slate-500 text-white'
                }`}>
                  <Lightbulb size={20} />
                </div>
                <h4 className="font-black text-slate-800">Penjelasan AI</h4>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                {q.explanation}
              </p>
              <button 
                onClick={handleNext}
                className="mt-4 bg-slate-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg"
              >
                {currentIndex === questions.length - 1 ? 'LIHAT HASIL AKHIR' : 'SOAL BERIKUTNYA'}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizRoom;
