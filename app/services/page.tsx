import { BarChart3, Megaphone, Target, Zap } from "lucide-react";

const services = [
    {
        title: "360° Marketing",
        description: "End-to-end digital and offline marketing campaigns designed to capture and convert leads.",
        icon: <Megaphone className="w-12 h-12 text-secondary" />,
        features: ["Digital Ads (Google & Meta)", "Professional Video Tours", "Email & SMS Marketing", "Influencer Collaborations"]
    },
    {
        title: "Sales Execution",
        description: "Our dedicated on-ground teams ensure high conversion rates and seamless buyer experiences.",
        icon: <Target className="w-12 h-12 text-secondary" />,
        features: ["Dedicated Sales Teams", "Channel Partner Network", "Lead Management", "CRM Integration"]
    },
    {
        title: "Brand Building",
        description: "We help developers create a lasting brand identity that resonates with premium buyers.",
        icon: <Zap className="w-12 h-12 text-secondary" />,
        features: ["Project Naming & Branding", "Launch Event Management", "Corporate Identity", "Reputation Management"]
    },
    {
        title: "Strategic Advisory",
        description: "Data-driven insights to help you price and position your project for maximum ROI.",
        icon: <BarChart3 className="w-12 h-12 text-secondary" />,
        features: ["Buyer Profiling", "Pricing Strategy", "Market Competition Analysis", "Inventory Planning"]
    }
];

export default function Services() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        HouseKey provides a comprehensive end-to-end sales and marketing ecosystem for the real estate industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 p-8 rounded-[5px] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all border-b-4 border-b-secondary">
                            <div className="shrink-0">{service.icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <ProcessStep number="01" title="Diagnose" desc="Comprehensive audit of current sales and marketing efforts." />
                        <ProcessStep number="02" title="Strategize" desc="Custom-built roadmap tailored to project goals." />
                        <ProcessStep number="03" title="Execute" desc="Agile implementation of marketing and sales tactics." />
                        <ProcessStep number="04" title="Scale" desc="Leveraging success to amplify results and referrals." />
                    </div>
                </div>
            </div>
        </main>
    );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="relative p-6 text-center">
            <div className="text-6xl font-black text-gray-100 absolute top-0 left-1/2 -translate-x-1/2 -z-10">{number}</div>
            <h4 className="text-xl font-bold text-primary mb-2 mt-8">{title}</h4>
            <p className="text-gray-600 text-sm">{desc}</p>
        </div>
    );
}
