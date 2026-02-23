import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Best for beginners or single video edits.",
    price: "$997",
    period: "/mo",
    features: [
      "4 Short-Form Videos / mo",
      "Basic Captions & Cuts",
      "Stock Music Included",
      "1 Revision Round",
      "48h Turnaround",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "Multi-video packages + strategy support.",
    price: "$2,497",
    period: "/mo",
    features: [
      "12 Short-Form Videos / mo",
      "Advanced Motion Graphics",
      "Ad Hook Variations",
      "Unlimited Revisions",
      "Slack Communication",
      "24h Turnaround",
    ],
    cta: "Book Growth Call",
    popular: true,
  },
  {
    name: "Pro / Agency",
    description: "Unlimited edits + dedicated manager.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Video Requests",
      "Dedicated Creative Strategist",
      "Performance Analysis",
      "Priority Queue",
      "Raw Footage Guidance",
      "White Label Available",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="container px-6 mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Investment</h2>
          <p className="text-[#737373] text-xl max-w-2xl leading-relaxed">
            Scale your content production without the overhead of hiring an in-house team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E4E2]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-10 flex flex-col h-full border-r last:border-r-0 border-[#E5E4E2] ${
                plan.popular ? "bg-[#F5F4F2]" : "bg-white"
              }`}
            >
              <div className="mb-12">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                  {plan.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-black text-white rounded">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-black">{plan.price}</span>
                  <span className="text-[#737373] text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-black shrink-0 mt-1" />
                    <span className="text-sm text-[#737373] leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full h-14 rounded-full font-bold text-base transition-all ${
                  plan.popular
                    ? "bg-black text-white hover:opacity-80"
                    : "bg-transparent border border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
