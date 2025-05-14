
import React, { useState } from 'react';
import RootLayout from '../components/layout/RootLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { CheckCircle, Search, Package } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oil Full Spectrum 1500mg",
    description: "Óleo 100% natural com blend completo de terpenos para máxima eficácia.",
    longDescription: "Nosso blend premium de óleo Full Spectrum contém uma concentração potente de 1500mg, ideal para quem busca resultados intensos. Perfeito para dores crônicas, ansiedade e insônia.",
    price: "R$ 299,00",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "oil",
    uses: ["ansiedade", "dor", "insonia"],
    concentration: "1500mg"
  },
  {
    id: 2,
    name: "Oil Full Spectrum 600mg",
    description: "Óleo 100% natural com concentração ideal para iniciantes.",
    longDescription: "Formulado para quem está começando a explorar os benefícios dos óleos naturais, com 600mg de concentração. Excelente para ansiedade leve e melhora do sono.",
    price: "R$ 189,00",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "oil",
    uses: ["ansiedade", "sono", "estresse"],
    concentration: "600mg"
  },
  {
    id: 3,
    name: "Gummies Fitoterápicas",
    description: "Gomas 100% naturais e veganas para uma experiência agradável.",
    longDescription: "Deliciosas gomas fitoterápicas veganas com extrato full spectrum e outros compostos benéficos. Perfeitas para o controle de ansiedade e promoção do relaxamento.",
    price: "R$ 159,00",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "gummies",
    uses: ["ansiedade", "relaxamento"],
    concentration: "300mg"
  },
  {
    id: 4,
    name: "Oil Full Spectrum 1000mg",
    description: "Concentração balanceada para uso diário e eficácia intermediária.",
    longDescription: "Este óleo apresenta uma concentração intermediária, ideal para uso diário e para quem já tem experiência com produtos naturais. Excelente para controle de dores e ansiedade.",
    price: "R$ 249,00",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    category: "oil",
    uses: ["dor", "ansiedade", "inflamação"],
    concentration: "1000mg"
  }
];

const useTypes = ["ansiedade", "dor", "insonia", "sono", "estresse", "relaxamento", "inflamação"];
const concentrations = ["600mg", "1000mg", "1500mg", "300mg"];
const categories = [
  { value: "all", label: "Todos" },
  { value: "oil", label: "Óleos" },
  { value: "gummies", label: "Gummies" }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedConcentration, setSelectedConcentration] = useState<string | null>(null);
  const [selectedUse, setSelectedUse] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    // Search term filter
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    
    // Concentration filter
    const concentrationMatch = selectedConcentration === null || product.concentration === selectedConcentration;
    
    // Use filter
    const useMatch = selectedUse === null || product.uses.includes(selectedUse);
    
    return searchMatch && categoryMatch && concentrationMatch && useMatch;
  });

  return (
    <RootLayout>
      <div className="bg-sage py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4">Nossos Produtos</h1>
          <p className="text-gray-700 max-w-2xl">
            Explore nossa linha completa de produtos Oil Full Spectrum e encontre a solução 
            perfeita para suas necessidades de bem-estar.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-bold text-forest mb-4">Buscar</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-forest"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-bold text-forest mb-4">Categorias</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category.value}`}
                      name="category"
                      className="mr-3 text-forest focus:ring-forest"
                      checked={selectedCategory === category.value}
                      onChange={() => setSelectedCategory(category.value)}
                    />
                    <label htmlFor={`category-${category.value}`}>
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-bold text-forest mb-4">Concentração</h3>
              <div className="space-y-2">
                {concentrations.map(concentration => (
                  <div key={concentration} className="flex items-center">
                    <input
                      type="radio"
                      id={`concentration-${concentration}`}
                      name="concentration"
                      className="mr-3 text-forest focus:ring-forest"
                      checked={selectedConcentration === concentration}
                      onChange={() => setSelectedConcentration(concentration)}
                    />
                    <label htmlFor={`concentration-${concentration}`}>
                      {concentration}
                    </label>
                  </div>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="concentration-all"
                    name="concentration"
                    className="mr-3 text-forest focus:ring-forest"
                    checked={selectedConcentration === null}
                    onChange={() => setSelectedConcentration(null)}
                  />
                  <label htmlFor="concentration-all">
                    Todas
                  </label>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-forest mb-4">Indicações</h3>
              <div className="space-y-2">
                {useTypes.map(use => (
                  <div key={use} className="flex items-center">
                    <input
                      type="radio"
                      id={`use-${use}`}
                      name="use"
                      className="mr-3 text-forest focus:ring-forest"
                      checked={selectedUse === use}
                      onChange={() => setSelectedUse(use)}
                    />
                    <label htmlFor={`use-${use}`} className="capitalize">
                      {use}
                    </label>
                  </div>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="use-all"
                    name="use"
                    className="mr-3 text-forest focus:ring-forest"
                    checked={selectedUse === null}
                    onChange={() => setSelectedUse(null)}
                  />
                  <label htmlFor="use-all">
                    Todas
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
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
                      <p className="text-lg font-bold text-forest">{product.price}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-grow">
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-forest mb-2">Indicado para:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.uses.map(use => (
                            <span key={use} className="bg-sage text-forest text-xs px-2 py-1 rounded-full capitalize">
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <Button 
                          className="flex-1 bg-forest hover:bg-forest/90"
                          asChild
                        >
                          <Link to={`/produtos/${product.id}`}>
                            Ver Detalhes
                          </Link>
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1 border-forest text-forest hover:bg-sage"
                          onClick={() => {
                            // WhatsApp integration
                            const message = `Olá! Tenho interesse no produto ${product.name}. Poderia me dar mais informações?`;
                            window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                        >
                          Comprar
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center p-12 bg-white rounded-lg shadow-sm">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-600 mb-4">Tente ajustar os filtros para encontrar o que procura.</p>
                <Button 
                  variant="outline"
                  className="border-forest text-forest hover:bg-sage"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedConcentration(null);
                    setSelectedUse(null);
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <section className="bg-sage py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-4">Qualidade Garantida</h2>
            <p className="text-gray-700 mb-6">
              Todos os nossos produtos passam por rigorosos testes de qualidade e são produzidos 
              de maneira artesanal para garantir a máxima eficácia e pureza.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 text-center">
                <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-forest" />
                </div>
                <h3 className="font-bold text-forest">100% Natural</h3>
              </div>
              
              <div className="p-4 text-center">
                <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-forest" />
                </div>
                <h3 className="font-bold text-forest">Vegano</h3>
              </div>
              
              <div className="p-4 text-center">
                <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-forest" />
                </div>
                <h3 className="font-bold text-forest">Testado em Lab</h3>
              </div>
              
              <div className="p-4 text-center">
                <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-forest" />
                </div>
                <h3 className="font-bold text-forest">Sem THC</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default Products;
