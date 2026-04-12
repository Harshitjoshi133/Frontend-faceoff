"use client";

import { useEffect } from "react";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const rules = [
  {
    title: "Team Composition",
    detail:
      "Each team must have between 3 and 5 members. All members must be registered students of BIAS. Solo or 2-person teams will not be accepted.",
  },
  {
    title: "Problem Statement Selection",
    detail:
      "Teams must choose exactly ONE problem statement at the start of the event. Switching problem statements mid-competition is not allowed.",
  },
  {
    title: "Time Limit",
    detail:
      "The competition runs for exactly 3 hours. Work submitted after the deadline will not be evaluated. Manage your time wisely.",
  },
  {
    title: "Technology Restrictions",
    detail:
      "Participants may use any HTML, CSS, and JavaScript technologies including frameworks (React, Vue, etc.). AI code generation tools (GitHub Copilot, ChatGPT for code) are NOT permitted.",
  },
  {
    title: "Asset Usage",
    detail:
      "Free stock images, icon libraries (e.g., Font Awesome, Heroicons), and Google Fonts are allowed. Paid assets or code copied from external sources without attribution will result in disqualification.",
  },
  {
    title: "Submission Format",
    detail:
      "Teams must submit a GitHub repository link containing all project files. The repository must include a README with setup instructions. Judges must be able to open the project in a browser within 5 minutes.",
  },
  {
    title: "Code of Conduct",
    detail:
      "All participants are expected to maintain respectful conduct throughout the event. Any form of plagiarism, sabotage, or disruptive behavior will result in immediate disqualification.",
  },
  {
    title: "Judging & Final Decision",
    detail:
      "The judges' scores are final. Disputes must be raised with the organizing team during the grace period before scores are announced. No appeals will be accepted after the announcement.",
  },
  {
    title: "Venue Rules",
    detail:
      "Participants must remain in the NASSCOM Lab during competition hours. Food and beverages are allowed at the designated area. Please keep the workspace clean.",
  },
  {
    title: "Device & Connectivity",
    detail:
      "Each team is responsible for their own laptops and equipment. The venue will provide Wi-Fi. Power strips will be available — bring your own charging cables.",
  },
];

export default function RulesModal({ isOpen, onClose }: RulesModalProps) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-content">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <div>
            <div className="section-tag" style={{ marginBottom: "12px" }}>
              📋 Official Rules
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "var(--on-surface)",
                letterSpacing: "-0.02em",
              }}
            >
              Rules & Guidelines
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--on-surface-muted)", marginTop: "8px" }}>
              Frontend Faceoff — BIAS Coding Club
            </p>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Close rules modal"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--on-surface-muted)",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1rem",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "var(--on-surface)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.color = "var(--on-surface-muted)";
            }}
          >
            ✕
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, var(--primary-dim), var(--secondary-dim))",
            marginBottom: "28px",
            opacity: 0.5,
          }}
        />

        {/* Rules list */}
        <div>
          {rules.map((rule, i) => (
            <div key={i} className="rule-item">
              <div className="rule-number">{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: "var(--on-surface)",
                    marginBottom: "6px",
                  }}
                >
                  {rule.title}
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--on-surface-muted)",
                    lineHeight: "1.65",
                  }}
                >
                  {rule.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            background: "rgba(188, 19, 254, 0.08)",
            border: "1px solid rgba(188, 19, 254, 0.2)",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "var(--on-surface-muted)", lineHeight: "1.6" }}>
            By registering, all team members acknowledge and agree to these rules.
            For questions, contact the Coding Club committee.
          </p>
        </div>
      </div>
    </div>
  );
}
