import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-birthday.jpg"
          alt="Birthday celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-dark-wine/70 via-dark-wine/50 to-warm-cream" />
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              fontSize: `${30 + i * 8}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-7xl md:text-8xl animate-heartbeat inline-block">🎂</span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-glow"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Happy Birthday
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-6"
        >
          <span className="text-3xl md:text-5xl font-bold text-gold" style={{ fontFamily: "'Georgia', serif" }}>
            ✨ Sayangku ✨
          </span>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed"
        >
          Di hari yang spesial ini, aku ingin kamu tahu betapa berartinya kamu dalam hidupku.
          Setiap detik bersamamu adalah hadiah terindah yang pernah aku terima. 💕
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10"
        >
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-linear-to-r from-rose-gold to-gold text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Heart className="w-5 h-5" />
            Buka Hadiah Spesial
            <Heart className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
