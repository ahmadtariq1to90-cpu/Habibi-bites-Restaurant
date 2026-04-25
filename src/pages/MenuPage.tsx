import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Search, Lock } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

interface MenuPageProps {
  onNavigate: (screen: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (Category | 'All')[] = ['All', 'Fast Food', 'BBQ', 'Karahi', 'Drinks', 'Deals'];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-12 pt-32 pb-xl px-6 md:px- gutter max-w-container-max mx-auto w-full">
      {/* Page Header */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl text-white">Nocturnal Offerings</h1>
          <p className="text-on-surface-variant leading-relaxed">
            A curated selection of premium culinary experiences designed for the discerning palate. Explore our intimate dining collections.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="glass-panel rounded-full p-2 flex flex-col md:flex-row items-center gap-4 mt-4 shadow-2xl">
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input 
              type="text" 
              placeholder="Search the menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface/50 border-none focus:ring-1 focus:ring-primary-container rounded-full py-3 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/50 transition-all font-sans"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full hide-scrollbar py-1 pr-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'border-primary-container bg-primary-container/10 text-primary-container shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className={`glass-panel rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,175,55,0.08)] hover:border-primary-container/30 ${!item.isAvailable ? 'opacity-75 grayscale-[30%]' : ''}`}
          >
            <div 
              className="relative h-64 w-full overflow-hidden cursor-pointer"
              onClick={() => onNavigate(`item-${item.id}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10"></div>
              <img 
                src={item.image} 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {item.badges?.map(badge => (
                  <span key={badge} className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md border border-primary-container/50 rounded-full text-[10px] text-primary-container uppercase tracking-widest shadow-lg">
                    {badge}
                  </span>
                ))}
                {!item.isAvailable && (
                  <span className="px-3 py-1 bg-error/20 backdrop-blur-md border border-error/50 rounded-full text-[10px] text-error uppercase tracking-widest">
                    Out of Stock
                  </span>
                )}
                {item.isAvailable && !item.isSpecial && (
                  <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant rounded-full text-[10px] text-on-surface-variant uppercase tracking-widest w-max">
                    Available
                  </span>
                )}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow z-20 relative -mt-8">
              <h3 
                className="font-serif text-3xl text-white mb-2 drop-shadow-md cursor-pointer hover:text-primary-container transition-colors"
                onClick={() => onNavigate(`item-${item.id}`)}
              >
                {item.name}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 leading-relaxed">{item.description}</p>
              
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/30">
                <span className={`text-xl font-bold tracking-wider ${item.isAvailable ? 'text-primary-container' : 'text-on-surface-variant/50'}`}>
                  ${item.price}
                </span>
                {item.isAvailable ? (
                  <button 
                    onClick={() => onNavigate('checkout')}
                    className="h-12 w-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] active:scale-90"
                  >
                    <ShoppingCart size={20} fill="currentColor" />
                  </button>
                ) : (
                  <button className="h-12 w-12 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center cursor-not-allowed border border-outline-variant/50">
                    <Lock size={20} />
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};
