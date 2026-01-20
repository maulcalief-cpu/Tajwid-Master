
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
  ClipboardCheck,
  Trophy,
  Mic
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

      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-2 px-6 py-3 rounded-[18px] font-bold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-[#10b981] text-white shadow-lg shadow-emerald-100' 
                : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {showBanner && (
        <div className="bg-gradient-to-r from-[#10b981] to-[#059669] rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-100">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Trophy size={120} />
          </div>
          <div className="relative z-10 max-w-xs">
            <h2 className="text-2xl font-black mb-2">Guru AI Tajwid</h2>
            <p className="text-emerald-50 mb-6 text-sm opacity-90">Praktik suara langsung dan dapatkan feedback tajwid seketika.</p>
            <button 
              onClick={() => setActiveView(AppView.LIVE_COACH)}
              className="bg-white text-emerald-600 px-6 py-3 rounded-2xl font-black text-sm hover:bg-emerald-50 transition-colors shadow-lg"
            >
              COBA GURU AI
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredRules.map((rule, idx) => (
          <div 
            key={rule.id}
            onClick={() => {
              setSelectedRule(rule);
              setActiveView(AppView.LEARN);
            }}
            className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-50 group cursor-pointer hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`h-32 relative flex items-center justify-center p-6 bg-gradient-to-br ${
              idx % 4 === 0 ? 'from-emerald-400 to-teal-600' : 'from-blue-400 to-indigo-500'
            }`}>
              <div className="text-white font-bold text-center">
                 <div className="arabic text-4xl">{rule.letters[0] || '📖'}</div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black text-slate-800 mb-1">{rule.name}</h3>
              <p className="text-xs text-slate-400 font-bold mb-3">{rule.category}</p>
              <button className="text-emerald-500 font-black text-xs flex items-center gap-1">
                PELAJARI <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderView = () => {
    try {
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
          return <ProfileView />;
        default:
          return renderHome(true);
      }
    } catch (err) {
      console.error("View Render Error:", err);
      return <div className="p-10 text-center">Gagal memuat halaman. Silakan muat ulang.</div>;
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
            <button onClick={handleBack} className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl">
              <ChevronLeft size={24} />
            </button>
          )}
          <div className="w-11 h-11 bg-[#10b981] rounded-2xl flex items-center justify-center text-white">
            <Moon size={22} fill="white" />
          </div>
          <h1 className="text-2xl font-black text-slate-800">TajwidMaster</h1>
        </div>
        <button 
          onClick={() => setActiveView(AppView.LIVE_COACH)}
          className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
            activeView === AppView.LIVE_COACH ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-emerald-600 border-slate-100'
          }`}
        >
          <Mic size={20} />
        </button>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-8 overflow-y-auto">
        {renderView()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-8 py-4 flex items-center justify-between z-50 rounded-t-[32px] shadow-lg">
        {[
          { id: AppView.HOME, icon: Home, label: 'BERANDA' },
          { id: AppView.LEARN, icon: BookOpen, label: 'MATERI' },
          { id: AppView.LIVE_COACH, icon: Mic, label: 'GURU AI' },
          { id: AppView.PROFILE, icon: User, label: 'PROFIL' },
        ].map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => { setActiveView(item.id); setSelectedRule(null); }}
              className="flex flex-col items-center gap-1 group"
            >
              <item.icon size={26} className={isActive ? 'text-emerald-500' : 'text-slate-300'} />
              <span className={`text-[10px] font-black ${isActive ? 'text-emerald-500' : 'text-transparent'}`}>
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
