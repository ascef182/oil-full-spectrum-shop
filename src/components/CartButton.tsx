
import React from 'react';
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';

const CartButton = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/carrinho">
      <Button variant="ghost" size="icon" className="text-forest hover:bg-sage relative">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-forest text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
};

export default CartButton;
