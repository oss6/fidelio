import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FloatingBlob = ({ color, initialX, initialY, duration, delay }: { color: string, initialX: string, initialY: string, duration: number, delay: number }) => (
  <motion.div
    className="absolute rounded-full blur-[50px] opacity-50 mix-blend-screen pointer-events-none"
    style={{
      background: `radial-gradient(circle at center, ${color}, transparent)`,
      width: '400px',
      height: '400px',
      left: initialX,
      top: initialY,
    }}
    animate={{
      x: [0, 50, -30, 0],
      y: [0, -40, 60, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  />
);

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingBlob color="#a855f7" initialX="10%" initialY="20%" duration={20} delay={0} />
        <FloatingBlob color="#ec4899" initialX="60%" initialY="15%" duration={25} delay={-5} />
        <FloatingBlob color="#f97316" initialX="20%" initialY="60%" duration={22} delay={-10} />
        <FloatingBlob color="#3b82f6" initialX="70%" initialY="70%" duration={28} delay={-15} />
        <FloatingBlob color="#14b8a6" initialX="40%" initialY="40%" duration={30} delay={-2} />
        
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-[#E5E4E2] text-[10px] font-bold uppercase tracking-widest text-[#737373] bg-white/50 backdrop-blur-sm">
              Performance Video Creative
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tight leading-[0.9] text-black text-left">
              Capture{" "}
              <span className="liquid-glass-text animate-gradient-text cursor-default cool-hover" data-text="attention">
                attention
              </span>. <br />
              Grow your{" "}
              <span className="relative inline-block group cursor-default">
                <span className="vision-gradient transition-premium group-hover:animate-gradient-text cool-hover">
                  vision
                </span>
                .
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#737373] max-w-xl leading-relaxed font-light text-left">
              Short-form video editing, ad creatives & storytelling for brands that scale. We turn your content into growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 justify-start">
              <Button 
                size="lg" 
                className="btn-unified h-16 px-10 text-lg rounded-full bg-black text-white"
                onClick={scrollToContact}
              >
                Book a Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-unified btn-unified-cool h-16 px-10 text-lg rounded-full"
                onClick={scrollToPricing}
              >
                View Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
