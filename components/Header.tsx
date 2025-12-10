"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="sr-only">MEGA Poliuretanos</span>
            <Image 
              src="/mega-logo.svg"
              alt="MEGA Poliuretanos"
              width={200}
              height={80}
              priority
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <Link 
              href="/" 
              className="text-base font-semibold text-gray-700 hover:text-primary-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              href="/sobre" 
              className="text-base font-semibold text-gray-700 hover:text-primary-600 transition-colors py-2"
            >
              Sobre
            </Link>
            <Link 
              href="/produtos" 
              className="text-base font-semibold text-gray-700 hover:text-primary-600 transition-colors py-2"
            >
              Produtos
            </Link>
            <Link 
              href="/contato" 
              className="text-base font-semibold text-gray-700 hover:text-primary-600 transition-colors py-2"
            >
              Contato
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
