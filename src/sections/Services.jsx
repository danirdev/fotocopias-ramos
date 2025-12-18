import React from 'react';
import {services} from '../data/services';

export default function Services ()
{
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-600">Soluciones rápidas para estudiantes, docentes y oficinas.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition duration-300 border border-transparent hover:border-blue-100 group">
                            <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
