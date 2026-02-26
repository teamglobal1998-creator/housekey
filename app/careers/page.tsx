import { Briefcase, Send } from "lucide-react";

export default function Careers() {
    const jobs = [
        { title: "Sales Manager", location: "Moshi, PCMC", type: "Full-time", description: "Lead on-ground sales teams and drive closures for premium residential projects." },
        { title: "Digital Marketing Specialist", location: "Remote/Hybrid", type: "Full-time", description: "Optimize Meta and Google campaigns for lead generation in the real estate sector." },
        { title: "Customer Relationship Manager", location: "Pune", type: "Full-time", description: "Manage post-sales relationships and ensure seamless buyer onboarding." }
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="section-title">Join Our Team</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Build a rewarding career in the real estate industry with Pune's leading experts. We value talent, integrity, and results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {jobs.map((job, index) => (
                        <div key={index} className="bg-white p-8 rounded-[5px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-[5px] flex items-center justify-center">
                                    <Briefcase className="text-secondary" size={24} />
                                </div>
                                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold uppercase">{job.type}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{job.title}</h3>
                            <p className="text-secondary font-semibold text-sm mb-4">{job.location}</p>
                            <p className="text-gray-600 mb-6">{job.description}</p>
                            <button className="btn-outline !py-2 !px-4 text-sm w-full md:w-auto">Apply Now</button>
                        </div>
                    ))}
                </div>

                <div className="bg-primary p-12 rounded-[5px] text-white text-center">
                    <h2 className="text-3xl font-bold mb-6">Don't see a perfect fit?</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Drop your resume anyway! We're always looking for passionate individuals to join the HouseKey family.
                    </p>
                    <a href="mailto:careers@housekey.in" className="btn-primary inline-flex items-center gap-2">
                        Send Resume <Send size={20} />
                    </a>
                </div>
            </div>
        </main>
    );
}
