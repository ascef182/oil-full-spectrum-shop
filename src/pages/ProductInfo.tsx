
import React from 'react';
import RootLayout from '../components/layout/RootLayout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Leaf, Droplet, Heart, Sun, Flask, FlowerIcon, Thermometer, Medicine } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from '@/context/CartContext';
import { toast } from "@/components/ui/use-toast";

const ProductInfo = () => {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Óleo Fitoterápico de Amplo Espectro",
    description: "Equilíbrio natural para corpo e mente",
    longDescription: "Desenvolvido a partir de compostos naturais e óleos essenciais terapêuticos, nosso Óleo Fitoterápico de Amplo Espectro oferece uma experiência completa de bem-estar. É 100% natural, vegano, livre de químicos agressivos e ideal para quem busca alívio físico e mental de forma segura e eficaz.",
    price: "R$ 289,00",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "oil",
  };

  const compounds = [
    { name: "Cariofileno", description: "Ação anti-inflamatória e protetora celular" },
    { name: "Linalol", description: "Contribui para o relaxamento físico e mental" },
    { name: "Pineno", description: "Auxilia na clareza mental e conforto respiratório" },
    { name: "Mirceno", description: "Favorece relaxamento profundo e potencializa absorção" },
  ];

  const benefits = [
    "Redução de estresse e ansiedade",
    "Regulação do sono de forma natural",
    "Suporte ao alívio de dores crônicas e desconfortos musculares",
    "Ação antioxidante e anti-inflamatória",
    "Melhora da qualidade de vida e disposição"
  ];

  const features = [
    "Livre de componentes psicoativos",
    "Sem aditivos químicos",
    "Não testado em animais",
    "Sem glúten",
    "Sem conservantes artificiais"
  ];

  const indications = [
    "Estresse constante ou ansiedade",
    "Dificuldade para dormir",
    "Dores musculares ou articulares",
    "Rotina intensa que exige equilíbrio físico e mental"
  ];

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao carrinho`,
    });
  };

  return (
    <RootLayout>
      {/* Hero Section */}
      <div className="bg-sage py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-4">
                🌿 {product.name}
              </h1>
              <p className="text-xl text-forest font-medium mb-6">
                {product.description}
              </p>
              <p className="text-gray-700 mb-6">
                {product.longDescription}
              </p>
              <p className="text-2xl font-bold text-forest mb-6">
                {product.price}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-forest hover:bg-forest/90 text-white"
                  onClick={handleAddToCart}
                >
                  Adicionar ao Carrinho
                </Button>
                <Button 
                  variant="outline" 
                  className="border-forest text-forest hover:bg-sage"
                  onClick={() => {
                    // WhatsApp integration
                    const message = `Olá! Tenho interesse no ${product.name}. Poderia me dar mais informações?`;
                    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Comprar via WhatsApp
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Flask className="h-8 w-8 text-forest mr-3" />
                <h2 className="text-2xl font-bold text-forest">Tecnologia de ponta com base na natureza</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 mb-6">
                  Nosso produto é formulado com uma combinação exclusiva de compostos bioativos que atuam no organismo promovendo equilíbrio, 
                  relaxamento e suporte anti-inflamatório natural.
                </p>
                <p className="text-gray-700">
                  A sinergia entre os componentes vegetais potencializa seus efeitos no organismo, em um processo conhecido como 
                  efeito funcional conjunto. Essa abordagem permite que o corpo absorva e utilize melhor os benefícios de cada elemento 
                  natural da fórmula.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Leaf className="h-8 w-8 text-forest mr-3" />
                <h2 className="text-2xl font-bold text-forest">Principais compostos ativos e suas funções</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {compounds.map((compound, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-lg text-forest mb-2">{compound.name}</h3>
                    <p className="text-gray-700">{compound.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-forest mr-3" />
                <h2 className="text-2xl font-bold text-forest">Benefícios naturais</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-forest font-bold mr-2">✔</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Droplet className="h-8 w-8 text-forest mr-3" />
                <h2 className="text-2xl font-bold text-forest">Modo de uso</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">
                  Utilizar conforme recomendação individual. Consulte um profissional habilitado para definir a dose ideal 
                  de acordo com seu objetivo. O produto pode ser administrado de forma sublingual ou em outras formas naturais, 
                  conforme orientação.
                </p>
              </div>
            </section>
            
            <section>
              <div className="flex items-center mb-6">
                <Medicine className="h-8 w-8 text-forest mr-3" />
                <h2 className="text-2xl font-bold text-forest">Aviso legal</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 font-medium">
                  Este produto não substitui medicamentos. Consulte sempre um profissional de saúde antes de iniciar qualquer suplementação.
                </p>
              </div>
            </section>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-24">
              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <FlowerIcon className="h-6 w-6 text-forest mr-2" />
                  <h3 className="text-xl font-bold text-forest">Fórmula pura, segura e vegana</h3>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-forest mr-3"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              
              <section className="mb-8">
                <div className="flex items-center mb-4">
                  <Sun className="h-6 w-6 text-forest mr-2" />
                  <h3 className="text-xl font-bold text-forest">Para quem é indicado</h3>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-700 mb-3">Ideal para pessoas que enfrentam:</p>
                  <ul className="space-y-3">
                    {indications.map((indication, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-forest mr-3"></div>
                        <span>{indication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              
              <section>
                <div className="flex items-center mb-4">
                  <Thermometer className="h-6 w-6 text-forest mr-2" />
                  <h3 className="text-xl font-bold text-forest">Perguntas frequentes</h3>
                </div>
                <Accordion type="single" collapsible className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-sage">
                      Como devo armazenar o produto?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      O produto deve ser armazenado em local fresco, seco e ao abrigo da luz solar direta. Mantenha sempre bem fechado após o uso.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-sage">
                      Quanto tempo demora para sentir os efeitos?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      O tempo de resposta varia de pessoa para pessoa. Alguns sentem os efeitos mais rapidamente, enquanto outros podem levar algumas semanas para experimentar todos os benefícios.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-sage">
                      Posso tomar junto com medicamentos?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      É recomendado consultar um profissional de saúde antes de usar o produto em conjunto com medicamentos, para evitar possíveis interações.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-sage py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-forest mb-6">
            Experimente o poder da natureza para seu bem-estar
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Junte-se a milhares de pessoas que já descobriram como nosso Óleo Fitoterápico pode transformar sua qualidade de vida de forma natural e segura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-forest hover:bg-forest/90 text-white"
              onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </Button>
            <Button 
              variant="outline"
              className="border-forest text-forest hover:bg-white"
              asChild
            >
              <Link to="/produtos">Ver Outros Produtos</Link>
            </Button>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default ProductInfo;
