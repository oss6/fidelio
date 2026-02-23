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
    <section id="faq" className="py-32 bg-white">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Common Queries</h2>
          <p className="text-[#737373] text-xl">
            Everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-[#E5E4E2] py-4">
              <AccordionTrigger className="text-2xl font-bold hover:no-underline text-black text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#737373] text-lg leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
