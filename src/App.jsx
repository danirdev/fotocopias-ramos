import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Banner from './sections/Banner';
import Supplies from './sections/Supplies';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

export default function App ()
{
  const scrollToSection = (id) =>
  {
    const element = document.getElementById(id);
    if(element)
    {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Banner />
      <Supplies />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
