import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "Privacy Policy | Attenomy",
  description: "Learn how Attenomy collects, uses, and protects your personal information.",
};

export default async function Privacy() {
  return (
    <>
      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        <Navbar />

        <section className="mx-auto max-w-4xl px-12 py-12 pt-32 md:pt-32 sm:gap-48">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last Updated: October 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              At <strong>Attenomy</strong>, we respect your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, and safeguard your data
              when you interact with our services, website, and digital platforms.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li><strong>Business Information:</strong> Company details, contact information, and professional credentials</li>
              <li><strong>Project Data:</strong> Information related to service engagements and consulting projects</li>
              <li><strong>Technical Data:</strong> IP addresses, browser information, and usage patterns from website visits</li>
              <li><strong>Communication Data:</strong> Emails, meeting notes, and other correspondence</li>
              <li><strong>Optional Information:</strong> Data you voluntarily provide during consultations or service onboarding</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Deliver and improve our technology consulting services</li>
              <li>Provide customized solutions and recommendations</li>
              <li>Communicate project updates, service changes, and relevant information</li>
              <li>Ensure the security and proper functioning of our services</li>
              <li>Comply with legal and contractual obligations</li>
            </ul>

            <h2>3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or trade your business or personal information. Data may be shared only:
            </p>
            <ul>
              <li>With trusted service providers and partners who assist in delivering our services (under strict confidentiality agreements)</li>
              <li>When required by law, regulation, or legal process</li>
              <li>In connection with business transfers, mergers, or acquisitions</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data against unauthorized access,
              alteration, or disclosure. This includes encryption, access controls, and regular security assessments.
              However, no method of electronic transmission or storage is 100% secure.
            </p>

            <h2>5. Your Rights and Choices</h2>
            <ul>
              <li>You may request access to, correction, or deletion of your personal data</li>
              <li>You can object to or restrict certain data processing activities</li>
              <li>You may opt out of marketing communications at any time</li>
              <li>You can request data portability where applicable</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy,
              unless a longer retention period is required or permitted by law. Project and business data may be
              retained for ongoing service delivery and legal compliance.
            </p>

            <h2>7. International Data Transfers</h2>
            <p>
              As a global technology provider, we may transfer and process data in various locations worldwide.
              We ensure appropriate safeguards are in place to protect your data in accordance with applicable
              data protection laws.
            </p>

            <h2>8. Third-Party Services</h2>
            <p>
              Our services may integrate with or link to third-party platforms and tools. This Privacy Policy
              does not apply to those third-party services, and we encourage you to review their respective
              privacy policies.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or legal requirements.
              Updates will be effective immediately upon posting on our website. We will notify you of
              significant changes through appropriate channels.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal data,
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