import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Strong Password Generator",
  description: "Learn about Strong Password Generator — a free, browser-based security suite for creating and evaluating passwords. No data leaves your device.",
};

export default function AboutPage() {
  const tools = [
    {
      icon: "🎲",
      name: "Password Generator",
      description:
        "Generate cryptographically secure passwords of any length with full control over character sets — uppercase, lowercase, numbers, and symbols.",
    },
    {
      icon: "📊",
      name: "Strength Analyzer",
      description:
        "Instantly analyze any password's entropy in bits and get a human-readable strength rating from Very Weak to Very Strong.",
    },
    {
      icon: "⏱️",
      name: "Crack Time Estimator",
      description:
        "See how long a high-speed brute-force attack would realistically take to crack your password — from milliseconds to billions of years.",
    },
    {
      icon: "📜",
      name: "Password History",
      description:
        "Review your recent generated passwords locally in your browser. History is stored only on your device and never transmitted anywhere.",
    },
    {
      icon: "🛡️",
      name: "Security Tips",
      description:
        "Curated, practical security advice covering password managers, two-factor authentication, avoiding reuse, and more.",
    },
    {
      icon: "🔗",
      name: "Recommended Tools",
      description:
        "Vetted recommendations for password managers and security tools that complement good password hygiene.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] text-white font-sans">
      <header className="bg-[#1a2332] border-b border-[#2f3640] py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-[#00d4aa]">🔐 Strong Password Generator</a>
          <nav className="flex gap-4 text-sm text-[#8899a6]">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">

        {/* Hero */}
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h1 className="text-3xl font-bold text-[#00d4aa] mb-4">About Strong Password Generator</h1>
          <p className="text-[#8899a6] leading-relaxed text-lg">
            Strong Password Generator is a free, browser-based security suite built to help everyone
            — from security professionals to everyday users — create, evaluate, and understand strong
            passwords without any technical expertise required.
          </p>
        </div>

        {/* Why It Was Built */}
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h2 className="text-xl font-semibold text-white mb-4">🤔 Why We Built This</h2>
          <div className="text-[#8899a6] leading-relaxed space-y-3">
            <p>
              Weak and reused passwords remain the leading cause of account takeovers worldwide. Most
              people know they should use stronger passwords — but actually generating, remembering,
              and managing them is where the process breaks down.
            </p>
            <p>
              We built this tool because too many password generators are cluttered, ad-heavy, slow,
              or require you to trust a server you've never heard of with your credentials. We wanted
              something different: a clean, fast, privacy-first generator where everything happens
              locally in your browser. Your passwords never leave your device.
            </p>
            <p>
              Beyond just generating passwords, we wanted to help people actually <em className="text-white">understand</em>{" "}
              password security — what entropy means, how long a cracking attack takes, and why using
              a password manager is the single most effective security upgrade most people can make.
            </p>
          </div>
        </div>

        {/* Tools Available */}
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h2 className="text-xl font-semibold text-white mb-6">🧰 Tools Available on This Site</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((tool, i) => (
              <div key={i} className="bg-[#0f1419] rounded-lg p-5">
                <h3 className="font-semibold text-[#00d4aa] mb-2">
                  {tool.icon} {tool.name}
                </h3>
                <p className="text-sm text-[#8899a6] leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Promise */}
        <div className="bg-[#0f1a0f] rounded-xl p-8 border border-[#26de81]/20">
          <h2 className="text-xl font-semibold text-white mb-4">🔒 Our Privacy Promise</h2>
          <div className="text-[#8899a6] leading-relaxed space-y-3">
            <p>
              Every password is generated using your browser's built-in{" "}
              <code className="text-[#00d4aa] bg-[#0f1419] px-1 rounded">crypto.getRandomValues()</code>{" "}
              API — the same technology used by professional security tools. This means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>No passwords are ever sent to any server</li>
              <li>No account required to use any feature</li>
              <li>Password history is stored only in your browser's local storage</li>
              <li>The site works offline once loaded</li>
            </ul>
            <p className="text-sm">
              For full details, please read our{" "}
              <a href="/privacy" className="text-[#00d4aa] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Maintained & Updated */}
        <div className="bg-[#1a2332] rounded-xl p-8 border border-[#2f3640]">
          <h2 className="text-xl font-semibold text-white mb-4">🔄 Actively Maintained</h2>
          <div className="text-[#8899a6] leading-relaxed space-y-3">
            <p>
              This site is actively maintained and updated to reflect best practices in password
              security, respond to changes in the threat landscape, and improve usability. Our{" "}
              <a href="/blog" className="text-[#00d4aa] hover:underline">
                security blog
              </a>{" "}
              is regularly updated with practical guides on topics like password managers,
              two-factor authentication, phishing defense, and more.
            </p>
            <p>
              We take security seriously — if you notice something that could be improved or have
              feedback on our tools, we'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#1a1040] rounded-xl p-8 border border-[#4f46e5]/30">
          <h2 className="text-xl font-semibold text-white mb-3">📬 Get in Touch</h2>
          <p className="text-[#8899a6] mb-4">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#4f46e5] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#4338ca] transition-colors"
          >
            Contact Us →
          </a>
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
