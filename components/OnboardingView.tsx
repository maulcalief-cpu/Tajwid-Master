
import React from 'react';
import { ArrowRight, Moon, Book } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const OnboardingView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-10 font-sans overflow-hidden">
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-24 right-16 opacity-5 text-emerald-300 pointer-events-none">
        <Moon size={160} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 left-[-50px] opacity-[0.03] text-emerald-600 pointer-events-none">
        <Book size={300} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in zoom-in duration-1000">
        <div className="relative mb-12">
          {/* Efek Cahaya di belakang Ikon */}
          <div className="absolute inset-0 bg-emerald-200 blur-[60px] opacity-30 animate-pulse"></div>
          
          <div className="relative w-48 h-48 bg-gradient-to-br from-emerald-50 to-white rounded-[56px] shadow-2xl shadow-emerald-100 flex items-center justify-center border border-emerald-100 group">
            <div className="w-32 h-32 bg-emerald-600 rounded-[40px] flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Book size={64} fill="white" className="opacity-90" />
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tight flex flex-row items-center justify-center gap-2">
              <span className="text-slate-800">Tajwid</span>
              <span className="text-[#10b981]">Master</span>
            </h1>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-slate-400 text-lg font-medium max-w-[300px] mx-auto leading-relaxed">
            Panduan lengkap belajar membaca Al-Quran dengan tajwid yang sempurna.
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col items-center gap-10 pb-8 relative z-10">
        <button 
          onClick={onStart}
          className="w-full bg-[#10b981] text-white py-6 rounded-[24px] font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-emerald-200 hover:bg-emerald-600 active:scale-95 transition-all group"
        >
          Mulai Belajar 
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-100"></div>
            <div className="w-3 h-3 rounded-full bg-slate-100"></div>
          </div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Versi 2.5 • AI Powered</p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingView;
