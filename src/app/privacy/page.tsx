import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Strong Password Generator",
  description: "Privacy policy for strongpasswordgenerator.dev — learn how we handle your data, our use of Google AdSense, and your rights.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-white font-sans">
      <header className="bg-[#1a2332] border-b border-[#2f3640] py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-[#00d4aa]">🔐 Strong Password Generator</a>
          <nav className="flex gap-4 text-sm text-[#8899a6]">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h1 className="text-3xl font-bold text-[#00d4aa] mb-2">Privacy Policy</h1>
          <p className="text-[#8899a6] text-sm mb-8">Last updated: May 9, 2026</p>

          <div className="space-y-8 text-[#8899a6] leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Overview</h2>
              <p>
                Strong Password Generator ("we", "us", or "our") operates the website{" "}
                <span className="text-[#00d4aa]">strongpasswordgenerator.dev</span> (the "Service").
                This page explains what information is collected when you use our Service, why it is
                collected, and how it is used. We are committed to protecting your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Data We Do Not Collect</h2>
              <p>
                All passwords generated on this site are created entirely within your browser using
                the Web Cryptography API (<code className="text-[#00d4aa] bg-[#0f1419] px-1 rounded">crypto.getRandomValues()</code>).{" "}
                <strong className="text-white">No passwords are transmitted to our servers.</strong> We do not
                collect, store, or process any passwords, passphrases, or personal credentials you
                generate or enter on this site.
              </p>
              <p className="mt-3">
                We do not collect your name, email address, phone number, or any other personally
                identifiable information unless you voluntarily contact us (see Section 7).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Automatically Collected Information</h2>
              <p>
                Like most websites, we may receive certain standard technical information when you
                visit, including your IP address, browser type, operating system, referring URLs, and
                pages viewed. This information is used solely for operating and improving the Service
                and is not linked to any personally identifiable information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Cookies and Local Storage</h2>
              <p>
                This site uses browser <strong className="text-white">localStorage</strong> to store your
                recent password history locally on your device. This data never leaves your browser
                and can be cleared at any time using the "Clear" button in the password history
                section, or by clearing your browser's site data.
              </p>
              <p className="mt-3">
                Third-party services on this site (described in Section 5) may set cookies on your
                device. You can control cookie settings through your browser preferences. Disabling
                cookies may limit some functionality from third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Google AdSense and Third-Party Advertising</h2>
              <p>
                We use <strong className="text-white">Google AdSense</strong> to display advertisements on this
                site. Google AdSense uses cookies and similar tracking technologies to serve ads based
                on your prior visits to this website and other sites on the internet. Google's use of
                advertising cookies enables it and its partners to serve ads based on your visit to
                this site and/or other sites on the Internet.
              </p>
              <p className="mt-3">
                You may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d4aa] hover:underline"
                >
                  Google Ads Settings
                </a>
                . You can also opt out of third-party vendor cookies for personalized advertising by
                visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d4aa] hover:underline"
                >
                  aboutads.info
                </a>
                .
              </p>
              <p className="mt-3">
                For more information about how Google uses data from sites that use Google's services,
                please visit:{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d4aa] hover:underline"
                >
                  How Google uses information from sites or apps that use our services
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Analytics</h2>
              <p>
                We may use analytics tools to understand aggregate patterns of how visitors use the
                Service — such as which pages are most visited and how long sessions last. This data
                is collected in anonymized or aggregated form and is not used to identify individual
                users. No personally identifiable information is collected for analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Information You Provide Directly</h2>
              <p>
                If you contact us via email at{" "}
                <a href="mailto:msarmento42@gmail.com" className="text-[#00d4aa] hover:underline">
                  msarmento42@gmail.com
                </a>
                , we will receive your email address and any information you include in your message.
                This information is used only to respond to your inquiry and is not shared with third
                parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Data Sharing and Disclosure</h2>
              <p>We do not sell, rent, or share your personal information with third parties except:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>When required by law, legal process, or government request</li>
                <li>
                  With third-party service providers (such as Google AdSense) who assist in operating
                  the Service, under contractual obligations to keep information confidential
                </li>
                <li>To protect the rights, property, or safety of our users or the public</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Children's Privacy</h2>
              <p>
                This Service is not directed to children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you believe a child has
                provided us with personal information, please contact us and we will delete it
                promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Security</h2>
              <p>
                We take reasonable technical precautions to protect any information we receive.
                However, no method of internet transmission is 100% secure. While we strive to use
                commercially acceptable means to protect your information, we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. No Warranty on Security Advice</h2>
              <p>
                The password security tips and guidance provided on this site are for informational
                purposes only. They are provided "as is" without any warranty of any kind. We make no
                representations about the suitability, reliability, or accuracy of the information
                for any purpose. Use of security recommendations is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. External Links</h2>
              <p>
                This site may contain links to external websites. We are not responsible for the
                privacy practices or content of those sites. We encourage you to review the privacy
                policy of any third-party site you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated "Last updated" date. Your continued use of the Service after any
                changes constitutes acceptance of the new policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 bg-[#0f1419] rounded-lg p-4">
                <p className="text-white font-semibold">Strong Password Generator</p>
                <p className="mt-1">
                  Email:{" "}
                  <a href="mailto:msarmento42@gmail.com" className="text-[#00d4aa] hover:underline">
                    msarmento42@gmail.com
                  </a>
                </p>
                <p>Website: <span className="text-[#00d4aa]">strongpasswordgenerator.dev</span></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-[#8899a6] text-sm border-t border-[#2f3640] mt-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 mb-3">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/recommended-tools" className="hover:text-white transition-colors">Recommended Tools</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          </div>
          <p>🔒 Your passwords are generated locally. Nothing is sent to any server.</p>
        </div>
      </footer>
    </div>
  );
}
