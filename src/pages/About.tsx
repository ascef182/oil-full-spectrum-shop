import React from 'react';
import RootLayout from '../components/layout/RootLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Leaf, Beaker } from 'lucide-react';
import BackToHomeButton from '../components/layout/BlogBackButton';

const About = () => {
  return (
    <RootLayout>
      <div className="bg-sage py-12">
        <div className="container mx-auto px-4">
          <BackToHomeButton className="mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4">Sobre a Marca</h1>
          <p className="text-gray-700 max-w-2xl">
            Conheça nossa história, missão, valores e o compromisso que temos com a natureza e seu bem-estar.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-forest mb-6">Nossa História</h2>
              <p className="text-gray-700 mb-4">
                A Oil Full Spectrum nasceu da paixão por soluções naturais e do desejo de transformar vidas através do poder das plantas. Nossa jornada começou quando percebemos o potencial incrível que os produtos naturais têm para promover o bem-estar e a qualidade de vida.
              </p>
              <p className="text-gray-700 mb-4">
                Fundada em 2018 por um grupo de entusiastas da medicina natural, estudantes de farmácia e bioquímicos, nossa empresa se dedica a pesquisar, desenvolver e oferecer produtos da mais alta qualidade, respeitando sempre os processos naturais e garantindo a pureza de todos os ingredientes.
              </p>
              <p className="text-gray-700">
                Hoje, nos orgulhamos de ter ajudado milhares de pessoas a encontrarem alternativas naturais para melhorar sua saúde e bem-estar, sempre com o compromisso de inovar e aprimorar continuamente nossos produtos.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                  alt="Natureza e sustentabilidade" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold p-4 rounded-lg shadow-lg">
                <p className="font-playfair text-forest font-bold text-xl">Desde 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest mb-4">Nossa Missão e Valores</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Guiamos nossas ações e decisões com base em princípios sólidos que refletem nosso compromisso com você e com o planeta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-sage w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-3 text-center">Sustentabilidade</h3>
              <p className="text-gray-700 text-center">
                Comprometidos com práticas sustentáveis em toda nossa cadeia produtiva, desde a obtenção de matérias-primas até embalagens eco-friendly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-sage w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-3 text-center">Qualidade</h3>
              <p className="text-gray-700 text-center">
                Buscamos a excelência em cada etapa do processo, garantindo produtos premium que superam as expectativas dos nossos clientes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-sage w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-3 text-center">Inovação</h3>
              <p className="text-gray-700 text-center">
                Investimos constantemente em pesquisa e desenvolvimento para aprimorar nossos produtos e oferecer soluções inovadoras.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-forest mb-4 text-center">Nossa Missão</h3>
              <p className="text-gray-700 text-center mb-6">
                Transformar vidas através do poder da natureza, oferecendo produtos de altíssima qualidade que promovam saúde, bem-estar e equilíbrio, sempre respeitando o meio ambiente e valorizando práticas sustentáveis.
              </p>
              
              <h3 className="text-2xl font-bold text-forest mb-4 text-center">Nossa Visão</h3>
              <p className="text-gray-700 text-center">
                Ser referência nacional em produtos naturais para saúde e bem-estar, reconhecidos pela excelência, inovação e compromisso com a sustentabilidade, tornando os benefícios da natureza acessíveis a todos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Processo de produção artesanal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-forest mb-6">Nosso Compromisso</h2>
              <p className="text-gray-700 mb-4">
                Cada produto Oil Full Spectrum é criado com o mais alto padrão de qualidade e comprometimento. Nossa produção artesanal garante atenção a cada detalhe, desde a seleção das melhores matérias-primas até o processo de extração cuidadoso que preserva todos os compostos benéficos.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-forest mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><span className="font-bold">100% Natural:</span> Utilizamos apenas ingredientes naturais de origem vegetal, sem aditivos sintéticos.</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-forest mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><span className="font-bold">Vegano:</span> Todos os nossos produtos são veganos, livres de componentes de origem animal.</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-forest mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><span className="font-bold">Testado em Laboratório:</span> Nossos produtos passam por rigorosos testes que garantem sua pureza e potência.</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-forest mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><span className="font-bold">Sustentável:</span> Embalagens eco-friendly e processos que minimizam o impacto ambiental.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para experimentar a diferença?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Descubra como os produtos Oil Full Spectrum podem transformar sua qualidade de vida com soluções naturais e eficazes.
          </p>
          <Link to="/produtos">
            <Button className="bg-gold hover:bg-gold/90 text-forest" size="lg">
              Ver Nossos Produtos
            </Button>
          </Link>
        </div>
      </section>
    </RootLayout>
  );
};

export default About;
