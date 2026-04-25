import React from 'react';
import { motion } from 'motion/react';
import { 
  ReceiptText, 
  Download, 
  Plus, 
  ClipboardCheck, 
  Truck, 
  CircleDollarSign,
  Bike,
  MoreVertical,
  Zap,
  Edit2,
  Wine,
  ChevronRight,
  Megaphone
} from 'lucide-react';
import { LIVE_ORDERS, PROMOTIONS } from '../constants';

export const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Pending Kitchen', value: '12', icon: ClipboardCheck, color: 'text-primary' },
    { label: 'Out for Delivery', value: '4', icon: Truck, color: 'text-secondary' },
    { label: 'Shift Revenue', value: '$4.2k', icon: CircleDollarSign, color: 'text-primary' },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-y-auto bg-background">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-primary-container/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 px-6 md:px-10 py-12 max-w-[1600px] mx-auto w-full flex flex-col gap-10">
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 text-primary-container">
              <ReceiptText size={36} />
              <h1 className="font-serif text-4xl md:text-5xl text-white">Service Operations</h1>
            </div>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Monitor live dining room orders, delivery fulfillment, and manage active promotional campaigns to optimize tonight's revenue.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button className="px-6 py-4 rounded-full border border-white/10 text-on-surface font-sans text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2">
              <Download size={16} />
              Export Shift Report
            </button>
            <button className="px-6 py-4 rounded-full bg-primary-container text-on-primary font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-[0_10px_20px_rgba(212,175,55,0.15)]">
              New Order
            </button>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Main Column */}
          <div className="xl:col-span-8 flex flex-col gap-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#1c1b1b99] backdrop-blur-md border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <stat.icon size={64} className={stat.color} />
                  </div>
                  <h3 className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-3 font-bold">{stat.label}</h3>
                  <div className={`text-5xl font-serif ${stat.color}`}>{stat.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Table Card */}
            <div className="bg-[#1c1b1b99] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h2 className="font-serif text-3xl text-white">Live Orders</h2>
                <div className="flex gap-4">
                  <button className="text-[10px] uppercase tracking-widest text-primary-container border-b-2 border-primary-container pb-2 font-bold">All</button>
                  <button className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors pb-2">Dine-In</button>
                  <button className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors pb-2">Delivery</button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.01]">
                      <th className="py-6 px-8 text-[10px] text-on-surface-variant uppercase tracking-widest">Order ID</th>
                      <th className="py-6 px-8 text-[10px] text-on-surface-variant uppercase tracking-widest">Destination</th>
                      <th className="py-6 px-8 text-[10px] text-on-surface-variant uppercase tracking-widest">Items</th>
                      <th className="py-6 px-8 text-[10px] text-on-surface-variant uppercase tracking-widest">Total</th>
                      <th className="py-6 px-8 text-[10px] text-on-surface-variant uppercase tracking-widest">Status</th>
                      <th className="py-6 px-8 text-[10px] text-on-surface-variant uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {LIVE_ORDERS.map((order) => (
                      <tr key={order.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="py-6 px-8 font-mono text-sm text-primary-container">{order.id}</td>
                        <td className="py-6 px-8">
                          <div className="flex flex-col">
                            <span className="text-white font-medium flex items-center gap-2">
                              {order.type === 'Delivery' && <Bike size={14} className="text-on-surface-variant" />}
                              {order.destination}
                            </span>
                            <span className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider">{order.guestName}</span>
                          </div>
                        </td>
                        <td className="py-6 px-8 text-on-surface">{order.itemsCount} items</td>
                        <td className="py-6 px-8 text-on-surface font-semibold">${order.total.toFixed(2)}</td>
                        <td className="py-6 px-8">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] uppercase tracking-widest font-bold ${
                            order.status === 'Preparing' ? 'border-primary-container/30 bg-primary-container/10 text-primary-container' : 
                            order.status === 'Served' ? 'border-outline-variant/30 text-on-surface-variant' : 
                            'border-primary-fixed-dim/30 text-primary-fixed-dim'
                          }`}>
                            {order.status === 'Preparing' && <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>}
                            {order.status}
                          </div>
                        </td>
                        <td className="py-6 px-8 text-right">
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-on-surface-variant hover:text-white">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 border-t border-white/5 flex justify-center bg-white/[0.01]">
                <button className="text-primary-container hover:text-white text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 transition-all group">
                  View Past History <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="xl:col-span-4 flex flex-col gap-8">
            <div className="flex items-center justify-between px-2">
              <h2 className="font-serif text-3xl text-white">Promotions</h2>
              <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-primary-container transition-colors shadow-lg">
                <Plus size={20} />
              </button>
            </div>

            {/* Promo Cards */}
            <div className="space-y-6">
              {PROMOTIONS.map((promo) => (
                <motion.div 
                  key={promo.id}
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl overflow-hidden relative border shadow-2xl ${
                    promo.isActive ? 'border-primary-container/30' : 'border-white/5 bg-[#1c1b1b99] backdrop-blur-md'
                  }`}
                >
                  {promo.image && (
                    <div className="absolute inset-0 z-0">
                      <img src={promo.image} alt="" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="relative z-10 p-8 flex flex-col min-h-[220px]">
                    <div className="flex justify-between items-start mb-auto">
                      {promo.isActive ? (
                        <div className="px-3 py-1 bg-primary-container text-on-primary rounded-full text-[9px] uppercase tracking-widest font-bold flex items-center gap-1 shadow-lg">
                          <Zap size={10} fill="currentColor" /> Active
                        </div>
                      ) : (
                        <div className="px-3 py-1 border border-white/10 text-on-surface-variant rounded-full text-[9px] uppercase tracking-widest font-bold">
                          {promo.tag}
                        </div>
                      )}
                      <button className="text-white/40 hover:text-white transition-colors">
                        <Edit2 size={16} />
                      </button>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center gap-3 mb-2">
                        {!promo.image && <Wine className="text-primary-container" size={24} />}
                        <h3 className={`font-serif text-xl ${promo.isActive ? 'text-primary-container' : 'text-on-surface'}`}>{promo.title}</h3>
                      </div>
                      <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">{promo.description}</p>
                    </div>

                    {promo.redemptions && (
                      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">Redemptions</span>
                          <span className="text-sm text-white font-medium">{promo.redemptions}</span>
                        </div>
                      </div>
                    )}
                    
                    {!promo.isActive && (
                       <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                          Starts Tomorrow, 5 PM
                       </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-full py-6 border border-dashed border-white/20 rounded-2xl text-on-surface-variant hover:text-primary-container hover:border-primary-container transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest font-bold bg-white/[0.01] group">
              <Megaphone size={18} className="group-hover:-rotate-12 transition-transform" />
              Launch New Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
