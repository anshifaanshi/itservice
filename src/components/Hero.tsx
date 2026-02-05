import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';

export default function Hero() {

  const trustedUserImages = [
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50'
  ];

  const mainImageUrl =
    'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop';

  const galleryStripImages = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100',
  ];

  const trustedLogosText = [
    'Web Development',
    'App Innovation',
    'Digital Marketing',
    'Brand Identity',
    'Visual Storytelling'
  ];

  return (
    <>
      <section id="home" className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 min-h-screen pt-32 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              <motion.div
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex -space-x-2">
                  {trustedUserImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="size-6 rounded-full border border-black/50"
                    />
                  ))}
                </div>
                <span className="text-xs text-steel/90">
                  Elevating brands in the digital age
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-steel"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Ekho Digix: Your 360° <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-steel-light to-steel-dark">
                  Digital Growth Engine
                </span>
              </motion.h1>

              <motion.p
                className="max-w-lg mb-8 text-steel/80"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                We blend cutting-edge technology with high-impact marketing to turn 
                your business into a digital leader through integrated online solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <PrimaryButton className="py-3 px-7 bg-steel hover:bg-steel-dark text-white">
                  Start your growth journey
                  <ArrowRightIcon className="size-4" />
                </PrimaryButton>

                <GhostButton className="py-3 px-5 text-steel">
                  <PlayIcon className="size-4" />
                  View brand films
                </GhostButton>
              </motion.div>

              <motion.div
                className="flex bg-white/10 rounded text-sm overflow-hidden"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 p-3 text-steel">
                  <ZapIcon className="size-4 text-steel" />
                  <div>
                    <div>Development & Tech</div>
                    <div className="text-xs text-steel/70">
                      Web & App Innovation
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block w-px bg-white/10" />

                <div className="flex items-center gap-2 p-3 text-steel">
                  <CheckIcon className="size-4 text-steel" />
                  <div>
                    <div>Strategy & Marketing</div>
                    <div className="text-xs text-steel/70">
                      SEO, Branding & Ads
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div className="mx-auto w-full max-w-lg">
              <div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl">
                <div className="relative aspect-16/10">
                  <img
                    src={mainImageUrl}
                    className="w-full h-full object-cover"
                    alt="Ekho Digix Digital Solutions"
                  />

                  <div className="absolute left-4 top-4 text-xs px-3 py-1 rounded-full bg-black/40 text-steel">
                    Dev • Strategy • Visuals
                  </div>

                  <div className="absolute right-4 bottom-4">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-steel hover:bg-white/15">
                      <PlayIcon className="size-4" />
                      <span className="text-xs">View success stories</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                {galleryStripImages.map((src, i) => (
                  <div
                    key={i}
                    className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
                  >
                    <img src={src} className="w-full h-full object-cover" />
                  </div>
                ))}

                <div className="ml-2 flex items-center gap-2 text-sm text-steel/80">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-steel" />
                  360-Degree Service Ecosystem
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/6 bg-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap justify-center">
            {trustedLogosText.concat(trustedLogosText).map((text, i) => (
              <span
                key={i}
                className="text-sm md:text-base font-semibold text-steel/70 hover:text-steel transition-colors"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
