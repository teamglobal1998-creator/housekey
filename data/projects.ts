export interface Project {
    id: string;
    name: string;
    developer: string;
    developerId: string;
    location: string;
    type: string;
    status: "Ongoing" | "Completed";
    category: "Residential" | "Commercial";
    subCategory?: string;
    budgetRange: string;
    possession: string;
    image: string;
    gallery?: string[];
    floorPlans?: { title: string; image: string }[];
    description: string;
    amenities?: string[];
    highlights?: string[];
    locationAdvantages?: string[];
}

export const projects: Project[] = [
    {
        id: "swadesha",
        name: "Swadesha",
        developer: "Bhandari Associates",
        developerId: "bhandari-associates",
        location: "Moshi",
        type: "2/3/4 BHK",
        status: "Ongoing",
        category: "Residential",
        budgetRange: "₹45L - ₹85L",
        possession: "Dec 2025",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
        description: "Swadesha is a premium residential project offering spacious 2, 3, and 4 BHK apartments designed for modern living. Located in the fast-growing Moshi area, it provides excellent connectivity and world-class amenities.",
        gallery: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80"
        ],
        floorPlans: [
            { title: "2 BHK Layout", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80" },
            { title: "3 BHK Layout", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80" }
        ],
        amenities: ["Swimming Pool", "Gymnasium", "Clubhouse", "Children's Play Area", "24/7 Security", "Jogging Track"],
        highlights: ["Strategic Location", "Premium Finishes", "Excellent Natural Light", "Large Balconies"],
        locationAdvantages: ["2 mins from Highway", "5 mins from Metro Station", "Nearby International Schools"]
    },
    {
        id: "aurum-avenue",
        name: "Aurum Avenue",
        developer: "Poojan Developers",
        developerId: "poojan-developers",
        location: "Manchar, Pune",
        type: "Residential",
        status: "Ongoing",
        category: "Residential",
        subCategory: "Garden Flats",
        budgetRange: "₹65L - ₹1.2Cr",
        possession: "Ready to Move",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
        description: "Aurum Avenue represents the pinnacle of luxury living in Pune. Inspired by classic aesthetics and modern functionality, it offers an unparalleled lifestyle experience with meticulously designed residences.",
        gallery: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
        ],
        amenities: ["Grand Entrance Lobby", "Landscape Garden", "Fire Fighting System", "Power Backup", "Rainwater Harvesting"],
        highlights: ["Luxury Design", "Vastu Compliant", "Modern Architecture"],
        locationAdvantages: ["Pune-Nashik Highway Touch", "Peaceful Environment", "Market Area Accessible"]
    },
    {
        id: "adi-prime",
        name: "Adi Prime",
        developer: "Adi Group",
        developerId: "adi-group",
        location: "Moshi",
        type: "Residential",
        status: "Ongoing",
        category: "Residential",
        budgetRange: "₹35L - ₹55L",
        possession: "Jun 2026",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
        description: "Adi Prime is a contemporary residential development focused on providing high-quality homes with exceptional value. Located in Moshi, it offers a perfect blend of comfort and convenience.",
        amenities: ["Intercom Facility", "Elevators", "Covered Parking", "Security Cabin"],
        highlights: ["Affordable Luxury", "Prime Location", "Solid Construction"]
    },
    {
        id: "silver-sakshi",
        name: "Silver Sakshi",
        developer: "Silver Group",
        developerId: "silver-group",
        location: "PCMC",
        type: "Luxury Apartments",
        status: "Completed",
        category: "Residential",
        subCategory: "Duplex",
        budgetRange: "₹1.5Cr - ₹2.5Cr",
        possession: "Completed",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        description: "Silver Sakshi is a landmark development in PCMC, offering ultra-luxurious apartments with breathtaking views and top-tier facilities. A completed project that stands as a testament to quality.",
        amenities: ["Rooftop Garden", "Advanced Security", "Smart Home Features", "Premium Fittings"]
    },
    {
        id: "luxor-1",
        name: "Luxor 1",
        developer: "Luxor Group",
        developerId: "luxor-group",
        location: "Pune",
        type: "Premium Residencies",
        status: "Completed",
        category: "Residential",
        budgetRange: "₹90L - ₹1.8Cr",
        possession: "Completed",
        image: "https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&q=80",
        description: "Luxor 1 brings premium residences to the heart of Pune. Completed and delivered, it is the preferred choice for those who value elegance and central location."
    },
    {
        id: "silver-evergreen",
        name: "Silver Evergreen",
        developer: "Silver Group",
        developerId: "silver-group",
        location: "PCMC",
        type: "Apartments",
        status: "Completed",
        category: "Residential",
        budgetRange: "₹55L - ₹75L",
        possession: "Completed",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80",
        description: "Silver Evergreen offers a peaceful and green living environment in PCMC. A beautifully completed project with a focus on sustainable living and community."
    }
];
