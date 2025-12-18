import React from 'react';
import {MapPin, Clock, Phone} from 'lucide-react';

export default function Contact ()
{
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Info Card */}
                    <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700 rounded-bl-full opacity-50"></div>

                        <h2 className="text-3xl font-bold mb-8 relative z-10">Visítanos</h2>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-800 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-100">Dirección</h4>
                                    <p className="text-white mt-1">Av. Principal 123, Local 4<br />Barrio Centro, Ciudad</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-800 p-3 rounded-lg">
                                    <Clock className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-100">Horarios</h4>
                                    <p className="text-white mt-1">
                                        Lunes a Viernes: 8:00 - 13:00 / 16:00 - 20:00 <br />
                                        Sábados: 9:00 - 13:00
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-800 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-100">Contacto</h4>
                                    <p className="text-white mt-1">+54 11 1234-5678</p>
                                    <p className="text-blue-200 text-sm">fotocopiasramos@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-full min-h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg group">
                        {/* Simulated Map UI */}
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <div className="text-center p-6">
                                <MapPin className="w-12 h-12 text-red-500 mx-auto mb-2 animate-bounce" />
                                <p className="text-gray-600 font-medium">Aquí iría el mapa de Google Maps</p>
                                <p className="text-gray-500 text-sm mt-2">Puedes incrustar un iframe aquí fácilmente</p>
                                <button className="mt-4 bg-white px-4 py-2 rounded-lg shadow text-blue-600 font-semibold text-sm hover:bg-gray-50">
                                    Ver en Google Maps
                                </button>
                            </div>
                        </div>
                        {/* Decorative overlay usually found on maps */}
                        <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow text-xs text-gray-500">
                            Datos del mapa ©2024
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
