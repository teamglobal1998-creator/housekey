"use client";

import { developers } from "@/data/developers";
import { projects } from "@/data/projects";
import { BadgeCheck, Clock, MapPin, Building, Trophy, ArrowLeft, Phone, Mail, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

export default function DeveloperDetail() {
    const params = useParams();
    const developer = developers.find(d => d.id === params.id);

    if (!developer) {
        notFound();
    }

    const developerProjects = projects.filter(p => p.developerId === developer.id);
    const ongoingProjects = developerProjects.filter(p => p.status === "Ongoing");
    const completedProjects = developerProjects.filter(p => p.status === "Completed");

    return (
        <main className="min-h-screen bg-white">
            {/* Header Spacer */}
            <div className="h-20 lg:h-24 bg-primary" />

            {/* Back Button */}
            <div className="container mx-auto px-6 py-6 font-semibold">
                <Link href="/projects" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                    <ArrowLeft size={18} /> Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="relative w-48 h-48 bg-white rounded-[5px] p-4 shadow-2xl flex items-center justify-center shrink-0">
                            <Image src={developer.logo} alt={developer.name} fill className="object-contain p-4" />
                        </div>
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{developer.name}</h1>
                            <p className="text-xl opacity-80 max-w-2xl mb-8">
                                {developer.description}
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex flex-col">
                                    <span className="text-accent text-sm font-bold uppercase tracking-wider">Experience</span>
                                    <span className="text-2xl font-bold">{developer.experience}</span>
                                </div>
                                <div className="w-px h-12 bg-white/20 hidden md:block" />
                                <div className="flex flex-col">
                                    <span className="text-accent text-sm font-bold uppercase tracking-wider">Projects Delivered</span>
                                    <span className="text-2xl font-bold">{developer.projectsDelivered}</span>
                                </div>
                                <div className="w-px h-12 bg-white/20 hidden md:block" />
                                <div className="flex flex-col">
                                    <span className="text-accent text-sm font-bold uppercase tracking-wider">Specialization</span>
                                    <span className="text-2xl font-bold">{developer.specialization}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Overview */}
            <section className="py-20">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    {/* Ongoing Projects */}
                    {ongoingProjects.length > 0 && (
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold text-primary mb-12 flex items-center gap-4">
                                <Clock className="text-accent" /> Ongoing Developments
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {ongoingProjects.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Completed Projects */}
                    {completedProjects.length > 0 && (
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-12 flex items-center gap-4">
                                <BadgeCheck className="text-accent" /> Completed Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {completedProjects.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Developer Banner */}
            <section className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Interested in {developer.name} Projects?</h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        Connect with HouseKey advisors to get exclusive details and priority access to all current and upcoming projects by {developer.name}.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn-primary">Connect with Expert</Link>
                        <button className="btn-outline flex items-center gap-2">
                            <Phone size={18} /> +91 99229 91999
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <div className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-accent/10 hover-lift group">
            <div className="relative h-56">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1 shadow-lg ${project.status === "Ongoing" ? "bg-accent text-primary" : "bg-green-600 text-white"}`}>
                    {project.status === "Ongoing" ? <><Clock size={12} /> Ongoing</> : <><BadgeCheck size={12} /> Completed</>}
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 text-accent text-sm font-bold mb-2 uppercase tracking-wider">
                    <MapPin size={14} /> {project.location}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{project.name}</h3>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-primary font-semibold text-sm">{project.type}</span>
                    <Link href={`/projects/${project.id}`} className="text-accent font-bold text-sm hover:underline">View Details</Link>
                </div>
            </div>
        </div>
    );
}
