import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // Exemplo de imagem de natureza

const HeroBanner = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-sage">
      {/* Background image */}
      <img 
        src={HERO_IMAGE}
        alt="Natureza e bem-estar"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        draggable={false}
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Transformando Vidas com a Força da Natureza
          </h1>
          <p className="text-lg md:text-xl text-white font-medium mb-8 bg-forest/80 p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
            Descubra o poder dos produtos Oil Full Spectrum para seu bem-estar. 
            Extratos naturais de alta qualidade para um equilíbrio completo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-white bg-white/30 text-white hover:bg-white/40 hover:text-forest font-bold"
            >
              <Link to="/beneficios">
                Conhecer Benefícios
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
