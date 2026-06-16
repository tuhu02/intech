"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "monitor",
    title: "Custom Software Development",
    desc: "Tailored solutions built from scratch to match your unique business processes and requirements.",
    tags: ["Enterprise", "Desktop", "Workflow"],
  },
  {
    icon: "cloud",
    title: "SaaS Solutions",
    desc: "Scalable cloud-based products with subscription models, multi-tenancy, and modern architectures.",
    tags: ["Cloud", "Multi-tenant", "Subscription"],
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android that users love.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: "globe",
    title: "Web Development",
    desc: "Modern, responsive web applications with cutting-edge frameworks and stunning UI/UX.",
    tags: ["Next.js", "React", "Full-Stack"],
  },
  {
    icon: "link",
    title: "API & Integration",
    desc: "Seamless system integrations, RESTful APIs, and microservices architecture for connected ecosystems.",
    tags: ["REST", "GraphQL", "Microservices"],
  },
  {
    icon: "shield",
    title: "IT Consulting",
    desc: "Strategic technology guidance to help you make informed decisions and optimize your tech stack.",
    tags: ["Strategy", "Architecture", "Optimization"],
  },
];

function ServiceIcon({ type }: { type: string }) {
  const p = { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "monitor": return <svg {...p}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
    case "cloud": return <svg {...p}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>;
    case "smartphone": return <svg {...p}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>;
    case "globe": return <svg {...p}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
    case "link": return <svg {...p}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;
    case "shield": return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    default: return null;
  }
}

export default function ServicesSection() {
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
    <section id="services" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal" style={{ opacity: 0 }}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What We <span className="text-gradient">Do Best</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to deployment, we offer comprehensive software development services tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="glass-card p-8 glow-border reveal group"
              style={{ opacity: 0, animationDelay: `${i * 0.1}s` }}
              id={`service-${i}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <ServiceIcon type={svc.icon} />
              </div>
              <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-accent/5 text-accent/80 border border-accent/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
