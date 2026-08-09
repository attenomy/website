import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "Terms of Service | Attenomy",
  description: "Read the Terms of Service to understand the rules and guidelines for accessing the Attenomy website.",
  alternates: {
    canonical: "/terms",
  },
};

export default async function Terms() {
  return (
    <>
      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        <Navbar />

        <section className="mx-auto max-w-4xl px-12 py-12 pt-32 md:pt-32 sm:gap-48">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last Updated: October 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              Welcome to <strong>Attenomy</strong> ("the Service").
              By accessing or using our website and services, you agree to the following Terms of Service.
              Please read them carefully.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Attenomy's services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms. If you do not agree with any part of these Terms, 
              please do not use our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Attenomy provides innovative technology solutions and consulting services to help businesses 
              navigate digital transformation. Our services may include:
            </p>
            <ul>
              <li>Custom software development and implementation</li>
              <li>Digital transformation consulting</li>
              <li>Technology strategy and architecture</li>
              <li>Cloud solutions and infrastructure</li>
              <li>AI and machine learning applications</li>
            </ul>
            <p>Specific service offerings may vary based on client needs and project requirements.</p>

            <h2>3. User Responsibilities</h2>
            <ul>
              <li>You agree to provide accurate and complete information when engaging with our services</li>
              <li>You agree not to misuse our services or attempt to compromise system security</li>
              <li>You are responsible for maintaining the confidentiality of any account credentials</li>
              <li>You agree to use our services in compliance with all applicable laws and regulations</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, technology, proprietary tools, methodologies, and materials developed by Attenomy 
              remain our exclusive property. You may not copy, modify, distribute, or reverse engineer any 
              part of our services without express written permission.
            </p>

            <h2>5. Disclaimer</h2>
            <ul>
              <li>
                Our services are provided "as is" and we make no warranties regarding specific outcomes 
                or business results
              </li>
              <li>We strive for accuracy but do not guarantee error-free performance at all times</li>
              <li>Service availability may be subject to maintenance and unforeseen interruptions</li>
              <li>Use of our services is at your own discretion and risk</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Attenomy shall not be liable for any direct, indirect, 
              incidental, special, consequential, or exemplary damages, including but not limited to damages 
              for loss of profits, goodwill, data, or other intangible losses resulting from the use of our services.
            </p>

            <h2>7. Privacy and Data Protection</h2>
            <p>
              We are committed to protecting your privacy and handling your data responsibly. 
              We collect and process information in accordance with our Privacy Policy and applicable 
              data protection regulations. For detailed information about how we handle your data, 
              please see our <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of 
              significant changes through our website or via direct communication. Continued use of 
              our services after such changes constitutes acceptance of the updated Terms.
            </p>

            <h2>9. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes arising from these Terms or your use of our services shall be subject to 
              the exclusive jurisdiction of the courts located in India.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions, concerns, or requests regarding these Terms of Service, 
              please contact us at:{" "}
              <a href="mailto:legal@attenomy.com" className="text-primary underline">
                legal@attenomy.com
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}