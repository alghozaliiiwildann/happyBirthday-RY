import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    url: 'public/images/WhatsApp Video 2026-06-20 at 12.08.22 AM.mp4',
    thumbnail: 'public/images/potobook.jpeg',
    title: '✨ A Collection of Precious Memories',
    description: 'Video ini bukan hanya kumpulan foto dan klip, tetapi kumpulan cerita, tawa, dan kebahagiaan yang pernah kita ciptakan bersama. Semoga saat menontonnya, kamu bisa merasakan kembali hangatnya setiap kenangan yang kita miliki. 🎀🤍',
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-warm-cream to-soft-pink relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-8xl">🎬</div>
        <div className="absolute bottom-20 right-1/4 text-8xl">📽️</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="w-6 h-6 text-rose-gold" />
            <span className="text-rose-gold text-sm tracking-[0.3em] uppercase font-semibold">
              Video Kenangan
            </span>
            <Play className="w-6 h-6 text-rose-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Video Spesial Untukmu 🎬
          </h2>
          <p className="text-deep-rose/60 text-lg max-w-xl mx-auto">
            Momen-momen indah yang terekam dalam video kenangan kita
          </p>
        </motion.div>

        {/* Videos */}
        <div className="space-y-12">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden"
            >
              <div className="md:flex items-stretch">
                <div className={`md:w-3/5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group">
                    <video
                      className="w-full h-72 md:h-80 object-cover"
                      poster={video.thumbnail}
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={video.url} type="video/mp4" />
                      Browser Anda tidak mendukung tag video.
                    </video>
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>
                <div className={`md:w-2/5 p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-dark-wine mb-3">
                    {video.title}
                  </h3>
                  <p className="text-deep-rose/70 text-lg leading-relaxed">
                    {video.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-rose-gold">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm italic">Klik untuk memutar video</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
