import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Blob Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        {/* Dimensional Atmospheric Blob */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] animate-blob-morph opacity-20 z-[-1]"
          style={{
            background: `radial-gradient(circle at center, #a855f7, #ec4899, #f97316, #3b82f6)`,
            mixBlendMode: 'screen',
            boxShadow: 'inset 0 0 100px rgba(255,255,255,0.2)'
          }}
        />
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
              <span className="liquid-glass-text animate-gradient-text cursor-default" data-text="attention">
                attention
              </span>. <br />
              Grow your{" "}
              <span className="relative inline-block group cursor-default">
                <span className="vision-gradient transition-premium hover-glow group-hover:animate-gradient-text">
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
