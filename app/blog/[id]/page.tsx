"use client";

import { blogs } from "@/data/blogs";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

export default function BlogDetail() {
    const params = useParams();
    const post = blogs.find(b => b.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="h-20 lg:h-24 bg-primary" />

            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-accent font-bold mb-12 hover:translate-x--2 transition-transform">
                        <ArrowLeft size={18} /> Back to Insights
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                            {post.category}
                        </span>
                        <div className="h-px flex-grow bg-gray-100" />
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Calendar size={14} /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-12 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between mb-16 py-8 border-y border-gray-50">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent font-bold text-xl">
                                {post.author[0]}
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Written by</p>
                                <p className="text-primary font-bold">{post.author}</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-accent font-bold uppercase text-xs tracking-widest transition-colors">
                            <Share2 size={18} /> Share Insight
                        </button>
                    </div>

                    <div className="relative rounded-[5px] overflow-hidden mb-16 shadow-2xl aspect-video">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>

                    <div className="prose prose-xl prose-primary max-w-none">
                        <p className="text-2xl text-gray-600 font-medium leading-relaxed italic mb-12 border-l-4 border-accent pl-8">
                            {post.excerpt}
                        </p>
                        <div className="text-gray-700 leading-relaxed text-lg space-y-8">
                            {post.content}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter / Related */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <h3 className="text-3xl font-bold text-primary mb-6">Want more insights?</h3>
                    <p className="text-gray-500 mb-10">Subscribe to our monthly newsletter and get the latest real estate market updates directly in your inbox.</p>
                    <form className="flex flex-col md:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-grow bg-white border border-gray-200 rounded-[5px] px-6 py-4 focus:outline-none focus:border-accent shadow-sm" />
                        <button className="btn-primary">Subscribe Now</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
