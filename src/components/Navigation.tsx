import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="font-righteous text-2xl text-cosmic-blue">orbion</span>
            <span className="font-righteous text-2xl text-foreground ml-1">studio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Contato
            </button>
          </div>
          
          <Button onClick={() => scrollToSection('contact')} size="sm" className="text-xs bg-cosmic-blue hover:bg-cosmic-blue-dark text-white cursor-pointer">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;