import { Link } from "wouter";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F4F2] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-3xl bg-white p-12 rounded-2xl border border-[#E5E4E2] shadow-sm">
        <h1 className="text-4xl font-bold mb-8 font-display text-black">Refund &amp; Cancellation Policy</h1>
        <p className="text-sm text-[#737373] mb-8 italic">Last Updated: April 29, 2026</p>

        <div className="space-y-8 text-[#1A1A1A] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4 font-display">1. Cancellation</h2>
            <p>
              Clients may cancel their subscription at any time. Cancellations take effect at the end
              of the current billing period. You will retain full access to all services until that date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">2. Refunds</h2>
            <p>
              All payments are non-refundable. We do not offer partial refunds for unused time within
              a billing period. Upon cancellation, no further charges will be made and you will
              continue to have access to the service until the end of the period for which you have
              already paid.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">3. Exceptions</h2>
            <p>
              In exceptional circumstances, refund requests may be considered at the sole discretion
              of fidelio. Please contact us within 7 days of the charge if you believe an error has
              occurred.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">4. Contact Us</h2>
            <p>For any questions regarding this policy, please contact us:</p>
            <ul className="mt-4 space-y-1">
              <li><span className="font-bold">fidelio.</span></li>
              <li>6 Brompton Pool Road, B28 0SH, Birmingham, UK</li>
              <li>
                Email:{" "}
                <a href="mailto:filmfidelis@gmail.com" className="font-bold hover:underline">
                  filmfidelis@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+447476710442" className="font-bold hover:underline">
                  +44 7476710442
                </a>
              </li>
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
