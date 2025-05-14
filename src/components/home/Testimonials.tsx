
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    content: "Depois de anos sofrendo com insônia, finalmente encontrei algo que realmente funciona. O óleo Full Spectrum 600mg melhorou significativamente minha qualidade de sono.",
    rating: 5
  },
  {
    name: "João Pereira",
    location: "Rio de Janeiro, RJ",
    content: "As dores crônicas nas minhas costas estavam afetando minha qualidade de vida. Com o uso regular do Oil Full Spectrum 1500mg, notei uma redução significativa nas dores.",
    rating: 5
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    content: "As Gummies são perfeitas para o meu dia a dia agitado. Ajudam muito a controlar minha ansiedade e são super práticas de levar para qualquer lugar.",
    rating: 4
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-gold text-gold" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra como os produtos Oil Full Spectrum têm transformado a vida de nossos clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <RatingStars rating={testimonial.rating} />
                
                <blockquote className="mt-4 mb-4 text-gray-700 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-bold text-forest">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
