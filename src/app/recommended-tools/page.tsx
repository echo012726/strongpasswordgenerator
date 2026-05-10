import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommended Security Tools | Strong Password Generator",
  description: "The best password managers, VPNs, and security tools to keep your accounts safe. Honest recommendations from a security-focused team.",
};

const tools = [
  {
    category: "Password Managers",
    description: "The single best thing you can do for your security. Stop reusing passwords — let a manager generate and store unique ones for every site.",
    items: [
      {
        name: "NordPass",
        tagline: "Best overall password manager",
        description: "Clean interface, zero-knowledge encryption, and a generous free tier. NordPass uses XChaCha20 encryption — more modern than the AES-256 used by most competitors.",
        features: ["Zero-knowledge architecture", "Biometric unlock", "Data breach scanner", "Secure sharing"],
        cta: "Try NordPass Free",
        // TODO: Replace with your NordPass affiliate link after Impact Radius approval
        // Sign up at: https://app.impact.com → search "NordPass"
        url: "https://nordpass.com",
        badge: "Most Recommended",
        badgeColor: "#4f46e5",
      },
      {
        name: "1Password",
        tagline: "Best for teams & families",
        description: "The gold standard for business use. 1Password's Travel Mode lets you hide sensitive vaults when crossing borders — a unique feature no other manager offers.",
        features: ["Travel Mode", "Watchtower breach alerts", "Family sharing (5 accounts)", "CLI & developer tools"],
        cta: "Start 14-day trial",
        // TODO: Replace with your 1Password affiliate link after Impact Radius approval
        url: "https://1password.com",
        badge: null,
        badgeColor: null,
      },
    ],
  },
  {
    category: "VPN & Privacy",
    description: "A VPN encrypts your internet connection and hides your IP address — essential on public Wi-Fi and for maintaining privacy online.",
    items: [
      {
        name: "NordVPN",
        tagline: "Fastest VPN with the best privacy record",
        description: "6,000+ servers in 111 countries, independently audited no-logs policy, and Threat Protection that blocks malware without even connecting to the VPN.",
        features: ["6,000+ servers", "Threat Protection (blocks malware)", "Double VPN", "No-logs audited"],
        cta: "Get NordVPN",
        // TODO: Replace with your NordVPN affiliate link after applying at affiliates.nordvpn.com
        url: "https://nordvpn.com",
        badge: "Best Value",
        badgeColor: "#059669",
      },
    ],
  },
  {
    category: "Antivirus & Device Security",
    description: "A strong password is only one layer. Antivirus protects against malware that could steal your credentials even before you type them.",
    items: [
      {
        name: "Bitdefender Total Security",
        tagline: "Best antivirus with minimal performance impact",
        description: "Consistently top-ranked by AV-TEST with near-zero performance overhead. Covers up to 5 devices and includes a VPN, parental controls, and anti-theft tools.",
        features: ["Real-time protection", "Ransomware remediation", "VPN included (200MB/day free)", "5 device licenses"],
        cta: "Get Bitdefender",
        // TODO: Replace with your Bitdefender affiliate link (Commission Junction / Impact)
        url: "https://bitdefender.com",
        badge: null,
        badgeColor: null,
      },
    ],
  },
];

const disclaimer = "This page contains affiliate links. If you purchase through these links, we may earn a commission at no extra cost to you. We only recommend tools we'd use ourselves.";

export default function RecommendedTools() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      color: "#f8fafc",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "0",
    }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        <div style={{ marginBottom: "1rem" }}>
          <a href="/" style={{ color: "#818cf8", fontSize: "0.9rem", textDecoration: "none" }}>← Back to Password Generator</a>
        </div>

        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Recommended Security Tools
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "2rem", fontSize: "1.05rem", maxWidth: "600px" }}>
          You generated a strong password — now make sure it&apos;s stored safely. These are the tools we actually use and recommend.
        </p>

        <div style={{
          background: "rgba(79,70,229,0.1)",
          border: "1px solid rgba(79,70,229,0.3)",
          borderRadius: "8px",
          padding: "0.75rem 1rem",
          fontSize: "0.8rem",
          color: "#a5b4fc",
          marginBottom: "2.5rem",
        }}>
          {disclaimer}
        </div>

        {tools.map((section) => (
          <div key={section.category} style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#c7d2fe", marginBottom: "0.4rem" }}>
              {section.category}
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
              {section.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {section.items.map((tool) => (
                <div key={tool.name} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  position: "relative",
                }}>
                  {tool.badge && (
                    <div style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: tool.badgeColor || "#4f46e5",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "20px",
                      letterSpacing: "0.03em",
                    }}>
                      {tool.badge}
                    </div>
                  )}
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.2rem", color: "#f1f5f9" }}>
                    {tool.name}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#7c3aed", marginBottom: "0.75rem", fontWeight: 500 }}>
                    {tool.tagline}
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1rem", lineHeight: 1.6 }}>
                    {tool.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                    {tool.features.map((f) => (
                      <span key={f} style={{
                        background: "rgba(79,70,229,0.15)",
                        color: "#a5b4fc",
                        fontSize: "0.75rem",
                        padding: "3px 10px",
                        borderRadius: "20px",
                        border: "1px solid rgba(79,70,229,0.25)",
                      }}>
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener sponsored"
                    style={{
                      display: "inline-block",
                      background: "#4f46e5",
                      color: "#fff",
                      padding: "0.6rem 1.5rem",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    {tool.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "2rem 1.5rem",
          textAlign: "center",
          color: "#8899a6",
          fontSize: "0.8rem",
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginBottom: "0.75rem" }}>
            <a href="/" style={{ color: "#6366f1", textDecoration: "none" }}>Home</a>
            <a href="/about" style={{ color: "#8899a6", textDecoration: "none" }}>About</a>
            <a href="/contact" style={{ color: "#8899a6", textDecoration: "none" }}>Contact</a>
            <a href="/privacy" style={{ color: "#8899a6", textDecoration: "none" }}>Privacy Policy</a>
            <a href="/blog" style={{ color: "#8899a6", textDecoration: "none" }}>Blog</a>
          </div>
          <p style={{ margin: 0 }}>🔒 Your passwords are generated locally. Nothing is sent to any server.</p>
        </footer>
      </div>
    </div>
  );
}
