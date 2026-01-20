
import React, { useState, useEffect } from 'react';
import { TajwidRule } from '../types';
import { getAdvancedExplanation } from '../services/geminiService';
import { Sparkles, Loader2, PlayCircle, Book, Info, AlertTriangle, ArrowLeft, ClipboardCheck } from 'lucide-react';

interface Props {
  selectedRule: TajwidRule;
  onSelectRule: (rule: TajwidRule | null) => void;
  onStartQuiz?: (category: string) => void;
}

const LearnView: React.FC<Props> = ({ selectedRule, onSelectRule, onStartQuiz }) => {
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleFetchAIExplanation(selectedRule.name);
  }, [selectedRule]);

  const handleFetchAIExplanation = async (ruleName: string) => {
    setIsLoading(true);
    setAiExplanation(null);
    try {
      const result = await getAdvancedExplanation(ruleName);
      setAiExplanation(result || 'Gagal memuat penjelasan.');
    } catch (err) {
      setAiExplanation('Gagal memuat data dari AI.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      <button 
        onClick={() => onSelectRule(null)}
        className="text-emerald-600 font-bold hover:underline flex items-center gap-2 group mb-4"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Daftar
      </button>

      <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
        <div className="bg-emerald-50/50 p-8 md:p-12 border-b border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-emerald-600 font-black uppercase text-[10px] tracking-widest px-4 py-1.5 bg-white rounded-full border border-emerald-100 inline-block shadow-sm">
              {selectedRule.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">{selectedRule.name}</h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">{selectedRule.explanation}</p>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          <section className="animate-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-800">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                 <Book className="text-emerald-600" size={22} />
              </div> 
              Huruf Tajwid
            </h3>
            <div className="flex flex-wrap gap-4">
              {selectedRule.letters.map((l, i) => (
                <div key={i} className="w-20 h-20 rounded-[24px] bg-white border-2 border-slate-50 flex items-center justify-center text-4xl font-bold arabic text-emerald-900 shadow-sm hover:border-emerald-500 hover:text-emerald-500 transition-all cursor-default">
                  {l}
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
             <section className="bg-blue-50/50 border border-blue-100 p-8 rounded-[32px] animate-in slide-in-from-left-4 duration-500 delay-100">
                <h3 className="text-lg font-black mb-4 flex items-center gap-2 text-blue-900 uppercase tracking-wider">
                  <Info size={20} /> Cara Membaca
                </h3>
                <p className="text-blue-800 leading-relaxed font-medium">
                  {selectedRule.howToRead}
                </p>
             </section>

             <section className="bg-amber-50/50 border border-amber-100 p-8 rounded-[32px] animate-in slide-in-from-right-4 duration-500 delay-100">
                <h3 className="text-lg font-black mb-4 flex items-center gap-2 text-amber-900 uppercase tracking-wider">
                  <AlertTriangle size={20} /> Tip Belajar
                </h3>
                <p className="text-amber-800 leading-relaxed font-medium">
                  {selectedRule.commonMistakes}
                </p>
             </section>
          </div>

          <section className="animate-in slide-in-from-bottom-4 duration-500 delay-200">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-800">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                 <PlayCircle className="text-emerald-600" size={22} />
              </div>
              Contoh Ayat
            </h3>
            <div className="grid gap-6">
              {selectedRule.examples.map((ex, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex-1">
                    <div className="arabic text-5xl text-emerald-900 mb-4 leading-loose" dir="rtl">{ex.arabic}</div>
                    <div className="text-slate-400 font-bold text-sm tracking-wide flex items-center gap-2">
                      <span>{ex.transliteration}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span className="font-medium">{ex.translation}</span>
                    </div>
                  </div>
                  <div className="text-[10px] bg-emerald-600 text-white px-5 py-2.5 rounded-full font-black uppercase tracking-[0.2em] self-start md:self-center shadow-lg shadow-emerald-200">
                    {ex.rule_applied}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-slate-100 rounded-[3rem] p-10 md:p-16 relative overflow-hidden animate-in zoom-in duration-700 delay-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full -mr-24 -mt-24 blur-[100px]"></div>
            <div className="flex items-center justify-between mb-10 relative z-10">
              <h3 className="text-3xl font-black flex items-center gap-4">
                <Sparkles className="text-amber-400" size={32} /> Analisis AI
              </h3>
              {isLoading && <Loader2 className="animate-spin text-emerald-400" size={28} />}
            </div>
            <div className="prose prose-invert max-w-none prose-emerald relative z-10">
              {isLoading ? (
                <div className="space-y-6">
                  <div className="h-4 bg-white/10 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded-full w-full animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded-full w-5/6 animate-pulse"></div>
                </div>
              ) : (
                <div className="whitespace-pre-wrap leading-relaxed text-slate-300 text-lg font-medium opacity-90">
                  {aiExplanation || "Sedang memuat analisis mendalam..."}
                </div>
              )}
            </div>
          </section>

          <section className="pt-10 border-t border-slate-100 text-center animate-in fade-in duration-1000 delay-500">
            <h3 className="text-2xl font-black text-slate-800 mb-4">Sudah paham materi {selectedRule.name}?</h3>
            <p className="text-slate-500 mb-8">Uji pemahamanmu sekarang juga dengan tes singkat.</p>
            <button 
              onClick={() => onStartQuiz?.(selectedRule.category)}
              className="bg-emerald-600 text-white px-10 py-5 rounded-3xl font-black flex items-center gap-3 mx-auto hover:bg-emerald-700 shadow-xl shadow-emerald-100 active:scale-95 transition-all"
            >
              <ClipboardCheck /> MULAI TES PEMAHAMAN
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LearnView;
