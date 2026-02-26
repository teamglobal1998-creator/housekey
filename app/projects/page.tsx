"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { BadgeCheck, Clock, MapPin, Search, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    const [activeTab, setActiveTab] = useState<"Ongoing" | "Completed">("Ongoing");
    const [activeCategory, setActiveCategory] = useState<"All" | "Residential" | "Commercial">("All");

    const filteredProjects = projects.filter(p =>
        p.status === activeTab &&
        (activeCategory === "All" || p.category === activeCategory)
    );

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h1 className="section-title">Exclusive <span className="text-accent">Portfolio</span></h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-xl">
                        Discover Pune's most premium residential and commercial developments.
                    </p>
                </div>

                {/* Filters & Tabs */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex bg-white p-1 rounded-[5px] shadow-md border border-gray-100">
                        <button
                            onClick={() => setActiveTab("Ongoing")}
                            className={`px-8 py-3 rounded-[5px] font-bold transition-all ${activeTab === "Ongoing" ? "bg-primary text-white shadow-lg" : "text-gray-500 hover:text-primary"}`}
                        >
                            Ongoing Projects
                        </button>
                        <button
                            onClick={() => setActiveTab("Completed")}
                            className={`px-8 py-3 rounded-[5px] font-bold transition-all ${activeTab === "Completed" ? "bg-primary text-white shadow-lg" : "text-gray-500 hover:text-primary"}`}
                        >
                            Completed Projects
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest hidden md:block">Filter by:</span>
                        <div className="flex gap-2">
                            {["All", "Residential", "Commercial"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat as any)}
                                    className={`px-6 py-2 rounded-full border-2 font-bold transition-all ${activeCategory === cat ? "border-accent bg-accent text-primary" : "border-gray-200 text-gray-500 hover:border-accent hover:text-accent"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-accent/10 hover-lift group">
                                <div className="relative h-56 lg:h-64">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1 shadow-lg ${project.status === "Ongoing" ? "bg-accent text-primary" : "bg-green-600 text-white"
                                        }`}>
                                        {project.status === "Ongoing" ? <><Clock size={12} /> Ongoing</> : <><BadgeCheck size={12} /> Completed</>}
                                    </div>
                                    {project.subCategory && (
                                        <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {project.subCategory}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 lg:p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-1">
                                                <MapPin size={14} /> {project.location}
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-400 text-[10px] font-bold uppercase">Starting from</p>
                                            <p className="text-accent font-bold text-lg">{project.budgetRange.split(' - ')[0]}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">{project.description}</p>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Developer</p>
                                            <Link href={`/developers/${project.developerId}`} className="text-primary font-bold text-sm hover:text-accent transition-colors">{project.developer}</Link>
                                        </div>
                                        <Link href={`/projects/${project.id}`} className="btn-primary !py-2 !px-4 !text-xs">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <h3 className="text-2xl font-bold text-gray-400">No {activeCategory.toLowerCase()} projects found in this status.</h3>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
