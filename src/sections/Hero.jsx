import React from 'react';

export default function Hero ({scrollToSection})
{
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-70"></div>
            {/* Decorative Circles */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Todo para tu oficina <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                        y útiles escolares
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Desde fotocopias rápidas hasta la lista completa de materiales para el colegio.
                    Calidad, rapidez y buenos precios en un solo lugar.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => scrollToSection('services')}
                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Ver Servicios
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-white text-blue-700 border-2 border-blue-100 px-8 py-3 rounded-full font-semibold text-lg hover:border-blue-300 hover:bg-blue-50 transition"
                    >
                        ¿Dónde estamos?
                    </button>
                </div>
            </div>
        </section>
    );
}
