
import React from 'react';
import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ShippingBanner = () => {
  return (
    <section className="bg-gold py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Truck className="h-8 w-8 text-forest mr-3" />
            <div>
              <h3 className="text-lg md:text-xl font-bold text-forest">Frete Grátis</h3>
              <p className="text-forest text-sm md:text-base">Em compras acima de R$600,00</p>
            </div>
          </div>
          
          <Link to="/produtos">
            <Button className="bg-forest hover:bg-forest/90 text-white">
              Aproveitar Agora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShippingBanner;
