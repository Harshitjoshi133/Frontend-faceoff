"use client";

export default function ChallengeSection() {
  return (
    <section
      id="mission-briefing"
      style={{
        padding: "80px 40px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* Background Orbs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(188, 19, 254, 0.15) 0%, transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 251, 251, 0.15) 0%, transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          animationDelay: "2s"
        }}
      />

      <div style={{ maxWidth: "1000px", width: "100%", zIndex: 1 }} className="fade-in-up">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag section-tag-purple glass" style={{ marginBottom: "20px", display: "inline-block", border: "1px solid rgba(188, 19, 254, 0.3)" }}>
            📂 Confidential Briefing
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "var(--on-surface)",
              marginBottom: "16px",
              letterSpacing: "-0.02em"
            }}
          >
            The Fiftyville Mystery
          </h2>
          <p style={{ color: "var(--on-surface-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            The CS50 Duck has been stolen! The town authorities are counting on your database skills.
          </p>
        </div>

        {/* Main Content Card */}
        <div 
          className="glass hover-glow"
          style={{
            background: "rgba(19, 19, 25, 0.7)",
            border: "1px solid rgba(0, 251, 251, 0.2)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(0, 251, 251, 0.05)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Top border highlight */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
            background: "linear-gradient(90deg, var(--secondary), transparent, var(--primary))"
          }} />

          <p style={{ color: "var(--on-surface)", fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "32px", fontWeight: "400" }}>
            The town of Fiftyville has called upon you to solve the mystery of the stolen duck. Authorities believe that the thief stole the duck and then, shortly afterwards, took a flight out of town with the help of an accomplice. Your goal is to identify:
          </p>

          {/* Objectives */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "40px"
          }}>
            {[
              { icon: "👤", text: "Who the thief is" },
              { icon: "🏙️", text: "What city the thief escaped to" },
              { icon: "🤝", text: "Who the thief's accomplice is" }
            ].map((goal, idx) => (
              <div key={idx} style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                padding: "20px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                transition: "all 0.3s ease"
              }}>
                <span style={{ fontSize: "1.8rem", textShadow: "0 0 10px rgba(255,255,255,0.3)" }}>{goal.icon}</span>
                <span style={{ color: "var(--on-surface)", fontWeight: "500", fontSize: "1.05rem" }}>{goal.text}</span>
              </div>
            ))}
          </div>

          {/* Intel & Resources */}
          <div style={{
            background: "rgba(188, 19, 254, 0.08)",
            border: "1px solid rgba(188, 19, 254, 0.3)",
            borderRadius: "16px",
            padding: "28px",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Edge line */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "var(--primary)" }} />

            <h3 style={{ color: "var(--on-surface)", fontSize: "1.2rem", fontWeight: "600", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ textShadow: "0 0 10px rgba(255,255,255,0.3)" }}>🔍</span> Known Intel & Resources
            </h3>
            
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", gap: "16px", alignItems: "flex-start", color: "var(--on-surface-muted)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--primary)", marginTop: "2px" }}>◆</span>
                <span><strong>Incident Date & Location:</strong> The theft took place on July 28, 2025, on Humphrey Street.</span>
              </li>
              <li style={{ display: "flex", gap: "16px", alignItems: "flex-start", color: "var(--on-surface-muted)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--primary)", marginTop: "2px" }}>◆</span>
                <span><strong>Database:</strong> <code style={{ color: "var(--secondary)", background: "rgba(0, 251, 251, 0.15)", border: "1px solid rgba(0, 251, 251, 0.3)", padding: "4px 8px", borderRadius: "6px", fontSize: "0.9rem" }}>fiftyville.db</code> is prepared for you, containing tables of data from around the town.</span>
              </li>
              <li style={{ display: "flex", gap: "16px", alignItems: "flex-start", color: "var(--on-surface-muted)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--primary)", marginTop: "2px" }}>◆</span>
                <span><strong>Operation:</strong> Use SQL <code style={{ color: "var(--primary)", background: "rgba(188, 19, 254, 0.15)", border: "1px solid rgba(188, 19, 254, 0.3)", padding: "4px 8px", borderRadius: "6px", fontSize: "0.9rem" }}>SELECT</code> queries to access the data of interest. Your task is to solve the mystery using just the information in this database.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
