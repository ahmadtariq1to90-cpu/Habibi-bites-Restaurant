import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, EyeOff, ArrowRight } from 'lucide-react';

interface AuthPageProps {
  onNavigate: (screen: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #2a2a2a 0%, transparent 70%)' }}></div>
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-container/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-container/5 blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10 relative"
      >
        {/* Brand Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-6xl text-primary-container mb-2">Habibi Bites</h1>
          <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-[0.3em]">Exclusive Access</p>
        </div>

        {/* Auth Container */}
        <div className="glass-panel rounded-[2rem] shadow-2xl p-10 relative overflow-hidden border border-white/5">
          {/* Toggle */}
          <div className="flex border-b border-outline-variant/30 mb-8">
            <button className="flex-1 pb-4 text-[10px] uppercase tracking-widest text-primary-container border-b-2 border-primary-container text-center transition-all">
              Sign In
            </button>
            <button className="flex-1 pb-4 text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface text-center transition-colors">
              Request Access
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant" htmlFor="email">Email Identity</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary-container" size={18} />
                <input 
                  id="email"
                  type="email" 
                  placeholder="user@domain.com"
                  className="w-full bg-[#2a2a2a33] border-b border-outline-variant/50 py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary-container focus:ring-0 transition-all font-sans"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant" htmlFor="password">Passcode</label>
                <a href="#" className="text-[10px] text-primary-container/70 hover:text-primary-container transition-colors tracking-widest uppercase">Recover</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary-container" size={18} />
                <input 
                  id="password"
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-[#2a2a2a33] border-b border-outline-variant/50 py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary-container focus:ring-0 transition-all font-sans"
                  required
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors">
                  <EyeOff size={18} />
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-primary-container text-on-primary font-bold text-[10px] uppercase tracking-widest py-5 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-[0_10px_20px_rgba(212,175,55,0.1)] flex items-center justify-center gap-2 group"
              >
                Enter <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-on-surface-variant/50">
            By proceeding, you agree to our <a href="#" className="text-primary-container/70 hover:text-primary-container transition-colors border-b border-primary-container/30">Terms of Service</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
