export interface Testimonial {
    id: string;
    name: string;
    project: string;
    content: string;
    image?: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Rahul Sharma",
        project: "Swadesha",
        content: "HouseKey helped me find my dream home at Swadesha. Their transparency and guidance through the documentation process made it a breeze. Highly recommended!",
        rating: 5
    },
    {
        id: "2",
        name: "Priya Deshmukh",
        project: "Aurum Avenue",
        content: "I was looking for a luxury garden flat and found exactly what I wanted with Poojan Developers. Sumit and his team are true professionals who understand client needs.",
        rating: 5
    },
    {
        id: "3",
        name: "Michael D'Souza",
        project: "Silver Sakshi",
        content: "As an NRI, I needed someone I could trust. HouseKey's NRI Corner provided end-to-end support for my investment in Silver Sakshi. Exceptional service!",
        rating: 5
    }
];
