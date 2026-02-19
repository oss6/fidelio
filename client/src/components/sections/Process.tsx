import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Submit Your Footage",
    description: "Upload your raw video files and brief via our streamlined portal.",
  },
  {
    number: "02",
    title: "We Edit & Optimise",
    description: "Our editors work their magic with fast turnaround times.",
  },
  {
    number: "03",
    title: "Launch & Convert",
    description: "Get polished, high-converting assets ready to publish.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="py-32 bg-dark-cinematic-1 relative overflow-hidden border-y border-white/5">
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-2 text-white">The Workflow</h2>
          <div className="section-header-line bg-white/20" />
          <p className="text-white/60 text-xl max-w-2xl mt-6">
            A simple, transparent process designed to get your ads live faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="text-6xl font-bold text-white/10 font-display">{step.number}</div>
              <h3 className="text-3xl font-bold text-white leading-tight">{step.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
