import { 
  Zap, 
  Scissors, 
  Palette, 
  Users, 
  MonitorPlay, 
  Clapperboard 
} from "lucide-react";

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
    <section id="services" className="py-32 bg-white border-y border-[#E5E4E2]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Our Expertise</h2>
            <p className="text-[#737373] text-xl leading-relaxed">
              We don't just edit videos. We build creative assets designed to lower your CPA and scale your ad spend.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-6xl font-bold text-[#E5E4E2]">01</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#E5E4E2]">
          {services.map((service, index) => (
            <div key={index} className="p-10 border-r border-b border-[#E5E4E2] group hover:bg-[#F5F4F2] transition-colors">
              <div className="w-12 h-12 rounded-full border border-[#E5E4E2] flex items-center justify-center mb-8 group-hover:border-black transition-colors">
                <service.icon className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
              <p className="text-[#737373] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
