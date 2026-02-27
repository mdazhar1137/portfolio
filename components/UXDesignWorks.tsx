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
    },
    {
        title: "Healthcare Patient Portal",
        brief: "Accessibility-first redesign",
        impact: "WCAG 2.1 AA compliant · 52% support ticket reduction",
        skills: ["UX Audit", "Accessibility", "Journey Mapping", "Handoff"],
        accent: "#9c6ec8",
        number: "02",
    },
    {
        title: "E-commerce AI Recommender UI",
        brief: "Gen AI-powered shopping experience",
        impact: "22% uplift in basket value · Featured in UX Planet",
        skills: ["AI/UX", "Interaction Design", "A/B Testing", "Figma"],
        accent: "#6ec8a9",
        number: "03",
    },
    {
        title: "Creative Studio Dashboard",
        brief: "Internal tooling for a media agency",
        impact: "3× workflow speed · Zero onboarding friction",
        skills: ["Design System", "Dark Mode", "Motion Design", "Dev Handoff"],
        accent: "#c86e9c",
        number: "04",
    },
];

export default function UXDesignWorks() {
    return (
        <section className="py-32 bg-[#121212]">
            <div className="w-full">
                {/* Heading */}
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
                    <h2 className="mt-3 text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                        UX &amp; Design Works
                    </h2>
                    <p className="mt-4 text-white/40 text-sm max-w-8xl mx-auto">
                        Human-centred design driven by research, motion craft, and
                        measurable outcomes.
                    </p>
                </motion.div>

                {/* Editorial case study cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudies.map((cs, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -6 }}
                            className="group relative rounded-2xl p-8 cursor-pointer overflow-hidden"
                            style={{
                                background: "rgba(255,255,255,0.025)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                backdropFilter: "blur(16px)",
                            }}
                        >
                            {/* BG accent on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                                style={{
                                    background: `radial-gradient(ellipse at top left, ${cs.accent}0a 0%, transparent 60%)`,
                                }}
                            />

                            {/* Number */}
                            <span
                                className="text-6xl font-black leading-none select-none mb-4 block"
                                style={{ color: `${cs.accent}18` }}
                            >
                                {cs.number}
                            </span>

                            {/* Divider */}
                            <div
                                className="h-px mb-6"
                                style={{
                                    background: `linear-gradient(90deg, ${cs.accent}60, transparent)`,
                                }}
                            />

                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                {cs.title}
                            </h3>
                            <p className="text-[13px] text-white/40 mb-4">{cs.brief}</p>

                            {/* Impact */}
                            <p
                                className="text-sm font-medium mb-5"
                                style={{ color: cs.accent }}
                            >
                                ↑ {cs.impact}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {cs.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm"
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

                            {/* Arrow */}
                            <div
                                className="mt-8 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                                style={{ color: `${cs.accent}60` }}
                            >
                                <span>Case Study</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                >
                                    <path
                                        d="M1 6h10M7 2l5 4-5 4"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
