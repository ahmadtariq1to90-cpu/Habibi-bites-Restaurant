import React from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  ChefHat, 
  BarChart3, 
  Settings, 
  ExternalLink 
} from 'lucide-react';

interface SideNavBarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({ activeScreen, onNavigate }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reservations', label: 'Reservations', icon: CalendarDays },
    { id: 'menu-editor', label: 'Menu Editor', icon: ChefHat },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="bg-[#1A1A1A] h-screen w-64 border-r border-white/5 shadow-xl flex flex-col sticky top-0 shrink-0 hidden md:flex">
      <div className="flex flex-col items-center pt-10 pb-8 border-b border-white/5">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-outline-variant/30 relative shadow-lg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxeSs1SoOqfV3yDv_x_do1IsxXRs9YegxdeTxypNxvvgZ4RCQJC2-iffVWU4yCFrqww-9FWw6yQ1mij04_G1OsTs6tp2VLmCKef14-K--GVI2iZvgbaARwx0KNYNnFFDZSRdzOmqgZsNRMLkpcH4laEUyKGmG5ITpr0hDICwkveCbdo7G4P7rzOs_l-UIwRSiDYJw79Uw_e8x-lcLVuSNv6lvSDn1Ju2kAuOSJ6BgP9AvIh4utNFpm0YXcbwXQUDg9ndIWpNCnRmg" 
            alt="Maitre D'"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-primary-container font-serif text-lg">Maitre D'</h2>
        <span className="text-on-surface-variant text-sm mt-1 whitespace-nowrap">Habibi Bites Admin</span>
      </div>

      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 group ${
              activeScreen === tab.id
                ? 'bg-primary-container/10 text-primary-container border-r-2 border-primary-container'
                : 'text-white/40 hover:bg-white/5 hover:text-white'
            }`}
          >
            <tab.icon size={20} />
            <span className="font-sans text-xs uppercase tracking-widest mt-0.5">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6 border-t border-white/5">
        <button 
          onClick={() => onNavigate('landing')}
          className="w-full py-3 px-4 border border-primary-container text-primary-container rounded-full text-xs uppercase tracking-widest hover:bg-primary-container/10 transition-colors flex items-center justify-center gap-2"
        >
          <ExternalLink size={14} />
          View Live Site
        </button>
      </div>
    </nav>
  );
};
