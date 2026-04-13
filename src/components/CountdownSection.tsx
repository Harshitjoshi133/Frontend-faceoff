"use client";

import { useState, useEffect } from "react";

export default function CountdownSection() {
  const [phase, setPhase] = useState("Event will start in");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Event Date: 13-04-2026 12:00 to 02:30 (14:30)
    const startTime = new Date(2026, 3, 12, 12, 0, 0); // 13th April 2026, 12:00
    const endTime = new Date(2026, 3, 13, 14, 30, 0);   // 13th April 2026, 14:30

    const tick = () => {
      const now = new Date();

      if (now < startTime) {
        setPhase("Event will start in");
        const diff = startTime.getTime() - now.getTime();
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24) + (Math.floor(diff / (1000 * 60 * 60 * 24)) * 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else if (now >= startTime && now < endTime) {
        setPhase("Event will end in");
        const diff = endTime.getTime() - now.getTime();
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setPhase("Competition Ended");
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "var(--surface-low)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(0, 251, 251, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="fade-in-up"
      >
        <div className="section-tag-purple section-tag glass" style={{ marginBottom: "16px", border: "1px solid rgba(188, 19, 254, 0.3)" }}>
          ⏳ Access Denied... Decrypting
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: "700",
            marginBottom: "48px",
            letterSpacing: "-0.02em",
            color: "var(--on-surface)",
          }}
        >
          {phase}
        </h2>

        {/* Countdown cards */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {units.map((unit) => (
            <div key={unit.label} className="countdown-card glass" style={{
              background: "rgba(19, 19, 25, 0.8)",
              border: "1px solid rgba(0, 251, 251, 0.2)",
              boxShadow: "0 0 30px rgba(0, 251, 251, 0.05) inset",
            }}>
              <div className="countdown-number gradient-text" style={{
                backgroundImage: "linear-gradient(to bottom, #fff, var(--secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>{pad(unit.value)}</div>
              <div className="countdown-label" style={{ color: "var(--secondary)" }}>{unit.label}</div>
            </div>
          ))}
        </div>

        {/* TBA notice */}
        <div
          className="glass hover-glow"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 24px",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--primary)",
              display: "inline-block",
              boxShadow: "0 0 10px var(--primary)",
            }}
          />
          <span
            style={{
              fontSize: "0.85rem",
              color: "var(--on-surface-muted)",
              fontWeight: "500",
            }}
          >
            📅 Date: 13-04-2026 / 12:00 PM to 02:30 PM (DB Format)
          </span>
        </div>
      </div>
    </section>
  );
}
