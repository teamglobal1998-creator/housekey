import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t-4 border-accent">
            <div className="w-full px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 bg-accent rounded-[5px] flex items-center justify-center text-primary font-bold shadow-[0_0_10px_rgba(197,160,89,0.2)]">HK</div>
                            <span className="text-xl font-black tracking-tighter">HOUSE<span className="text-accent">KEY</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Accelerate sales velocity, amplify brand equity, and deliver ROI-driven results for real estate developers.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-black mb-6 border-b-2 border-accent/30 pb-2 inline-block uppercase tracking-widest text-accent">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Our Projects</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black mb-6 border-b-2 border-accent/30 pb-2 inline-block uppercase tracking-widest text-accent">Legal</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black mb-6 border-b-2 border-accent/30 pb-2 inline-block uppercase tracking-widest text-accent">Contact Us</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-accent shrink-0" size={18} />
                                <span className="text-gray-400">Moshi, PCMC, Pune - 412105</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-accent shrink-0" size={18} />
                                <a href="tel:+919922991999" className="text-gray-400 hover:text-white transition-colors">+91 99229 91999</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-accent shrink-0" size={18} />
                                <a href="mailto:info@housekey.in" className="text-gray-400 hover:text-white transition-colors">info@housekey.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} HouseKey Real Estate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
