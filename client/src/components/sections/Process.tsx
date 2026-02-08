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
    <section id="how-it-works" className="py-32 bg-[#F5F4F2]">
      <div className="container px-6 mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">The Workflow</h2>
          <p className="text-[#737373] text-xl max-w-2xl">
            A simple, transparent process designed to get your ads live faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="text-6xl font-bold text-[#E5E4E2] font-display">{step.number}</div>
              <h3 className="text-3xl font-bold text-black leading-tight">{step.title}</h3>
              <p className="text-[#737373] text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
