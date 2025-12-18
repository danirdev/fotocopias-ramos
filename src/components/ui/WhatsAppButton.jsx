import React from 'react';
import {Phone} from 'lucide-react';

export default function WhatsAppButton ()
{
    return (
        <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110 flex items-center gap-2 group"
        >
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold">
                ¡Escríbenos!
            </span>
            <Phone size={28} />
        </a>
    );
}
