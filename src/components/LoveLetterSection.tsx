import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function LoveLetterSection() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-soft-pink to-warm-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">💌</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>💝</div>
      <div className="absolute top-1/3 right-20 text-4xl opacity-10 animate-float" style={{ animationDelay: '4s' }}>🌹</div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-rose-gold" />
            <span className="text-rose-gold text-sm tracking-[0.3em] uppercase font-semibold">
              Surat Cinta
            </span>
            <Sparkles className="w-6 h-6 text-rose-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Dari Hatiku Untukmu 💌
          </h2>
        </motion.div>

        {/* Love Letter Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Letter background image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20">
            <img
              src="/images/love-letter.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            {/* Decorative corner */}
            <div className="absolute top-4 left-4 text-3xl opacity-30">🌸</div>
            <div className="absolute top-4 right-4 text-3xl opacity-30">🌸</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-30">🌸</div>
            <div className="absolute bottom-4 right-4 text-3xl opacity-30">🌸</div>

            <div className="text-center mb-8">
              <Heart className="w-10 h-10 text-rose-gold mx-auto animate-heartbeat" />
            </div>

            <div className="text-dark-wine leading-loose text-lg md:text-xl space-y-6" style={{ fontFamily: "'Georgia', serif" }}>
              <p className="italic text-rose-gold text-2xl text-center font-semibold">
                "Untuk Orang Paling Spesial di Hidupku..."
              </p>

              <p>
                🎀💋SAYANGGKU YASMINNNAZAA YANG PALING CANTKKKK 💗🎀
              </p>

              <p>
                happy birthday  cantikkk cintakuuuu manisskyuuu princessskuu my worlddddd, ga krasa skrangg kamuu sudaaa besallll🥳🥳🥳, sudaaa 18 taunnnnnnn, sudaa kerjaaaa, di hari spesial kamu ini aku cuma mau bilangg maaakaaaciiiiiu karena dah hadir di hidup aku dan ngasih banyakkkkk bangettttttt warna yang sebelumnya ga pernah aku rasainnnnn.
              </p>

              <p>
                akuuu tauuu kokkkkk  akuu bukan orang yang paling sempurna buat kamu, aku juga masih banyak bangetttt kurangnya, masih sering bikin kamu kesellll, ngambekkkk, sedih, sampeee kadangg seringgg bikinnn kamuu kecewaaa samaa akuu tapi ayyy tolongg percayaaa samaaa akuuu, aku selalu berusaha jadi yang terbaik buat kamuuuuuu.

              </p>

              <p>
                aku bersyukurrrre bangettt banget alhamdulillah bisa kenal kamuuu, bisa dekat sama kamuuuu, bisaaa pacaraann samaa kamuuu bisa punya banyak kenangannnnn bareng kamu, dari hal² kecik yang mungkin orang lain anggeppp biasa, butt ayy buat aku itu berharga banget karena ada kamu di dalemmmmnya, kamu selalu berhasil bikin hari² aku lebih seruuuu, lebih berwarnaaaaa, dan lebih berartiiiii.
              </p>

              <p>
                di umur kamu yang sekarang, aku doainnnn semoga semua hal baikkkk selalu dateng ke hidup kamuuu, semoga kamu selalu sehat, panjang umur, dimudahkan rezekinya, dilancarkan kerjaannyaaaa, dipermudah dalam menggapai semua cita-cita dan impian yang kamu pengeninnnn, akuuu akann slaluuu mendukunggg kamuuu sayangggg, semoga setiap langkah yang kamu ambil selalu diberi kebahagiaan dan keberuntungannnnnn yaaaahhh.
              </p>

              <p>
                aku juga berharap kamu bisa jadi pribadi yang semakin kuattttt, makinnn semangaattt, semakin dewasa, dan semakin bahagia. kalau suatu saat nanti kamu lagi capek, lagi sedih, atau lagi ngerasa sendirian, jangan lupa kalau masih ada aku yang selalu peduli sama kamu dan selalu pengen lihat kamu senyummmm, qkuu tauu hidupp kamuu berattt, kqmuu tehh kann anak pertamaa, manaa di kluarga kauu ngga adaa yang lakii lagihh, jadii mauu gamauu kamuu harus jadi tulang punggung keluargaa buat sementaraaa, kluargaa jugaa kannn lagi agak susah ekonomi nya, jadiii kamuuu hebatt bangettt pokonyaaaa.
              </p>

              <p>
                makasih yaa udah bertahan sejauh iniiiiii, makasihhhhh udah jadi diri kamu sendiriiiiii, makasihhhhhh udah ngasih aku kesempatan buat kenal seseorang sebaik dan seberharga kamyuuuuuu.
              </p>

              <p>
                aku ga tau masa depan bakal gimana, tapi yang aku tau sekarang, aku senengggg bangettt dan bersyukur bangettttt karena ada kamu.
              </p>

              <p>
                sekali lagiiiiiiiiiiiiii, happy birthdayyyyy yahhhhh sayanggg kuuu cintaaaaaa, semogaaaaa taunnn ini jadi tahun terbaik buat kamuuuuu, semoga semua doa² baik kamu satu per satu dikabulkannn yahhhh amiiinn.
              </p>

              <p className="text-center text-2xl font-bold text-rose-gold mt-8">
                jangan lupa bahagia hari ini karena ini hari kamuuu, tetap jadi yasminnnnazaaaa yang aku kenal, yasmin yang kuattttt, yasmin yang baik, yasmin yang cantik, yaggg lucuuuu, yanggg imuttt 💋 dan yasminnnn yang selalu punya tempat spesial di hati akuuuuuu.
              </p>

              <p className="text-center text-xl text-rose-gold">
                i'm so proud of you, and i'm so lucky to have youuu. i love youu, happy birthday myyy princesss 🥳🎉🎊 🎂🎂🎂🎂🎂🎂🎂🎂💋💋💋🩷🩷🩷🩷
              </p>

              <p className="text-right text-rose-gold italic text-xl mt-8">
                Dengan seluruh cinta yang kumiliki,<br />
                <span className="text-2xl font-bold">Dari Orang yang Paling Mencintaimu ❤️</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-16"
        >
          <div className="h-px bg-linear-to-r from-transparent to-rose-gold flex-1 max-w-[200px]" />
          <span className="px-4 text-3xl">💕</span>
          <div className="h-px bg-linear-to-l from-transparent to-rose-gold flex-1 max-w-[200px]" />
        </motion.div>
      </div>
    </section>
  );
}
