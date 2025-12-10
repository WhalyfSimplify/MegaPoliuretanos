export const metadata = {
  title: "Produtos | MEGA Poliuretanos",
  description: "Conheça nossa ampla linha de produtos em poliuretanos de alta qualidade para diversas aplicações.",
};

export default function Produtos() {
  const produtos = [
    {
      categoria: "MEGAPU",
      items: [
        "TDI 80/20",
        "TDI 65/35",
        "MDI Monomeric",
        "MDI Polymeric",
        "Flame Retardants",
      ],
    },
    {
      categoria: "Poliol Poliéster",
      descricao: "Amplamente utilizado como adesivo, elastômero, revestimento, tinta, selante, resina de couro, resina para calçados, TPU e outros produtos.",
      vantagens: [
        "Capacidade de produção anual: 420.000 toneladas",
        "Participação de mercado: mais de 22% na China",
        "Maior reatividade, maior estabilidade, resistência a solventes, resistência ao calor",
      ],
    },
    {
      categoria: "HUAFON",
      items: [
        "PU para sola de sapato",
        "Polióis de poliéster",
        "Ácido adípico",
        "PU para couro sintético",
        "Microfibra",
      ],
    },
    {
      categoria: "DAHUA",
      items: [
        "Produto usado para espuma de poliuretano",
        "Elastômeros, revestimentos, adesivos",
        "OTDA",
        "Couro artificial",
        "TDI - 100",
        "TDA",
        "TDI - 80/20 for coating",
        "DNT",
      ],
    },
    {
      categoria: "LONGHUA",
      items: [
        "Isoropanolamina",
        "Poliol poliéter",
        "N-metil pirrolidona (NMP)",
        "Fosfato detriisobutila (TIBP)",
      ],
    },
    {
      categoria: "HONG BAO LI",
      items: [
        "Poliéter polióis",
        "Pré-Polímeros",
        "Sistemas PU para Espuma Flexível",
        "Alta Resiliência",
        "Sistemas Rígidos",
        "Fundição PU",
      ],
    },
    {
      categoria: "INOV",
      items: [
        "LHS-50 / LHS-100",
        "LHS-200 / LHH-500L",
        "LPOP-36/30 / LPOP-36/28G",
        "LEP-5631D / LMN-3050D",
        "LE-335D / LEP-330N",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-spacing-hero bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Produtos e Mercadorias</h1>
            <p className="text-lg text-gray-700">Uma grande seleção de produtos de alta qualidade</p>
          </div>
        </div>
      </section>

      {/* Produtos Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {produtos.map((produto, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-700">
                    {produto.categoria}
                  </h2>
                  <div className="w-20 h-1 bg-primary-600 mb-6"></div>
                </div>

                {produto.descricao && (
                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <p className="text-gray-700">{produto.descricao}</p>
                    {produto.vantagens && (
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Nossas vantagens:</h3>
                        <ul className="space-y-1 text-gray-700">
                          {produto.vantagens.map((vantagem, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span>{vantagem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {produto.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {produto.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
                      >
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campos de Aplicação */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Campos de Aplicação</h2>
              <div className="w-24 h-1 bg-primary-600 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Indústria</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Espumas flexíveis e rígidas</li>
                  <li>• Elastômeros</li>
                  <li>• Revestimentos e adesivos</li>
                  <li>• Tintas e selantes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Calçados</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Solas de sapato</li>
                  <li>• Resinas para calçados</li>
                  <li>• Couro sintético</li>
                  <li>• Microfibra</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Automotivo</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Assentos e estofados</li>
                  <li>• Componentes internos</li>
                  <li>• Isolamento acústico</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Construção</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Isolamento térmico</li>
                  <li>• Impermeabilização</li>
                  <li>• Fundição PU</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Precisa de mais informações?</h2>
            <p className="text-lg text-primary-100">
              Entre em contato conosco para conhecer melhor nossos produtos e soluções
            </p>
            <a
              href="/contato"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
