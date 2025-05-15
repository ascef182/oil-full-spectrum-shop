import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";
import { products } from '../../pages/Products';

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao carrinho`,
    });
  };

  // Exibir apenas os 3 primeiros produtos como destaque
  const featured = products.slice(0, 3);

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
          {featured.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-60 overflow-hidden relative">
                <span className="absolute top-3 left-3 bg-sage text-forest rounded-full px-4 py-1 text-base font-medium shadow-sm" style={{zIndex:2}}>
                  {product.volume}
                </span>
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
