"use client";

const infoCards = [
  {
    icon: "👥",
    title: "Team Size",
    value: "3–5 Members",
    sub: "Per registered team",
    color: "var(--primary)",
    glow: "rgba(188, 19, 254, 0.15)",
    border: "rgba(188, 19, 254, 0.25)",
  },
  {
    icon: "⏱",
    title: "Duration",
    value: "3 Hours",
    sub: "Non-stop sprint",
    color: "var(--secondary)",
    glow: "rgba(0, 251, 251, 0.15)",
    border: "rgba(0, 251, 251, 0.25)",
  },
  {
    icon: "📍",
    title: "Venue",
    value: "NASSCOM Lab",
    sub: "On-campus, BIAS",
    color: "var(--tertiary)",
    glow: "rgba(255, 89, 227, 0.15)",
    border: "rgba(255, 89, 227, 0.25)",
  },
  {
    icon: "📅",
    title: "Event Date",
    value: "TBA",
    sub: "Stay tuned for announcement",
    color: "var(--primary)",
    glow: "rgba(188, 19, 254, 0.15)",
    border: "rgba(188, 19, 254, 0.25)",
  },
];

export default function EventInfoCards() {
  return (
    <section
      style={{
        padding: "80px 40px",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-tag">🏁 Event Overview</div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              color: "var(--on-surface)",
            }}
          >
            Everything You Need to Know
          </h2>
        </div>

        <div
          className="fade-in-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {infoCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "rgba(25, 25, 31, 0.8)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${card.border}`,
                borderRadius: "16px",
                padding: "32px 28px",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
                boxShadow: `0 0 30px ${card.glow}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 60px ${card.glow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${card.glow}`;
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                {card.icon}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--on-surface-muted)",
                  marginBottom: "8px",
                  fontWeight: "600",
                }}
              >
                {card.title}
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: card.color,
                  letterSpacing: "-0.01em",
                  marginBottom: "6px",
                }}
              >
                {card.value}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--on-surface-muted)",
                  fontWeight: "400",
                }}
              >
                {card.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
