import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium Real Estate Projects in Pune & PCMC | HouseKey",
    description: "Explore HouseKey's exclusive portfolio of residential and commercial projects. From luxury apartments to premium workspaces in Moshi, Manchar, and across Pune.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
