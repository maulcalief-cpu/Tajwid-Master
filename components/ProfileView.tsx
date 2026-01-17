
import React from 'react';
import { 
  Settings, 
  Award, 
  BookOpen, 
  Flame, 
  Trophy, 
  ChevronRight, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  Star
} from 'lucide-react';

const ProfileView: React.FC = () => {
  const stats = [
    { label: 'Hari Aktif', value: '12', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'XP Point', value: '1,250', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Materi Selesai', value: '8/15', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  const badges = [
    { name: 'Pemula Giat', icon: '🌱', date: '2 hari yang lalu' },
    { name: 'Khatam Dasar', icon: '📜', date: '5 hari yang lalu' },
    { name: 'Rajin Ujian', icon: '✍️', date: 'Kemarin' },
  ];

  const menuItems = [
    { label: 'Notifikasi', icon: Bell, color: 'text-blue-500' },
    { label: 'Keamanan Akun', icon: Shield, color: 'text-indigo-500' },
    { label: 'Pusat Bantuan', icon: HelpCircle, color: 'text-slate-500' },
    { label: 'Keluar', icon: LogOut, color: 'text-red-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-[40px] bg-gradient-to-br from-emerald-400 to-teal-500 p-1 shadow-xl shadow-emerald-100">
            <div className="w-full h-full rounded-[38px] bg-white flex items-center justify-center overflow-hidden border-4 border-white">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Avatar" 
                className="w-full h-full object-cover bg-emerald-50"
              />
            </div>
          </div>
          <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-600 shadow-lg hover:bg-slate-50 transition-colors">
            <Settings size={20} />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-800">Ahmad Fauzi</h2>
          <p className="text-slate-400 font-medium">Pelajar Tajwid • Level 5</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-[28px] border border-slate-50 shadow-sm flex flex-col items-center text-center space-y-2">
            <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
              <stat.icon size={20} strokeWidth={2.5} />
            </div>
            <div className="text-sm font-black text-slate-800">{stat.value}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-lg font-black text-slate-800">Pencapaian</h3>
          <button className="text-xs font-black text-emerald-600 hover:underline">LIHAT SEMUA</button>
        </div>
        <div className="bg-white rounded-[32px] border border-slate-50 p-6 shadow-sm flex items-center gap-6 overflow-x-auto no-scrollbar">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center min-w-[80px] space-y-2">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-3xl shadow-inner border border-white">
                {badge.icon}
              </div>
              <div className="text-[10px] font-black text-slate-700 text-center leading-tight">{badge.name}</div>
            </div>
          ))}
          <div className="min-w-[80px] flex flex-col items-center space-y-2 opacity-30">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl border-2 border-dashed border-slate-200">
              🔒
            </div>
            <div className="text-[10px] font-black text-slate-400">???</div>
          </div>
        </div>
      </div>

      {/* Menu Settings */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-800 px-2">Pengaturan</h3>
        <div className="bg-white rounded-[32px] border border-slate-50 overflow-hidden shadow-sm">
          {menuItems.map((item, i) => (
            <button 
              key={i} 
              className={`w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors ${i !== menuItems.length - 1 ? 'border-b border-slate-50' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 bg-slate-50 ${item.color} rounded-xl flex items-center justify-center`}>
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-slate-700">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Version Tag */}
      <div className="text-center pb-8">
        <p className="text-[10px] font-black text-slate-300 tracking-[0.3em] uppercase">Tajwid Master v2.4.0</p>
      </div>
    </div>
  );
};

export default ProfileView;
