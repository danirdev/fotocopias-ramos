import React from 'react';
import {CheckCircle} from 'lucide-react';
import {products} from '../data/products';

export default function Supplies ()
{
    return (
        <section id="supplies" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-green-600 font-semibold tracking-wider uppercase text-sm">Librería Escolar y Comercial</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Lo que encontrarás aquí</h2>
                    </div>
                    <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right">
                        Trabajamos con las mejores marcas para asegurar la calidad de tus útiles.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {products.map((group, idx) => (
                        <div key={idx} className={`${group.color} rounded-2xl p-8 flex flex-col justify-center transition hover:shadow-md`}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">{group.category}</h3>
                            <ul className="space-y-3">
                                {group.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <CheckCircle size={18} className="text-green-600 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
