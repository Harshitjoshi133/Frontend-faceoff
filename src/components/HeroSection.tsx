"use client";

interface HeroSectionProps {
  onRulesClick: () => void;
}

export default function HeroSection({ onRulesClick }: HeroSectionProps) {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 40px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        className="glow-orb glow-orb-purple animate-pulse-glow"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-150px",
        }}
      />
      <div
        className="glow-orb glow-orb-cyan animate-pulse-glow"
        style={{
          width: "400px",
          height: "400px",
          top: "100px",
          right: "-100px",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="glow-orb glow-orb-purple"
        style={{
          width: "300px",
          height: "300px",
          bottom: "50px",
          left: "30%",
          opacity: 0.3,
          filter: "blur(100px)",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(188, 19, 254, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(188, 19, 254, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Top badge */}
        <div style={{ marginBottom: "24px" }}>
          <span className="section-tag">
            🎓 Coding Club · Birla Institute of Applied Sciences
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: "700",
            letterSpacing: "-0.03em",
            lineHeight: "1.0",
            marginBottom: "24px",
          }}
        >
          <span className="gradient-text">Frontend</span>
          <br />
          <span style={{ color: "var(--on-surface)" }}>Faceoff</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "var(--on-surface-muted)",
            maxWidth: "600px",
            margin: "0 auto 16px",
            lineHeight: "1.6",
            fontWeight: "400",
          }}
        >
          A team-based frontend development competition where creativity meets
          code — design and build stunning web interfaces in a{" "}
          <span style={{ color: "var(--primary)", fontWeight: "600" }}>
            3-hour sprint
          </span>
          .
        </p>

        {/* Venue badge */}
        <div style={{ marginBottom: "48px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.9rem",
              color: "var(--secondary)",
              fontWeight: "500",
            }}
          >
            <span>📍</span>
            NASSCOM Lab
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
        >
          <a
            id="hero-register-btn"
            href="https://forms.gle/zKiP3hgJ1E7oX3Gz6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1.05rem" }}
          >
            🚀 Register Your Team
          </a>
          <button
            id="hero-rules-btn"
            onClick={onRulesClick}
            className="btn-secondary"
            style={{ fontSize: "1.05rem" }}
          >
            📋 View Rules
          </button>
        </div>

        {/* Registration URL */}
        <div
          className="glass"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 24px",
            borderRadius: "12px",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--on-surface-muted)" }}>
            Registration Form:
          </span>
          <a
            href="https://forms.gle/zKiP3hgJ1E7oX3Gz6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.85rem",
              color: "var(--primary)",
              fontWeight: "500",
              textDecoration: "none",
              fontFamily: "monospace",
            }}
          >
            forms.gle/zKiP3hgJ1E7oX3Gz6
          </a>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: "64px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.5,
          }}
          className="animate-float"
        >
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--on-surface-muted)", textTransform: "uppercase" }}>
            Scroll to explore
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--on-surface-muted)" }}>
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
