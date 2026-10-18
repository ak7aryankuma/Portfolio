import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import BusinessAnalyst from './components/BusinessAnalyst';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageSrc: '',
    title: '',
    subtitle: '',
  });

  const handleOpenLightbox = (imageSrc, title = '', subtitle = '') => {
    setLightbox({
      isOpen: true,
      imageSrc,
      title,
      subtitle,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <SelectedWork onOpenLightbox={handleOpenLightbox} />
        <BusinessAnalyst onOpenLightbox={handleOpenLightbox} />
        <About onOpenLightbox={handleOpenLightbox} />
        <Skills />
        <Certificates onOpenLightbox={handleOpenLightbox} />
      </main>

      {/* Footer & Contact */}
      <Contact />

      {/* Universal Lightbox Modal for any Certificate, Dashboard or Mockup */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.imageSrc}
        title={lightbox.title}
        subtitle={lightbox.subtitle}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
