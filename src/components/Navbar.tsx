"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TerminalSquare, Bug, ShieldAlert } from "lucide-react";

interface NavbarProps {
  onRulesClick: () => void;
}

export default function Navbar({ onRulesClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        padding: "0 40px",
        transition: "all 0.3s ease",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
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
            <Bug size={20} color="#0A0A0F" />
          </div>
          <span
            className="font-display"
            style={{
              fontSize: "1.05rem",
              fontWeight: "600",
              color: "var(--on-surface)",
              letterSpacing: "-0.01em",
            }}
          >
            Bug Bounty
          </span>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <button
            id="nav-rules-btn"
            onClick={onRulesClick}
            className="btn-secondary"
            style={{ padding: "8px 20px", fontSize: "0.875rem" }}
          >
            Rules
          </button>

          <Link
            href="/activity"
            className="btn-primary"
            style={{ padding: "9px 22px", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
          >
            <TerminalSquare size={16} /> Terminal
          </Link>
        </div>
      </div>
    </nav>
  );
}
