import type { Metadata } from "next";
import { Globe, ShieldCheck, Home, PlaneLanding, Briefcase, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "NRI Real Estate Investment Service Pune | HouseKey",
    description: "Expert real estate advisory for NRIs investing in Pune and PCMC. End-to-end property management, secure transactions, and high ROI investment strategies.",
};

export default function NRICorner() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h1 className="section-title">NRI <span className="text-accent">Corner</span></h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-xl">
                        Dedicated real estate services for Non-Resident Indians seeking the best investment opportunities in Pune and PCMC.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <FeatureCard
                        icon={<Globe className="text-accent" size={32} />}
                        title="Global Assistance"
                        description="End-to-end property management and advisory services regardless of where you are in the world."
                    />
                    <FeatureCard
                        icon={<ShieldCheck className="text-accent" size={32} />}
                        title="Secure Transactions"
                        description="Complete transparency and legal verification for seamless, worry-free property acquisitions."
                    />
                    <FeatureCard
                        icon={<Home className="text-accent" size={32} />}
                        title="Property Management"
                        description="We handle rentals, maintenance, and resale for your investments in Pune."
                    />
                    <FeatureCard
                        icon={<PlaneLanding className="text-accent" size={32} />}
                        title="Visit Assistance"
                        description="Personalized property tours and hospitality when you visit India for your investments."
                    />
                    <FeatureCard
                        icon={<Briefcase className="text-accent" size={32} />}
                        title="Investment Strategy"
                        description="ROI-driven portfolio planning focused on emerging high-growth corridors of Pune."
                    />
                    <FeatureCard
                        icon={<Users className="text-accent" size={32} />}
                        title="Dedicated Advisor"
                        description="One-on-one consultation with NRI real estate experts based in Pune."
                    />
                </div>

                {/* Why Choose Us for NRI */}
                <div className="bg-primary text-white rounded-[5px] p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-accent">Why HouseKey for NRIs?</h3>
                            <p className="text-lg opacity-80 mb-8 leading-relaxed">
                                We understand the unique challenges faced by NRIs when investing in India—lack of local presence, transparency concerns, and complex documentation. HouseKey acts as your eyes and ears on the ground.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="text-accent" size={20} />
                                    <span>Verified & Legal Compliance Projects Only</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="text-accent" size={20} />
                                    <span>Regular Video Updates on Construction Progress</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="text-accent" size={20} />
                                    <span>Home Loan & Tax Compliance Advisory</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 p-8 rounded-[5px] border border-white/10">
                            <h4 className="text-2xl font-bold mb-6">Schedule an Overseas Call</h4>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded-[5px] py-3 px-4 focus:border-accent outline-none" />
                                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-[5px] py-3 px-4 focus:border-accent outline-none" />
                                <input type="tel" placeholder="WhatsApp Number" className="w-full bg-white/10 border border-white/20 rounded-[5px] py-3 px-4 focus:border-accent outline-none" />
                                <button className="btn-primary w-full py-3">Register Interest</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 bg-white rounded-[5px] border border-accent/10 hover:border-accent transition-all hover:shadow-xl group">
            <div className="mb-6 p-4 bg-accent/5 rounded-[5px] w-fit group-hover:bg-accent/10 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
