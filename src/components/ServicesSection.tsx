import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Sites modernos e responsivos e aplicações web construídas com tecnologias de ponta.",
    features: ["React & Next.js", "CMS Personalizado", "Soluções E-commerce", "Otimização de Performance"]
  },
  {
    title: "Software Personalizado",
    description: "Soluções personalizadas adaptadas às necessidades e processos do seu negócio.",
    features: ["Aplicações Desktop", "Desenvolvimento de API", "Design de Database", "Integração de Sistemas"]
  },
  {
    title: "UI/UX Design",
    description: "Designs bonitos e intuitivos que melhoram a experiência do usuário e impulsionam o engajamento.",
    features: ["Pesquisa de Usuário", "Wireframing", "Prototipagem", "Design Systems"]
  },
  {
    title: "Consultoria",
    description: "Orientação estratégica para ajudá-lo a navegar no cenário digital e tomar decisões informadas.",
    features: ["Avaliação Tecnológica", "Planejamento de Arquitetura", "Otimização de Processos", "Estratégia Digital"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="pt-40 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Nossos <span className="text-cosmic-blue">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A simplicidade é o último grau de sofisticação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="pt-2 pb-4 px-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cosmic-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-cosmic-blue rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;