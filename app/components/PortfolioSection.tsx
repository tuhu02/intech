"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "FinTrack Pro",
    category: "SaaS Platform",
    desc: "A comprehensive financial management SaaS platform with real-time analytics, automated reporting, and multi-currency support for growing businesses.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "MediConnect",
    category: "Healthcare App",
    desc: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers, featuring video consultations, appointment scheduling, and EHR integration.",
    tags: ["React Native", "Express", "MongoDB", "WebRTC"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "LogiChain",
    category: "Enterprise Software",
    desc: "End-to-end supply chain management system with real-time tracking, inventory optimization, and predictive analytics for logistics companies.",
    tags: ["Angular", "Python", "Redis", "Docker"],
    color: "from-orange-500/20 to-rose-500/20",
  },
  {
    title: "EduSphere",
    category: "EdTech Platform",
    desc: "Interactive learning management system with AI-powered course recommendations, progress tracking, and collaborative tools for educational institutions.",
    tags: ["Vue.js", "Django", "AWS", "TensorFlow"],
    color: "from-violet-500/20 to-pink-500/20",
  },
];

export default function PortfolioSection() {
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
    <section id="portfolio" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal" style={{ opacity: 0 }}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of our recent work across various industries and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden group reveal"
              style={{ opacity: 0, animationDelay: `${i * 0.15}s` }}
              id={`project-${i}`}
            >
              {/* Project visual header */}
              <div className={`relative h-48 bg-gradient-to-br ${proj.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-surface/30" />
                {/* Abstract code visualization */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-surface/60 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-white/60 uppercase tracking-wider">{proj.category}</span>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/5 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full border border-white/5 group-hover:scale-125 transition-transform duration-700" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{proj.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-border-color">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
