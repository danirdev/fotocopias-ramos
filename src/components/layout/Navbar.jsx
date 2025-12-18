import React, {useState, useEffect} from 'react';
import {Menu, X} from 'lucide-react';

export default function Navbar ({scrollToSection})
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) =>
    {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => handleNavClick('home')}>
                    <span className="text-blue-700">Fotocopias</span>
                    <span className="text-green-600">Ramos</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium">
                    <button onClick={() => handleNavClick('home')} className="hover:text-blue-600 transition">Inicio</button>
                    <button onClick={() => handleNavClick('services')} className="hover:text-blue-600 transition">Servicios</button>
                    <button onClick={() => handleNavClick('supplies')} className="hover:text-blue-600 transition">Librería</button>
                    <button onClick={() => handleNavClick('contact')} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-sm">
                        Contacto
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
                    <div className="flex flex-col p-4 space-y-4 font-medium text-center">
                        <button onClick={() => handleNavClick('home')} className="py-2 hover:bg-gray-50 text-gray-700">Inicio</button>
                        <button onClick={() => handleNavClick('services')} className="py-2 hover:bg-gray-50 text-gray-700">Servicios</button>
                        <button onClick={() => handleNavClick('supplies')} className="py-2 hover:bg-gray-50 text-gray-700">Librería</button>
                        <button onClick={() => handleNavClick('contact')} className="py-2 bg-blue-50 text-blue-700 rounded-lg">Contacto</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
