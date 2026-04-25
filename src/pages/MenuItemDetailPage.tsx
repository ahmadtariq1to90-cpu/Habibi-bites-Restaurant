import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, ArrowLeft, Flame, Award, Clock } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

interface MenuItemDetailPageProps {
  itemId: string;
  onNavigate: (screen: string) => void;
}

export const MenuItemDetailPage: React.FC<MenuItemDetailPageProps> = ({ itemId, onNavigate }) => {
  const item = MENU_ITEMS.find(i => `item-${i.id}` === itemId);

  if (!item) return <div className="pt-32 px-10 text-center">Item not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col md:flex-row min-h-screen"
    >
      {/* Visual Section */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden sticky top-0">
        <button 
          onClick={() => onNavigate('menu')}
          className="absolute top-24 left-8 z-30 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Menu
        </button>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 md:hidden"></div>
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 bg-background relative overflow-y-auto pt-32 pb-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-xl mx-auto px-8 md:px-16 flex flex-col justify-center min-h-full">
          {/* Status Badges */}
          <div className="flex items-center space-x-4 mb-10">
            {item.isSpecial && (
               <span className="px-5 py-2 border border-primary-container/30 rounded-full text-[10px] text-primary-container tracking-[0.2em] uppercase bg-primary-container/5 flex items-center gap-2">
                <Award size={14} /> Signature
              </span>
            )}
            {item.isSpicy && (
              <span className="px-5 py-2 border border-error/20 rounded-full text-[10px] text-error tracking-[0.2em] uppercase bg-error/5 flex items-center gap-2">
                <Flame size={14} /> Spicy
              </span>
            )}
            <span className="px-5 py-2 border border-white/5 rounded-full text-[10px] text-on-surface-variant tracking-[0.2em] uppercase bg-white/5 flex items-center gap-2">
              <Clock size={14} /> 20-30 min
            </span>
          </div>

          <div className="flex justify-between items-start mb-10">
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">{item.name}</h1>
            <span className="font-serif text-3xl text-primary-container mt-2 ml-6 whitespace-nowrap">${item.price}</span>
          </div>

          <p className="text-on-surface-variant text-lg leading-relaxed mb-16">
            {item.description}
          </p>

          <div className="glass-panel rounded-2xl p-8 mb-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <h3 className="text-[10px] text-outline tracking-[0.3em] uppercase mb-6 font-bold">Prime Ingredients</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 relative z-10">
              {['A5 Wagyu', 'Black Garlic', 'Saffron Threads', 'Vine-ripened Tomatoes'].map((ing) => (
                <div key={ing} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
                  <span className="text-on-surface font-sans text-sm">{ing}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-auto pt-10 border-t border-white/5">
            <div className="flex items-center border border-white/10 rounded-full bg-white/5 px-6 py-3 w-full sm:w-auto justify-between sm:justify-start">
              <button className="text-on-surface-variant hover:text-primary-container transition-colors font-bold text-xl px-2">-</button>
              <span className="text-on-surface font-sans text-lg font-bold mx-8">1</span>
              <button className="text-on-surface-variant hover:text-primary-container transition-colors font-bold text-xl px-2">+</button>
            </div>
            
            <button 
              onClick={() => onNavigate('checkout')}
              className="w-full sm:w-auto flex-grow bg-primary-container hover:bg-primary text-on-primary font-bold text-[10px] tracking-[0.3em] uppercase py-5 px-10 rounded-full transition-all shadow-[0_10px_20px_rgba(212,175,55,0.1)] flex items-center justify-center gap-3 active:scale-95 group"
            >
              Add to Cart <ShoppingCart size={18} className="group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
