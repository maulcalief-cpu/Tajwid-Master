
import React from 'react';
import { 
  Settings, 
  BookOpen, 
  Flame, 
  ChevronRight, 
  Bell, 
  Shield, 
  LogOut,
  Trophy,
  Info
} from 'lucide-react';
import { TAJWID_RULES } from '../constants';

const ProfileView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Header Profil */}
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-[40px] bg-emerald-100 p-1">
            <div className="w-full h-full rounded-[38px] bg-white flex items-center justify-center overflow-hidden border-4 border-white">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-lg">
            <Settings size={20} className="text-slate-600" />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-800">Ahmad Fauzi</h2>
          <p className="text-slate-400 font-medium">Pelajar Tajwid • Level 5</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-[28px] border border-slate-50 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center">
            <Flame size={24} />
          </div>
          <div>
            <div className="text-lg font-black text-slate-800">12 Hari</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Streak Belajar</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[28px] border border-slate-50 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
            <Trophy size={24} />
          </div>
          <div>
            <div className="text-lg font-black text-slate-800">850 XP</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Poin Ilmu</div>
          </div>
        </div>
      </div>

      {/* Materi Detail di Profil */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-800 px-2 flex items-center gap-2">
          <BookOpen size={20} className="text-emerald-500" /> Referensi Materi Tajwid
        </h3>
        <div className="bg-white rounded-[32px] border border-slate-50 overflow-hidden shadow-sm">
          {TAJWID_RULES.slice(0, 5).map((rule, i) => (
            <div key={rule.id} className={`p-5 ${i !== 4 ? 'border-b border-slate-50' : ''}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-black text-slate-800">{rule.name}</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-bold uppercase">{rule.category}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">{rule.explanation.slice(0, 100)}...</p>
              <div className="flex gap-2">
                {rule.letters.map((l, idx) => (
                  <span key={idx} className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center arabic text-emerald-700 font-bold">{l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pengaturan Lainnya */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-800 px-2">Akun</h3>
        <div className="bg-white rounded-[32px] border border-slate-50 overflow-hidden shadow-sm">
          {[
            { label: 'Notifikasi', icon: Bell, color: 'text-blue-500' },
            { label: 'Keamanan', icon: Shield, color: 'text-indigo-500' },
            { label: 'Keluar', icon: LogOut, color: 'text-red-500' },
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center justify-between p-5 hover:bg-slate-50 border-b border-slate-50 last:border-0">
              <div className="flex items-center gap-4">
                <item.icon size={20} className={item.color} />
                <span className="font-bold text-slate-700">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
