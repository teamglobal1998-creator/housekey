"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isWhiteNav = scrolled || !isHomePage;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isWhiteNav ? "bg-white shadow-md py-4" : "bg-transparent py-6"
            }`}>
            <div className="w-full px-6 md:px-12 lg:px-16 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary font-bold text-xl shadow-[0_0_15px_rgba(197,160,89,0.3)] group-hover:shadow-accent/50 transition-all">
                        HK
                    </div>
                    <span className={`text-2xl font-bold tracking-tighter ${isWhiteNav ? "text-primary" : "text-white"
                        }`}>
                        HOUSE<span className="text-accent underline decoration-accent/30">KEY</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className={`hidden md:flex items-center gap-6 font-semibold ${isWhiteNav ? "text-gray-700" : "text-white"
                    }`}>
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                    <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
                    <Link href="/nri-corner" className="hover:text-accent transition-colors whitespace-nowrap">NRI Corner</Link>
                    <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
                    <Link href="/careers" className="hover:text-accent transition-colors">Career</Link>
                    <Link href="/enquiry" className="hover:text-accent transition-colors font-bold text-accent">Enquiry</Link>
                    <Link href="/contact" className="btn-primary !py-2 !px-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap">Contact</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className={isWhiteNav ? "text-primary" : "text-white"} /> : <Menu className={isWhiteNav ? "text-primary" : "text-white"} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 font-bold text-primary">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="/nri-corner" onClick={() => setIsOpen(false)}>NRI Corner</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/careers" onClick={() => setIsOpen(false)}>Career</Link>
                    <Link href="/enquiry" className="text-accent" onClick={() => setIsOpen(false)}>Enquiry</Link>
                    <Link href="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
