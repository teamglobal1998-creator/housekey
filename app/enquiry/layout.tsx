import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HouseKey Enquiry Form | Get in Touch for Your Dream Home",
    description: "Fill out the HouseKey enquiry form to register your interest in our premium real estate projects in Pune. Our advisors will contact you with personalized offers.",
};

export default function EnquiryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
