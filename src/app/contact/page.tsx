import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Strong Password Generator",
  description: "Contact the Strong Password Generator team with questions, feedback, or bug reports.",
};

export default function ContactPage() {
  const topics = [
    {
      icon: "🐛",
      title: "Bug Reports",
      description: "Found something that isn't working right? Let us know what happened and we'll get it fixed.",
    },
    {
      icon: "💡",
      title: "Feature Suggestions",
      description: "Have an idea for a tool or feature that would help you stay more secure? We're all ears.",
    },
    {
      icon: "🤝",
      title: "Partnerships & Collaborations",
      description: "Interested in working together on security content or tools? Reach out and let's talk.",
    },
    {
      icon: "📝",
      title: "Content Feedback",
      description: "Spotted an error in one of our articles or have suggestions to improve our security guides?",
    },
    {
      icon: "🔒",
      title: "Privacy Inquiries",
      description: "Questions or concerns about how we handle your data? We take privacy seriously and will respond promptly.",
    },
    {
      icon: "💬",
      title: "General Questions",
      description: "Anything else on your mind — we're happy to hear from you.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] text-white font-sans">
      <header className="bg-[#1a2332] border-b border-[#2f3640] py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-[#00d4aa]">🔐 Strong Password Generator</a>
          <nav className="flex gap-4 text-sm text-[#8899a6]">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">

        {/* Header */}
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h1 className="text-3xl font-bold text-[#00d4aa] mb-4">Contact Us</h1>
          <p className="text-[#8899a6] leading-relaxed text-lg">
            We'd love to hear from you. Whether you have a question, found a bug, or just want to
            share feedback — send us an email and we'll get back to you.
          </p>
        </div>

        {/* Email CTA */}
        <div className="bg-[#1a1040] rounded-xl p-8 border border-[#4f46e5]/30 text-center">
          <div className="text-5xl mb-4">✉️</div>
          <h2 className="text-xl font-semibold text-white mb-3">Send Us an Email</h2>
          <p className="text-[#8899a6] mb-5 max-w-md mx-auto">
            This is the fastest way to reach us. We typically respond within 1–3 business days.
          </p>
          <a
            href="mailto:msarmento42@gmail.com"
            className="inline-block bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            msarmento42@gmail.com
          </a>
        </div>

        {/* Topics */}
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h2 className="text-xl font-semibold text-white mb-6">🗂️ What You Can Contact Us About</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <div key={i} className="bg-[#0f1419] rounded-lg p-5">
                <h3 className="font-semibold text-[#00d4aa] mb-2">
                  {topic.icon} {topic.title}
                </h3>
                <p className="text-sm text-[#8899a6] leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h2 className="text-xl font-semibold text-white mb-4">⏰ Response Times</h2>
          <div className="text-[#8899a6] leading-relaxed space-y-3">
            <p>
              We aim to respond to all emails within <strong className="text-white">1–3 business days</strong>.
              For bug reports and privacy inquiries, we prioritize responses and typically reply
              within 24 hours on business days.
            </p>
            <p>
              Please include as much detail as possible in your message — especially for bug reports.
              Screenshots, browser information, and a description of what you expected vs. what
              happened help us resolve issues much faster.
            </p>
          </div>
        </div>

        {/* Privacy note */}
        <div className="bg-[#0f1a0f] rounded-xl p-6 border border-[#26de81]/20">
          <p className="text-[#8899a6] text-sm leading-relaxed">
            <strong className="text-[#26de81]">Privacy note:</strong> When you email us, we receive
            your email address and message contents. This information is used only to respond to
            your inquiry and is never sold or shared with third parties. For more details, see our{" "}
            <a href="/privacy" className="text-[#00d4aa] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
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
