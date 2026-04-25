import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROMOTIONS } from '../constants';

interface LandingPageProps {
  onNavigate: (screen: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDqp7LpjdipYlFqVaFS_kHXaH-io6AO7g4Hjre4DguyW89FGbUL7NMrY9_crJDFdwQ9anYZ7qK1-kK8uZixFieCuDYLeX1RBbSTv7S16pXgzYNCUswiHgTTNM1FyMUxvZPz8CQlNBwS7OJDWWj-A3xb5qXbdSl42V21_o97Dzb976F6WpxpBFQcmjsKJMrI3xVzhqU7sjIIlQuhZYTbCcixPJ72_saiCVL9Utggv9LzKBMGannVF9BwtOI4vwLi1d3EFQAsNlvdEU"
            alt="Hero"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background opacity-90"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center gap-12"
        >
          <div className="space-y-4">
            <p className="font-sans text-[10px] text-primary-container uppercase tracking-[0.3em] opacity-80">A Symphony of Flavor</p>
            <h1 className="font-serif text-6xl md:text-8xl text-white text-glow">Habibi Bites</h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Indulge in an elevated culinary journey where tradition meets nocturnal opulence. Every bite is a curated masterpiece.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button 
              onClick={() => onNavigate('menu')}
              className="bg-primary-container text-on-primary font-sans text-xs px-10 py-5 rounded-full uppercase tracking-widest hover:opacity-90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              View Menu
            </button>
            <button 
              onClick={() => onNavigate('menu')}
              className="glass-panel text-primary-container font-sans text-xs px-10 py-5 rounded-full uppercase tracking-widest hover:bg-white/5 transition-all border border-primary-container/30"
            >
              Order Now
            </button>
          </div>
        </motion.div>
      </header>

      {/* Deals Preview Section */}
      <section className="py-24 px-6 md:px-10 max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Today's <span className="text-primary-container italic font-light">Deals</span></h2>
            <p className="text-on-surface-variant mt-3">Exclusive offerings for the discerning palate.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROMOTIONS.filter(p => p.isActive || p.isScheduled).slice(0, 3).map((promo, idx) => (
            <motion.div 
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group relative flex flex-col h-full"
            >
              {promo.tag && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-surface-container-highest/80 border border-outline-variant rounded-full text-[10px] px-3 py-1 uppercase tracking-wider backdrop-blur-md">
                    {promo.tag}
                  </span>
                </div>
              )}
              {promo.isActive && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary-container/20 border border-primary-container/50 text-primary-container text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    Active
                  </span>
                </div>
              )}
              
              <div className="h-64 relative overflow-hidden bg-surface-container">
                {promo.image && (
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                )}
                {!promo.image && (
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <span className="font-serif italic text-2xl">Habibi Bites</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-white mb-3">{promo.title}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 mb-8">{promo.description}</p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-primary-container font-serif text-2xl">
                      {promo.isActive ? 'Claim' : promo.tag}
                    </span>
                  </div>
                  <button className="text-primary-container hover:text-primary transition-colors flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
                    Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
