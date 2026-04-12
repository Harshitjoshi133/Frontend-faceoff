"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--surface-low)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #de8eff, #00fbfb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#0A0A0F",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                FF
              </div>
              <div>
                <div
                  className="font-display"
                  style={{ fontWeight: "700", fontSize: "1rem", color: "var(--on-surface)" }}
                >
                  Frontend Faceoff
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--on-surface-muted)" }}>
                  BIAS Coding Club
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--on-surface-muted)", lineHeight: "1.65" }}>
              A team-based frontend competition by the Coding Club of Birla Institute of Applied Sciences.
              Build. Create. Faceoff.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--primary)",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "About", id: "about" },
                { label: "Problem Statements", id: "problem-statements" },
                { label: "Judging Criteria", id: "judging" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--on-surface-muted)",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--on-surface)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--on-surface-muted)")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Register CTA */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--secondary)",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Register
            </div>
            <a
              href="https://forms.gle/zKiP3hgJ1E7oX3Gz6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-block", marginBottom: "12px" }}
            >
              🚀 Register Your Team
            </a>
            <div style={{ fontSize: "0.8rem", color: "var(--on-surface-muted)" }}>
              Team size: 3–5 members
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(188,19,254,0.3), rgba(0,251,251,0.3), transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--on-surface-muted)" }}>
            © {currentYear} Coding Club · Birla Institute of Applied Sciences. All rights reserved.
          </span>
          <span style={{ fontSize: "0.8rem", color: "var(--on-surface-muted)" }}>
            📍 NASSCOM Lab, BIAS Campus
          </span>
        </div>
      </div>
    </footer>
  );
}
