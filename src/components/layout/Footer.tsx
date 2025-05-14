
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Oil Full Spectrum</h3>
            <p className="mb-4 text-sm opacity-80">Transformando vidas com a força da natureza. Produtos naturais de alta qualidade para o seu bem-estar.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/produtos" className="text-sm opacity-80 hover:opacity-100">Produtos</Link></li>
              <li><Link to="/beneficios" className="text-sm opacity-80 hover:opacity-100">Benefícios</Link></li>
              <li><Link to="/sobre" className="text-sm opacity-80 hover:opacity-100">Sobre a Marca</Link></li>
              <li><Link to="/faq" className="text-sm opacity-80 hover:opacity-100">Perguntas Frequentes</Link></li>
              <li><Link to="/contato" className="text-sm opacity-80 hover:opacity-100">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm opacity-80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm opacity-80">contato@oilfullspectrum.com.br</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Receba Novidades</h3>
            <p className="mb-4 text-sm opacity-80">Inscreva-se para receber novidades e promoções exclusivas.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 text-gray-800 rounded-md text-sm" 
              />
              <Button 
                className="bg-gold hover:bg-gold/90 text-forest font-medium"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Oil Full Spectrum. Todos os direitos reservados.</p>
          <p className="mt-1">Este site não tem a intenção de diagnosticar, tratar, curar ou prevenir qualquer doença.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
