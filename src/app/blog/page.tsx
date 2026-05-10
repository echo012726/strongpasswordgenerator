import type { Metadata } from "next";
import posts from "@/posts/index.json";

export const metadata: Metadata = {
  title: "Security Blog | Strong Password Generator",
  description: "Practical guides on password security, account protection, phishing prevention, and online safety. Written for real people who want to stay safe online.",
};

const categoryColors: Record<string, string> = {
  "Password Security": "#4f46e5",
  "Account Security": "#0891b2",
  "Threats & Attacks": "#dc2626",
  "Financial Security": "#059669",
  "Network Security": "#7c3aed",
  "Developer Security": "#b45309",
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f1419",
      color: "#f8fafc",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <header style={{ background: "#1a2332", borderBottom: "1px solid #2f3640", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ color: "#00d4aa", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}>
            🔐 Strong Password Generator
          </a>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={{ color: "#8899a6", textDecoration: "none", fontSize: "0.9rem" }}>Generator</a>
            <a href="/blog" style={{ color: "#00d4aa", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>Blog</a>
            <a href="/recommended-tools" style={{ color: "#8899a6", textDecoration: "none", fontSize: "0.9rem" }}>Tools</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Security Blog</h1>
        <p style={{ color: "#8899a6", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
          Practical guides to keep your accounts, passwords, and personal data safe online.
        </p>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          {sorted.map((post) => {
            const color = categoryColors[post.category] || "#4f46e5";
            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  display: "block",
                  background: "#1a2332",
                  border: "1px solid #2f3640",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
                  <span style={{
                    background: color + "22",
                    color: color,
                    border: `1px solid ${color}44`,
                    borderRadius: "20px",
                    padding: "2px 10px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}>{post.category}</span>
                  <span style={{ color: "#4a5568", fontSize: "0.8rem" }}>{post.readingTime} read</span>
                  <span style={{ color: "#4a5568", fontSize: "0.8rem" }}>
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem", color: "#f8fafc" }}>
                  {post.title}
                </h2>
                <p style={{ color: "#8899a6", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  {post.excerpt}
                </p>
                <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} style={{
                      background: "#0f1419",
                      color: "#6b7280",
                      border: "1px solid #2f3640",
                      borderRadius: "20px",
                      padding: "2px 8px",
                      fontSize: "0.72rem",
                    }}>#{tag}</span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #2f3640", padding: "1.5rem", textAlign: "center", color: "#4a5568", fontSize: "0.8rem", marginTop: "3rem" }}>
        <a href="/" style={{ color: "#00d4aa", textDecoration: "none" }}>← Back to Password Generator</a>
        {" · "}
        <a href="/recommended-tools" style={{ color: "#6366f1", textDecoration: "none" }}>Recommended Tools</a>
      </footer>
    </div>
  );
}
