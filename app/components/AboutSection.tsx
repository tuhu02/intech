"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    icon: "innovation",
    title: "Innovation",
    desc: "We embrace cutting-edge technologies and creative problem-solving to deliver forward-thinking solutions.",
  },
  {
    icon: "quality",
    title: "Quality",
    desc: "Every line of code we write is crafted with precision, tested rigorously, and built to last.",
  },
  {
    icon: "reliability",
    title: "Reliability",
    desc: "We build systems that perform consistently, ensuring your business runs smoothly around the clock.",
  },
  {
    icon: "scalability",
    title: "Scalability",
    desc: "Our architectures grow with your business, handling increased demand without missing a beat.",
  },
];

function ValueIcon({ type }: { type: string }) {
  const props = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "innovation":
      return <svg {...props}><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></svg>;
    case "quality":
      return <svg {...props}><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>;
    case "reliability":
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    case "scalability":
      return <svg {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
    default:
      return null;
  }
}

function SmallIcon({ type }: { type: string }) {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "#00c853", strokeWidth: 1.5 };
  switch (type) {
    case "web":
      return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
    case "mobile":
      return <svg {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>;
    case "cloud":
      return <svg {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>;
    case "api":
      return <svg {...props}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
    default:
      return null;
  }
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            (entry.target as HTMLElement).style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal" style={{ opacity: 0 }}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Build <span className="text-gradient">Digital Excellence</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Intech is a software company dedicated to helping businesses thrive in the digital age. We combine technical expertise with creative thinking to deliver solutions that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal" style={{ opacity: 0 }}>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-muted leading-relaxed mb-4">
              Founded with a passion for technology and innovation, Intech has grown from a small team of developers into a full-service software company. We&apos;ve partnered with startups, SMEs, and enterprises across various industries to deliver software that solves real problems.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Our mission is simple: <span className="text-foreground font-medium">to empower businesses through exceptional software</span>. Whether you need a custom CRM, a cloud-based SaaS platform, or a mobile app, we have the expertise to bring your vision to life.
            </p>
            <div className="flex gap-6">
              {[{ v: "2021", l: "Founded" }, { v: "15+", l: "Team Members" }, { v: "3", l: "Countries" }].map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{s.v}</div>
                    <div className="text-sm text-muted">{s.l}</div>
                  </div>
                  {i < 2 && <div className="w-px h-10 bg-border-color" />}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ opacity: 0 }}>
            <div className="relative">
              <div className="glass-card p-8">
                <div className="grid grid-cols-2 gap-4">
                  {(["web", "mobile", "cloud", "api"] as const).map((t) => (
                    <div key={t} className="bg-surface rounded-xl p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                        <SmallIcon type={t} />
                      </div>
                      <div className="text-sm font-medium capitalize">
                        {t === "api" ? "API/Backend" : t === "cloud" ? "Cloud/SaaS" : `${t.charAt(0).toUpperCase() + t.slice(1)} Apps`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(0,200,83,0.4) 0%, transparent 70%)" }} />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div key={i} className="glass-card p-6 reveal" style={{ opacity: 0, animationDelay: `${i * 0.15}s` }} id={`value-${i}`}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <ValueIcon type={val.icon} />
              </div>
              <h4 className="text-lg font-semibold mb-2">{val.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
