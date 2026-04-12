"use client";

import { useState, useEffect } from "react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date — TBA defaults to 30 days from now as placeholder
    const target = new Date();
    target.setDate(target.getDate() + 30);
    target.setHours(10, 0, 0, 0);

    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "Days", value: timeLeft.days },
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
          background: "radial-gradient(ellipse, rgba(188, 19, 254, 0.08) 0%, transparent 70%)",
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
        <div className="section-tag-purple section-tag" style={{ marginBottom: "16px" }}>
          ⏳ Competition Countdown
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
          Competition Begins In
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
            <div key={unit.label} className="countdown-card">
              <div className="countdown-number">{pad(unit.value)}</div>
              <div className="countdown-label">{unit.label}</div>
            </div>
          ))}
        </div>

        {/* TBA notice */}
        <div
          className="glass"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 24px",
            borderRadius: "100px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--tertiary)",
              display: "inline-block",
              boxShadow: "0 0 10px var(--tertiary)",
            }}
          />
          <span
            style={{
              fontSize: "0.85rem",
              color: "var(--on-surface-muted)",
              fontWeight: "500",
            }}
          >
            📅 Date: To Be Announced — Countdown is illustrative
          </span>
        </div>
      </div>
    </section>
  );
}
