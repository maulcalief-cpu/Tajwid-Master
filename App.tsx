
import React, { useState } from 'react';
import { 
  BookOpen, 
  Home, 
  User,
  Search as SearchIcon,
  Star,
  Moon,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ClipboardCheck,
  Trophy
} from 'lucide-react';
import { AppView, TajwidRule } from './types';
import { TAJWID_RULES } from './constants';
import LearnView from './components/LearnView';
import QuizRoom from './components/QuizRoom';
import ProfileView from './components/ProfileView';
import OnboardingView from './components/OnboardingView';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.ONBOARDING);
  const [selectedRule, setSelectedRule] = useState<TajwidRule | null>(null);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [targetQuizCategory, setTargetQuizCategory] = useState<string | undefined>(undefined);

  const categories = ['Semua', 'Dasar', 'Nun Sukun', 'Mim Sukun', 'Mad', 'Alif Lam'];

  const handleBack = () => {
    if (activeView === AppView.LEARN && selectedRule) {
      setSelectedRule(null);
    } else {
      setActiveView(AppView.HOME);
      setSelectedRule(null);
    }
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
    <div className="space-y-8 animate-in fade-in duration-700 pb-24">
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <SearchIcon size={20} className="text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder="Cari hukum tajwid..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#f1f5f9] border-none rounded-[20px] py-4 pl-14 pr-6 focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-600 font-medium"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-2 px-6 py-3 rounded-[18px] font-bold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-[#10b981] text-white shadow-[0_10px_20px_rgba(16,185,129,0.2)]' 
                : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
            }`}
          >
            {cat === 'Semua' && <span className="text-lg">🌈</span>}
            {cat === 'Dasar' && <span className="text-lg">⭐</span>}
            {cat === 'Nun Sukun' && <span className="text-lg">🌙</span>}
            {cat === 'Mim Sukun' && <span className="text-lg">🛡️</span>}
            {cat === 'Mad' && <span className="text-lg">✨</span>}
            {cat === 'Alif Lam' && <span className="text-lg">📖</span>}
            {cat}
          </button>
        ))}
      </div>

      {/* Ujian Banner - Hanya tampil di Beranda */}
      {showBanner && (
        <div className="bg-gradient-to-r from-[#10b981] to-[#059669] rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-100">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Trophy size={120} />
          </div>
          <div className="relative z-10 max-w-xs">
            <h2 className="text-2xl font-black mb-2">Tes Kemampuan</h2>
            <p className="text-emerald-50 mb-6 text-sm opacity-90">Uji pemahaman tajwidmu dengan soal-soal interaktif yang dibuat oleh AI.</p>
            <button 
              onClick={() => handleStartQuiz('Umum')}
              className="bg-white text-emerald-600 px-6 py-3 rounded-2xl font-black text-sm hover:bg-emerald-50 transition-colors shadow-lg"
            >
              MULAI UJIAN SEKARANG
            </button>
          </div>
        </div>
      )}

      {/* Featured Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">
            {activeCategory === 'Semua' ? 'Materi Tajwid Lengkap' : `Materi ${activeCategory}`}
          </h2>
          <p className="text-slate-400 text-sm font-medium">Daftar hukum tajwid untuk dipelajari</p>
        </div>
      </div>

      {/* Grid Materi */}
      {filteredRules.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredRules.map((rule, idx) => (
            <div 
              key={rule.id}
              onClick={() => {
                setSelectedRule(rule);
                setActiveView(AppView.LEARN);
              }}
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-50 group cursor-pointer hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-40 relative flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br ${
                idx % 4 === 0 ? 'from-emerald-400 to-teal-600' :
                idx % 4 === 1 ? 'from-blue-400 to-indigo-500' :
                idx % 4 === 2 ? 'from-orange-400 to-amber-500' :
                'from-purple-400 to-pink-500'
              }`}>
                <div className="absolute inset-0 opacity-10">
                   <div className="absolute -top-4 -right-4 w-24 h-24 border-8 border-white rounded-full"></div>
                   <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-white rounded-full"></div>
                </div>
                <div className="relative z-10 text-white font-bold text-center">
                   <div className="arabic text-5xl mb-1 drop-shadow-md">
                      {rule.letters[0]?.replace('ّ', '') || '📖'}
                   </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">{rule.name}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{rule.category}</p>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10">{rule.description}</p>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                  <div className="flex -space-x-2">
                    {rule.letters.slice(0, 3).map((l, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold arabic">{l}</div>
                    ))}
                  </div>
                  <button className="text-emerald-500 font-black text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                    BACA MATERI <ArrowRight size={14} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
           <div className="text-4xl mb-4">🔍</div>
           <p className="text-slate-400 font-medium">Materi tidak ditemukan. Coba kata kunci lain.</p>
        </div>
      )}
    </div>
  );

  const renderView = () => {
    switch (activeView) {
      case AppView.HOME:
        return renderHome(true);
      case AppView.LEARN:
        if (!selectedRule) return renderHome(false); // Sembunyikan banner jika di tab Materi
        return <LearnView selectedRule={selectedRule} onSelectRule={(rule) => {
          setSelectedRule(rule);
          if (!rule) setActiveView(AppView.LEARN);
        }} onStartQuiz={handleStartQuiz} />;
      case AppView.QUIZ:
        return <QuizRoom initialCategory={targetQuizCategory} />;
      case AppView.LIVE_COACH:
        return <ProfileView />;
      default:
        return null;
    }
  };

  if (activeView === AppView.ONBOARDING) {
    return <OnboardingView onStart={() => setActiveView(AppView.HOME)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-50 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {(activeView !== AppView.HOME || selectedRule) && (
            <button 
              onClick={handleBack}
              className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors mr-1"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
          )}
          <div className="w-11 h-11 bg-[#10b981] rounded-2xl flex items-center justify-center text-white shadow-[0_8px_20px_rgba(16,185,129,0.3)]">
            <Moon size={22} fill="white" className="-rotate-12" />
          </div>
          <h1 className="text-2xl font-black flex items-center gap-1">
            <span className="text-slate-800">Tajwid</span>
            <span className="text-[#10b981]">Master</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 bg-slate-50 text-orange-400 rounded-full flex items-center justify-center hover:bg-orange-50 transition-colors border border-slate-100">
            <Sparkles size={20} fill="currentColor" />
          </button>
          <button 
            onClick={() => {
              setActiveView(AppView.LIVE_COACH);
              setSelectedRule(null);
            }}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors border ${
              activeView === AppView.LIVE_COACH 
                ? 'bg-emerald-100 text-emerald-600 border-emerald-200' 
                : 'bg-emerald-50 text-emerald-600 border-emerald-100'
            }`}
          >
             <User size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-8 overflow-y-auto">
        {renderView()}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-8 py-4 flex items-center justify-between z-50 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
        {[
          { id: AppView.HOME, icon: Home, label: 'BERANDA' },
          { id: AppView.LEARN, icon: BookOpen, label: 'MATERI' },
          { id: AppView.QUIZ, icon: ClipboardCheck, label: 'UJIAN' },
          { id: AppView.LIVE_COACH, icon: User, label: 'PROFIL' },
        ].map((item) => {
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveView(item.id);
                setSelectedRule(null);
                setTargetQuizCategory(undefined);
              }}
              className="flex flex-col items-center gap-1.5 group relative"
            >
              <item.icon 
                size={26} 
                className={`${isActive ? 'text-emerald-500' : 'text-slate-300'} transition-colors duration-300`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] font-black tracking-widest ${isActive ? 'text-[#10b981]' : 'text-transparent'} transition-all duration-300`}>
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
