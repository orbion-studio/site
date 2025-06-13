import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollToSection';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = (newTheme: 'dark' | 'light') => {    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
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
          
          {
            theme === 'dark' ? (
              <button onClick={() => toggleTheme('light')} className='cursor-pointer hover:text-gray-400' id="theme-switch">
                <Sun />
              </button>
            ) : (
              <button onClick={() => toggleTheme('dark')} className='cursor-pointer text-gray-500 hover:text-gray-400' id="theme-switch">
                <Moon />
              </button>
            )
          }
        </div>
      </div>
    </nav>
  );
};
export default Navigation;