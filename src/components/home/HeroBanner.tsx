
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-sage py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2d4cf126-e834-4ab5-a8e7-7d3427af167a.png')] bg-cover bg-center opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-forest fade-in">
            Transformando Vidas com a Força da Natureza
          </h1>
          <p className="text-lg md:text-xl text-forest font-medium mb-8 slide-up backdrop-blur-sm bg-white/30 p-3 rounded-lg">
            Descubra o poder dos produtos Oil Full Spectrum para seu bem-estar. 
            Extratos naturais de alta qualidade para um equilíbrio completo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Button 
              asChild
              size="lg" 
              className="bg-forest hover:bg-forest/90 text-white"
            >
              <Link to="/produtos">
                Ver Produtos
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-forest text-forest hover:bg-sage"
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
