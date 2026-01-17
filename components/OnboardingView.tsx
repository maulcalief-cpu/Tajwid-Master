
import React from 'react';
import { ArrowRight, Star, Moon } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const OnboardingView: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdf9] via-[#f7fdfb] to-white flex flex-col items-center justify-between p-10 relative overflow-hidden font-sans">
      
      {/* Background Decorations */}
      <div className="absolute top-24 right-16 opacity-30 text-emerald-300">
        <Star size={32} fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-12 opacity-15 text-emerald-200 -rotate-12">
        <Moon size={80} fill="currentColor" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in zoom-in duration-1000">
        
        {/* Main Icon Card */}
        <div className="relative mb-16">
          <div className="w-48 h-48 bg-white rounded-[48px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] flex items-center justify-center relative transform hover:scale-105 transition-transform duration-500">
            {/* Visual Book Icon (Quran Style) */}
            <div className="relative w-28 h-20">
              <div className="absolute inset-0 bg-sky-500 rounded-lg transform -skew-y-2 shadow-md"></div>
              <div className="absolute inset-0.5 bg-white rounded-md transform -skew-y-2 flex shadow-inner overflow-hidden">
                <div className="w-1/2 border-r border-slate-100 h-full flex flex-col gap-1 p-2">
                  <div className="h-0.5 w-full bg-slate-100 rounded"></div>
                  <div className="h-0.5 w-3/4 bg-slate-100 rounded"></div>
                  <div className="h-0.5 w-full bg-slate-100 rounded"></div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-1 p-2">
                  <div className="h-0.5 w-full bg-slate-100 rounded"></div>
                  <div className="h-0.5 w-2/3 bg-slate-100 rounded"></div>
                  <div className="h-0.5 w-full bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-sky-600 rounded-b-lg transform -skew-y-2"></div>
            </div>

            {/* Orange Badge */}
            <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
              <Star size={20} fill="white" className="opacity-80" />
            </div>
          </div>
          {/* Subtle glow/shadow under card */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-emerald-500/5 blur-2xl rounded-full"></div>
        </div>

        {/* Text Title & Subtitle */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-black tracking-tight flex flex-row items-center justify-center gap-2">
            <span className="text-[#2d3a4b]">Tajwid</span>
            <span className="text-[#10b981]">Master</span>
          </h1>
          <p className="text-slate-400 text-base font-medium max-w-[280px] mx-auto leading-relaxed">
            Kuasai seni membaca Al-Quran dengan tajwid yang sempurna!
          </p>
        </div>
      </div>

      {/* Footer & Controls */}
      <div className="w-full max-w-sm flex flex-col items-center gap-12 pb-8 animate-in slide-in-from-bottom-8 duration-1000">
        
        {/* Main Action Button */}
        <button 
          onClick={onStart}
          className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(16,185,129,0.25)] transition-all active:scale-95 group"
        >
          Mulai Petualangan 
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Indicators & Label */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-100"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-200"></div>
          </div>
          <span className="text-slate-300 font-bold text-[10px] tracking-[0.3em] uppercase">
            EDUKASI & HIKMAH
          </span>
        </div>
      </div>
    </div>
  );
};

export default OnboardingView;
