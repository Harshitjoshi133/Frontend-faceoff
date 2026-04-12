"use client";

import { useState } from "react";

const ps1MustHaves = [
  "Sidebar navigation with at least 3 sections",
  "At least 2 interactive charts (CSS/SVG placeholders accepted)",
  "A Transaction History table with functional filter (by Date or Amount)",
  "Wallet Balance card with glassmorphism effect",
  "Dark/Light Mode toggle (fully theme-switching)",
  "Responsive layout across mobile and desktop",
  "Working currency/percentage change indicators",
];

const ps2MustHaves = [
  "Immersive hero section with video or high-res image background",
  "Interactive Room Selector (clicking updates price + features dynamically)",
  "Floating sticky 'Book Now' button always visible",
  "Testimonial slider with at least 3 reviews",
  "Scroll-triggered animations (fade-in, slide-in on scroll)",
  "Responsive layout for all screen sizes",
  "Navigation with smooth scroll to sections",
];

interface PSCardProps {
  ps: "ps1" | "ps2";
  label: string;
  title: string;
  subtitle: string;
  concept: string;
  requirements: { heading: string; items: string[] }[];
  mustHaves: string[];
  creativity: string;
  accentColor: string;
  glowColor: string;
  borderClass: string;
  icon: string;
}

function PSCard({
  ps,
  label,
  title,
  subtitle,
  concept,
  requirements,
  mustHaves,
  creativity,
  accentColor,
  glowColor,
  icon,
}: PSCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "rgba(19, 19, 25, 0.9)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        border: `1px solid ${glowColor}`,
        borderTop: `3px solid ${accentColor}`,
        overflow: "hidden",
        boxShadow: `0 0 40px ${glowColor.replace("0.25", "0.12")}`,
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 70px ${glowColor.replace("0.25", "0.25")}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${glowColor.replace("0.25", "0.12")}`;
      }}
    >
      {/* Card Header */}
      <div style={{ padding: "36px 36px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: `${accentColor}22`,
              border: `1px solid ${accentColor}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            {icon}
          </div>
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: accentColor,
                fontWeight: "700",
                marginBottom: "2px",
              }}
            >
              {label}
            </div>
            <h3
              className="font-display"
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "var(--on-surface)",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.95rem",
            color: accentColor,
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >
          {subtitle}
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--on-surface-muted)",
            lineHeight: "1.7",
          }}
        >
          {concept}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", margin: "0 36px" }} />

      {/* Must Haves (always visible) */}
      <div style={{ padding: "24px 36px" }}>
        <div
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: accentColor,
            fontWeight: "700",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>✅</span> Must-Haves
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {mustHaves.map((item, i) => (
            <div key={i} className="must-have-chip">
              <span style={{ color: accentColor, fontSize: "0.75rem" }}>◆</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div style={{ padding: "0 36px 12px" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "24px" }} />

          {/* Core Requirements */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--on-surface-muted)",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              📋 Detailed Requirements
            </div>
            {requirements.map((section, si) => (
              <div key={si} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: "var(--on-surface)",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: accentColor,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {section.heading}
                </div>
                <ul style={{ listStyle: "none", paddingLeft: "14px" }}>
                  {section.items.map((item, ii) => (
                    <li
                      key={ii}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--on-surface-muted)",
                        lineHeight: "1.7",
                        paddingBottom: "6px",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: accentColor, flexShrink: 0 }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Creativity Spike */}
          <div
            style={{
              background: `${accentColor}12`,
              border: `1px solid ${accentColor}30`,
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: accentColor,
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              ⚡ Creativity Spike (Bonus)
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--on-surface)", lineHeight: "1.6" }}>
              {creativity}
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <div style={{ padding: "0 36px 32px", marginTop: "auto" }}>
        <button
          id={`${ps}-toggle-btn`}
          onClick={() => setExpanded(!expanded)}
          style={{
            background: `${accentColor}18`,
            border: `1px solid ${accentColor}30`,
            color: accentColor,
            fontSize: "0.875rem",
            fontWeight: "600",
            padding: "11px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            width: "100%",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = `${accentColor}28`;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${accentColor}22`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = `${accentColor}18`;
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          {expanded ? "▲ Hide Full Details" : "▼ View Full Requirements"}
        </button>
      </div>
    </div>
  );
}

export default function ProblemStatements() {
  return (
    <section
      id="problem-statements"
      style={{
        padding: "80px 40px",
        background: "var(--surface-low)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accents */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(188,19,254,0.4), rgba(0,251,251,0.4), transparent)",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div className="fade-in-up" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-tag">🎯 Problem Statements</div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              color: "var(--on-surface)",
              marginBottom: "16px",
            }}
          >
            Choose Your Challenge
          </h2>
          <p style={{ color: "var(--on-surface-muted)", fontSize: "1rem", maxWidth: "560px", margin: "0 auto", lineHeight: "1.6" }}>
            Both problem statements are designed to push your creative and technical limits. Each carries equal weight in judging.
          </p>
        </div>

        <div
          className="fade-in-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "28px",
          }}
        >
          <PSCard
            ps="ps1"
            label="Problem Statement 1"
            icon="📊"
            title='The "Data Pulse" FinTech Dashboard'
            subtitle="Concept: A Dark-Mode Crypto & Stock Tracking Platform"
            concept={`Build a modern, dark-mode financial dashboard for a cryptocurrency or stock tracking platform, dubbed "Data Pulse." The interface should embody the high-stakes energy of financial markets — fast, data-rich, and visually striking. Every element should serve the user's need to monitor, analyze, and act on market data in real time.`}
            requirements={[
              {
                heading: "Sidebar Navigation",
                items: [
                  "A fixed or collapsible sidebar with at least 3 named sections (e.g., Dashboard, Portfolio, Transactions, Settings)",
                  "Active state styling for the currently selected section",
                  "Icons alongside text labels for visual clarity",
                ],
              },
              {
                heading: "Interactive Charts",
                items: [
                  "Minimum 2 chart components showing market trends or portfolio performance",
                  "CSS, SVG, or Canvas-based charts are fully accepted",
                  "Charts should be visually distinct and labeled (e.g., 7D, 30D price history; asset allocation pie chart)",
                  "Hovering over chart data should show a tooltip or highlight the relevant value",
                ],
              },
              {
                heading: "Transaction History Table",
                items: [
                  "A table listing at least 6–8 mock transaction rows (currency, amount, date, status)",
                  "Functional filter — at minimum, filter by Date range OR filter by Amount range",
                  "Sortable columns (at least by Date and Amount)",
                  "Status badges with color coding (e.g., Completed = green, Pending = yellow)",
                ],
              },
              {
                heading: "Wallet Balance Card",
                items: [
                  "A prominent card displaying total portfolio value / wallet balance",
                  "Must use glassmorphism styling: semi-transparent background, backdrop-blur, subtle border",
                  "Display at least one supporting metric (e.g., 24h change, BTC equivalent, monthly gain)",
                  "Animated or pulsing indicator for live-data feel",
                ],
              },
              {
                heading: "Dark/Light Mode Toggle",
                items: [
                  "A toggle switch visible in the header or sidebar",
                  "Switching modes must update all UI elements seamlessly without any flicker",
                  "Both modes must be fully styled — no half-baked light theme",
                  "Remember user preference using localStorage",
                ],
              },
            ]}
            mustHaves={ps1MustHaves}
            creativity={`Implement a functional Dark/Light mode toggle that seamlessly changes the entire application theme — backgrounds, text, cards, and charts — with a smooth CSS transition. Both modes must be completely styled with no elements left unstyled. Persist the user's preference in localStorage.`}
            accentColor="var(--primary)"
            glowColor="rgba(188, 19, 254, 0.25)"
            borderClass="ps-card-purple"
          />

          <PSCard
            ps="ps2"
            label="Problem Statement 2"
            icon="🌿"
            title='"Eco-Stay" Interactive Travel Booking'
            subtitle='Concept: A High-End Landing Page for an Eco-Friendly Himalayan Resort'
            concept='Build a premium, immersive landing page for "Eco-Stay" — a fictional eco-friendly resort nestled in the Himalayas (inspired by Bhimtal). The goal is to make visitors feel the serenity and exclusivity of the destination through a visually stunning, interactive web experience that converts visitors into bookings.'
            requirements={[
              {
                heading: "Immersive Hero Section",
                items: [
                  "A full-viewport hero with a high-res image background OR an autoplay muted video background",
                  "Overlay text with resort name, tagline, and a primary 'Explore' or 'Book Now' CTA",
                  "A subtle parallax or scroll-triggered fade effect as the user scrolls past the hero",
                  "Optional: animated particles or a blurred bokeh overlay for premium feel",
                ],
              },
              {
                heading: "Interactive Room Selector",
                items: [
                  "Display at least 3 room types (e.g., Forest Suite, Mountain View Cabin, Eco Tent)",
                  "Clicking a room card must dynamically update: the displayed price, the feature list, and a visual highlight",
                  "Show room details like capacity, amenities, and a 'Select Room' action",
                  "Smooth transition or animation between room selections",
                ],
              },
              {
                heading: "Floating 'Book Now' Button",
                items: [
                  "A sticky button that remains fixed/visible as the user scrolls through the page",
                  "Should glow or pulse subtly to draw attention without being intrusive",
                  "Clicking it scrolls to the booking section or opens a modal/form",
                  "Must adapt position for mobile (bottom bar vs. floating corner)",
                ],
              },
              {
                heading: "Testimonial Slider",
                items: [
                  "A carousel/slider with at least 3 guest testimonials",
                  "Must include auto-play and manual navigation (prev/next arrows or dots)",
                  "Display guest name, rating (stars), and testimonial text",
                  "Smooth slide or fade transition between testimonials",
                ],
              },
              {
                heading: "Scroll-Triggered Animations",
                items: [
                  "Elements must animate into view as the user scrolls (fade-in, slide-up, scale-in)",
                  "At least 3 distinct content sections must use scroll animations",
                  "Use CSS (e.g., IntersectionObserver + CSS transitions) or a library",
                  "Animations must feel natural — not jarring or too slow",
                ],
              },
            ]}
            mustHaves={ps2MustHaves}
            creativity="Add scroll-triggered animations using IntersectionObserver or a CSS animation library (e.g., AOS, Framer Motion) where elements — like room cards, testimonials, and amenity icons — elegantly fade in or slide into view as the user scrolls down. Every section should feel alive and intentional."
            accentColor="var(--secondary)"
            glowColor="rgba(0, 251, 251, 0.25)"
            borderClass="ps-card-cyan"
          />
        </div>
      </div>
    </section>
  );
}
