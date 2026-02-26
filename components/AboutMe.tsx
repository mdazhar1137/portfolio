"use client";

import { motion } from "framer-motion";

const skills = [
    { label: "Video Editing", years: "8+" },
    { label: "Cinematography", years: "6+" },
    { label: "UX Design", years: "5+" },
    { label: "Motion Graphics", years: "6+" },
    { label: "DI / Colour Grading", years: "7+" },
    { label: "Gen AI Workflows", years: "3+" },
];

const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "120+", label: "Projects Delivered" },
    { value: "14", label: "Awards & Recognitions" },
    { value: "3", label: "Continents Worked In" },
];

export default function AboutMe() {
    return (
        <section className="py-32 bg-[#121212] relative overflow-hidden">
            {/* Background accent */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-5"
                style={{
                    background: "radial-gradient(circle, #c8a96e 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left — Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e] font-light">
                            04 — About
                        </span>
                        <h2 className="mt-3 text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-8">
                            The Mind Behind
                            <br />
                            <span className="text-gradient">the Frame</span>
                        </h2>

                        <div className="space-y-5 text-[15px] leading-[1.85] text-white/55">
                            <p>
                                I am a multi-disciplinary creative director with over{" "}
                                <span className="text-white/80 font-medium">
                                    8 years of hands-on experience
                                </span>{" "}
                                across video editing, cinematography, UX design, motion
                                graphics, digital intermediate (DI), and Gen AI-assisted
                                creative workflows. My work sits at the intersection of
                                storytelling and technology.
                            </p>
                            <p>
                                I believe that the best creative work is{" "}
                                <span className="text-white/80 font-medium">
                                    invisible in its craft
                                </span>{" "}
                                — the viewer feels the emotion before they understand the
                                technique. Whether I&apos;m cutting a documentary, designing a
                                mobile interface, or orchestrating light on a film set, that
                                philosophy drives every decision.
                            </p>
                            <p>
                                Having worked with brands ranging from Fortune 500 corporations
                                to independent filmmakers across three continents, I bring a{" "}
                                <span className="text-white/80 font-medium">
                                    genuinely global creative perspective
                                </span>{" "}
                                to every collaboration — and an obsessive eye for detail.
                            </p>
                            <p>
                                My Gen AI work pushes traditional boundaries — integrating
                                diffusion models, ComfyUI pipelines, and prompt engineering into
                                mainstream brand campaigns and motion design workflows at
                                production speed.
                            </p>
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="mailto:hello@portfolio.com"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-sm font-medium text-sm tracking-wide transition-all duration-300"
                            style={{
                                background: "rgba(200, 169, 110, 0.12)",
                                border: "1px solid rgba(200, 169, 110, 0.35)",
                                color: "#c8a96e",
                            }}
                        >
                            Let&apos;s create together
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M2 8h12M9 4l5 4-5 4"
                                    stroke="#c8a96e"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Right — Stats + Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10"
                    >
                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                                    className="rounded-xl p-6"
                                    style={{
                                        background: "rgba(255,255,255,0.025)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <p
                                        className="text-4xl font-black mb-1"
                                        style={{ color: "#c8a96e" }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] text-white/40 tracking-wide">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills list */}
                        <div>
                            <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">
                                Core Skills
                            </h3>
                            <div className="space-y-3">
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                                        className="flex items-center justify-between py-3 border-b border-white/5 group"
                                    >
                                        <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-200">
                                            {skill.label}
                                        </span>
                                        <span
                                            className="text-xs font-mono"
                                            style={{ color: "#c8a96e" }}
                                        >
                                            {skill.years} yrs
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
