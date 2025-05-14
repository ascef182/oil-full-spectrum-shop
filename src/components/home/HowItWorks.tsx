
import React from 'react';
import { CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="section-padding bg-sage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça a ciência por trás dos produtos Oil Full Spectrum e como eles podem ajudar 
            no seu bem-estar através do sistema endocanabinoide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-forest mb-4">O Efeito Entourage</h3>
            <p className="text-gray-600 mb-6">
              O Efeito Entourage é o resultado da sinergia entre canabinoides, terpenos e flavonoides 
              presentes em extratos full spectrum, potencializando os benefícios terapêuticos 
              através de uma ação conjunta e complementar.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-forest mr-2 mt-1 flex-shrink-0" />
                <p><span className="font-bold">Ação Sinérgica:</span> Os compostos trabalham em conjunto, 
                amplificando mutuamente seus efeitos terapêuticos.</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-forest mr-2 mt-1 flex-shrink-0" />
                <p><span className="font-bold">Efeito Potencializado:</span> A presença de múltiplos 
                compostos garante uma maior eficácia comparada a compostos isolados.</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-forest mr-2 mt-1 flex-shrink-0" />
                <p><span className="font-bold">Resposta Personalizada:</span> Cada organismo responde 
                de forma única ao conjunto de compostos, permitindo uma experiência personalizada.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-forest mb-4">Terpenos e Seus Benefícios</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-forest mb-2">Mirceno</h4>
                  <p className="text-gray-600">Possui propriedades analgésicas, anti-inflamatórias e relaxantes musculares.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-forest mb-2">Limoneno</h4>
                  <p className="text-gray-600">Conhecido por seus efeitos elevadores de humor e propriedades ansiolíticas.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-forest mb-2">Linalol</h4>
                  <p className="text-gray-600">Oferece efeitos calmantes e redutores de estresse, ajudando na qualidade do sono.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-forest mb-2">Beta-cariofileno</h4>
                  <p className="text-gray-600">Potente anti-inflamatório que interage diretamente com o sistema endocanabinoide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
