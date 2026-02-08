import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AbstractBlob from "@/assets/abstract-blob.png";

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container px-6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-[#E5E4E2] text-[10px] font-bold uppercase tracking-widest text-[#737373]">
            Creative Video Strategy
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tight leading-[0.95] text-black">
            Where Content <br /> Meets Conversion.
          </h1>

          <p className="text-xl md:text-2xl text-[#737373] max-w-xl leading-relaxed font-light">
            Short-form video editing, ad creatives & storytelling for brands that scale. We turn your raw footage into growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="h-16 px-10 text-lg rounded-full bg-black hover:opacity-80 text-white w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Book a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-16 px-10 text-lg rounded-full border-black text-black hover:bg-black hover:text-white w-full sm:w-auto transition-all"
              onClick={scrollToPricing}
            >
              View Plans
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <img 
            src={AbstractBlob} 
            alt="Abstract Art" 
            className="w-full h-auto max-w-[500px] mx-auto filter brightness-105 contrast-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
