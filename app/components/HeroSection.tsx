"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient orb */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(0,200,83,0.4) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
          }}
        />
        {/* Secondary gradient orb */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(0,200,83,0.3) 0%, transparent 70%)",
            bottom: "10%",
            right: "10%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
        {/* Mouse-following subtle glow */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none transition-all duration-1000"
          style={{
            background:
              "radial-gradient(circle, rgba(0,200,83,0.25) 0%, transparent 60%)",
            left: "var(--mouse-x)",
            top: "var(--mouse-y)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-color bg-surface/50 text-sm text-muted mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Software Company — Building Digital Solutions
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Building Software
          <br />
          <span className="text-gradient">That Drives Your</span>
          <br />
          Business Forward
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          From custom enterprise software to innovative SaaS products, we
          transform your ideas into powerful, scalable digital solutions that
          give your business a competitive edge.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <a href="#services" className="btn-primary text-base" id="hero-cta-services">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Our Services
          </a>
          <a href="#contact" className="btn-secondary text-base" id="hero-cta-contact">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Contact Us
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center" id={`stat-${i}`}>
              <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-10" />
    </section>
  );
}
