import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "Cookie Policy | Attenomy",
  description: "Understand how Attenomy uses cookies and similar technologies on their website.",
};

export default async function CookiePolicy() {
  return (
    <>
      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        <Navbar />

        <section className="mx-auto max-w-4xl px-12 py-12 pt-32 md:pt-32 sm:gap-48">
          <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last Updated: October 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              This Cookie Policy explains how <strong>Attenomy</strong> uses cookies and similar
              technologies when you visit our website or interact with our digital services.
              By using our website, you consent to the use of cookies as described in this policy.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. 
              They help websites function properly, improve user experience, and provide information 
              to website owners about how visitors interact with their site.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <ul>
              <li>
                <strong>Essential Cookies</strong> – Required for basic website functionality, 
                such as page navigation and access to secure areas. These cannot be disabled.
              </li>
              <li>
                <strong>Performance Cookies</strong> – Collect anonymous information about how 
                visitors use our website to help us improve its performance.
              </li>
              <li>
                <strong>Functional Cookies</strong> – Remember your preferences and settings 
                to enhance your browsing experience.
              </li>
              <li>
                <strong>Analytics Cookies</strong> – Help us understand how visitors engage with 
                our website, including pages visited and features used.
              </li>
              <li>
                <strong>Marketing Cookies</strong> – Used to track visitors across websites to 
                display relevant advertisements and measure campaign effectiveness.
              </li>
            </ul>

            <h2>3. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>To ensure our website functions correctly and securely</li>
              <li>To analyze website traffic and user behavior patterns</li>
              <li>To personalize your experience and remember your preferences</li>
              <li>To understand the effectiveness of our marketing campaigns</li>
              <li>To improve our services and user interface based on usage data</li>
            </ul>

            <h2>4. Third-Party Cookies</h2>
            <p>
              We may use trusted third-party services that place cookies on your device, including:
            </p>
            <ul>
              <li><strong>Analytics Providers</strong> – Such as Google Analytics to understand website usage</li>
              <li><strong>Marketing Platforms</strong> – To measure campaign performance and reach</li>
              <li><strong>Social Media Platforms</strong> – For integration with social features</li>
              <li><strong>Service Providers</strong> – That help us deliver and improve our services</li>
            </ul>
            <p>
              These third parties have their own privacy policies, and we encourage you to review them.
            </p>

            <h2>5. Your Cookie Choices</h2>
            <p>
              You can control and manage cookies in several ways:
            </p>
            <ul>
              <li>
                <strong>Browser Settings</strong> – Most browsers allow you to refuse or delete cookies. 
                Please refer to your browser's help section for instructions.
              </li>
              <li>
                <strong>Cookie Consent Banner</strong> – Use our cookie consent tool to manage your preferences.
              </li>
              <li>
                <strong>Opt-Out Tools</strong> – Use industry opt-out tools for specific types of cookies, 
                particularly advertising cookies.
              </li>
            </ul>
            <p>
              Please note that disabling certain cookies may affect the functionality and performance 
              of our website and your user experience.
            </p>

            <h2>6. Other Tracking Technologies</h2>
            <p>
              In addition to cookies, we may use other similar technologies such as:
            </p>
            <ul>
              <li><strong>Web Beacons</strong> – Small graphic images that monitor user activity</li>
              <li><strong>Local Storage</strong> – Storing data in your browser for functionality</li>
              <li><strong>Session Storage</strong> – Temporary storage during your website visit</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              Cookies have varying lifespans. Session cookies are deleted when you close your browser, 
              while persistent cookies remain for a set period specified in the cookie file, typically 
              from a few hours to several years.
            </p>

            <h2>8. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in technology, regulations, or our 
              services. Any changes will be posted on this page with an updated revision date. We 
              encourage you to review this policy periodically.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy or our use of cookies, please contact us at:{" "}
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