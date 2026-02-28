"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Calendar & Meeting Booking UX",
        industry: "SaaS · Productivity",
        type: "UX Design",
        behanceId: "180608005",
        behanceUrl:
            "https://www.behance.net/gallery/180608005/Calender-EventMeeting-Booking-Product-UX-Design",
    },
    {
        title: "FinTech Mobile Banking",
        industry: "FinTech",
        type: "UX Design",
        behanceId: "223456789",
        behanceUrl: "https://www.behance.net/gallery/223456789/FinTech-App",
    },
    {
        title: "Healthcare Patient Portal",
        industry: "Healthcare",
        type: "UX + Accessibility",
        behanceId: "323456789",
        behanceUrl: "https://www.behance.net/gallery/323456789/Healthcare-UX",
    },
    {
        title: "E-commerce AI Recommender",
        industry: "E-commerce",
        type: "AI-Driven UX",
        behanceId: "423456789",
        behanceUrl: "https://www.behance.net/gallery/423456789/Ecommerce-AI",
    },
    {
        title: "Creative Studio Dashboard",
        industry: "Media & Agency",
        type: "Product Design",
        behanceId: "523456789",
        behanceUrl: "https://www.behance.net/gallery/523456789/Studio-Dashboard",
    },
    {
        title: "Brand Visual System",
        industry: "Startup · Branding",
        type: "Visual Design",
        behanceId: "623456789",
        behanceUrl: "https://www.behance.net/gallery/623456789/Brand-System",
    },
    {
        title: "Marketing Campaign UI",
        industry: "Advertising",
        type: "UI Design",
        behanceId: "723456789",
        behanceUrl: "https://www.behance.net/gallery/723456789/Marketing-UI",
    },
    {
        title: "Internal Analytics Tool",
        industry: "Enterprise",
        type: "Dashboard UX",
        behanceId: "823456789",
        behanceUrl: "https://www.behance.net/gallery/823456789/Analytics-Dashboard",
    },
    {
        title: "Gen-AI Motion System",
        industry: "AI · Tech",
        type: "Motion Design",
        behanceId: "923456789",
        behanceUrl: "https://www.behance.net/gallery/923456789/AI-Motion",
    },
    {
        title: "Media App Redesign",
        industry: "Entertainment",
        type: "UX/UI Design",
        behanceId: "103456789",
        behanceUrl: "https://www.behance.net/gallery/103456789/Media-App",
    },
];

export default function Projects() {
    return (
        <section className="py-32 bg-[#121212] overflow-hidden">
            <div className="w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center max-w-8xl mx-auto"
                >
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">
                        Featured
                    </span>
                    <h2 className="mt-3 text-4xl md:text-6xl font-black text-white">
                        Selected Works
                    </h2>
                </motion.div>

                {/* Horizontal grid */}
                <div
                    className="flex gap-6 overflow-x-auto no-scrollbar"
                    style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingtop: "20px",
                        paddingBottom: "20px",
                    }}
                >
                    {projects.map((proj, i) => (
                        <motion.a
                            key={i}
                            href={proj.behanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.05,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -6 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer shrink-0"
                            style={{
                                width: "calc((100vw - 140px) / 5)",
                                minWidth: "260px",
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                backdropFilter: "blur(16px)",
                            }}
                        >
                            {/* Behance thumbnail */}
                            <div className="aspect-[16/9] bg-black overflow-hidden">
                                <iframe
                                    src={`https://www.behance.net/embed/project/${proj.behanceId}`}
                                    className="w-full h-full pointer-events-none"
                                    allowFullScreen
                                />
                            </div>

                            {/* Content */}
                            <div
                                style={{
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                    paddingTop: "20px",
                                    paddingBottom: "20px",
                                }}
                            >
                                <h3 className="text-base font-bold text-white mb-1">
                                    {proj.title}
                                </h3>
                                <p className="text-[11px] uppercase tracking-wide text-white/50">
                                    {proj.industry} · {proj.type}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}