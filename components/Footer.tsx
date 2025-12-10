"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image 
              src="/mega-logo.svg"
              alt="MEGA Poliuretanos"
              width={200}
              height={80}
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-600">
              Tecnologia de ponta em poliuretanos para o mercado brasileiro.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="mailto:desenvolvimento@megapu.com.br" className="hover:text-primary-600 transition-colors">
                  desenvolvimento@megapu.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511994475805" className="hover:text-primary-600 transition-colors">
                  +55 11 99447-5805
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Empresa</h4>
            <p className="text-sm text-gray-600">
              Austeridade, Responsabilidade e Seriedade em Negócios
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} por MEGA Poliuretanos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
