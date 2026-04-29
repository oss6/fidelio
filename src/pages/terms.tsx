import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#F5F4F2] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-3xl bg-white p-12 rounded-2xl border border-[#E5E4E2] shadow-sm">
        <h1 className="text-4xl font-bold mb-8 font-display text-black">Terms of Service</h1>
        <p className="text-sm text-[#737373] mb-8 italic">Last Updated: February 20, 2026</p>
        
        <div className="space-y-8 text-[#1A1A1A] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4 font-display">1. Acceptance of Terms</h2>
            <p>By accessing or using the fidelio. website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">2. Description of Services</h2>
            <p>fidelio. provides professional video editing, ad creative, and strategic video content services. The specific scope of work for each client is determined by the selected plan or custom agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">3. Payment Terms</h2>
            <p>Services are billed on a subscription or project basis. Payments are due in advance of service delivery unless otherwise agreed in writing. All fees are non-refundable unless specified in our <Link href="/refund-policy" className="font-bold hover:underline">Refund &amp; Cancellation Policy</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">4. Intellectual Property</h2>
            <p>Unless otherwise agreed, clients retain ownership of raw materials provided, while fidelio. retains ownership of the specific creative techniques and templates used. Upon full payment, the client is granted a license to use the final delivered assets.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">5. Revisions Policy</h2>
            <p>Revisions are subject to the terms of the specific plan purchased. Revisions outside the scope of the original brief may incur additional charges. We strive for 100% satisfaction within the agreed parameters.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">6. Limitation of Liability</h2>
            <p>In no event shall fidelio. be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">7. Termination</h2>
            <p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">8. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which fidelio. operates, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">9. Contact Us</h2>
            <p>For any questions regarding these terms, please contact us:</p>
            <ul className="mt-4 space-y-1">
              <li><span className="font-bold">fidelio.</span></li>
              <li>6 Brompton Pool Road, B28 0SH, Birmingham, UK</li>
              <li>Email: <a href="mailto:filmfidelis@gmail.com" className="font-bold hover:underline">filmfidelis@gmail.com</a></li>
              <li>Phone: <a href="tel:+447476710442" className="font-bold hover:underline">+44 7476710442</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E4E2]">
          <Link to="/" className="text-black font-bold hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
