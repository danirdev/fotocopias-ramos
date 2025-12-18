import React from 'react';
import {Send} from 'lucide-react';

export default function Banner ()
{
    return (
        <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">¿Necesitas imprimir un trabajo urgente?</h3>
                    <p className="text-blue-100 text-lg">Envíanos tus archivos por WhatsApp y retiralos listos.</p>
                </div>
                <button className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-400 transition shadow-lg flex items-center gap-2">
                    <Send size={20} /> Enviar Archivo
                </button>
            </div>
        </section>
    );
}
