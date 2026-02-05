import { ArrowRightIcon, PlayIcon, CodeIcon, BarChart3Icon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';

export default function Hero() {

  const trustedUserImages = [
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50'
  ];

  const mainImageUrl =
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop';

  const galleryStripImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=100',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=100',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=100',
  ];

  const trustedLogosText = [
    'Web Development',
    'App Innovation',
    'Digital Marketing',
    'Brand Identity',
    'Visual Storytelling',
    'SEO/SEM Strategy'
  ];

  return (
    <>
      <section id="home" className="relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 min-h-screen pt-32 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT - CONTENT */}
            <div>
              <motion.div
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex -space-x-2">
                  {trustedUserImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="size-6 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Ekho Digix • 360° Digital Engine
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Elevating Brands in the <br />
                <span className="text-blue-600">Digital Age.</span>
              </motion.h1>

              <motion.p
                className="max-w-lg mb-8 text-slate-600 text-lg leading-relaxed"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Ekho Digix is the creative and technical powerhouse of the Echo Futur group. 
                We blend cutting-edge technology with high-impact marketing to turn 
                your business into a digital leader.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-10"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <PrimaryButton className="py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200">
                  Scale Your Business
                  <ArrowRightIcon className="size-5" />
                </PrimaryButton>

                <GhostButton className="py-4 px-6 text-slate-700 font-bold border-2 border-slate-200 hover:bg-slate-50 rounded-xl">
                  <PlayIcon className="size-5" />
                  Watch Brand Film
                </GhostButton>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 bg-slate-50 rounded-2xl border border-slate-100 p-2"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 p-4">
                  <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <CodeIcon className="size-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Dev & Tech</div>
                    <div className="text-xs text-slate-500">Web & App Innovation</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 border-l border-slate-200">
                  <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <BarChart3Icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">360° Marketing</div>
                    <div className="text-xs text-slate-500">ROI-Focused Strategy</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT - VISUALS */}
            <motion.div 
               className="relative"
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
            >
              <div className="rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-white">
                <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square">
                  <img
                    src={mainImageUrl}
                    className="w-full h-full object-cover"
                    alt="Digital Growth Dashboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  
                  <div className="absolute left-6 top-6 flex gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-blue-600 shadow-sm">
                      Full-Stack Creative
                    </span>
                  </div>

                  <div className="absolute left-6 bottom-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <p className="text-sm font-medium mb-1 opacity-80 italic">"We don't just follow digital trends—we create them."</p>
                    <div className="h-1 w-12 bg-blue-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Thumbnails */}
              <div className="mt-6 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  {galleryStripImages.map((src, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-md"
                    >
                      <img src={src} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <span className="flex h-3 w-3 rounded-full bg-blue-600 animate-pulse" />
                  Result-Oriented Growth
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-10 bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-20 animate-marquee whitespace-nowrap">
            {trustedLogosText.concat(trustedLogosText).map((text, i) => (
              <span
                key={i}
                className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-700 hover:text-blue-500 transition-colors cursor-default"
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
