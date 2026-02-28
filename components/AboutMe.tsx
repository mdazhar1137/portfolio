"use client";

import { motion } from "framer-motion";

const skills = [
    { label: "Video Editing", years: "9+", value: 95 },
    { label: "Graphic Design", years: "8+", value: 85 },
    { label: "Motion Graphics", years: "8+", value: 85 },
    { label: "UX Design", years: "5+", value: 60 },
    { label: "Cinematography", years: "2+", value: 30 },
    { label: "Color Grading", years: "4+", value: 50 },
    { label: "Gen AI", years: "2+", value: 35 },
];

const experience = [
    { role: "Senior Manager — Creative Lead", company: "Solara Home", period: "Nov 2024 — Present" },
    { role: "User Experience Designer", company: "Uncode", period: "Mar 2023 — Mar 2025" },
    { role: "Senior Graphic Designer & Video Editor", company: "Dinero", period: "Aug 2022 — Feb 2023" },
    { role: "Senior Graphic Designer & Video Editor", company: "Sanbrains Era Technologies", period: "Mar 2021 — Aug 2022" },
    { role: "Senior Graphic Designer & Video Editor", company: "Ideas Add Media", period: "Jan 2021 — Feb 2021" },
    { role: "Video Editor", company: "Mojo TV", period: "May 2017 — Feb 2019" },
    { role: "Video Editor", company: "Yoyo TV", period: "Jun 2016 — Dec 2018" },
];

export default function AboutMe() {
    return (
        <section className="py-48 bg-[#121212]">
            <div className="max-w-8xl mx-auto px-6 space-y-44">

                {/* ===== HEADING & BIO ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-8xl mx-auto"
                >
                    <span className="text-[11px] tracking-[0.45em] uppercase text-[#c8a96e]">
                        04 — About
                    </span>

                    <h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                        The Mind Behind <br />
                        <span className="text-[#c8a96e]">the Frame</span>
                    </h2>

                    <div className="mt-14 space-y-6 text-white/60 text-[17px] leading-[1.9]">
                        <p>
                            I began my journey in video editing with one dream — to see my name on the big
                            screen as an editor. That curiosity pushed me beyond editing into design,
                            motion, UX, cinematography, DI, writing, directing, and today — Gen-AI powered
                            creative workflows.
                        </p>
                        <p>
                            I’ve worked across ad agencies, marketing agencies, D2C brands, product startups,
                            satellite media channels, films, and podcasts — driven by storytelling, empathy,
                            and respect for the craft.
                        </p>
                        <p>
                            Creative work isn’t about software. It’s about emotion, communication, and making
                            people feel something before they notice the technique.
                        </p>
                    </div>
                </motion.div>

                {/* ===== EXPERIENCE LEVELS ===== */}
                <div
                    className="max-w-8xl mx-auto"
                    style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px", paddingBottom: "20px" }}
                >
                    <h3 className="text-center text-[11px] tracking-[0.4em] uppercase text-white/40 mb-14">
                        Experience Levels
                    </h3>

                    <div className="space-y-8">
                        {skills.map((skill, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-lg text-white/70 mb-2">
                                    <span>{skill.label}</span>
                                    <span>{skill.years} yrs</span>
                                </div>
                                <div className="h-[6px] bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#c8a96e] rounded-full"
                                        style={{ width: `${skill.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== TOOLS ===== */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-center text-[11px] tracking-[0.4em] uppercase text-white/40 mb-16">
                        Tools & Technologies
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            ["Video Editing", "Avid, Final Cut Pro X, Premiere Pro, DaVinci Resolve"],
                            ["Motion Graphics", "After Effects, Blender, Maya, Houdini (Learning)"],
                            ["UX Design", "Figma, Adobe XD"],
                            ["Graphic Design", "Photoshop, Illustrator, CorelDRAW"],
                            ["Cinematography", "Canon, Sony, ARRI, RED (Target)"],
                            ["Color Grading", "DaVinci Resolve"],
                            ["AI", "Midjourney, DALL·E, Stable Diffusion, ComfyUI, LTX-Video"],
                        ].map(([title, tools], i) => (
                            <div
                                key={i}
                                className="rounded-2xl p-8 bg-white/[0.035] border border-white/[0.07]"
                            >
                                <p className="text-base font-semibold text-white mb-2">{title}</p>
                                <p className="text-sm text-white/50 leading-relaxed">{tools}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== WORK EXPERIENCE ===== */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-center text-[11px] tracking-[0.4em] uppercase text-white/40 mb-14">
                        Work Experience
                    </h3>

                    <div className="space-y-6">
                        {experience.map((exp, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-start gap-6 border-b border-white/10 pb-5"
                            >
                                <div>
                                    <p className="text-base text-white">{exp.role}</p>
                                    <p className="text-sm text-white/45">{exp.company}</p>
                                </div>
                                <p className="text-sm text-white/35">{exp.period}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== CTA ===== */}
                <div className="flex flex-col items-center gap-14 pt-16">
                    <div className="flex gap-10">
                        <a
                            href="tel:+919182494402"
                            className="px-14 py-5 border-2 border-[#c8a96e] text-[#c8a96e] rounded-md text-base hover:bg-[#c8a96e]/10 transition"
                        >
                            Call Now
                        </a>
                        <a
                            href="mailto:mdazhar1137@gmail.com"
                            className="px-14 py-5 border-2 border-white/40 text-white rounded-md text-base hover:bg-white/10 transition"
                        >
                            Send Email
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 text-sm text-white/50">
                        <a href="https://www.instagram.com/mdazhar1137/" target="_blank">Instagram</a>
                        <a href="https://www.facebook.com/mdazhar1137/" target="_blank">Facebook</a>
                        <a href="https://twitter.com/mdazhar1137" target="_blank">Twitter</a>
                        <a href="https://www.linkedin.com/in/md-azhar-baba-571101180/" target="_blank">LinkedIn</a>
                        <a href="https://www.behance.net/mohdazharbaba" target="_blank">Behance</a>
                    </div>
                </div>

            </div>
        </section>
    );
}