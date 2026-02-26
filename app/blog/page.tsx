"use client";

import { blogs } from "@/data/blogs";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogListing() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h1 className="section-title">Insights & <span className="text-accent">Guidance</span></h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-xl">
                        Your professional guide to real estate investment, buying strategies, and market updates in Pune.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogs.map((post) => (
                        <article key={post.id} className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-gray-100 hover-lift group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 border-b border-gray-50 pb-6">
                                    <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><User size={14} className="text-accent" /> {post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group"
                                >
                                    Read Full Insight <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
