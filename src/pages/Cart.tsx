
import React, { useState } from 'react';
import RootLayout from '../components/layout/RootLayout';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ShoppingCart, Trash2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const formatPrice = (price: string) => {
    return parseFloat(price.replace('R$ ', '').replace(',', '.')).toFixed(2).replace('.', ',');
  };

  const handleCheckoutViaWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo seu número do WhatsApp
    
    let message = `*Novo Pedido - Oil Full Spectrum*\n\n`;
    
    if (customerName) {
      message += `*Nome:* ${customerName}\n`;
    }
    
    if (customerAddress) {
      message += `*Endereço:* ${customerAddress}\n`;
    }
    
    message += `\n*Itens do Pedido:*\n`;
    
    cart.forEach(item => {
      message += `▫️ ${item.quantity}x ${item.name} - R$ ${formatPrice(item.price)} cada = R$ ${(parseFloat(item.price.replace('R$ ', '').replace(',', '.')) * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    
    message += `\n*Total:* R$ ${getTotalPrice().toFixed(2).replace('.', ',')}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-forest mb-8">Seu Carrinho</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-forest mb-4">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">Adicione alguns produtos para continuar com a compra.</p>
            <Button 
              asChild
              className="bg-forest hover:bg-forest/90"
            >
              <Link to="/produtos">
                Ver Produtos
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lista de produtos no carrinho */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-forest">Itens do Carrinho ({cart.length})</h2>
                </div>
                
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-20 h-20 rounded overflow-hidden shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-bold text-forest">{item.name}</h3>
                        <p className="text-forest font-medium">{item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          
                          <span className="px-3 py-1 border-x border-gray-200 min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500"
                          aria-label="Remover item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="text-gray-600 hover:bg-gray-100"
                    onClick={clearCart}
                  >
                    Limpar Carrinho
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Resumo do pedido */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-forest mb-4">Resumo do Pedido</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frete:</span>
                    <span className="font-medium">
                      {getTotalPrice() >= 600 ? (
                        <span className="text-green-600">Grátis</span>
                      ) : (
                        "A calcular"
                      )}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold text-forest">Total:</span>
                    <span className="font-bold text-forest">R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="customerName" className="block text-sm text-gray-700 mb-1">
                      Seu nome (opcional)
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-forest"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="customerAddress" className="block text-sm text-gray-700 mb-1">
                      Endereço de entrega (opcional)
                    </label>
                    <textarea
                      id="customerAddress"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      rows={3}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-forest"
                      placeholder="Digite seu endereço de entrega"
                    ></textarea>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-forest hover:bg-forest/90 flex items-center justify-center gap-2 mb-3"
                  onClick={handleCheckoutViaWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  Finalizar Pedido via WhatsApp
                </Button>
                
                <Link to="/produtos" className="text-forest text-sm hover:underline block text-center">
                  Continuar Comprando
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default Cart;
