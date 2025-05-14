
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-forest">Oil Full Spectrum</h1>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-forest font-medium">Home</Link>
          <Link to="/produtos" className="text-gray-700 hover:text-forest font-medium">Produtos</Link>
          <Link to="/beneficios" className="text-gray-700 hover:text-forest font-medium">Benefícios</Link>
          <Link to="/sobre" className="text-gray-700 hover:text-forest font-medium">Sobre</Link>
          <Link to="/faq" className="text-gray-700 hover:text-forest font-medium">FAQ</Link>
          <Link to="/contato" className="text-gray-700 hover:text-forest font-medium">Contato</Link>
        </nav>

        {/* Cart and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link to="/carrinho">
            <Button variant="ghost" size="icon" className="text-forest hover:bg-sage">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-forest hover:bg-sage p-2 rounded-md"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-forest py-2 font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/produtos" className="text-gray-700 hover:text-forest py-2 font-medium" onClick={toggleMenu}>Produtos</Link>
            <Link to="/beneficios" className="text-gray-700 hover:text-forest py-2 font-medium" onClick={toggleMenu}>Benefícios</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-forest py-2 font-medium" onClick={toggleMenu}>Sobre</Link>
            <Link to="/faq" className="text-gray-700 hover:text-forest py-2 font-medium" onClick={toggleMenu}>FAQ</Link>
            <Link to="/contato" className="text-gray-700 hover:text-forest py-2 font-medium" onClick={toggleMenu}>Contato</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
