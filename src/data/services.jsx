import {Printer, Scissors, Send, BookOpen} from 'lucide-react';
import React from 'react';

export const services = [
    {
        title: "Fotocopias e Impresiones",
        desc: "Blanco y negro o color. Impresión láser de alta calidad y sistemas de tinta continua para grandes volúmenes.",
        icon: <Printer className="w-10 h-10 text-blue-600" />
    },
    {
        title: "Anillados y Plastificados",
        desc: "Protege tus documentos y trabajos prácticos con nuestros anillados plásticos y plastificados de carnet a A3.",
        icon: <Scissors className="w-10 h-10 text-green-600" />
    },
    {
        title: "Digitalización",
        desc: "Escaneo de documentos a PDF o imagen. Te lo enviamos por mail o lo guardamos en tu pendrive.",
        icon: <Send className="w-10 h-10 text-blue-600" />
    },
    {
        title: "Útiles Escolares",
        desc: "Todo lo que necesitas para la escuela: cuadernos, carpetas, lápices, mochilas y artística.",
        icon: <BookOpen className="w-10 h-10 text-green-600" />
    }
];
