
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Oil Full Spectrum 1500mg",
    description: "Óleo 100% natural com blend completo de terpenos para máxima eficácia.",
    price: "R$ 299,00",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "oil"
  },
  {
    id: 2,
    name: "Oil Full Spectrum 600mg",
    description: "Óleo 100% natural com concentração ideal para iniciantes.",
    price: "R$ 189,00",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "oil"
  },
  {
    id: 3,
    name: "Gummies Fitoterápicas",
    description: "Gomas 100% naturais e veganas para uma experiência agradável.",
    price: "R$ 159,00",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "gummies"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Produtos Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de produtos premium, elaborados com ingredientes naturais 
            e processos artesanais para garantir máxima qualidade e eficácia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-forest text-white text-xs px-2 py-1 rounded-full">
                  {product.category === 'oil' ? 'Óleo' : 'Gummies'}
                </div>
              </div>
              <CardHeader className="p-4">
                <h3 className="text-xl font-bold text-forest">{product.name}</h3>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-forest">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link to={`/produtos/${product.id}`} className="w-full">
                  <Button className="w-full bg-forest hover:bg-forest/90">Ver Detalhes</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/produtos">
            <Button variant="outline" size="lg" className="border-forest text-forest hover:bg-sage">
              Ver todos os produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
