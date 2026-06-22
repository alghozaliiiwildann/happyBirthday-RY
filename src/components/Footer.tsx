import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-[#2a0a18] relative overflow-hidden">
      {/* Decorative line */}
      <div className="max-w-md mx-auto mb-10">
        <div className="flex items-center gap-4">
          <div className="h-px bg-linear-to-r from-transparent to-rose-gold/50 flex-1" />
          <span className="text-xl">💕</span>
          <div className="h-px bg-linear-to-l from-transparent to-rose-gold/50 flex-1" />
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-pink-200/60 text-lg italic mb-4" style={{ fontFamily: "'Georgia', serif" }}>
          "Cinta sejati adalah ketika seseorang menerima masa lalumu,<br className="hidden md:block" />
          mendukung masa kinimu, dan mendoakan masa depanmu."
        </p>

        <div className="flex items-center justify-center gap-2 text-rose-gold mb-6">
          <Heart className="w-4 h-4 animate-heartbeat" fill="currentColor" />
          <span className="text-sm tracking-widest uppercase">Dibuat dengan cinta oleh Sal</span>
          <Heart className="w-4 h-4 animate-heartbeat" fill="currentColor" />
        </div>

        <div className="text-5xl mb-4 animate-float">🎂💕🎁</div>

        <p className="text-pink-200/40 text-sm">
          © {new Date().getFullYear()} • Selamat Ulang Tahun Sayangku • Semua Cinta Untukmu
        </p>
      </motion.div>
    </footer>
  );
}
