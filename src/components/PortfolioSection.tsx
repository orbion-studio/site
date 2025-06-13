import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Plataforma E-Commerce",
    description: "Marketplace moderno com filtragem avançada, inventário em tempo real e experiência de checkout perfeita.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Desenvolvimento Web"
  },
  {
    title: "Dashboard de Saúde",
    description: "Sistema abrangente de gestão de pacientes com visualização de dados e agendamento de consultas.",
    tech: ["Vue.js", "Python", "MongoDB", "Chart.js"],
    category: "Aplicação Web"
  },
  {
    title: "App Bancário Mobile",
    description: "Aplicação financeira segura com autenticação biométrica e rastreamento de transações em tempo real.",
    tech: ["React Native", "Express", "MySQL", "JWT"],
    category: "Desenvolvimento Mobile"
  },
  {
    title: "Ferramenta de Analytics AI",
    description: "Plataforma de machine learning para business intelligence com capacidades de análise preditiva.",
    tech: ["Python", "TensorFlow", "FastAPI", "Redis"],
    category: "AI/ML"
  },
  {
    title: "Design System",
    description: "Biblioteca abrangente de componentes e diretrizes de design para aplicações de escala empresarial.",
    tech: ["Figma", "Storybook", "TypeScript", "Sass"],
    category: "Design UI/UX"
  },
  {
    title: "Dashboard IoT",
    description: "Sistema de monitoramento em tempo real para dispositivos inteligentes com alertas automatizados e visualização de dados.",
    tech: ["Angular", "Socket.io", "InfluxDB", "Docker"],
    category: "IoT"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Projetos em <span className="text-cosmic-blue">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore nosso portfólio de soluções inovadoras que transformaram negócios
            e criaram experiências digitais excepcionais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:scale-105"
            >
              <CardContent className="pt-2 pb-4 px-6">
                <div className="mb-4">
                  <span className="text-sm text-cosmic-blue font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cosmic-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-cosmic-blue/10 text-cosmic-blue text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline"
            className="border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue hover:text-white"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;