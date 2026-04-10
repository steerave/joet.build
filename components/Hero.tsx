"use client";

import { useCallback, useState } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    []
  );

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-bg"
      onMouseMove={handleMouseMove}
    >
      {/* ── Grid layer 1: base — faint amber, always scrolling ───────────── */}
      <div
        aria-hidden="true"
        className="hero-grid-base pointer-events-none absolute inset-0"
      />

      {/* ── Grid layer 2: spotlight — brighter, reveals at cursor ─────────── */}
      <div
        aria-hidden="true"
        className="hero-grid-base pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,143,212,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(91,143,212,0.18) 1px, transparent 1px)",
          maskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* ── Ambient glow — top-right corner, single amber bloom ───────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-100px",
          right: "-80px",
          width: "560px",
          height: "560px",
          background:
            "radial-gradient(circle, rgba(91,143,212,0.09) 0%, transparent 65%)",
        }}
      />

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-[120px] md:px-10 lg:px-20">

        {/* Breadcrumb */}
        <div
          className="hero-animate-1 mb-7 flex items-center gap-[6px] font-mono"
          style={{ fontSize: "10px", letterSpacing: "2px" }}
        >
          <span style={{ color: "#5b8fd4" }}>~/</span>
          <span style={{ color: "#2e2e2e" }}>portfolio</span>
          <span style={{ color: "#1e1e1e" }}>·</span>
          <span style={{ color: "#1a2a3a" }}>main</span>
          <span style={{ color: "#5b8fd4" }}>›</span>
        </div>

        {/* Name */}
        <h1
          className="hero-animate-2 uppercase leading-[0.96]"
          style={{
            fontFamily: "var(--font-anybody)",
            fontWeight: 900,
            fontSize: "clamp(44px, 7.5vw, 78px)",
            letterSpacing: "-2px",
            color: "#ffffff",
          }}
        >
          SARUN (JOE)
          <br />
          <span style={{ color: "#5b8fd4" }}>TEERAVECHYAN</span>
        </h1>

        {/* Tagline */}
        <p
          className="hero-animate-3 mt-7"
          style={{
            fontFamily: "var(--font-anybody)",
            fontWeight: 300,
            fontSize: "16px",
            color: "#888888",
            lineHeight: 1.75,
            maxWidth: "460px",
          }}
        >
          Senior digital leader delivering complex, high-visibility programs
          across North America — now focused on applying AI to transform how
          systems are designed, operated, and scaled.
        </p>

        {/* CTAs */}
        <div className="hero-animate-4 mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "13px 26px",
              background: "#5b8fd4",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 0 0 0 rgba(91,143,212,0.4)",
            }}
          >
            View Work
          </a>
          <a
            href="#connect"
            className="inline-flex items-center rounded-sm transition-all duration-200 hover:border-[#3a3a3a] hover:text-text-body active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "13px 26px",
              border: "1px solid #242424",
              color: "#444",
              textDecoration: "none",
            }}
          >
            Connect
          </a>
        </div>

        {/* Disclaimer */}
        <p
          className="hero-animate-4 mt-6 font-mono"
          style={{ fontSize: "10px", color: "#666666", letterSpacing: "1.5px" }}
        >
          DE-IDENTIFIED WORK · DETAILS AVAILABLE UPON REQUEST
        </p>
      </div>
    </section>
  );
}
