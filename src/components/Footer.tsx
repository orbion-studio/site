import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-righteous text-2xl text-cosmic-blue">orbion</span>
            <span className="font-righteous text-2xl text-foreground ml-1">studio</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Orbion Studio. Criando excelência digital.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Transformando ideias em soluções inovadoras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;