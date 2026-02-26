"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#works", label: "Works" },
    { href: "#ux", label: "UX" },
    { href: "#cinematography", label: "Cinema" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-3 bg-[rgba(18,18,18,0.85)] backdrop-blur-xl border-b border-white/5"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="group flex items-center gap-2">
                    <span className="text-[10px] tracking-[0.35em] text-white/40 uppercase font-light">
                        Creative
                    </span>
                    <span className="w-px h-3 bg-white/20" />
                    <span
                        className="text-sm font-semibold tracking-widest uppercase text-white group-hover:text-[#c8a96e] transition-colors duration-300"
                        style={{ letterSpacing: "0.22em" }}
                    >
                        Portfolio
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c8a96e] group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <a
                        href="#about"
                        className="ml-4 px-5 py-2 text-[10px] tracking-[0.2em] uppercase border border-[#c8a96e]/40 text-[#c8a96e] hover:bg-[#c8a96e]/10 transition-all duration-300 rounded-sm"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-px bg-white origin-center transition-all"
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-6 h-px bg-white"
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-px bg-white origin-center"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden overflow-hidden bg-[rgba(18,18,18,0.95)] backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="flex flex-col px-6 py-6 gap-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
