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
      {/* Morphing Blobs Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        {/* Main large blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 blur-3xl opacity-60 animate-blob-morph" />
        
        {/* Secondary morphing blobs */}
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-gradient-to-tr from-orange-200/20 to-pink-200/20 blur-2xl opacity-40 animate-blob-morph" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[60%] left-[40%] w-[250px] h-[250px] bg-gradient-to-bl from-cyan-200/20 to-blue-200/20 blur-2xl opacity-40 animate-blob-morph" style={{ animationDelay: '-10s' }} />
        
        {/* Liquid Glass accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/10 border border-white/20 backdrop-blur-[2px] rounded-full animate-blob-morph shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" />
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

            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tight leading-[0.9] text-black">
              Capture{" "}
              <span className="liquid-glass-text animate-gradient-text" data-text="attention">
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

            <p className="text-xl md:text-2xl text-[#737373] max-w-xl leading-relaxed font-light">
              Short-form video editing, ad creatives & storytelling for brands that scale. We turn your content into growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
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
