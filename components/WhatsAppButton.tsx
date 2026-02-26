"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "919922991999";
    const message = encodeURIComponent("Hi HouseKey, I'm interested in learning more about your properties.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold">
                Chat with Expert
            </span>
        </a>
    );
}
