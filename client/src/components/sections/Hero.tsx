import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroBg from "@/assets/hero-bg.png"; // Assuming the image was saved here
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroBg} 
          alt="Video Editing Timeline" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Accepting new clients for Q1</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] font-display">
            Where{" "}
            <span className="relative inline-block group cursor-default">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:from-blue-300 group-hover:to-cyan-200">
                Content
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-400/50 transition-all duration-500 group-hover:w-full" />
            </span>{" "}
            Meets{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block group cursor-default">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 transition-all duration-300 group-hover:from-primary/80 group-hover:to-purple-300">
                Conversion
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary/50 transition-all duration-500 group-hover:w-full" />
            </span>
            .
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Short-form video editing, ad creatives & performance-driven storytelling for brands that scale. We turn your content into revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white w-full sm:w-auto glow-hover"
              onClick={scrollToContact}
            >
              Get Started — Book a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5 w-full sm:w-auto"
              onClick={scrollToPricing}
            >
              See Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
