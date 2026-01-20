
import React from 'react';
import { ArrowRight, Moon } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const OnboardingView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-10 font-sans">
      <div className="absolute top-24 right-16 opacity-5 text-emerald-300">
        <Moon size={120} fill="currentColor" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in zoom-in duration-1000">
        <div className="relative mb-16">
          <div className="w-44 h-44 bg-emerald-50 rounded-[48px] shadow-sm flex items-center justify-center border border-emerald-100">
            <div className="relative w-24 h-16">
              <div className="absolute inset-0 bg-emerald-500 rounded-lg transform -skew-y-2"></div>
              <div className="absolute inset-1 bg-white rounded-md transform -skew-y-2"></div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black tracking-tight flex flex-row items-center justify-center gap-2">
            <span className="text-slate-800">Tajwid</span>
            <span className="text-[#10b981]">Master</span>
          </h1>
          <p className="text-slate-400 text-base font-medium max-w-[280px] mx-auto leading-relaxed">
            Belajar membaca Al-Quran dengan tajwid yang sempurna dan detail.
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm flex flex-col items-center gap-12 pb-8">
        <button 
          onClick={onStart}
          className="w-full bg-[#10b981] text-white py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-100"
        >
          Mulai Belajar 
          <ArrowRight />
        </button>
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-100"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingView;
