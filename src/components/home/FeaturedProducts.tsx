
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";

const products = [
  {
    id: 1,
    name: "Oil Full Spectrum 1500mg",
    description: "Óleo 100% natural com blend completo de terpenos",
    price: "R$ 299,00",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 2,
    name: "Oil Full Spectrum 600mg",
    description: "Óleo 100% natural com concentração ideal para iniciantes",
    price: "R$ 189,00",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: 3,
    name: "Gummies Fitoterápicas",
    description: "Gomas 100% naturais e veganas para uma experiência agradável",
    price: "R$ 159,00",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  }
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao carrinho`,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest mb-4">Nossos Produtos Mais Vendidos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Produtos premium, artesanais e 100% naturais. Extraídos com as melhores práticas para manter todas as propriedades ativas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-forest mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-forest font-bold text-xl mb-4">{product.price}</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button 
                    variant="default" 
                    className="bg-forest hover:bg-forest/90 flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    Adicionar ao Carrinho
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="border-forest text-forest hover:bg-sage flex-1"
                  >
                    <Link to={`/produtos/${product.id}`}>
                      Ver Detalhes
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            asChild
            variant="default" 
            size="lg"
            className="bg-forest hover:bg-forest/90"
          >
            <Link to="/produtos">
              Ver Todos os Produtos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
