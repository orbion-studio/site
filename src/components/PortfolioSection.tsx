import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: "Plataforma E-Commerce",
    description: "Loja virtual moderna com filtragem avançada, controle de inventário, integração de pagamentos e checkout simplificado.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Desenvolvimento Web"
  },
  {
    title: "Dashboard de Saúde",
    description: "Sistema abrangente de gestão de pacientes com visualização de dados em tempo real, prontuários eletrônicos e agendamento de consultas.",
    tech: ["React.js", "Node.js", "MongoDB", "Chart.js"],
    category: "Aplicação Web"
  },
  {
    title: "Site de Imobiliária",
    description: "Portal de imóveis com busca por localização, filtros avançados, galeria de fotos e gerenciamento de anúncios.",
    tech: ["Astro", "Supabase", "Tailwind CSS"],
    category: "Imobiliário"
  },
  {
    title: "Plataforma de Agendamento",
    description: "Solução de marcação de horários com integração a calendário, pagamentos online, gestão de disponibilidade e notificações automatizadas.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Aplicação Web"
  },
  {
    title: "Site Institucional de Advocacia",
    description: "Website profissional com apresentação de serviços jurídicos, blog de artigos, formulários de contato e otimização SEO.",
    tech: ["Astro", "Tailwind CSS", "Supabase"],
    category: "Site Institucional"
  },
  {
    title: "Landing Page de Produto",
    description: "Página de alta conversão para lançamento de produto, com captura de leads, contagem regressiva e integração com ferramentas de marketing.",
    tech: ["Astro", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Landing Page"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="pt-80 bg-muted/30 dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Projetos em <span className="text-cosmic-blue">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções digitais projetadas para elevar seu negócio e se conectar com seu público.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 hover:scale-105"
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
        
        {/* <div className="text-center">
          <Button variant="outline" className="border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue hover:text-white">
            Ver Todos os Projetos
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;