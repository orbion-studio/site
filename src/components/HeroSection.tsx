import { Calendar, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const whatsappNumber = "5587991985000";
  const whatsappMessage = "Olá, gostaria de saber mais sobre os serviços oferecidos por vocês.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="px-12 space-y-6 md:px-32 lg:space-y-8 max-w-6xl relative z-10">
        <div className="space-y-2">
          <h1 className="text-md md:text-2xl lg:text-3xl font-righteous">orbion studio</h1>
          <div className="w-10 h-1 md:w-12 lg:w-16 bg-accent rounded-full"></div>
        </div>

        <h4 className="text-3xl md:text-4xl lg:text-6xl font-black font-inter">
          Desenvolvimento de Software e Web Design.
        </h4>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4">
          <a href={whatsappLink} target="_blank">
            <Button type="button" className="cursor-pointer bg-cosmic-blue hover:bg-cosmic-blue-dark text-white">
              <PhoneCall />
              Entrar em Contato
            </Button>
          </a>

          <a href="https://calendly.com/lucasnjsilva/reuniao-de-descoberta/" target="_blank">
            <Button type="button" variant="ghost" className="cursor-pointer border border-zinc-400 text-zinc-500 hover:text-white hover:border-none">
              <Calendar />
              Agendar Reunião
            </Button>
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cosmic-blue rounded-full animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cosmic-purple rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-cosmic-blue-light rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }}></div>      
    </section>
  );
}

export default HeroSection;