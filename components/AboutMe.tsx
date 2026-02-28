"use client";

import { motion } from "framer-motion";

const skills = [
    { label: "Video Editing", level: 90, years: "9+ yrs" },
    { label: "Graphic Design", level: 80, years: "8+ yrs" },
    { label: "Motion Graphics", level: 80, years: "8+ yrs" },
    { label: "UX Design", level: 55, years: "5.5+ yrs" },
    { label: "Cinematography", level: 25, years: "2.5+ yrs" },
    { label: "Color Grading", level: 45, years: "4.5+ yrs" },
    { label: "Gen AI", level: 30, years: "3+ yrs" },
];

const softwareStacks = [
    { title: "Video Editing", tools: "Avid, Final Cut Pro X, Premiere Pro, DaVinci Resolve" },
    { title: "Motion Graphics", tools: "After Effects, Blender, Maya, Houdini (Learning)" },
    { title: "UX Design", tools: "Figma, Adobe XD" },
    { title: "Graphic Design", tools: "Photoshop, Illustrator, CorelDRAW" },
    { title: "Cinematography", tools: "Canon, Sony, ARRI, RED (Target)" },
    { title: "Color Grading", tools: "DaVinci Resolve" },
    { title: "AI", tools: "Midjourney, DALL·E, Stable Diffusion, ComfyUI, LTX-Video, Google AI, Meta AI" },
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
        <section className="py-40 bg-[#121212]">
            <div className="max-w-6xl mx-auto px-6 space-y-40">

                {/* HEADER */}
                <div className="max-w-3xl">
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">
                        04 — About
                    </span>
                    <h2 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
                        The Mind Behind <br />
                        <span className="text-[#c8a96e]">the Frame</span>
                    </h2>
                </div>

                {/* STORY + SKILLS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* STORY */}
                    <div className="space-y-6 text-white/55 text-[15px] leading-[1.9] max-w-xl">
                        <p>
                            I began my journey in video editing with one dream — to see my name on the big screen as an editor.
                        </p>
                        <p>
                            That curiosity to deeply understand filmmaking pushed me beyond editing into design, motion, UX,
                            cinematography, DI, direction, writing — and today, Gen-AI powered creative workflows.
                        </p>
                        <p>
                            I’ve worked across ad agencies, marketing agencies, D2C brands, product startups, satellite media
                            channels, films, and podcasts — always driven by storytelling, empathy, and respect for the craft.
                        </p>
                        <p>
                            Creative work isn’t about software. It’s about emotion, communication, and making people feel
                            something before they notice the technique.
                        </p>
                    </div>

                    {/* SKILL LEVELS */}
                    <div className="space-y-5">
                        <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
                            Experience Levels
                        </h3>
                        {skills.map((skill) => (
                            <div key={skill.label}>
                                <div className="flex justify-between text-sm text-white/60 mb-1">
                                    <span>{skill.label}</span>
                                    <span className="text-[#c8a96e]">{skill.years}</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded">
                                    <div
                                        className="h-full rounded bg-[#c8a96e]"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TOOLS */}
                <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-10">
                        Tools & Technologies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {softwareStacks.map((stack) => (
                            <div
                                key={stack.title}
                                className="rounded-xl p-6 bg-white/[0.03] border border-white/10"
                            >
                                <h4 className="text-white font-semibold mb-2">{stack.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {stack.tools}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPERIENCE */}
                <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-10">
                        Work Experience
                    </h3>
                    <div className="space-y-6 max-w-4xl">
                        {experience.map((exp) => (
                            <div
                                key={exp.company}
                                className="flex justify-between gap-6 border-b border-white/10 pb-4"
                            >
                                <div>
                                    <p className="text-white font-medium">{exp.role}</p>
                                    <p className="text-white/40 text-sm">{exp.company}</p>
                                </div>
                                <span className="text-white/30 text-sm whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA — CENTERED */}
                <div className="flex justify-center gap-6 pt-10">
                    <a
                        href="tel:+919182494402"
                        className="px-8 py-4 border border-[#c8a96e]/50 text-[#c8a96e] rounded-sm hover:bg-[#c8a96e]/10 transition"
                    >
                        Call Now
                    </a>
                    <a
                        href="mailto:mdazhar1137@gmail.com"
                        className="px-8 py-4 border border-white/20 text-white rounded-sm hover:bg-white/5 transition"
                    >
                        Send Email
                    </a>
                </div>

                {/* SOCIAL — CENTERED */}
                <div className="flex justify-center gap-8 text-sm text-white/40">
                    <a href="https://www.instagram.com/mdazhar1137/" target="_blank">Instagram</a>
                    <a href="https://www.facebook.com/mdazhar1137/" target="_blank">Facebook</a>
                    <a href="https://twitter.com/mdazhar1137" target="_blank">Twitter</a>
                    <a href="https://www.linkedin.com/in/md-azhar-baba-571101180/" target="_blank">LinkedIn</a>
                    <a href="https://www.behance.net/mohdazharbaba" target="_blank">Behance</a>
                </div>

            </div>
        </section>
    );
}