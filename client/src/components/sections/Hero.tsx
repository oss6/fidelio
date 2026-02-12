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
      {/* Orbital Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-orange-100/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-black/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full blur-[2px] shadow-lg shadow-purple-200/50 animate-orbit" />
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

            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-tight leading-[0.9] text-black">
              Capture attention. <br />
              Grow your{" "}
              <span className="relative inline-block group cursor-default">
                <span className="vision-gradient transition-premium hover-glow group-hover:animate-gradient-text">
                  vision
                </span>
                .
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#737373] max-w-xl leading-relaxed font-light">
              Short-form video editing, ad creatives & storytelling for brands that scale. We turn your raw footage into growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
              <Button 
                size="lg" 
                className="h-16 px-10 text-lg rounded-full bg-black text-white transition-premium hover:scale-[1.03] hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:shadow-lg hover:shadow-orange-200 border-0"
                onClick={scrollToContact}
              >
                Book a Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-10 text-lg rounded-full border-black text-black transition-premium hover:scale-[1.03] hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-blue-200 border-1"
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
