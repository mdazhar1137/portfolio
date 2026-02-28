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
  {
    role: "Senior Manager — Creative Lead",
    company: "Solara Home",
    period: "Nov 2024 — Present",
  },
  {
    role: "User Experience Designer",
    company: "Uncode",
    period: "Mar 2023 — Mar 2025",
  },
  {
    role: "Senior Graphic Designer & Video Editor",
    company: "Dinero",
    period: "Aug 2022 — Feb 2023",
  },
  {
    role: "Senior Graphic Designer & Video Editor",
    company: "Sanbrains Era Technologies",
    period: "Mar 2021 — Aug 2022",
  },
  {
    role: "Senior Graphic Designer & Video Editor",
    company: "Ideas Add Media",
    period: "Jan 2021 — Feb 2021",
  },
  {
    role: "Video Editor",
    company: "Mojo TV",
    period: "May 2017 — Feb 2019",
  },
  {
    role: "Video Editor",
    company: "Yoyo TV",
    period: "Jun 2016 — Dec 2018",
  },
];

export default function AboutMe() {
  return (
    <section className="py-40 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-6 space-y-32">

        {/* ===== HEADING + BIO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">
            04 — About
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
            The Mind Behind <br />
            <span className="text-[#c8a96e]">the Frame</span>
          </h2>

          <div className="mt-10 space-y-5 text-white/55 text-[15px] leading-[1.9]">
            <p>
              I began my journey in video editing with one dream — to see my name
              on the big screen as an editor. That curiosity to deeply understand
              filmmaking pushed me beyond editing into design, motion, UX,
              cinematography, DI, writing, directing, and today — Gen-AI powered
              creative workflows.
            </p>
            <p>
              I’ve worked across ad agencies, marketing agencies, D2C brands,
              product startups, satellite media channels, films, and podcasts —
              always driven by storytelling, empathy, and respect for the craft.
            </p>
            <p>
              Creative work isn’t about software. It’s about emotion,
              communication, and making people feel something before they notice
              the technique.
            </p>
          </div>
        </motion.div>

        {/* ===== EXPERIENCE LEVELS ===== */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-[10px] tracking-[0.35em] uppercase text-white/30 mb-10">
            Experience Levels
          </h3>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs text-white/60 mb-1">
                  <span>{skill.label}</span>
                  <span>{skill.years} yrs</span>
                </div>
                <div className="h-[3px] bg-white/10 rounded">
                  <div
                    className="h-full rounded bg-[#c8a96e]"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== TOOLS ===== */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-[10px] tracking-[0.35em] uppercase text-white/30 mb-10">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="rounded-xl p-6 bg-white/[0.03] border border-white/[0.06]"
              >
                <p className="text-sm font-semibold text-white mb-1">{title}</p>
                <p className="text-xs text-white/45">{tools}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== WORK EXPERIENCE ===== */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-[10px] tracking-[0.35em] uppercase text-white/30 mb-10">
            Work Experience
          </h3>

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="flex justify-between gap-6 border-b border-white/5 pb-4"
              >
                <div>
                  <p className="text-sm text-white">{exp.role}</p>
                  <p className="text-xs text-white/40">{exp.company}</p>
                </div>
                <p className="text-xs text-white/30">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="flex flex-col items-center gap-8 pt-10">
          <div className="flex gap-6">
            <a
              href="tel:+919182494402"
              className="px-10 py-4 border border-[#c8a96e]/60 text-[#c8a96e] rounded-sm hover:bg-[#c8a96e]/10 transition text-sm"
            >
              Call Now
            </a>
            <a
              href="mailto:mdazhar1137@gmail.com"
              className="px-10 py-4 border border-white/25 text-white rounded-sm hover:bg-white/5 transition text-sm"
            >
              Send Email
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs text-white/40">
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