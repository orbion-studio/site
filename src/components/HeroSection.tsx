import { ArrowDown, Calendar, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const whatsappNumber = import.meta.env.PHONE_NUMBER || "";
  const whatsappMessage = "Olá, gostaria de saber mais sobre os serviços oferecidos por vocês.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative z-10">
      <div className="px-8 space-y-6 md:px-24 lg:px-32 lg:space-y-8 max-w-6xl relative z-20">
        <div className="space-y-2">
          <h1 className="text-md md:text-2xl lg:text-3xl font-righteous text-foreground">
            orbion studio
          </h1>
          <div className="w-10 h-1 md:w-12 lg:w-16 bg-primary rounded-full shadow-md"></div>
        </div>

        <h4 className="text-3xl md:text-4xl lg:text-6xl font-black font-inter text-foreground">
          Desenvolvimento de Software e Web Design.
        </h4>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href={whatsappLink} target="_blank">
            <Button 
              type="button" 
              className="cursor-pointer bg-cosmic-blue hover:bg-cosmic-blue-dark text-white dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300/80 transition-all"
            >
              <PhoneCall className="mr-2" />
              Entrar em Contato
            </Button>
          </a>

          <a href="https://calendly.com/orbion-studio/reuniao-de-descoberta" target="_blank">
            <Button 
              type="button" 
              variant="ghost"
              className="cursor-pointer border border-gray-400 text-gray-600 hover:text-white hover:border-none hover:bg-cosmic-blue-dark dark:text-gray-200 dark:border-gray-300 dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all"
            >
              <Calendar className="mr-2" />
              Agendar Reunião
            </Button>
          </a>
        </div>
      </div>

      <button className="absolute bottom-2 animate-float text-muted-foreground hover:text-cosmic-blue transition-colors">
        <ArrowDown className="w-8 h-8 mx-auto" />
      </button>

      {/* Floating Elements - Ajustados para não conflitar com o AnimatedBackground */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cosmic-blue rounded-full animate-float opacity-60 dark:opacity-30 z-10"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cosmic-purple rounded-full animate-float opacity-40 dark:opacity-20 z-10" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-cosmic-blue-light rounded-full animate-float opacity-80 dark:opacity-20 z-10" style={{ animationDelay: '4s' }}></div>      
    </section>
  );
}

export default HeroSection;