"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Reel Edit — Brand Film",
        category: "Video Editing",
        description:
            "A 3-minute cinematic brand story, color-graded and sound-designed for a luxury automotive client.",
        tags: ["DaVinci Resolve", "After Effects", "DI"],
        color: "#c8a96e",
    },
    {
        title: "UX Overhaul — FinTech App",
        category: "UX Design",
        description:
            "End-to-end redesign of a banking app, reducing task completion time by 38% through user research and motion-led flows.",
        tags: ["Figma", "Prototyping", "User Research"],
        color: "#6e9fc8",
    },
    {
        title: "Short Film — 'Liminal'",
        category: "Cinematography",
        description:
            "Award-recognised short film shot on ARRI Alexa Mini. 4K ProRes workflow, controlled natural lighting.",
        tags: ["ARRI", "Color Science", "DI"],
        color: "#9c6ec8",
    },
    {
        title: "Gen AI Visual System",
        category: "Gen AI + Motion",
        description:
            "AI-assisted visual identity system with motion-generative elements deployed for a tech startup's global brand campaign.",
        tags: ["Midjourney", "ComfyUI", "Motion Graphics"],
        color: "#6ec8a9",
    },
];

export default function Projects() {
    return (
        <section className="py-32 px-6 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e] font-light">
                        Featured
                    </span>
                    <h2 className="mt-3 text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                        Selected Works
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                backdropFilter: "blur(16px)",
                            }}
                        >
                            {/* Hover glow */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                style={{
                                    boxShadow: `0 0 60px ${proj.color}22, inset 0 0 40px ${proj.color}08`,
                                    border: `1px solid ${proj.color}30`,
                                }}
                            />

                            {/* Top accent bar */}
                            <div
                                className="h-px w-full"
                                style={{
                                    background: `linear-gradient(90deg, ${proj.color}80, transparent)`,
                                }}
                            />

                            <div className="p-8">
                                {/* Category badge */}
                                <span
                                    className="inline-block text-[9px] tracking-[0.3em] uppercase font-medium px-3 py-1.5 rounded-sm mb-6"
                                    style={{
                                        color: proj.color,
                                        background: `${proj.color}15`,
                                        border: `1px solid ${proj.color}25`,
                                    }}
                                >
                                    {proj.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                                    {proj.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/45 text-sm leading-relaxed mb-6">
                                    {proj.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {proj.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] tracking-wider text-white/30 border border-white/10 px-2.5 py-1 rounded-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/30 group-hover:text-white/60 transition-colors duration-300">
                                    <span>View Project</span>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                    >
                                        <path
                                            d="M1 7h12M8 3l5 4-5 4"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
