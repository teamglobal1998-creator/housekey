import { ArrowRight, Building2, CheckCircle2, PhoneCall, TrendingUp, Users, Clock, MapPin, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { blogs } from "@/data/blogs";
import EMICalculator from "@/components/EMICalculator";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* New Hero Section - Split Luxury Layout */}
            <section className="relative min-h-[100vh] flex flex-col lg:flex-row bg-primary text-white overflow-hidden">
                {/* Text Content Area */}
                <div className="w-full lg:w-[55%] flex items-center z-20 relative px-6 md:px-12 lg:px-20 py-20 lg:py-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary/95 to-secondary/20 z-0"></div>
                    <div className="max-w-2xl relative z-10 lg:pr-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/40 rounded-full bg-accent/10 text-accent font-bold tracking-widest text-xs uppercase mb-8 shadow-[0_0_15px_rgba(197,160,89,0.15)]">
                            <Star size={14} className="fill-accent text-accent" /> Premium Real Estate
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] mb-6">
                            Elevating the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">Standard</span> of Living.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                            Discover Pune's most exclusive residential and commercial addresses. Expert advisory, seamless transactions, and a portfolio aligned with your lifestyle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 mb-16">
                            <Link href="/projects" className="bg-accent text-primary font-bold py-4 px-8 rounded-[5px] hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-[0_0_20px_rgba(197,160,89,0.25)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:-translate-y-1">
                                View Portfolio <ArrowRight size={20} />
                            </Link>
                            <Link href="/contact" className="border-2 border-white/20 text-white font-bold py-4 px-8 rounded-[5px] hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                                Speak to an Expert
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">500<span className="text-accent">+</span></p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Happy Families</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">16<span className="text-accent">+</span></p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years Trust</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">₹500<span className="text-accent">Cr+</span></p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Sales Volume</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Area */}
                <div className="w-full lg:w-[45%] h-[50vh] lg:h-auto relative z-10">
                    <div className="absolute inset-0 bg-primary/20 z-10 lg:hidden"></div>
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-primary to-transparent z-10 hidden lg:block"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
                        alt="Luxury Real Estate"
                        fill
                        className="object-cover"
                    />

                    {/* Floating Badge */}
                    <div className="absolute bottom-12 right-12 z-20 bg-primary/80 backdrop-blur-md border border-white/10 p-6 rounded-[5px] hidden md:flex items-center gap-5 shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent to-yellow-600 rounded-[5px] flex items-center justify-center">
                            <Building2 className="text-primary" size={28} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">Premium Projects</p>
                            <Link href="/projects" className="text-accent font-bold text-sm hover:text-white transition-colors flex items-center gap-1 mt-1">Explore Now <ArrowRight size={14} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <StatCard icon={<Users className="text-accent" />} number="16+" label="Years Experience" />
                        <StatCard icon={<Building2 className="text-accent" />} number="6+" label="Delivered Projects" />
                        <StatCard icon={<Users className="text-accent" />} number="15+" label="Sales Experts" />
                        <StatCard icon={<TrendingUp className="text-accent" />} number="100%" label="Client Focus" />
                    </div>
                </div>
            </section>

            {/* Building Trust Section */}
            <section className="py-24 bg-gray-50">
                <div className="w-full px-6 md:px-12 lg:px-20 border-y border-accent/20">
                    <div className="text-center mb-20 pt-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-4">
                            Building Trust, Delivering Excellence
                        </h2>
                        <p className="text-[#666666] text-lg">
                            Our mission is to simplify the real estate journey for everyone.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 pb-10">
                        {/* Left Column - Our Story */}
                        <div>
                            <div className="mb-6">
                                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">OUR STORY</span>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#222222] mt-4 mb-6 leading-tight">
                                    A Legacy of Real Estate Success
                                </h3>
                            </div>
                            <div className="space-y-6 text-[#444444] text-base md:text-lg leading-relaxed">
                                <p>
                                    Founded with a vision to simplify real estate transactions, HouseKey has grown into a leading property consultancy firm. We understand that a home is more than just bricks and mortar; it's where memories are made.
                                </p>
                                <p>
                                    Our team of dedicated professionals brings years of experience and a passion for helping people. From first-time homebuyers to seasoned investors, we treat every client with the same level of care and integrity.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Vision & Values */}
                        <div className="flex flex-col gap-12 justify-center">
                            {/* Our Vision */}
                            <div className="bg-white p-8 rounded-[5px] shadow-sm border border-accent/10">
                                <div className="w-12 h-12 bg-accent/10 rounded-[5px] flex items-center justify-center mb-6">
                                    <div className="w-6 h-6 border-2 border-accent rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#222222] mb-3">Our Vision</h4>
                                <p className="text-[#444444] leading-relaxed">
                                    To be the most trusted name in real estate, known for transparency and results.
                                </p>
                            </div>

                            {/* Our Values */}
                            <div className="bg-white p-8 rounded-[5px] shadow-sm border border-accent/10">
                                <div className="w-12 h-12 bg-accent/10 rounded-[5px] flex items-center justify-center mb-6 text-accent">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 3L2 9L12 21L22 9L18 3H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.5" />
                                        <path d="M2 9H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 9L6 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 9L18 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-[#222222] mb-3">Our Values</h4>
                                <p className="text-[#444444] leading-relaxed">
                                    Integrity, Professionalism, and Customer Satisfaction are at our core.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ongoing Projects Section */}
            <section className="py-20 bg-white">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Ongoing <span className="text-accent">Projects</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                            Discover our latest residential and commercial developments currently under construction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Swadesha */}
                        <div className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-accent/10 hover-lift group">
                            <div className="relative h-56">
                                <Image
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
                                    alt="Swadesha"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1 shadow-lg">
                                    <Clock size={12} /> Ongoing
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-accent text-sm font-bold mb-2 uppercase tracking-wider">
                                    <MapPin size={14} /> Moshi
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-1">Swadesha</h3>
                                <p className="text-gray-500 text-sm mb-4">By <Link href="/developers/bhandari-associates" className="text-accent hover:underline">Bhandari Associates</Link></p>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-primary font-semibold text-sm">2/3/4 BHK</span>
                                    <Link href="/projects/swadesha" className="text-accent font-bold text-sm hover:underline">View Details</Link>
                                </div>
                            </div>
                        </div>

                        {/* Aurum Avenue */}
                        <div className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-accent/10 hover-lift group">
                            <div className="relative h-56">
                                <Image
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
                                    alt="Aurum Avenue"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1 shadow-lg">
                                    <Clock size={12} /> Ongoing
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-accent text-sm font-bold mb-2 uppercase tracking-wider">
                                    <MapPin size={14} /> Manchar, Pune
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-1">Aurum Avenue</h3>
                                <p className="text-gray-500 text-sm mb-4">By <Link href="/developers/poojan-developers" className="text-accent hover:underline">Poojan Developers</Link></p>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-primary font-semibold text-sm">Residential</span>
                                    <Link href="/projects/aurum-avenue" className="text-accent font-bold text-sm hover:underline">View Details</Link>
                                </div>
                            </div>
                        </div>

                        {/* Adi Prime */}
                        <div className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-accent/10 hover-lift group">
                            <div className="relative h-56">
                                <Image
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
                                    alt="Adi Prime"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1 shadow-lg">
                                    <Clock size={12} /> Ongoing
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-accent text-sm font-bold mb-2 uppercase tracking-wider">
                                    <MapPin size={14} /> Moshi
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-1">Adi Prime</h3>
                                <p className="text-gray-500 text-sm mb-4">By <Link href="/developers/adi-group" className="text-accent hover:underline">Adi Group</Link></p>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-primary font-semibold text-sm">Residential</span>
                                    <Link href="/projects/adi-prime" className="text-accent font-bold text-sm hover:underline">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/projects" className="btn-outline">
                            Browse All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* EMI Calculator Section */}
            <section className="py-20 bg-gray-50">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                Planning Your <span className="text-accent">Finances?</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                Use our interactive EMI calculator to get an estimate of your monthly installments. We partner with leading banks to provide you with the best interest rates and seamless home loan processing.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-[5px] shadow-md flex items-center justify-center text-accent">
                                        <TrendingUp size={24} />
                                    </div>
                                    <span className="text-primary font-bold">Attractive Interest Rates</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-[5px] shadow-md flex items-center justify-center text-accent">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <span className="text-primary font-bold">Quick Documentation</span>
                                </div>
                            </div>
                        </div>
                        <EMICalculator />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="w-full px-6 md:px-12 lg:px-20 text-center">
                    <div className="mb-16">
                        <h2 className="section-title">What Our <span className="text-accent">Clients Say</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                            Trust is built over time. Here's why 500+ families have chosen HouseKey for their property journeys.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-gray-50 p-8 rounded-[5px] border border-gray-100 flex flex-col items-center text-center hover-lift">
                                <div className="flex gap-1 text-accent mb-6">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                                <div className="mt-auto">
                                    <h4 className="text-primary font-bold text-lg">{t.name}</h4>
                                    <p className="text-accent text-xs font-bold uppercase tracking-widest">{t.project} Buyer</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Preview Section */}
            <section className="py-20 bg-gray-50">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    <div className="flex flex-wrap justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="section-title text-left">Real Estate <span className="text-accent">Insights</span></h2>
                            <p className="text-gray-600 mt-4">Stay updated with the latest trends and guides in the Pune property market.</p>
                        </div>
                        <Link href="/blog" className="btn-outline flex items-center gap-2">View All Articles <ArrowRight size={18} /></Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogs.slice(0, 2).map((post) => (
                            <Link href={`/blog/${post.id}`} key={post.id} className="group bg-white rounded-[5px] overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-xl transition-all h-full">
                                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-accent font-bold text-[10px] uppercase tracking-widest mb-2">{post.category}</span>
                                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                                    <span className="mt-auto text-primary font-bold text-sm flex items-center gap-2">Read More <ArrowRight size={14} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white text-center border-t-4 border-accent">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    <h2 className="text-4xl font-bold mb-6">Ready to find your <span className="text-accent">next home?</span></h2>
                    <p className="text-xl mb-8 opacity-90">Let our experts guide you through the best real estate opportunities in Pune & PCMC.</p>
                    <Link href="/contact" className="btn-primary">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
    return (
        <div className="text-center p-6 bg-white rounded-[5px] shadow-sm border-t-4 border-accent hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex justify-center mb-4">{icon}</div>
            <div className="text-4xl font-bold text-primary mb-2">{number}</div>
            <div className="text-accent font-bold uppercase text-xs tracking-widest">{label}</div>
        </div>
    );
}
