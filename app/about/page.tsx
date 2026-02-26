import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="w-full px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="section-title">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            With over 16 years of expertise in the Pune and PCMC real estate markets, HouseKey was founded with a singular mission: to bridge the gap between world-class developments and discerning homebuyers.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Led by Sumit Mahajan, a veteran with 22+ years of experience in hospitality, telecom, and real estate, we bring a strategic, results-driven approach to every project we undertake. Our team of 15+ experts is dedicated to delivering excellence.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <h4 className="text-4xl font-bold text-accent mb-2">16+</h4>
                                <p className="text-gray-500 font-medium">Years of Expertise</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-accent mb-2">6+</h4>
                                <p className="text-gray-500 font-medium">Projects Delivered</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full -z-10" />
                        <Image
                            src="/sumit_mahajan.jpg"
                            alt="Sumit Mahajan - CEO HouseKey"
                            width={800}
                            height={1000}
                            className="rounded-[5px] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
                        />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-[5px] -z-10" />
                    </div>
                </div>

                {/* CEO Message */}
                <div className="mt-32 p-12 bg-primary text-white rounded-[5px] relative overflow-hidden border-l-8 border-accent">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 max-w-4xl">
                        <h3 className="text-3xl font-bold mb-6 text-accent">From the CEO's Desk</h3>
                        <p className="text-xl italic opacity-90 mb-8 leading-relaxed">
                            "At HouseKey, we don't just sell properties; we build trust. Our focus is on creating value for both developers and buyers by ensuring transparency, expertise, and a commitment to excellence in every transaction."
                        </p>
                        <div>
                            <p className="text-xl font-bold text-accent">Sumit Mahajan</p>
                            <p className="opacity-70">CEO & Director, HouseKey</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
