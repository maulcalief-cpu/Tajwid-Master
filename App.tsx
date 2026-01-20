
import React, { useState } from 'react';
import { 
  BookOpen, 
  Home, 
  User,
  Search as SearchIcon,
  Moon,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  Trophy,
  Mic,
  Dna,
  Zap,
  Star,
  Book
} from 'lucide-react';
import { AppView, TajwidRule } from './types';
import { TAJWID_RULES } from './constants';
import LearnView from './components/LearnView';
import QuizRoom from './components/QuizRoom';
import ProfileView from './components/ProfileView';
import OnboardingView from './components/OnboardingView';
import LiveCoach from './components/LiveCoach';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.ONBOARDING);
  const [selectedRule, setSelectedRule] = useState<TajwidRule | null>(null);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [targetQuizCategory, setTargetQuizCategory] = useState<string | undefined>(undefined);

  const categories = ['Semua', 'Makhraj', 'Qolqolah', 'Sifat', 'Nun Sukun', 'Mim Sukun', 'Mad', 'Alif Lam', 'Dasar'];

  const handleBack = () => {
    if (activeView === AppView.LEARN && selectedRule) {
      setSelectedRule(null);
    } else {
      setActiveView(AppView.HOME);
      setSelectedRule(null);
    }
  };

  const handleLogout = () => {
    // Langsung meriset aplikasi ke awal (Onboarding)
    setActiveView(AppView.ONBOARDING);
    setSelectedRule(null);
    setActiveCategory('Semua');
    setSearchQuery('');
  };

  const handleStartQuiz = (category: string) => {
    setTargetQuizCategory(category);
    setActiveView(AppView.QUIZ);
  };

  const filteredRules = TAJWID_RULES.filter(rule => {
    const matchesCategory = activeCategory === 'Semua' || rule.category === activeCategory;
    const matchesSearch = rule.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          rule.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderHome = (showBanner: boolean = true) => (
    <div className="space-y-10 animate-in fade-in duration-700 pb-24">
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <SearchIcon size={20} className="text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder="Cari hukum tajwid atau makhraj..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-slate-100 rounded-[24px] py-4 pl-14 pr-6 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-slate-600 font-medium shadow-sm"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-2 px-6 py-3 rounded-[18px] font-bold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-100' 
                : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {showBanner && activeCategory === 'Semua' && (
        <section className="space-y-5">
           <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-black text-slate-800">Latihan Khusus</h3>
            <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Baru</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => handleStartQuiz('Umum')}
              className="bg-slate-900 text-white p-6 rounded-[32px] flex items-center justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <div className="text-left">
                  <div className="font-black text-lg">Daily Quiz</div>
                  <div className="text-xs text-white/50 font-medium">5 Soal cepat setiap hari</div>
                </div>
              </div>
              <ArrowRight size={20} className="text-white/20 group-hover:text-emerald-400" />
            </button>

            <button 
              onClick={() => handleStartQuiz('Identifikasi Ayat')}
              className="bg-white border border-slate-100 p-6 rounded-[32px] flex items-center justify-between group hover:-translate-y-1 transition-all shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <Star size={24} />
                </div>
                <div className="text-left">
                  <div className="font-black text-lg text-slate-800">Tebak Hukum</div>
                  <div className="text-xs text-slate-400 font-medium">Identifikasi hukum dalam ayat</div>
                </div>
              </div>
              <ArrowRight size={20} className="text-slate-100 group-hover:text-emerald-500" />
            </button>
          </div>
        </section>
      )}

      {showBanner && activeCategory === 'Semua' && (
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10 -mr-10 -mt-10">
            <Trophy size={200} />
          </div>
          <div className="relative z-10 max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-emerald-400/30 text-emerald-100 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-400/20">AI Practice</span>
            </div>
            <h2 className="text-3xl font-black mb-3 leading-tight">Uji Bacaan Kamu dengan Guru AI</h2>
            <p className="text-emerald-50/80 mb-8 text-sm font-medium leading-relaxed">Bacalah ayat pilihan dan AI akan langsung memberikan feedback tajwid yang akurat melalui suara.</p>
            <button 
              onClick={() => setActiveView(AppView.LIVE_COACH)}
              className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-black text-sm hover:bg-emerald-50 transition-all shadow-xl flex items-center gap-2"
            >
              <Mic size={18} /> MULAI PRAKTIK SEKARANG
            </button>
          </div>
        </div>
      )}

      <div className="space-y-5">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-black text-slate-800">Kurikulum Materi</h3>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{filteredRules.length} Modul</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredRules.map((rule, idx) => (
            <div 
              key={rule.id}
              onClick={() => {
                setSelectedRule(rule);
                setActiveView(AppView.LEARN);
              }}
              className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-50 group cursor-pointer hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className={`h-40 relative flex items-center justify-center p-6 bg-gradient-to-br transition-all duration-500 group-hover:opacity-90 ${
                idx % 4 === 0 ? 'from-emerald-400 to-teal-600 shadow-emerald-100' : 
                idx % 4 === 1 ? 'from-blue-400 to-indigo-500 shadow-blue-100' :
                idx % 4 === 2 ? 'from-amber-400 to-orange-500 shadow-amber-100' :
                'from-rose-400 to-pink-500 shadow-rose-100'
              }`}>
                <div className="text-white font-bold text-center">
                   <div className="arabic text-6xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">{rule.letters[0] || '📖'}</div>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">{rule.category}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-2 leading-tight">{rule.name}</h3>
                <p className="text-sm text-slate-400 font-medium mb-6 line-clamp-2">{rule.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                   <div className="flex -space-x-2">
                      {rule.letters.slice(0, 3).map((l, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-xs arabic font-bold text-slate-400">{l}</div>
                      ))}
                   </div>
                   <span className="text-emerald-500 font-black text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      PELAJARI <ArrowRight size={14} />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch (activeView) {
      case AppView.HOME:
        return renderHome(true);
      case AppView.LEARN:
        if (!selectedRule) return renderHome(false);
        return <LearnView selectedRule={selectedRule} onSelectRule={setSelectedRule} onStartQuiz={handleStartQuiz} />;
      case AppView.QUIZ:
        return <QuizRoom initialCategory={targetQuizCategory} />;
      case AppView.LIVE_COACH:
        return <LiveCoach />;
      case AppView.PROFILE:
        return <ProfileView onLogout={handleLogout} />;
      default:
        return renderHome(true);
    }
  };

  if (activeView === AppView.ONBOARDING) {
    return <OnboardingView onStart={() => setActiveView(AppView.HOME)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd]">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-50 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {(activeView !== AppView.HOME || selectedRule) && (
            <button onClick={handleBack} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
              <ChevronLeft size={24} />
            </button>
          )}
          <div className="w-11 h-11 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-100">
            <Moon size={22} fill="white" />
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Tajwid<span className="text-emerald-600">Master</span></h1>
        </div>
        <div className="flex items-center gap-2">
          {/* Tombol Kembali ke Awal dengan Ikon Book (Quran) */}
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl hover:bg-emerald-100 active:scale-95 transition-all shadow-sm group"
            title="Kembali ke Awal"
          >
            <Book size={18} className="group-hover:rotate-6 transition-transform" />
            <span className="text-[11px] font-black uppercase tracking-wider hidden sm:inline">Kembali</span>
          </button>
          <button 
            onClick={() => setActiveView(AppView.PROFILE)}
            className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-white shadow-md active:scale-95 transition-transform"
          >
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad" alt="User" />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-8 overflow-y-auto no-scrollbar">
        {renderView()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 px-8 py-5 flex items-center justify-between z-50 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
        {[
          { id: AppView.HOME, icon: Home, label: 'BERANDA' },
          { id: AppView.QUIZ, icon: Zap, label: 'LATIHAN' },
          { id: AppView.LIVE_COACH, icon: Mic, label: 'GURU AI' },
          { id: AppView.PROFILE, icon: User, label: 'PROFIL' },
        ].map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => { setActiveView(item.id); setSelectedRule(null); }}
              className="flex flex-col items-center gap-1.5 group outline-none"
            >
              <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-emerald-50' : 'group-hover:bg-slate-50'}`}>
                <item.icon size={24} className={isActive ? 'text-emerald-600' : 'text-slate-300 group-hover:text-slate-400'} />
              </div>
              <span className={`text-[9px] font-black tracking-widest ${isActive ? 'text-emerald-600' : 'text-transparent'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default App;
