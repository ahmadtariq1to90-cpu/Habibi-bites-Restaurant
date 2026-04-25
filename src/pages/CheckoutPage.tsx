import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, X, CheckCircle2, MessageCircle } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

export const CheckoutPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex h-screen w-full relative overflow-hidden">
      {/* Left Side: Form */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative bg-[#131313]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_#2a2a2a1a_0%,_transparent_70%)]"></div>
        <div className="flex-1 px-6 md:px-10 lg:px-20 py-20 flex flex-col max-w-4xl mx-auto w-full relative z-10">
          <header className="mb-20 flex items-center justify-between">
            <div className="font-serif text-3xl text-primary tracking-tight">Habibi Bites</div>
            <div className="font-sans text-[10px] text-on-surface-variant uppercase tracking-[0.2em] flex items-center gap-2">
              <ShieldCheck size={14} className="text-primary-container" />
              Secure Checkout
            </div>
          </header>

          <section className="flex-1 flex flex-col justify-center">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Guest Details</h1>
            <p className="text-on-surface-variant text-lg mb-16 max-w-xl leading-relaxed">
              Please provide your details to ensure a seamless dining experience upon arrival.
            </p>

            <form className="max-w-2xl space-y-16">
              <div className="relative group">
                <label className="font-serif text-[10px] text-on-surface-variant/80 uppercase tracking-[0.3em] absolute -top-6 left-0 transition-all duration-300 group-focus-within:text-primary group-focus-within:-translate-y-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Alexander Sterling"
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 font-serif text-xl text-on-surface placeholder:text-on-surface-variant/20 focus:ring-0 focus:border-primary transition-all duration-500"
                />
              </div>

              <div className="relative group">
                <label className="font-serif text-[10px] text-on-surface-variant/80 uppercase tracking-[0.3em] absolute -top-6 left-0 transition-all duration-300 group-focus-within:text-primary group-focus-within:-translate-y-2">Contact Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 font-serif text-xl text-on-surface placeholder:text-on-surface-variant/20 focus:ring-0 focus:border-primary transition-all duration-500"
                />
              </div>

              <div className="relative group pt-4">
                <label className="font-serif text-[10px] text-on-surface-variant/80 uppercase tracking-[0.3em] absolute -top-0 left-0 transition-all duration-300 group-focus-within:text-primary group-focus-within:-translate-y-2">Delivery Destination (Optional)</label>
                <textarea 
                  placeholder="Suite, Building, Street..."
                  rows={2}
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 font-serif text-xl text-on-surface placeholder:text-on-surface-variant/20 focus:ring-0 focus:border-primary transition-all duration-500 resize-none"
                />
              </div>
            </form>
          </section>
        </div>
      </main>

      {/* Right Side: Cart Panel */}
      <aside className="hidden lg:flex w-[480px] h-full glass-panel border-l border-white/5 shadow-2xl flex-col relative z-20">
        <div className="p-8 border-b border-white/10 flex items-center justify-between">
          <h2 className="font-serif text-3xl text-on-surface">Your Selection</h2>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {MENU_ITEMS.slice(0, 2).map((item, idx) => (
            <div key={item.id} className="flex gap-4 items-center p-4 rounded-xl hover:bg-white/5 transition-all">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-white/5 shrink-0 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg text-white font-bold">{item.name}</h3>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Qty: 1</p>
              </div>
              <div className="text-right">
                <div className="text-lg text-primary-container font-bold">${item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 border-t border-white/10 bg-surface-container-low/50">
          <div className="space-y-4 mb-10">
            <div className="flex justify-between text-on-surface-variant">
              <span>Subtotal</span>
              <span>$117.00</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Taxes & Fees</span>
              <span>$15.50</span>
            </div>
            <div className="flex justify-between font-serif text-2xl text-on-surface pt-4 border-t border-white/10">
              <span>Total</span>
              <span className="text-primary-container">$132.50</span>
            </div>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="w-full bg-primary-container text-on-primary font-bold text-[10px] uppercase tracking-widest py-5 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
          >
            Review & Confirm <ArrowRight size={16} />
          </button>
        </div>
      </aside>

      {/* Finalize Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-modal p-10 rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] max-w-md w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container/10 text-primary-container mb-6 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="font-serif text-3xl text-white mb-2">Finalize Order</h2>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Your culinary journey is nearly ready. Choose your preferred method to submit this request to our Maitre D'.
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary-container text-on-primary font-bold text-[10px] uppercase tracking-widest py-5 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg active:scale-[0.98]">
                  <MessageCircle size={20} />
                  Send via WhatsApp
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-transparent border border-primary-container/50 text-primary-container font-bold text-[10px] uppercase tracking-widest py-5 rounded-lg hover:bg-white/5 transition-all active:scale-[0.98]"
                >
                  Place Order Directly
                </button>
              </div>

              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
