import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-spacing-hero relative flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto inline-flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight inline-block">
              Bem-vindos à MEGA Poliuretanos
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Somos uma organização global com 23 anos de trajetória, comprometidos em oferecer 
              soluções customizadas de alta qualidade em poliuretanos para o mercado brasileiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/sobre"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Conheça Nossa História
              </Link>
              <Link 
                href="/produtos"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Nossos Produtos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Parceiros</h2>
              <p className="text-lg text-gray-600">Parcerias valiosas</p>
              <div className="w-24 h-1 bg-primary-600 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white px-8 py-10 md:px-10 md:py-12 rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold text-primary-700 mb-6 group-hover:text-primary-600 transition-colors">HUAFON</h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>PU para sola de sapato</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Polióis de poliéster</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Ácido adípico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>PU para couro sintético</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Microfibra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white px-8 py-10 md:px-10 md:py-12 rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold text-primary-700 mb-6 group-hover:text-primary-600 transition-colors">DAHUA</h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Produto usado para espuma de poliuretano</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Elastômeros, revestimentos, adesivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>OTDA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Couro artificial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>TDI - 100 / TDI - 80/20</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>TDA / DNT</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white px-8 py-10 md:px-10 md:py-12 rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold text-primary-700 mb-6 group-hover:text-primary-600 transition-colors">LONGHUA</h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Isoropanolamina</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Poliol poliéter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>N-metil pirrolidona (NMP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Fosfato detriisobutila (TIBP)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white px-8 py-10 md:px-10 md:py-12 rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold text-primary-700 mb-6 group-hover:text-primary-600 transition-colors">HONG BAO LI</h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Poliéter polióis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Pré-Polímeros</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Sistemas PU para Espuma Flexível</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Alta Resiliência</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Sistemas Rígidos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>Fundição PU</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white px-8 py-10 md:px-10 md:py-12 rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold text-primary-700 mb-6 group-hover:text-primary-600 transition-colors">INOV</h3>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>LHS-50 / LHS-100</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>LHS-200 / LHH-500L</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>LPOP-36/30 / LPOP-36/28G</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>LEP-5631D / LMN-3050D</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 font-semibold">•</span>
                    <span>LE-335D / LEP-330N</span>
                  </li>
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
            <h2 className="text-3xl md:text-4xl font-bold">Entre em Contato</h2>
            <p className="text-lg text-primary-100">
              Estamos prontos para oferecer soluções customizadas para suas necessidades
            </p>
            <Link 
              href="/contato"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
