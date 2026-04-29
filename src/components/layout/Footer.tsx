import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-[#E5E4E2]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-sm">
            <Link href="/">
              <a className="text-2xl font-bold tracking-tight font-display mb-6 block text-black">
                fidelio<span className="text-black">.</span>
              </a>
            </Link>
            <p className="text-[#737373] leading-relaxed">
              An editorial approach to performance video. We build creative assets for the modern brand.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black">Company</h4>
              <ul className="space-y-2 text-sm text-[#737373]">
                <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black">Social</h4>
              <ul className="space-y-2 text-sm text-[#737373]">
                <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black">Legal</h4>
              <ul className="space-y-2 text-sm text-[#737373]">
                <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund-policy" className="hover:text-black transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black">Contact</h4>
              <ul className="space-y-2 text-sm text-[#737373]">
                <li>6 Brompton Pool Road</li>
                <li>B28 0SH, Birmingham, UK</li>
                <li>
                  <a href="mailto:filmfidelis@gmail.com" className="hover:text-black transition-colors">
                    filmfidelis@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+447476710442" className="hover:text-black transition-colors">
                    +44 7476710442
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E4E2] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#E5E4E2]">
          <p className="text-[#737373]">© {new Date().getFullYear()} fidelio. All rights reserved.</p>
          <div className="flex gap-8 text-[#737373]">
            <Link href="/privacy" className="hover:text-black transition-colors uppercase">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors uppercase">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-black transition-colors uppercase">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
