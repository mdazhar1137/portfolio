"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Airfryer PDP Content",
        industry: "D2C · E-Commerce",
        type: "Marketplace Content Design",
        behanceId: "244077095",
        behanceUrl:
            "https://www.behance.net/gallery/244077095/Air-Fryer-High-Conversion-Listing-Images-A-Design",
    },
    {
        title: "Immigration Agency Branding",
        industry: "Immigration & Consulting",
        type: "Creative Branding · Visual Identity",
        behanceId: "165530793",
        behanceUrl: "https://www.behance.net/gallery/165530793/Immigration-Agency-Opening-Soon-Creative-Branding",
    },
    {
        title: "Drama 1988 Movie Posters",
        industry: "Film & Entertainment",
        type: "Poster Design · Visual Branding",
        behanceId: "152156015",
        behanceUrl: "https://www.behance.net/gallery/152156015/Drama-1988-Movie-Posters-Feature-Telugu-Movie",
    },
    {
        title: "Skin Clinic Creative Flyer",
        industry: "Healthcare & Wellness",
        type: "Flyer Design · Print Branding",
        behanceId: "186377655",
        behanceUrl: "https://www.behance.net/gallery/186377655/Skin-Clinic-Creative-Flyer-Design-Conceptual-Flyer",
    },
    {
        title: "YSRCP 2024 Election Creative Ads",
        industry: "Political Campaign & Advertising",
        type: "Creative Advertising · Campaign Graphics",
        behanceId: "196079047",
        behanceUrl: "https://www.behance.net/gallery/196079047/YSRCP-Election-2024-Creative-ads-Andra-elections-2024",
    },
    {
        title: "Dubai Expo 2020 Social Media Campaign",
        industry: "Event Marketing & Social",
        type: "Social Media Campaign · Creative Content",
        behanceId: "164841309",
        behanceUrl: "https://www.behance.net/gallery/164841309/Dubai-Expo-2020-Creative-Social-Media-Campaign",
    },
    {
        title: "Traveling Bag Creative Poster",
        industry: "Product Branding & Print",
        type: "Poster Design · Visual Communication",
        behanceId: "143680623",
        behanceUrl: "https://www.behance.net/gallery/143680623/Travelling-Bag-Creative-Poster-Design-Poster",
    },
    {
        title: "Restaurant Poster Design",
        industry: "Food & Beverage Branding",
        type: "Poster Design · Visual Marketing",
        behanceId: "122931099",
        behanceUrl: "https://www.behance.net/gallery/122931099/Restaurant-Poster-Design",
    },
    {
        title: "Cybersecurity & Cloud Services Logo",
        industry: "Tech & Cybersecurity Branding",
        type: "Logo Design · Brand Identity",
        behanceId: "174194145",
        behanceUrl: "https://www.behance.net/gallery/174194145/Cyber-Security-and-Cloud-Services-Conceptual-Logo",
    },
    {
        title: "Ramadan Food Creative Ads",
        industry: "Food & Festival Branding",
        type: "Poster Design · Campaign Graphics",
        behanceId: "166177569",
        behanceUrl: "https://www.behance.net/gallery/166177569/Ramadan-Food-Creative-Ads-Ramadan-Conceptual-Poster",
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
                        paddingTop: "20px",
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