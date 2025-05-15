import React from 'react';
import RootLayout from '../components/layout/RootLayout';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ShippingBanner from '../components/home/ShippingBanner';
import HowItWorks from '../components/home/HowItWorks';
import BenefitsOverview from '../components/home/BenefitsOverview';
import Testimonials from '../components/home/Testimonials';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { posts as blogPosts } from './blog/BlogIndex';

const Index = () => {
  return (
    <RootLayout>
      <HeroBanner />
      <ShippingBanner />
      
      {/* Special Product Highlight */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-sage rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-forest mr-2" />
                  <h3 className="text-xl font-bold text-forest">Produto em Destaque</h3>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-forest mb-4">
                  Óleo Fitoterápico de Amplo Espectro
                </h2>
                <p className="text-gray-700 mb-6">
                  Desenvolvido a partir de compostos naturais e óleos essenciais terapêuticos. 
                  100% natural, vegano e livre de químicos agressivos.
                </p>
                <Button 
                  asChild
                  className="bg-forest hover:bg-forest/90 text-white"
                >
                  <Link to="/produto-info">
                    Ver Detalhes Completos
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 bg-forest flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Óleo Fitoterápico de Amplo Espectro" 
                  className="max-h-60 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FeaturedProducts />
      <HowItWorks />
      <BenefitsOverview />
      <Testimonials />
      {/* Blog Section */}
      <div className="bg-sage-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-forest">Conteúdo do Blog</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {blogPosts.slice(0,2).map(post => (
              <div key={post.slug} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between border border-sage-200 hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-forest">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.summary}</p>
                </div>
                <Link to={`/blog/${post.slug}`} className="text-green-700 hover:underline font-medium">Ler artigo completo</Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-forest hover:bg-forest/90 text-white">
              <Link to="/blog">Ver todos os artigos</Link>
            </Button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Index;
