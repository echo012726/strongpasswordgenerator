import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";
import posts from "@/posts/index.json";

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  content: string;
}

function getPost(slug: string): Post | null {
  try {
    const filePath = join(process.cwd(), "src/posts", `${slug}.json`);
    const raw = readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as Post;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Strong Password Generator`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://strongpasswordgenerator.dev/blog/${post.slug}`,
    },
  };
}

const categoryColors: Record<string, string> = {
  "Password Security": "#4f46e5",
  "Account Security": "#0891b2",
  "Threats & Attacks": "#dc2626",
  "Financial Security": "#059669",
  "Network Security": "#7c3aed",
  "Developer Security": "#b45309",
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const color = categoryColors[post.category] || "#4f46e5";
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);
  const otherPosts = posts
    .filter((p) => p.slug !== slug && p.category !== post.category)
    .slice(0, 3 - related.length);
  const suggestedPosts = [...related, ...otherPosts].slice(0, 3);

  void currentIndex;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f1419",
      color: "#f8fafc",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <header style={{ background: "#1a2332", borderBottom: "1px solid #2f3640", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ color: "#00d4aa", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}>
            🔐 Strong Password Generator
          </a>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={{ color: "#8899a6", textDecoration: "none", fontSize: "0.9rem" }}>Generator</a>
            <a href="/blog" style={{ color: "#8899a6", textDecoration: "none", fontSize: "0.9rem" }}>Blog</a>
            <a href="/recommended-tools" style={{ color: "#8899a6", textDecoration: "none", fontSize: "0.9rem" }}>Tools</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <a href="/blog" style={{ color: "#6366f1", textDecoration: "none", fontSize: "0.9rem" }}>← All Articles</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          <span style={{
            background: color + "22",
            color: color,
            border: `1px solid ${color}44`,
            borderRadius: "20px",
            padding: "3px 12px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}>{post.category}</span>
          <span style={{ color: "#4a5568", fontSize: "0.85rem" }}>{post.readingTime} read</span>
          <span style={{ color: "#4a5568", fontSize: "0.85rem" }}>{formattedDate}</span>
        </div>

        <h1 style={{ fontSize: "1.9rem", fontWeight: 700, lineHeight: 1.25, marginBottom: "1rem", color: "#f8fafc" }}>
          {post.title}
        </h1>

        <p style={{ color: "#8899a6", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2rem", borderLeft: "3px solid #2f3640", paddingLeft: "1rem" }}>
          {post.excerpt}
        </p>

        <article
          style={{ lineHeight: 1.75, fontSize: "1rem", color: "#cbd5e1" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <style>{`
          article h2 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #f1f5f9;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            padding-bottom: 0.4rem;
            border-bottom: 1px solid #1e293b;
          }
          article p { margin-bottom: 1rem; }
          article ul, article ol {
            margin-bottom: 1rem;
            padding-left: 1.5rem;
          }
          article li { margin-bottom: 0.4rem; }
          article strong { color: #f1f5f9; }
          article a { color: #818cf8; text-decoration: none; }
          article a:hover { text-decoration: underline; }
          article code {
            background: #1e293b;
            color: #00d4aa;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9em;
          }
          article em { color: #94a3b8; font-style: italic; }
        `}</style>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #2f3640" }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{
              background: "#1a2332",
              color: "#6b7280",
              border: "1px solid #2f3640",
              borderRadius: "20px",
              padding: "3px 10px",
              fontSize: "0.8rem",
            }}>#{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: "2rem", background: "#1a1040", border: "1px solid #4f46e544", borderRadius: "12px", padding: "1.5rem" }}>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem", color: "#c7d2fe" }}>Store Your Passwords Safely</h3>
          <p style={{ color: "#8899a6", fontSize: "0.9rem", margin: "0 0 1rem" }}>
            Use a password manager to generate and store unique passwords for every account. See our top picks.
          </p>
          <a href="/recommended-tools" style={{
            display: "inline-block",
            background: "#4f46e5",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 600,
          }}>View Recommended Tools →</a>
        </div>

        {suggestedPosts.length > 0 && (
          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem", color: "#cbd5e1" }}>More Security Guides</h3>
            <div style={{ display: "grid", gap: "1rem" }}>
              {suggestedPosts.map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} style={{
                  display: "block",
                  background: "#1a2332",
                  border: "1px solid #2f3640",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  color: "inherit",
                }}>
                  <div style={{ fontSize: "0.75rem", color: "#4a5568", marginBottom: "0.3rem" }}>{p.category} · {p.readingTime} read</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#f1f5f9" }}>{p.title}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer style={{ borderTop: "1px solid #2f3640", padding: "1.5rem", textAlign: "center", color: "#4a5568", fontSize: "0.8rem", marginTop: "3rem" }}>
        <a href="/" style={{ color: "#00d4aa", textDecoration: "none" }}>← Back to Password Generator</a>
        {" · "}
        <a href="/blog" style={{ color: "#6366f1", textDecoration: "none" }}>All Articles</a>
        {" · "}
        <a href="/recommended-tools" style={{ color: "#6366f1", textDecoration: "none" }}>Recommended Tools</a>
      </footer>
    </div>
  );
}
