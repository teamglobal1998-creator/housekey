import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t-4 border-accent">
            <div className="w-full px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-primary font-bold">HK</div>
                            <span className="text-xl font-bold tracking-tighter">HOUSE<span className="text-accent">KEY</span></span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Accelerate sales velocity, amplify brand equity, and deliver ROI-driven results for real estate developers.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/projects" className="hover:text-accent transition-colors">Our Projects</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Legal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-accent shrink-0" size={20} />
                                <span>Moshi, PCMC, Pune - 412105</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-accent shrink-0" size={20} />
                                <span>+91 99229 91999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-accent shrink-0" size={20} />
                                <span>info@housekey.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} HouseKey Real Estate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
