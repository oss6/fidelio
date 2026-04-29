import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Request Sent!",
      description: "We'll be in touch with you shortly to schedule your call.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #a855f7, #ec4899, #f97316, #3b82f6)',
      backgroundSize: '200% 200%',
    }}>
       {/* Vibrant Overlay */}
       <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
         background: 'radial-gradient(circle at 30% 30%, white, transparent 70%)',
       }} />
       
       {/* Subtle Noise Texture Overlay */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          <div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white leading-none">Ready to Scale?</h2>
            <div className="section-header-line mb-8 bg-white/30" />
            <p className="text-white/90 text-xl leading-relaxed mb-10">
              Book a discovery call to discuss your creative strategy and how we can turn your content into a conversion engine.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white font-bold">
                <div className="w-2 h-2 rounded-full bg-white" />
                24h Response Time
              </div>
              <div className="flex items-center gap-4 text-white font-bold">
                <div className="w-2 h-2 rounded-full bg-white" />
                Global Clients
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-bold uppercase text-xs tracking-widest">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-transparent border-0 border-b border-[#E5E4E2] rounded-none px-4 h-12 focus-visible:ring-0 focus-visible:border-black transition-premium" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-bold uppercase text-xs tracking-widest">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@brand.com" {...field} className="bg-transparent border-0 border-b border-[#E5E4E2] rounded-none px-4 h-12 focus-visible:ring-0 focus-visible:border-black transition-premium" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-bold uppercase text-xs tracking-widest">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your needs..." 
                          className="bg-transparent border-0 border-b border-[#E5E4E2] rounded-none px-4 min-h-[100px] focus-visible:ring-0 focus-visible:border-black transition-premium resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-16 rounded-full text-lg bg-black text-white font-bold btn-unified">
                  Book Your Call
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
