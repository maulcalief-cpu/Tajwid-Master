
import React, { useState, useEffect } from 'react';
import { generateQuiz } from '../services/geminiService';
import { QuizQuestion, QuizLevel } from '../types';
import { TAJWID_RULES } from '../constants';
import { 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  ClipboardCheck, 
  ArrowLeft, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Flame,
  BookOpen
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
    } catch (err) {
      setQuizStarted(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 1: Kategori
  if (!quizStarted && step === 'category') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[24px] flex items-center justify-center">
          <ClipboardCheck size={40} />
        </div>
        <h1 className="text-3xl font-black text-slate-900">Pilih Materi Ujian</h1>
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {['Nun Sukun', 'Mim Sukun', 'Hukum Mad', 'Alif Lam'].map(cat => (
            <button key={cat} onClick={() => { setSelectedCategory(cat); setStep('prep'); }} className="p-6 bg-white border border-slate-100 rounded-[24px] font-bold text-slate-700 hover:border-emerald-500 shadow-sm">
              {cat}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Step 2: Persiapan Materi (Sesuai Permintaan: Detail materi di Ujian)
  if (!quizStarted && step === 'prep') {
    const relevantRule = TAJWID_RULES.find(r => r.category === selectedCategory) || TAJWID_RULES[0];
    return (
      <div className="max-w-md mx-auto space-y-6 animate-in slide-in-from-right-4 duration-300">
        <button onClick={() => setStep('category')} className="flex items-center gap-2 text-slate-400 font-bold mb-4">
          <ArrowLeft size={18} /> Ganti Kategori
        </button>
        <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-emerald-600">
            <BookOpen size={24} />
            <h2 className="font-black text-xl">Ingat Materi Ini?</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium">Sebelum ujian {selectedCategory}, mari ingat kembali:</p>
          <div className="bg-slate-50 p-4 rounded-2xl">
            <h3 className="font-bold text-slate-800 mb-1">{relevantRule.name}</h3>
            <p className="text-sm text-slate-500">{relevantRule.description}</p>
          </div>
          <button onClick={() => setStep('level')} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-emerald-100">
            LANJUT KE PILIH LEVEL
          </button>
        </div>
      </div>
    );
  }

  // Step 3: Level
  if (!quizStarted && step === 'level') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
        <h1 className="text-3xl font-black text-slate-900">Tingkat Kesulitan</h1>
        <div className="grid gap-4 w-full max-w-md">
          {['Dasar', 'Menengah', 'Mahir'].map(lvl => (
            <button key={lvl} onClick={() => startQuiz(lvl as QuizLevel)} className="p-6 bg-white border border-slate-100 rounded-[24px] font-bold text-slate-700 hover:border-emerald-500 text-left flex justify-between items-center group shadow-sm">
              {lvl} <ChevronRight className="text-slate-300 group-hover:text-emerald-500" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (isLoading) return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <Loader2 className="animate-spin text-emerald-600" size={48} />
      <p className="font-bold text-slate-500">Menyusun Soal AI...</p>
    </div>
  );

  if (showResult) return (
    <div className="bg-white rounded-[40px] p-10 text-center max-w-md mx-auto border border-slate-100 shadow-sm animate-in zoom-in duration-500">
      <h1 className="text-3xl font-black text-slate-900 mb-2">Hasil Ujian</h1>
      <div className="text-6xl font-black text-emerald-600 mb-8">{score} / {questions.length}</div>
      <button onClick={() => { setQuizStarted(false); setStep('category'); }} className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl">
        MENU UTAMA
      </button>
    </div>
  );

  const q = questions[currentIndex];
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-300">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-black text-slate-800 mb-8">{q?.question}</h2>
        <div className="grid gap-3">
          {q?.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => {
                if (selectedOption !== null) return;
                setSelectedOption(i);
                if (i === q.correctAnswer) setScore(s => s + 1);
                setTimeout(() => {
                  if (currentIndex < questions.length - 1) {
                    setCurrentIndex(c => c + 1);
                    setSelectedOption(null);
                  } else setShowResult(true);
                }, 1500);
              }}
              className={`p-5 rounded-2xl border-2 text-left font-bold transition-all ${
                selectedOption === i ? (i === q.correctAnswer ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500') : 'border-slate-50 hover:border-emerald-200'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizRoom;
