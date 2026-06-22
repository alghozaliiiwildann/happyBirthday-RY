import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const photos = [
  {
    url: 'public/images/couple.jpeg',
    caption: 'Dunia boleh terbalik, tapi bahagia selalu saat bersamamu 🤍✨',
    rotate: '-2deg',
  },
  {
    url: 'public/images/jogging.jpeg',
    caption: 'Langkah sederhana terasa istimewa saat kita berjalan bersama 🌿💞',
    rotate: '1deg',
  },
  {
    url: 'public/images/mirror.jpeg',
    caption: 'Menyimpan sejuta cerita dan tawa dalam satu bingkai kenangan 📸💕',
    rotate: '-1deg',
  },
  {
    url: 'public/images/potobook1.jpeg',
    caption: 'Bersamamu, setiap momen terasa seperti petualangan yang tak terlupakan 🤠❤️',
    rotate: '2deg',
  },
  {
    url: 'public/images/nice.jpeg',
    caption: 'Tawa kecil dan wajah jahilmu selalu jadi alasan hariku lebih berwarna 😆💗',
    rotate: '-1.5deg',
  },
  {
    url: 'public/images/mirror1.jpeg',
    caption: 'Semoga kita terus menciptakan kenangan-kenangan indah berikutnya 🌸🎂',
    rotate: '1.5deg',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-linear-to-b from-warm-cream to-soft-pink">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-rose-gold" />
            <span className="text-rose-gold text-sm tracking-[0.3em] uppercase font-semibold">
              Galeri Kenangan
            </span>
            <Camera className="w-6 h-6 text-rose-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Momen Terindah Kita 📸
          </h2>
          <p className="text-deep-rose/60 text-lg max-w-xl mx-auto">
            Setiap foto menyimpan cerita cinta yang tak ternilai harganya
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div
                className="photo-frame rounded-2xl overflow-hidden bg-white p-3"
                style={{ transform: `rotate(${photo.rotate})` }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-center text-deep-rose/80 mt-3 text-sm italic px-2 pb-1">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
