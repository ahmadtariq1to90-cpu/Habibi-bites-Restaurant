import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

export const LocationPage: React.FC = () => {
  return (
    <div className="pt-32 pb-xl px-6 md:px-10 flex flex-col items-center max-w-container-max mx-auto w-full">
      {/* Page Header */}
      <header className="w-full text-center mb-16 flex flex-col items-center">
        <div className="w-12 h-[1px] bg-primary/40 mb-6"></div>
        <h1 className="font-serif text-5xl md:text-6xl text-primary-container mb-4">Location & Hours</h1>
        <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Discover our sanctuary of nocturnal opulence. We look forward to welcoming you to an unforgettable dining experience.
        </p>
      </header>

      {/* Grid Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Map Section */}
        <div className="lg:col-span-8 w-full h-[500px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden border border-outline-variant relative bg-surface-container shadow-2xl group">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxLFO43AG3-JPV5DSjodEFrCtySJtYzfMJS54YOiwpx7Oq9_S7lFU-B-vy7NvqFnGPqVxVh8D_XehLJkbcv8P2RK3qK0l046SVOrsMYyDeMEfcalD8ILSivTTZBYjqggnvZUXNlrhl9_08L78EXdT5_VVel_3MYo2JZZ1rxYWB8zXc8x8G_ICPWVWJpdPeqRuGKnh9I1RlE0sWuIvB2v6UR7O9KfMnYE1Npurm4YGDc63qUI24vAKLavnzbPnFsaTxGcb6RxYwnFQ" 
              alt="Map"
              className="w-full h-full object-cover opacity-60 filter brightness-50 contrast-125 sepia-[.3] hue-rotate-[-30deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-primary-container text-on-primary rounded-full p-3 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <MapPin size={32} fill="currentColor" />
            </motion.div>
            <div className="mt-4 bg-surface/90 backdrop-blur-md border border-outline-variant px-5 py-2 rounded-lg shadow-xl">
              <span className="font-sans text-[10px] text-primary-container uppercase tracking-[0.2em] font-bold">Habibi Bites</span>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="lg:col-span-4 w-full bg-[#1c1b1b99] backdrop-blur-xl border border-outline-variant rounded-2xl p-10 flex flex-col gap-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Address */}
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-3 text-primary-container">
              <MapPin size={24} />
              <h3 className="font-serif text-2xl">Address</h3>
            </div>
            <div className="pl-9 text-on-surface-variant font-sans leading-relaxed">
              <p>100 Opulence Boulevard</p>
              <p>Financial District, Level 54</p>
              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-outline-variant/30"></div>

          {/* Hours */}
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-3 text-primary-container">
              <Clock size={24} />
              <h3 className="font-serif text-2xl">Hours</h3>
            </div>
            <div className="pl-9 text-on-surface-variant flex flex-col gap-3 font-sans">
              <div className="flex justify-between">
                <span>Mon - Wed</span>
                <span className="text-on-surface">6:00 PM - 1:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Thu - Sat</span>
                <span className="text-on-surface">6:00 PM - 3:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-on-surface">5:00 PM - 12:00 AM</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-outline-variant/30"></div>

          {/* Contact */}
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-3 text-primary-container">
              <Phone size={24} />
              <h3 className="font-serif text-2xl">Contact</h3>
            </div>
            <div className="pl-9 flex flex-col gap-4 font-sans">
              <a href="tel:+971000000000" className="text-on-surface-variant hover:text-primary transition-colors">+971 00 000 0000</a>
              <a href="mailto:reservations@habibibites.com" className="text-on-surface-variant hover:text-primary transition-colors">reservations@habibibites.com</a>
            </div>
          </div>

          <button className="mt-auto w-full bg-primary-container text-on-primary font-bold text-[10px] uppercase tracking-widest py-5 px-6 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
            Get Directions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
