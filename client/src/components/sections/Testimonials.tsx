import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Fidelio transformed our reels into ads that actually sell — insane turnaround times and the quality is unmatched.",
    author: "Alex Rivera",
    role: "Marketing Director, TechFlow",
    initials: "AR",
  },
  {
    quote: "Finally an agency that understands direct response. Our CPA dropped by 40% within the first month of using their creatives.",
    author: "Sarah Jenkins",
    role: "Founder, Glow Up Cosmetics",
    initials: "SJ",
  },
  {
    quote: "The workflow is seamless. I upload raw clips, and wake up to polished, high-converting ads. Highly recommended.",
    author: "Mike Chen",
    role: "E-com Growth Lead",
    initials: "MC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Trusted by Founders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-card/50 border border-white/5 p-8 rounded-2xl relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-8 left-8" />
              <div className="relative z-10 pt-8">
                <p className="text-lg leading-relaxed mb-8 text-white/90">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold font-display">{item.author}</h4>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
