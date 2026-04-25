import React from 'react';
import { ShoppingBag, User } from 'lucide-react';
import { motion } from 'motion/react';

interface NavBarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeScreen, onNavigate }) => {
  const links = ['Menu', 'Reservations', 'Experience', 'About'];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md flex justify-between items-center px-6 md:px-10 h-20">
      <div 
        className="text-2xl font-serif font-light tracking-tighter text-primary-container cursor-pointer"
        onClick={() => onNavigate('landing')}
      >
        Habibi Bites
      </div>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => onNavigate(link.toLowerCase())}
            className={`font-serif text-sm tracking-widest uppercase transition-all duration-300 scale-95 active:scale-100 ${
              activeScreen === link.toLowerCase()
                ? 'text-primary-container border-b border-primary-container pb-1'
                : 'text-white/60 hover:text-primary-container'
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="text-white/60 hover:text-primary-container transition-colors scale-95 active:scale-100">
          <ShoppingBag size={20} />
        </button>
        <button 
          onClick={() => onNavigate('auth')}
          className="text-white/60 hover:text-primary-container transition-colors scale-95 active:scale-100"
        >
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};
