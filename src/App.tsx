import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FallingPetals from './components/FallingPetals';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import LoveLetterSection from './components/LoveLetterSection';
import VideoSection from './components/VideoSection';
import MusicSection from './components/MusicSection';
import WishesSection from './components/WishesSection';
import Footer from './components/Footer';

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-linear-to-br from-dark-wine via-deep-rose to-rose-gold"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['💖', '✨', '🌸', '💕', '🎂', '🎁', '🎈'][i % 7]}
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 1, times: [0, 0.6, 1] }}
          className="text-8xl md:text-9xl mb-6 inline-block"
        >
          🎂
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Happy Birthday!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-pink-200"
        >
          ✨ Mempersiapkan kejutan spesial untukmu... ✨
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mt-8 h-1 bg-white/30 rounded-full max-w-xs mx-auto origin-left overflow-hidden"
        >
          <div className="h-full bg-linear-to-r from-gold to-white rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-4 text-pink-200/60 text-sm"
        >
          💕 Dari Sal dengan cinta 💕
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          onClick={onComplete}
          className="mt-6 px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/30 transition-all text-lg cursor-pointer"
        >
          Buka Sekarang 🎁
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-warm-cream">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <FallingPetals />
          <Navbar />
          <HeroSection />
          <PhotoGallery />
          <LoveLetterSection />
          <VideoSection />
          <MusicSection />
          <WishesSection />
          <Footer />
        </>
      )}
    </div>
  );
}
