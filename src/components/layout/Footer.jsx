import React from 'react';
import {Facebook, Instagram, Mail} from 'lucide-react';

export default function Footer ()
{
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-white">Fotocopias Ramos</span>
                        <p className="text-sm mt-1">Tu aliado en el estudio y la oficina.</p>
                    </div>

                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#" className="hover:text-green-400 transition"><Facebook size={24} /></a>
                        <a href="#" className="hover:text-green-400 transition"><Instagram size={24} /></a>
                        <a href="#" className="hover:text-green-400 transition"><Mail size={24} /></a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Fotocopias Ramos. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
