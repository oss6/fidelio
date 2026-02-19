import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "fidelio transformed our reels into ads that actually sell — insane turnaround times and the quality is unmatched.",
    author: "Alex Rivera",
    role: "Marketing Director, TechFlow",
  },
  {
    quote: "Finally an agency that understands direct response. Our CPA dropped by 40% within the first month of using their creatives.",
    author: "Sarah Jenkins",
    role: "Founder, Glow Up Cosmetics",
  },
  {
    quote: "The workflow is seamless. I upload raw clips, and wake up to polished, high-converting ads. Highly recommended.",
    author: "Mike Chen",
    role: "E-com Growth Lead",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-soft-gradient-2 border-b border-[#E5E4E2] relative overflow-hidden">
       {/* Subtle Noise Texture Overlay */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black">Social Proof</h2>
          <div className="section-header-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8 p-8 border border-[#E5E4E2] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-black opacity-10" />
              <p className="text-xl leading-relaxed text-black italic">"{item.quote}"</p>
              <div className="pt-4 border-t border-[#E5E4E2]">
                <h4 className="font-bold text-black">{item.author}</h4>
                <p className="text-sm text-[#737373]">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
