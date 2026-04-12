"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventInfoCards from "@/components/EventInfoCards";
import ProblemStatements from "@/components/ProblemStatements";
import JudgingCriteria from "@/components/JudgingCriteria";
import RulesModal from "@/components/RulesModal";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [rulesOpen, setRulesOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <Navbar onRulesClick={() => setRulesOpen(true)} />

      <main>
        <HeroSection onRulesClick={() => setRulesOpen(true)} />
        <CountdownSection />
        <EventInfoCards />
        <ProblemStatements />
        <JudgingCriteria />
      </main>

      <Footer />

      <RulesModal isOpen={rulesOpen} onClose={() => setRulesOpen(false)} />
    </>
  );
}
