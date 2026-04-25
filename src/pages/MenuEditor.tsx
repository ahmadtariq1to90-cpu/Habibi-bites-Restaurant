import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  ChevronRight, 
  Upload, 
  Check, 
  X
} from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { MenuItem, Category } from '../types';

export const MenuEditor: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(MENU_ITEMS[0]);
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

  const filteredItems = MENU_ITEMS.filter(item => 
    activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <div className="flex-1 flex overflow-hidden bg-background">
      {/* Left List Section */}
      <section className="flex-1 flex flex-col overflow-hidden relative z-10">
        <header className="px-10 pt-16 pb-8 border-b border-white/5 bg-background/80 backdrop-blur-xl z-20 shrink-0">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-5xl text-white mb-3">Menu Editor</h2>
              <p className="text-on-surface-variant leading-relaxed">Manage offerings, pricing, and visibility.</p>
            </div>
            <button className="flex items-center gap-2 bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-[0_10px_20px_rgba(212,175,55,0.15)]">
              <Plus size={18} />
              New Item
            </button>
          </div>

          <div className="flex gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                  activeFilter === cat
                    ? 'bg-white/10 text-white border-white/20 shadow-xl'
                    : 'text-on-surface-variant border-transparent hover:border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-10 py-8 pb-32">
          {/* List Header */}
          <div className="grid grid-cols-[100px_1fr_140px_100px_120px_120px] gap-8 px-6 pb-6 mb-4 border-b border-white/5 text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">
            <div>Image</div>
            <div>Item Details</div>
            <div>Category</div>
            <div className="text-right">Price</div>
            <div className="text-center">Visibility</div>
            <div className="text-right">Actions</div>
          </div>

          <div className="flex flex-col gap-3">
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setSelectedItem(item)}
                className={`grid grid-cols-[100px_1fr_140px_100px_120px_120px] gap-8 items-center p-6 rounded-2xl transition-all cursor-pointer group ${
                  selectedItem?.id === item.id 
                    ? 'bg-white/5 border border-white/10 shadow-2xl' 
                    : 'hover:bg-white/[0.02] border border-transparent'
                }`}
              >
                <div className="w-[100px] h-72 lg:h-[100px] rounded-xl overflow-hidden border border-white/5 relative bg-surface-container">
                  <img src={item.image} className="w-full h-full object-cover opacity-80" alt="" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div className="flex flex-col gap-1 pr-6">
                  <h4 className={`font-serif text-xl ${selectedItem?.id === item.id ? 'text-primary-container' : 'text-white'}`}>{item.name}</h4>
                  <p className="text-on-surface-variant text-sm line-clamp-1 opacity-70 leading-relaxed">{item.description}</p>
                </div>

                <div>
                   <span className="px-3 py-1 rounded bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest text-on-surface-variant">{item.category}</span>
                </div>

                <div className="text-right font-bold text-white text-lg">${item.price}</div>

                <div className="flex justify-center">
                  <div className={`w-12 h-6 rounded-full transition-colors flex items-center p-1 cursor-pointer border ${
                    item.isAvailable 
                      ? 'bg-primary-container/20 border-primary-container/30' 
                      : 'bg-white/5 border-white/10'
                  }`}>
                    <motion.div 
                      layout
                      className={`w-4 h-4 rounded-full shadow-lg ${item.isAvailable ? 'bg-primary-container ml-auto' : 'bg-on-surface-variant/50'}`}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 text-on-surface-variant opacity-40 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:text-primary-container transition-colors rounded-full hover:bg-white/10"><Edit3 size={18} /></button>
                  <button className="p-2 hover:text-error transition-colors rounded-full hover:bg-white/10"><Trash2 size={18} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Edit Sidebar */}
      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.aside 
            key={selectedItem.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-[520px] bg-[#1a1a1a] border-l border-white/5 shadow-2xl flex flex-col shrink-0 z-30 relative"
          >
            <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02] backdrop-blur-md">
              <h3 className="font-serif text-2xl text-on-surface">Edit Menu Item</h3>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-on-surface-variant hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-10 flex flex-col gap-10">
              {/* Image Upload Preview */}
              <div className="space-y-4">
                <label className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Item Image</label>
                <div className="relative group cursor-pointer h-56 w-full rounded-2xl border-2 border-dashed border-white/10 bg-black/20 overflow-hidden flex flex-col items-center justify-center transition-all hover:border-primary-container/50">
                  <img src={selectedItem.image} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 transition-opacity" alt="" />
                  <div className="relative z-10 flex flex-col items-center gap-3 text-on-surface-variant group-hover:text-primary-container">
                    <Upload size={32} />
                    <span className="text-sm font-medium">Click to replace image</span>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Item Name</label>
                  <input 
                    type="text" 
                    value={selectedItem.name}
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 font-serif text-2xl text-white focus:ring-0 focus:border-primary-container transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Description</label>
                  <textarea 
                    rows={4}
                    value={selectedItem.description}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-on-surface leading-relaxed focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Category</label>
                    <div className="relative">
                      <select className="w-full bg-black/20 border border-white/10 rounded-lg px-5 py-3 text-on-surface focus:ring-1 focus:ring-primary-container appearance-none">
                        <option>Starters</option>
                        <option selected>Mains</option>
                        <option>Desserts</option>
                        <option>Beverages</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Price (USD)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                      <input 
                        type="number" 
                        value={selectedItem.price}
                        className="w-full bg-black/20 border border-white/10 rounded-lg pl-8 pr-5 py-3 text-white font-bold focus:ring-1 focus:ring-primary-container"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Dietary Badges</label>
                  <div className="flex flex-wrap gap-3">
                    {['Gluten Free', 'Signature', 'Spicy', 'Vegan'].map(tag => (
                      <button 
                        key={tag}
                        className={`px-5 py-2 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all flex items-center gap-2 ${
                          selectedItem.badges?.includes(tag) || (tag === 'Signature' && selectedItem.isSpecial)
                            ? 'bg-primary-container/10 border-primary-container text-primary-container'
                            : 'bg-transparent border-white/10 text-on-surface-variant hover:border-white/30'
                        }`}
                      >
                         {(selectedItem.badges?.includes(tag) || (tag === 'Signature' && selectedItem.isSpecial)) && <Check size={14} />}
                         {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto py-10 flex gap-4">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 px-8 py-4 border border-white/10 rounded-lg text-on-surface-variant hover:text-white uppercase text-[10px] tracking-widest font-bold transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-8 py-4 bg-primary-container text-on-primary rounded-lg uppercase text-[10px] tracking-widest font-bold hover:opacity-90 shadow-xl transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};
