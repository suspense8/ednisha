"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/23231180012?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20Ednisha%20Day%20Care."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-whatsapp-pulse"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="h-7 w-7" />
        </a>
    );
}
