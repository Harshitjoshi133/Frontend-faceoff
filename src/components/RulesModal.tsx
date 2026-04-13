"use client";

import { useEffect } from "react";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const rules = [
  {
    title: "Mission Objective",
    detail:
      "Your sole objective is to query the provided fiftyville.db to answer three questions: Who the thief is, What city the thief escaped to, and Who the accomplice is.",
  },
  {
    title: "Team Composition",
    detail:
      "Each detective squad must have between 3 and 5 members. All members must be registered students of BIAS.",
  },
  {
    title: "Time Limit",
    detail:
      "The Bug Bounty investigation runs for 2.5 hours (12:00 PM to 02:30 PM). Logs submitted after the deadline will not be evaluated.",
  },
  {
    title: "Operation Protocol",
    detail:
      "Participants must use the secure Neon DB Terminal on the Activity Page to run standard SQL SELECT queries. DESTRUCTIVE operations (INSERT, UPDATE, DELETE) or attempting to drop tables will result in immediate disqualification.",
  },
  {
    title: "AI Tools & Assistance",
    detail:
      "You must rely on your team's SQL expertise and deductive reasoning. The use of AI code assistants (ChatGPT, Copilot, Claude) to write queries is strictly prohibited.",
  },
  {
    title: "Submission Format",
    detail:
      "At the end of the time limit, teams must submit their three final answers AND a log of the exact SQL queries used to deduce them. Without query proof, answers will be discarded.",
  },
  {
    title: "Code of Conduct",
    detail:
      "All participants are expected to maintain respectful conduct. Sabotaging another team's queries, sharing answers, or disruptive behavior will result in disqualification.",
  },
  {
    title: "Judging Criteria",
    detail:
      "Evaluation is based on: 1. Correctness of answers, 2. Efficiency and logic of the SQL queries used (e.g. using proper JOINs). Ties will be broken by submission time.",
  },
  {
    title: "Venue Rules",
    detail:
      "Participants must remain in the NASSCOM Lab during the investigation. Keep the workspace clean and adhere to all facility guidelines.",
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
              Bug Bounty — BIAS Coding Club
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
