import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-sage py-20 md:py-32 overflow-hidden">
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2d4cf126-e834-4ab5-a8e7-7d3427af167a.png')] bg-cover bg-center opacity-50"></div>
      
      {/* Dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in">
            Transformando Vidas com a Força da Natureza
          </h1>
          <p className="text-lg md:text-xl text-white font-medium mb-8 animate-slide-up bg-forest/70 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
            Descubra o poder dos produtos Oil Full Spectrum para seu bem-estar. 
            Extratos naturais de alta qualidade para um equilíbrio completo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              asChild
              size="lg" 
              className="bg-forest hover:bg-forest/90 text-white font-bold"
            >
              <Link to="/produtos">
                Ver Produtos
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white bg-white/30 text-white hover:bg-white/40 hover:text-forest backdrop-blur-sm font-bold"
            >
              <Link to="/beneficios">
                Conhecer Benefícios
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
