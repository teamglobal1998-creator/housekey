import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h1 className="section-title">Get In Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Have a question or looking for your next home? We are here to help. Reach out to our experts today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <ContactInfoCard
                            icon={<Phone className="text-white" size={24} />}
                            title="Call Us"
                            detail="+91 99229 91999"
                            sub="Mon-Sat, 9am - 7pm"
                        />
                        <ContactInfoCard
                            icon={<Mail className="text-white" size={24} />}
                            title="Email Us"
                            detail="info@housekey.in"
                            sub="We'll respond within 24h"
                        />
                        <ContactInfoCard
                            icon={<MapPin className="text-white" size={24} />}
                            title="Visit Office"
                            detail="Moshi, PCMC, Pune"
                            sub="Maharashtra - 412105"
                        />
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-10 rounded-[5px] shadow-xl">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-[5px] border border-gray-200 focus:border-secondary transition-colors outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary">Phone Number</label>
                                <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-[5px] border border-gray-200 focus:border-secondary transition-colors outline-none" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-primary">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-[5px] border border-gray-200 focus:border-secondary transition-colors outline-none" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-primary">Message</label>
                                <textarea rows={4} placeholder="I'm interested in..." className="w-full px-4 py-3 rounded-[5px] border border-gray-200 focus:border-secondary transition-colors outline-none resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button type="submit" className="w-full bg-secondary text-white py-4 rounded-[5px] font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg">
                                    Send Message <Send size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

function ContactInfoCard({ icon, title, detail, sub }: { icon: React.ReactNode, title: string, detail: string, sub: string }) {
    return (
        <div className="bg-white p-6 rounded-[5px] shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="w-14 h-14 bg-primary rounded-[5px] flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{title}</h4>
                <p className="text-xl font-bold text-primary">{detail}</p>
                <p className="text-sm text-gray-500">{sub}</p>
            </div>
        </div>
    );
}
