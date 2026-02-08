import { Quote } from "lucide-react";

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
    <section id="testimonials" className="py-32 bg-[#F5F4F2] border-y border-[#E5E4E2]">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-black text-center">Social Proof</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <div key={index} className="space-y-8 p-8 border border-[#E5E4E2] bg-white rounded-xl">
              <Quote className="w-8 h-8 text-black opacity-10" />
              <p className="text-xl leading-relaxed text-black italic">"{item.quote}"</p>
              <div className="pt-4 border-t border-[#E5E4E2]">
                <h4 className="font-bold text-black">{item.author}</h4>
                <p className="text-sm text-[#737373]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
