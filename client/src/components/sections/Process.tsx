import { motion } from "framer-motion";
import { UploadCloud, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Footage",
    description: "Upload your raw video files and brief via our streamlined portal. No messy email chains.",
    icon: UploadCloud,
  },
  {
    number: "02",
    title: "We Edit & Optimise",
    description: "Our editors work their magic. Fast turnaround times with unlimited revisions until it's perfect.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Launch & Convert",
    description: "Get polished, high-converting assets ready to publish on your ad channels instantly.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/20 border-y border-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process designed to get your ads live faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-background border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:border-primary/50 transition-colors duration-300">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-muted-foreground mb-4">
                STEP {step.number}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
