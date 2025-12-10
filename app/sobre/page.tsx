export const metadata = {
  title: "Sobre Nós | MEGA Poliuretanos",
  description: "Conheça a história da MEGA Poliuretanos, nossos valores e nossa trajetória de 23 anos no mercado de poliuretanos.",
};

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-spacing-hero bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Quem Somos</h1>
            <p className="text-lg text-gray-700">
              Uma organização global comprometida com excelência e inovação
            </p>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossa História</h2>
              <div className="w-24 h-1 bg-primary-600 mb-6"></div>
              
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 text-left">
                <p>
                  A MEGA Poliuretanos é uma organização global que, em nossa trajetória de 23 anos, 
                  mantém o compromisso de oferecer um atendimento ágil e personalizado, com corpo 
                  técnico atuante, proporcionando a criação de soluções customizadas de acordo com 
                  as necessidades de cada cliente.
                </p>
                <p>
                  Este é o nosso entendimento para os mercados que atuamos, onde a MEGA busca o 
                  crescimento de seus negócios e a ampliação de sua presença em áreas estratégicas, 
                  renovando seus conceitos, evoluindo e aumentando sua participação no mercado nacional.
                </p>
                <p>
                  Investimos constantemente em tecnologia, inovação e na capacidade de nossos 
                  colaboradores, trabalhando em estreita parceria com nossos clientes.
                </p>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600">23+</div>
                <h3 className="text-xl font-semibold text-gray-900">Anos de Experiência</h3>
                <p className="text-gray-600">Trajetória sólida no mercado brasileiro</p>
              </div>
              
              <div className="text-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600">100%</div>
                <h3 className="text-xl font-semibold text-gray-900">Comprometimento</h3>
                <p className="text-gray-600">Com a qualidade e satisfação dos clientes</p>
              </div>
              
              <div className="text-center space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600">∞</div>
                <h3 className="text-xl font-semibold text-gray-900">Inovação</h3>
                <p className="text-gray-600">Investimento constante em tecnologia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tecnologia e Inovação</h2>
              <div className="w-24 h-1 bg-primary-600 mb-6"></div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                O intercâmbio com os centros de pesquisas e desenvolvimento na Ásia fornecem todo o 
                respaldo e segurança necessária para proporcionar aos nossos clientes produtos cada vez 
                mais avançados, ganhando assim tempo e otimizando etapas, garantindo a certeza de um 
                resultado que supera as expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossos Valores</h2>
              <div className="w-24 h-1 bg-primary-600 mb-6"></div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-8">
              <p className="text-center text-2xl md:text-3xl font-bold text-primary-900">
                MEGA Poliuretanos: Austeridade, Responsabilidade e Seriedade em Negócios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">Austeridade</h3>
                <p className="text-gray-600">
                  Compromisso com a excelência e eficiência em todos os processos
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">Responsabilidade</h3>
                <p className="text-gray-600">
                  Atuação ética e comprometida com clientes, parceiros e sociedade
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">Seriedade</h3>
                <p className="text-gray-600">
                  Transparência e confiabilidade em todas as relações comerciais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
