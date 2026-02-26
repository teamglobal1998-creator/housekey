export interface Developer {
    id: string;
    name: string;
    description: string;
    logo: string;
    experience: string;
    projectsDelivered: string;
    specialization: string;
}

export const developers: Developer[] = [
    {
        id: "bhandari-associates",
        name: "Bhandari Associates",
        description: "Bhandari Associates is a well-known real estate developer in Pune, committed to delivering high-quality residential and commercial projects. With a focus on innovation and customer satisfaction, they have successfully completed several landmark developments.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
        experience: "35+ Years",
        projectsDelivered: "50+",
        specialization: "Residential & Commercial"
    },
    {
        id: "poojan-developers",
        name: "Poojan Developers",
        description: "Poojan Developers is a rising name in the Pune real estate market, known for its premium projects and attention to detail. They focus on creating living spaces that blend luxury with comfort.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
        experience: "15+ Years",
        projectsDelivered: "20+",
        specialization: "Premium Residential"
    },
    {
        id: "adi-group",
        name: "Adi Group",
        description: "Adi Group is dedicated to providing high-quality homes with exceptional value. They have a strong presence in the Moshi area and are known for their solid construction and timely delivery.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
        experience: "20+ Years",
        projectsDelivered: "30+",
        specialization: "Residential"
    },
    {
        id: "silver-group",
        name: "Silver Group",
        description: "Silver Group is a prominent developer in the PCMC region, specializing in ultra-luxurious apartments and smart home features. They are committed to excellence and quality.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
        experience: "25+ Years",
        projectsDelivered: "40+",
        specialization: "Luxury Residential"
    },
    {
        id: "luxor-group",
        name: "Luxor Group",
        description: "Luxor Group brings premium residences to the heart of Pune. They are known for their elegant designs and central locations.",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
        experience: "18+ Years",
        projectsDelivered: "15+",
        specialization: "Premium Residencies"
    }
];
