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
    description: "Multi-video packages + basic strategy support.",
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
    description: "Unlimited edits + dedicated manager + optimisation.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Video Requests",
      "Dedicated Creative Strategist",
      "Native Ad Performance Analysis",
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
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Simple Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Scale your content production without the overhead of hiring an in-house team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 flex flex-col h-full ${
                plan.popular
                  ? "bg-card border-primary/50 shadow-2xl shadow-primary/10 transform md:-translate-y-4"
                  : "bg-background border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold font-display mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full h-12 rounded-full font-bold ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
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
