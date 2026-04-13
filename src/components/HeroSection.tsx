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
        <div className="animate-float" style={{ marginBottom: "32px", display: "inline-block" }}>
          <span className="glass" style={{
            padding: "10px 24px",
            borderRadius: "100px",
            color: "var(--on-surface)",
            border: "1px solid rgba(0, 251, 251, 0.3)",
            boxShadow: "0 0 20px rgba(0, 251, 251, 0.15)",
            backdropFilter: "blur(12px)",
            fontWeight: "600",
            fontSize: "0.9rem",
            letterSpacing: "0.05em"
          }}>
            🕵️‍♂️ The Mystery Unfolds
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            lineHeight: "1.05",
            marginBottom: "32px",
            textShadow: "0 0 40px rgba(188, 19, 254, 0.3)"
          }}
        >
          <span className="gradient-text" style={{ backgroundImage: "linear-gradient(135deg, #00FBFB, #BC13FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bug Bounty</span>
        </h1>

        {/* Subtitle */}
        <div
          className="glass hover-glow"
          style={{
            padding: "24px 32px",
            borderRadius: "24px",
            background: "rgba(19, 19, 25, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(188, 19, 254, 0.1)",
            maxWidth: "680px",
            margin: "0 auto 32px",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease"
          }}
        >
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--secondary), var(--primary), transparent)"
          }} />
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "var(--on-surface-muted)",
              lineHeight: "1.7",
              fontWeight: "400",
              margin: 0
            }}
          >
            ...where they solve the <span style={{ color: "var(--secondary)", fontWeight: "600", textShadow: "0 0 15px var(--secondary)" }}>Mystery</span> using the Power of <span style={{ color: "var(--primary)", fontWeight: "800", letterSpacing: "1px", textShadow: "0 0 20px var(--primary)" }}>DB</span>.
          </p>
        </div>

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
          <button
            id="hero-rules-btn"
            onClick={onRulesClick}
            className="btn-secondary glass"
            style={{ 
              fontSize: "1.05rem",
              background: "rgba(0, 251, 251, 0.1)",
              border: "1px solid rgba(0, 251, 251, 0.3)",
              boxShadow: "0 0 20px rgba(0, 251, 251, 0.1)"
            }}
          >
            📋 View Rules
          </button>
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
