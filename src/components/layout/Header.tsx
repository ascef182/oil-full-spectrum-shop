import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CartButton from '../CartButton';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/beneficios', label: 'Benefícios' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-forest">Oil Full Spectrum</h1>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <Link key={link.to} to={link.to} className="text-gray-700 hover:text-forest font-medium">
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Cart and Burger */}
        <div className="flex items-center space-x-4">
          <CartButton />
          <button
            onClick={() => setIsMenuOpen(v => !v)}
            className="md:hidden text-forest hover:bg-sage p-2 rounded-md"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-4" onClick={e => e.stopPropagation()}>
            <button className="self-end mb-4" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
              <X className="h-6 w-6 text-forest" />
            </button>
            {NAV_LINKS.map(link => (
              <Link key={link.to} to={link.to} className="text-gray-700 hover:text-forest font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
