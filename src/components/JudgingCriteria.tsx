"use client";

const criteria = [
  {
    category: "UI/UX Design",
    marks: 15,
    total: 50,
    color: "var(--primary)",
    icon: "🎨",
    aspects: [
      "Visual hierarchy and layout consistency",
      "Color palette, typography, and spacing",
      "Micro-animations and interactive polish",
      "Responsiveness across screen sizes",
    ],
  },
  {
    category: "Functionality",
    marks: 15,
    total: 50,
    color: "var(--secondary)",
    icon: "⚙️",
    aspects: [
      "All required features working correctly",
      "Interactive elements (filters, selectors, toggles) are functional",
      "No broken links or console errors",
      "Bonus features / creativity spike implemented",
    ],
  },
  {
    category: "Code Quality",
    marks: 10,
    total: 50,
    color: "var(--tertiary)",
    icon: "💻",
    aspects: [
      "Clean, readable, and well-organized code",
      "Proper component/file structure",
      "Meaningful variable/class names",
      "Avoidance of redundant or bloated code",
    ],
  },
  {
    category: "Responsiveness",
    marks: 5,
    total: 50,
    color: "#FFA500",
    icon: "📱",
    aspects: [
      "Works on mobile, tablet, and desktop",
      "No horizontal overflow or layout breaking",
      "Touch-friendly interactive elements",
    ],
  },
  {
    category: "Creativity & Wow Factor",
    marks: 5,
    total: 50,
    color: "#FF4D6D",
    icon: "✨",
    aspects: [
      "Unique design choices beyond the requirements",
      "Easter eggs or delightful interactions",
      "Standout visual identity",
    ],
  },
];

export default function JudgingCriteria() {
  return (
    <section
      id="judging"
      style={{
        padding: "80px 40px",
        background: "var(--bg)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-tag-purple section-tag">🏆 Judging Criteria</div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              color: "var(--on-surface)",
              marginBottom: "12px",
            }}
          >
            How We{"'"}ll Score You
          </h2>
          <p
            style={{
              color: "var(--on-surface-muted)",
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            Total of{" "}
            <span
              className="font-display"
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              50 Marks
            </span>{" "}
            evaluated across 5 categories by our panel of judges.
          </p>
        </div>

        {/* Score breakdown grid */}
        <div
          className="fade-in-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {criteria.map((c) => {
            const pct = (c.marks / c.total) * 100;

            return (
              <div
                key={c.category}
                style={{
                  background: "rgba(19, 19, 25, 0.8)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "28px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = c.color + "44";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${c.color}18`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        color: "var(--on-surface)",
                      }}
                    >
                      {c.category}
                    </span>
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: c.color,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {c.marks}
                    <span style={{ fontSize: "0.9rem", color: "var(--on-surface-muted)", fontWeight: "400" }}>
                      /{c.total}
                    </span>
                  </div>
                </div>

                {/* Score bar */}
                <div className="score-bar-track" style={{ marginBottom: "16px" }}>
                  <div
                    className="score-bar-fill"
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, ${c.color}cc, ${c.color})`,
                    }}
                  />
                </div>

                {/* Aspects */}
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  {c.aspects.map((a, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--on-surface-muted)",
                        display: "flex",
                        gap: "8px",
                        paddingBottom: "6px",
                        lineHeight: "1.5",
                      }}
                    >
                      <span style={{ color: c.color, flexShrink: 0, fontSize: "0.7rem", marginTop: "3px" }}>
                        ▸
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Summary banner */}
        <div
          className="fade-in-up glass-purple"
          style={{
            borderRadius: "16px",
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div
              className="font-display"
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "var(--on-surface)",
                marginBottom: "4px",
              }}
            >
              🎯 Judging is Holistic — Not Just Technical
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--on-surface-muted)",
                lineHeight: "1.6",
                maxWidth: "560px",
              }}
            >
              Judges will evaluate the{" "}
              <span style={{ color: "var(--primary)" }}>overall experience</span> of your submission — how it looks, how it works, and how creative you've been within the 3-hour constraint.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <div
              className="font-display"
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1",
              }}
            >
              50
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--on-surface-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Total Marks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
