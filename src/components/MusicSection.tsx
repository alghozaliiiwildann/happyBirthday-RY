import { motion } from 'framer-motion';
import { Music, Heart, Mic2 } from 'lucide-react';
import { useState } from 'react';

interface Song {
  title: string;
  artist: string;
  description: string;
  lyrics: string;
  emoji: string;
  color: string;
}

const loveSongs: Song[] = [
  {
    title: 'Kamu Yang Terindah',
    artist: 'Dinyanyikan Sal Pribadi 🎤',
    description: 'Lagu cinta pertama yang kutulis khusus untukmu di hari spesialmu',
    lyrics: `Kamu yang terindah di hidupku
Cahaya di setiap langkahku
Tak pernah kubayangkan sebelumnya
Cinta seindah ini ada untukku

Setiap detik bersamamu
Bagai mimpi yang menjadi nyata
Hatiku bernyanyi untukmu
Cinta ini abadi selamanya

Reff:
Kamu... kamu yang terindah
Bintang di gelapnya malam
Kamu... cinta sejatiku
Takkan pernah kugantikan

Di hari ulang tahunmu ini
Kupersembahkan seluruh hatiku
Semoga cinta kita berdua
Abadi hingga akhir waktu`,
    emoji: '🌹',
    color: 'from-rose-400 to-pink-500',
  },
  {
    title: 'Selamanya Bersamamu',
    artist: 'Dinyanyikan Sal Pribadi 🎤',
    description: 'Janji cinta yang tertuang dalam melodi lembut penuh makna',
    lyrics: `Di pagi yang cerah kulihat wajahmu
Tersenyum lembut menyapa hariku
Aku tahu ini takdir yang indah
Tuhan kirimkan kamu untukku

Genggam tanganku jangan lepaskan
Biar ku jaga sepenuh jiwa
Dalam suka duka kita bersama
Sampai rambut memutih berdua

Reff:
Selamanya bersamamu
Itulah doaku setiap malam
Selamanya mencintaimu
Hingga nafas terakhirku nanti

Bridge:
Tak ada yang lebih indah
Dari cinta tulus yang kita punya
Kau adalah segalanya
Hidupku sempurna karenamu`,
    emoji: '💍',
    color: 'from-purple-400 to-rose-500',
  },
  {
    title: 'Lagu Ulang Tahun Cinta',
    artist: 'Dinyanyikan Sal Pribadi 🎤',
    description: 'Lagu spesial yang menggambarkan betapa berharganya dirimu',
    lyrics: `Hari ini hari spesialmu
Hari dimana dunia diberkahi
Karena kamu lahir ke dunia ini
Dan membuat segalanya lebih berarti

Tiup lilinmu buat harapan
Aku akan jaga setiap mimpimu
Karena kebahagiaanmu
Adalah tujuan hidupku

Reff:
Selamat ulang tahun cintaku
Kau hadiah terindah dari Tuhan
Selamat ulang tahun sayangku
Semoga bahagia selamanya

Kubernyanyi untukmu malam ini
Dengan segenap cinta di hatiku
Setiap nada yang mengalun
Adalah bukti cintaku yang tulus`,
    emoji: '🎂',
    color: 'from-amber-400 to-rose-500',
  },
  {
    title: 'Rindu Setengah Mati',
    artist: 'Dinyanyikan Sal Pribadi 🎤',
    description: 'Ungkapan rindu yang mendalam saat jauh darimu',
    lyrics: `Malam ini aku merindukanmu
Lebih dari yang bisa kuungkapkan
Setiap hembusan angin malam
Membawa namamu ke telingaku

Foto-fotomu kutatap lama
Mengingat setiap tawa kita
Jarak memang memisahkan raga
Tapi hati kita selalu bersama

Reff:
Rindu setengah mati
Itu yang kurasa setiap hari
Rindu setengah mati
Ingin memelukmu erat lagi

Tunggu aku pulang sayangku
Akan kubawa seluruh cintaku
Dan takkan kubiarkan
Rindu ini terulang lagi`,
    emoji: '🌙',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    title: 'Kau Segalanya',
    artist: 'Dinyanyikan Sal Pribadi 🎤',
    description: 'Lagu penutup yang merangkum seluruh perasaan cinta',
    lyrics: `Kau matahari di pagiku
Kau bintang di malam gelapku
Kau pelangi setelah hujanku
Kau segalanya bagiku

Tanpamu hidupku tak bermakna
Tanpamu hariku tak berwarna
Kau adalah alasan aku tersenyum
Kau adalah alasan aku bernafas

Reff:
Kau segalanya untukku
Lebih dari kata cinta bisa ungkapkan
Kau segalanya bagiku
Dan takkan ada yang bisa menggantikan

Outro:
Di hari ulang tahunmu sayang
Kubersumpah mencintaimu
Seumur hidup dan selamanya
Kau segalanya... kau segalanya`,
    emoji: '⭐',
    color: 'from-yellow-400 to-orange-500',
  },
];

export default function MusicSection() {
  const [expandedSong, setExpandedSong] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-linear-to-b from-soft-pink to-dark-wine relative overflow-hidden">
      {/* Musical notes decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {['🎵', '🎶', '🎼', '♪', '♫'].map((note, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            {note}
          </motion.span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-6 h-6 text-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">
              Lagu Cinta Personal
            </span>
            <Music className="w-6 h-6 text-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lagu-Lagu Cinta dari Sal 🎤
          </h2>
          <p className="text-pink-200/80 text-lg max-w-xl mx-auto">
            Setiap lagu ditulis dan dinyanyikan dengan sepenuh hati, khusus untukmu di hari spesialmu
          </p>
        </motion.div>

        {/* Song Cards */}
        <div className="space-y-6">
          {loveSongs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                  expandedSong === index ? 'ring-2 ring-gold' : ''
                }`}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {/* Song Header */}
                <button
                  onClick={() => setExpandedSong(expandedSong === index ? null : index)}
                  className="w-full p-6 flex items-center gap-5 text-left hover:bg-white/5 transition-colors"
                >
                  {/* Song Number/Emoji */}
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${song.color} flex items-center justify-center text-3xl shrink-0 shadow-lg`}>
                    {song.emoji}
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                      {song.title}
                      <Mic2 className="w-4 h-4 text-gold" />
                    </h3>
                    <p className="text-pink-200/80 text-sm mb-1">{song.artist}</p>
                    <p className="text-pink-200/50 text-sm truncate">{song.description}</p>
                  </div>

                  {/* Expand indicator */}
                  <div className="shrink-0">
                    <motion.div
                      animate={{ rotate: expandedSong === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gold"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Lyrics */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSong === index ? 'auto' : 0,
                    opacity: expandedSong === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-2 mb-4 text-gold">
                        <Music className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">Lirik Lagu</span>
                      </div>
                      <pre className="text-pink-100/90 whitespace-pre-wrap leading-relaxed text-base" style={{ fontFamily: "'Georgia', serif" }}>
                        {song.lyrics}
                      </pre>
                      <div className="mt-6 flex items-center justify-center gap-2 text-gold/80">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm italic">Dinyanyikan dengan sepenuh hati oleh Sal</span>
                        <Heart className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 inline-block" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <p className="text-pink-100 text-lg italic">
              "Setiap lagu di atas dinyanyikan langsung oleh Sal dengan penuh cinta. 🎤<br />
              Meskipun suaranya mungkin tidak sempurna, tapi setiap nada<br />
              mengandung ketulusan hati yang tak terhingga untuk orang yang paling dicintai." 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
