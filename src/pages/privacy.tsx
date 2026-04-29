import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F4F2] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-3xl bg-white p-12 rounded-2xl border border-[#E5E4E2] shadow-sm">
        <h1 className="text-4xl font-bold mb-8 font-display text-black">Privacy Policy</h1>
        <p className="text-sm text-[#737373] mb-8 italic">Last Updated: February 20, 2026</p>
        
        <div className="space-y-8 text-[#1A1A1A] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4 font-display">1. Information Collected</h2>
            <p>We collect information that you provide directly to us, including your name, email address, and any other information you choose to provide when booking a call or contacting us. We also automatically collect certain usage data when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">2. How Data is Used</h2>
            <p>Your data is used to provide and maintain our services, notify you about changes, allow you to participate in interactive features, provide customer support, and gather analysis or valuable information so that we can improve our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">3. Cookies Usage</h2>
            <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">4. Third-Party Tools</h2>
            <p>We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">5. Data Protection</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">6. User Rights</h2>
            <p>You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update, or request deletion of your personal data directly within your account settings section.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 font-display">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
