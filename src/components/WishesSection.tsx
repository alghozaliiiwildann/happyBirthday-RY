import { motion } from 'framer-motion';
import { Star, Gift, Cake, Heart } from 'lucide-react';

const wishes = [
  { icon: <Star className="w-8 h-8" />, text: 'Semoga setiap mimpimu menjadi kenyataan ✨', color: 'from-amber-400 to-yellow-500' },
  { icon: <Heart className="w-8 h-8" />, text: 'Semoga cinta kita semakin kuat setiap hari 💕', color: 'from-rose-400 to-pink-500' },
  { icon: <Gift className="w-8 h-8" />, text: 'Semoga selalu diberkahi kebahagiaan melimpah 🎁', color: 'from-purple-400 to-indigo-500' },
  { icon: <Cake className="w-8 h-8" />, text: 'Semoga panjang umur dan sehat selalu 🎂', color: 'from-emerald-400 to-teal-500' },
  { icon: <Star className="w-8 h-8" />, text: 'Semoga tahun ini menjadi tahun terbaikmu 🌟', color: 'from-blue-400 to-cyan-500' },
  { icon: <Heart className="w-8 h-8" />, text: 'Semoga kita selalu bersama selamanya 💗', color: 'from-pink-400 to-rose-500' },
];

export default function WishesSection() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-dark-wine to-[#2a0a18] relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-sparkle"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Doa & Harapan Untukmu 🌟
          </h2>
          <p className="text-pink-200/70 text-lg">
            Setiap doa ini kupanjatkan dengan tulus dari lubuk hatiku yang paling dalam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div
                className="rounded-2xl p-6 text-center h-full transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div className={`w-16 h-16 rounded-full bg-linear-to-br ${wish.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  {wish.icon}
                </div>
                <p className="text-pink-100 text-lg leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>
                  {wish.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big heart */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="text-8xl animate-heartbeat inline-block">💝</div>
        </motion.div>
      </div>
    </section>
  );
}
