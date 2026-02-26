"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { BadgeCheck, Clock, MapPin, Building, Trophy, ArrowLeft, Phone, Mail, User, Download, Calendar, Layout, Info, Navigation2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

export default function ProjectDetail() {
    const params = useParams();
    const project = projects.find(p => p.id === params.id);
    const [activeTab, setActiveTab] = useState<"Overview" | "Gallery" | "FloorPlan" | "Location">("Overview");

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Header Spacer */}
            <div className="h-20 lg:h-24 bg-primary" />

            {/* Navigation Strip */}
            <div className="bg-gray-50 border-b border-gray-200 sticky top-20 lg:top-24 z-40 transition-all">
                <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex flex-wrap items-center justify-between gap-4">
                    <Link href="/projects" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                        <ArrowLeft size={18} /> Back to Listings
                    </Link>
                    <div className="flex gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0">
                        {["Overview", "Gallery", "FloorPlan", "Location"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 py-1 ${activeTab === tab ? "border-accent text-accent" : "border-transparent text-gray-400 hover:text-primary"}`}
                            >
                                {tab === "FloorPlan" ? "Floor Plans" : tab}
                            </button>
                        ))}
                    </div>
                    <div className="hidden lg:flex gap-4">
                        <button className="btn-outline !py-2 !px-4 !text-xs flex items-center gap-2">
                            <Download size={14} /> Brochure
                        </button>
                        <button className="btn-primary !py-2 !px-4 !text-xs">Schedule Visit</button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full p-12 text-white z-20">
                    <div className="w-full px-6 md:px-12 lg:px-20">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${project.status === "Ongoing" ? "bg-accent text-primary" : "bg-green-600 text-white"}`}>
                                {project.status}
                            </div>
                            <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase">
                                {project.category}
                            </div>
                            {project.subCategory && (
                                <div className="bg-secondary/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {project.subCategory}
                                </div>
                            )}
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-bold mb-6">{project.name}</h1>
                        <div className="flex flex-wrap items-center gap-8 text-lg opacity-90">
                            <span className="flex items-center gap-2"><MapPin size={22} className="text-accent" /> {project.location}</span>
                            <span className="flex items-center gap-2"><Building size={22} className="text-accent" /> {project.type}</span>
                            <span className="flex items-center gap-2"><Trophy size={22} className="text-accent" /> By <Link href={`/developers/${project.developerId}`} className="text-accent hover:underline">{project.developer}</Link></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Areas */}
            <section className="py-20">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Tab Content */}
                        <div className="lg:col-span-2 space-y-16">
                            {activeTab === "Overview" && (
                                <div className="animate-in fade-in duration-500">
                                    <h2 className="text-3xl font-bold text-primary mb-6">Project Overview</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-10">{project.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                        <div className="bg-gray-50 p-6 rounded-[5px] border border-gray-100">
                                            <p className="text-gray-400 text-xs font-bold uppercase mb-2">Budget Range</p>
                                            <p className="text-2xl font-bold text-primary">{project.budgetRange}</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-[5px] border border-gray-100">
                                            <p className="text-gray-400 text-xs font-bold uppercase mb-2">Possession Status</p>
                                            <p className="text-2xl font-bold text-primary flex items-center gap-2">
                                                <Calendar size={20} className="text-accent" /> {project.possession}
                                            </p>
                                        </div>
                                    </div>

                                    {project.amenities && (
                                        <div className="mb-16">
                                            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                                                    <Layout size={20} />
                                                </div>
                                                Premium Amenities
                                            </h3>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                                {project.amenities.map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 text-gray-700 font-semibold">
                                                        <div className="w-2 h-2 bg-accent rounded-full" /> {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {project.highlights && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                                                    <Trophy size={20} />
                                                </div>
                                                Key Highlights
                                            </h3>
                                            <div className="space-y-4">
                                                {project.highlights.map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-[5px] shadow-sm border border-gray-100 hover:border-accent transition-colors">
                                                        <BadgeCheck className="text-accent" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === "Gallery" && (
                                <div className="animate-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                                        <ImageIcon size={28} className="text-accent" /> Project Gallery
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.gallery?.map((img, idx) => (
                                            <div key={idx} className="relative aspect-video rounded-[5px] overflow-hidden shadow-xl">
                                                <Image src={img} alt={`${project.name} ${idx + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-700" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "FloorPlan" && (
                                <div className="animate-in slide-in-from-bottom-4 duration-500 text-center">
                                    <h2 className="text-3xl font-bold text-primary mb-8 text-left">Floor Plans</h2>
                                    {project.floorPlans ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            {project.floorPlans.map((plan, idx) => (
                                                <div key={idx} className="bg-gray-50 p-8 rounded-[5px] border border-gray-100">
                                                    <Image src={plan.image} alt={plan.title} width={800} height={600} className="w-full h-auto mb-6 rounded-[5px] shadow-md" />
                                                    <h4 className="text-xl font-bold text-primary uppercase tracking-wider">{plan.title}</h4>
                                                    <button className="mt-4 text-accent font-bold hover:underline flex items-center gap-2 mx-auto">
                                                        <Download size={16} /> Download PDF
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="py-20 text-gray-400 font-bold">Floor plans coming soon. Please contact us for details.</div>
                                    )}
                                </div>
                            )}

                            {activeTab === "Location" && (
                                <div className="animate-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-3xl font-bold text-primary mb-8">Location & Connectivity</h2>
                                    <div className="bg-gray-200 aspect-video rounded-[5px] mb-12 flex items-center justify-center text-gray-400 font-bold">
                                        [Interactive Location Map Placeholder]
                                    </div>

                                    {project.locationAdvantages && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                                <Navigation2 size={24} className="text-accent" /> Location Advantages
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.locationAdvantages.map((adv, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-[5px] bg-gray-50 border border-gray-100">
                                                        <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                                                        <span className="text-gray-700 font-medium">{adv}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Sidebar: Inquiry Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-44 bg-primary rounded-[5px] p-8 text-white shadow-2xl border border-accent/20">
                                <div className="text-center mb-10">
                                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-wider">Interested in {project.name}?</h3>
                                    <p className="text-accent font-bold text-sm">Schedule a Visit Today</p>
                                </div>

                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Full Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-[5px] px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Phone Number</label>
                                        <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-[5px] px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="+91 00000 00000" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Preferred Date</label>
                                        <input type="date" className="w-full bg-white/5 border border-white/10 rounded-[5px] px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                                    </div>
                                    <button className="btn-primary !w-full !py-4 shadow-xl">Express Interest Now</button>
                                </form>

                                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                                    <p className="text-center text-sm opacity-60">Or connect with our sales lead</p>
                                    <div className="flex flex-col gap-4">
                                        <a href="tel:+919922991999" className="flex items-center gap-4 bg-white/5 p-4 rounded-[5px] hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                                                <Phone size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest font-bold opacity-50">Call Directly</p>
                                                <p className="font-bold">+91 99229 91999</p>
                                            </div>
                                        </a>
                                        <a href="mailto:info@housekey.in" className="flex items-center gap-4 bg-white/5 p-4 rounded-[5px] hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                                                <Mail size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest font-bold opacity-50">Email Us</p>
                                                <p className="font-bold">info@housekey.in</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
