
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Qualidade de Sono",
    description: "Ajuda a regular o ciclo de sono, promovendo um descanso mais profundo e reparador.",
    icon: "💤"
  },
  {
    title: "Alívio da Ansiedade",
    description: "Auxilia na redução dos sintomas de ansiedade e promove uma sensação de calma.",
    icon: "🧠"
  },
  {
    title: "Dores Crônicas",
    description: "Possui propriedades analgésicas que podem ajudar a reduzir dores persistentes.",
    icon: "🌿"
  },
  {
    title: "Inflamação",
    description: "Contribui para a redução de processos inflamatórios no organismo.",
    icon: "✨"
  },
  {
    title: "Saúde Mental",
    description: "Auxilia no equilíbrio emocional e no gerenciamento do estresse diário.",
    icon: "🌱"
  },
  {
    title: "Recuperação Física",
    description: "Favorece a recuperação muscular e reduz desconfortos após atividades físicas.",
    icon: "💪"
  }
];

const BenefitsOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Benefícios para Saúde e Bem-estar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Os produtos Oil Full Spectrum podem contribuir para diversos aspectos da sua saúde, 
            proporcionando uma melhor qualidade de vida.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-forest mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/beneficios">
            <Button className="bg-forest hover:bg-forest/90" size="lg">
              Conheça Todos os Benefícios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOverview;
