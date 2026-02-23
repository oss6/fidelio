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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden border-b border-slate-200">
      {/* Floating Blobs Background */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-white">

        {/* Top-right corner blob */}
        <motion.img
          src="/blob1.png"
          alt="Background blob"
          className="absolute object-cover pointer-events-none"
          width={520}
          style={{ top: -120, right: -140 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom-right, pulled further in for balance */}
        <motion.img
          src="/blob2.png"
          alt="Background blob"
          className="absolute object-cover pointer-events-none"
          width={650}
          style={{ bottom: 0, right: -100 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />

        {/* Center-left, anchoring the midfield */}
        <motion.img
          src="/blob3.png"
          alt="Background blob"
          className="absolute object-cover pointer-events-none"
          width={500}
          style={{ top: "5%", right: "22%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />

        {/* Upper-center, subtle overlap with blob1 for depth */}
        <motion.img
          src="/blob4.png"
          alt="Background blob"
          className="absolute object-cover pointer-events-none"
          width={320}
          style={{ bottom: 140, right: "36%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
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
              <span className="shimmer-text-effect cursor-default">
                attention
              </span>. <br />
              Grow your{" "}
              <span className="relative inline-block group cursor-default">
                <span className="shimmer-text-effect">
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
                className="btn-unified-cool h-16 px-10 text-lg rounded-full"
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