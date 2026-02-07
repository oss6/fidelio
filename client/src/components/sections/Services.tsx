import { 
  Clapperboard, 
  Scissors, 
  Zap, 
  Users, 
  Palette, 
  MonitorPlay 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Performance Ad Creatives",
    description: "High-impact ads optimised for Facebook, TikTok & YouTube designed to stop the scroll.",
    icon: Zap,
  },
  {
    title: "Short-Form Video Editing",
    description: "Turn raw clips into polished, engaging content for Reels, TikToks, and Shorts.",
    icon: Scissors,
  },
  {
    title: "Motion Graphics",
    description: "Dynamic text animations and motion graphics that keep retention high.",
    icon: Palette,
  },
  {
    title: "UGC & Storytelling",
    description: "Authentic UGC edits that build trust and drive conversions through storytelling.",
    icon: Users,
  },
  {
    title: "Static Ads & End Cards",
    description: "Compelling thumbnails and end cards that improve click-through rates.",
    icon: MonitorPlay,
  },
  {
    title: "Content Capture",
    description: "Strategic videography guidance to help you film better raw assets.",
    icon: Clapperboard,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Built for <span className="text-primary">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just edit videos. We build creative assets designed to lower your CPA and scale your ad spend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
