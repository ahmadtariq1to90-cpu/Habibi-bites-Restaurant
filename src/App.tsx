/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavBar } from './components/NavBar';
import { SideNavBar } from './components/SideNavBar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { MenuPage } from './pages/MenuPage';
import { AuthPage } from './pages/AuthPage';
import { LocationPage } from './pages/LocationPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { MenuEditor } from './pages/MenuEditor';
import { MenuItemDetailPage } from './pages/MenuItemDetailPage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Determine if we are in admin view
  const isAdminView = ['dashboard', 'menu-editor', 'analytics', 'settings'].includes(currentScreen);
  // Determine screens that shouldn't have standard floating nav/footer
  const isMinimalView = ['auth', 'checkout'].includes(currentScreen) || currentScreen.startsWith('item-');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Hide standard nav on minimal or admin views
    setIsNavVisible(!isAdminView && !isMinimalView);
  }, [currentScreen, isAdminView, isMinimalView]);

  const renderScreen = () => {
    if (currentScreen.startsWith('item-')) {
      return <MenuItemDetailPage itemId={currentScreen} onNavigate={handleNavigate} />;
    }

    switch (currentScreen) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'menu':
        return <MenuPage onNavigate={handleNavigate} />;
      case 'auth':
        return <AuthPage onNavigate={handleNavigate} />;
      case 'experience': // Map experience to location for now
      case 'about':
      case 'location':
        return <LocationPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'dashboard':
        return <AdminDashboard />;
      case 'menu-editor':
        return <MenuEditor />;
      case 'reservations':
      case 'analytics':
      case 'settings':
        return (
          <div className="flex-1 flex items-center justify-center p-20">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-5xl text-white capitalize">{currentScreen}</h2>
              <p className="text-on-surface-variant">This module is currently in preparation for service.</p>
            </div>
          </div>
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-on-primary">
      {/* Dynamic Navigation */}
      <AnimatePresence>
        {isNavVisible && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <NavBar activeScreen={currentScreen} onNavigate={handleNavigate} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`flex ${isAdminView ? 'flex-row' : 'flex-col'}`}>
        {/* Admin Sidebar */}
        {isAdminView && <SideNavBar activeScreen={currentScreen} onNavigate={handleNavigate} />}

        {/* Main Content Area */}
        <main className={`flex-1 min-h-screen ${isAdminView ? 'overflow-hidden' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
          
          {/* Footer for non-admin, non-minimal screens */}
          {!isAdminView && !isMinimalView && <Footer />}
        </main>
      </div>

      {/* Global Noise Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}

