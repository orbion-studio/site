import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-righteous mb-8">
            <span className="text-cosmic-blue">Orbion</span>
            <span className="text-foreground block md:inline md:ml-4">Studio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Criando soluções digitais inovadoras que transcendem fronteiras. 
            Desenvolvemos e projetamos software que impulsiona seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="bg-cosmic-blue hover:bg-cosmic-blue-dark text-white px-8 py-3 cursor-pointer"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-cosmic-blue/70 text-cosmic-blue hover:bg-cosmic-blue hover:text-white px-8 py-3 cursor-pointer"
            >
              Agendar Reunião
            </Button>
          </div>
          
          <button
            onClick={scrollToServices}
            className="animate-float text-muted-foreground hover:text-cosmic-blue transition-colors absolute bottom-8"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cosmic-blue rounded-full animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cosmic-purple rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-cosmic-blue-light rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;
