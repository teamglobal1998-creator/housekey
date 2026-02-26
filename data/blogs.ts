export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image: string;
    category: string;
    author: string;
}

export const blogs: BlogPost[] = [
    {
        id: "guide-to-buying-home-pune",
        title: "The Ultimate Guide to Buying Your First Home in Pune",
        excerpt: "Navigating the Pune real estate market can be challenging. Here's everything you need to know about locations, legalities, and budgets.",
        content: "Buying a home is one of the most significant decisions in one's life. In a city like Pune, which is rapidly expanding, choosing the right locality is crucial. Whether you are looking at the IT hubs of Hinjewadi and Baner or the industrial belt of Moshi and Chakan, understanding the future growth potential is key...",
        date: "Feb 20, 2024",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
        category: "Buying Guide",
        author: "HouseKey Expert"
    },
    {
        id: "why-nri-investing-pune",
        title: "Why Pune is the Top Choice for NRI Real Estate Investment",
        excerpt: "Discover why Non-Resident Indians are flocking to Pune's luxury real estate market for stable returns and long-term growth.",
        content: "Pune has always been a preferred destination for NRIs due to its pleasant climate, educational infrastructure, and growing job market. With the introduction of RERA and more transparent developer practices, the confidence in the market has reached an all-time high...",
        date: "Feb 15, 2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        category: "Investment",
        author: "Sumit Mahajan"
    }
];
