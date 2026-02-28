"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "FinTech Mobile Banking",
    brief: "Full app redesign for 2.4M users",
    impact: "38% faster task completion · 91/100 SUS score",
    skills: ["Research", "Wireframing", "Prototyping", "Design System"],
    accent: "#6e9fc8",
    number: "01",
    behanceUrl:
      "https://www.behance.net/gallery/123456789/FinTech-Mobile-Banking",
    behanceId: "123456789",
  },
  {
    title: "Healthcare Patient Portal",
    brief: "Accessibility-first redesign",
    impact: "WCAG 2.1 AA compliant · 52% support ticket reduction",
    skills: ["UX Audit", "Accessibility", "Journey Mapping", "Handoff"],
    accent: "#9c6ec8",
    number: "02",
    behanceUrl: "https://www.behance.net/gallery/223456789/Healthcare-Portal",
    behanceId: "223456789",
  },
  {
    title: "E-commerce AI Recommender UI",
    brief: "Gen AI-powered shopping experience",
    impact: "22% uplift in basket value · Featured in UX Planet",
    skills: ["AI/UX", "Interaction Design", "A/B Testing", "Figma"],
    accent: "#6ec8a9",
    number: "03",
    behanceUrl: "https://www.behance.net/gallery/323456789/Ecommerce-AI-UI",
    behanceId: "323456789",
  },
  {
    title: "Creative Studio Dashboard",
    brief: "Internal tooling for a media agency",
    impact: "3× workflow speed · Zero onboarding friction",
    skills: ["Design System", "Dark Mode", "Motion Design", "Dev Handoff"],
    accent: "#c86e9c",
    number: "04",
    behanceUrl: "https://www.behance.net/gallery/423456789/Studio-Dashboard",
    behanceId: "423456789",
  },
];

export default function UXDesignWorks() {
  return (
    <section className="py-32 bg-[#121212]">
      <div className="w-full">
        {/* Heading (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center max-w-8xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#6e9fc8] font-light">
            02 — UX &amp; Design
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            UX &amp; Design Works
          </h2>
          <p className="mt-4 text-white/40 text-sm">
            Human-centred design driven by research, motion craft, and
            measurable outcomes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-[20px]">
          {caseStudies.map((cs, i) => (
            <motion.a
              key={i}
              href={cs.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Behance Thumbnail */}
              <div className="aspect-[16/9] bg-black overflow-hidden">
                <iframe
                  src={`https://www.behance.net/embed/project/${cs.behanceId}`}
                  className="w-full h-full pointer-events-none"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span
                  className="text-6xl font-black block mb-4"
                  style={{ color: `${cs.accent}18` }}
                >
                  {cs.number}
                </span>

                <div
                  className="h-px mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${cs.accent}60, transparent)`,
                  }}
                />

                <h3 className="text-xl font-bold text-white mb-2">
                  {cs.title}
                </h3>
                <p className="text-[13px] text-white/40 mb-4">{cs.brief}</p>

                <p className="text-sm mb-5" style={{ color: cs.accent }}>
                  ↑ {cs.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cs.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] uppercase px-2.5 py-1"
                      style={{
                        color: `${cs.accent}cc`,
                        background: `${cs.accent}10`,
                        border: `1px solid ${cs.accent}20`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  className="mt-8 text-[10px] uppercase tracking-widest"
                  style={{ color: `${cs.accent}60` }}
                >
                  View on Behance →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
