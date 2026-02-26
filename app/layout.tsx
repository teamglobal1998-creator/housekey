import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HouseKey - Unlocking Your Dream Lifestyle",
    description: "Unlocking Real Estate Success in Pune & PCMC through Strategic Sales Expertise and Local Market Mastery.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "RealEstateAgent",
                            "name": "HouseKey",
                            "image": "https://housekey.in/logo.png",
                            "description": "Unlocking Real Estate Success in Pune & PCMC through Strategic Sales Expertise and Local Market Mastery.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Office No 405, 4th Floor, City Square",
                                "addressLocality": "Shivaji Nagar, Pune",
                                "postalCode": "411005",
                                "addressCountry": "IN"
                            },
                            "telephone": "+919922991999",
                            "url": "https://housekey.in"
                        })
                    }}
                />
            </head>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
