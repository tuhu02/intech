"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into understanding your business, goals, and challenges. Through workshops and analysis, we define the project scope and technical requirements.",
    icon: "search",
  },
  {
    num: "02",
    title: "Design",
    desc: "Our designers create intuitive UI/UX prototypes and wireframes. We iterate until the design perfectly aligns with your vision and user needs.",
    icon: "pen",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Our engineers build your solution using agile methodologies, with regular sprints, code reviews, and quality assurance at every step.",
    icon: "code",
  },
  {
    num: "04",
    title: "Deploy",
    desc: "We handle deployment, monitoring, and ongoing support. Your software is launched smoothly with CI/CD pipelines and comprehensive documentation.",
    icon: "rocket",
  },
];

function StepIcon({ type }: { type: string }) {
  const p = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "search": return <svg {...p}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
    case "pen": return <svg {...p}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>;
    case "code": return <svg {...p}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
    case "rocket": return <svg {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
    default: return null;
  }
}

export default function ProcessSection() {
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
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal" style={{ opacity: 0 }}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A proven methodology that ensures every project is delivered on time, on budget, and beyond expectations.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="reveal text-center relative"
                style={{ opacity: 0, animationDelay: `${i * 0.2}s` }}
                id={`step-${i}`}
              >
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-surface border-2 border-accent/30 mb-6 mx-auto z-10">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <StepIcon type={step.icon} />
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping" style={{ animationDuration: "3s" }} />
                </div>

                <div className="text-accent text-xs font-bold tracking-widest mb-2">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
