import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {["Services", "How it Works", "Pricing", "FAQ"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))}
          className={`text-sm font-medium transition-colors hover:text-black ${
            mobile ? "text-lg py-2 text-left" : "text-[#737373]"
          }`}
        >
          {item}
        </button>
      ))}
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-[#E5E4E2] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a 
            ref={logoRef}
            onMouseMove={handleMouseMove}
            className="group relative text-xl font-bold tracking-tight font-display text-black overflow-hidden py-1 px-1"
          >
            <span className="relative z-10">fidelio.</span>
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 30px at ${mousePos.x}px ${mousePos.y}px, #3b82f6, #a855f7, #ec4899, transparent)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              fidelio.
            </div>
            {/* Subtle glow layer */}
            <div 
              className="absolute pointer-events-none opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300"
              style={{
                left: mousePos.x - 15,
                top: mousePos.y - 15,
                width: 30,
                height: 30,
                background: `radial-gradient(circle, #a855f7, transparent)`,
              }}
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <NavLinks />
          <Button 
            onClick={() => scrollToSection("contact")} 
            className="btn-unified bg-black text-white rounded-full px-8 py-6 text-base"
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white border-l border-[#E5E4E2]">
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks mobile />
                <Button onClick={() => scrollToSection("contact")} className="w-full btn-unified bg-black text-white rounded-full py-6">
                  Book a Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
