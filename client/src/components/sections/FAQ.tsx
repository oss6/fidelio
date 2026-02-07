import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do I need to start?",
    answer: "Just your raw footage and a brief! If you don't have a brief, we have templates to help you extract the key selling points of your product.",
  },
  {
    question: "How do revisions work?",
    answer: "We offer unlimited revisions on our Growth and Pro plans. We want you to be 100% happy with the creative before it goes live.",
  },
  {
    question: "What are your delivery times?",
    answer: "Typically 24-48 hours for the first draft. Revisions are usually turned around within 24 hours.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, our subscriptions are month-to-month. You can pause or cancel your plan at any time before the renewal date.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">FAQs</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
