import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const whatsappNumber = import.meta.env.PHONE_NUMBER || "";
  const whatsappMessage = "Olá, gostaria de saber mais sobre os serviços oferecidos por vocês.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Vamos Criar Algo <span className="text-cosmic-blue">Incrível</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pronto para dar vida à sua visão? Entre em contato e vamos começar a construir
            o futuro da sua presença digital juntos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-cosmic-blue transition-colors">
                Chat WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Inicie uma conversa instantaneamente. Obtenha respostas rápidas para suas perguntas e 
                discuta os requisitos do seu projeto em tempo real.
              </p>

              <a href={whatsappLink} target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full cursor-pointer">
                  Abrir WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-cosmic-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3zM9 5h6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-cosmic-blue transition-colors">
                Agendar Reunião
              </h3>
              <p className="text-muted-foreground mb-6">
                Reserve uma consulta em sua conveniência. Vamos discutir sua visão
                e explorar como podemos dar vida a ela.
              </p>

              <a href="https://calendly.com/orbion-studio/reuniao-de-descoberta" target="_blank">
                <Button className="bg-cosmic-blue hover:bg-cosmic-blue-dark text-white w-full cursor-pointer">
                  Agendar Reunião
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ou entre em contato diretamente em
          </p>
          <a 
            href="mailto:hello@orbionstudio.com"
            className="text-cosmic-blue hover:text-cosmic-blue-dark transition-colors text-lg font-medium"
          >
            contato@orbion.studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;