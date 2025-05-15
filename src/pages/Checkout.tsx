import React, { useState } from 'react';
import RootLayout from '../components/layout/RootLayout';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WHATSAPP_NUMBER = '5511934154811';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    if (!name.trim() || !address.trim() || !number.trim() || !cep.trim() || !phone.trim()) {
      setError('Preencha todos os campos obrigatórios.');
      return false;
    }
    if (!/^\d{8,}$/.test(cep.replace(/\D/g, ''))) {
      setError('CEP inválido.');
      return false;
    }
    if (!/^\d{8,15}$/.test(phone.replace(/\D/g, ''))) {
      setError('Telefone inválido.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSendOrder = () => {
    if (!validate()) return;
    let message = `*Novo Pedido - Oil Full Spectrum*\n\n`;
    message += `*Nome:* ${name}\n`;
    message += `*Endereço:* ${address}, Nº ${number}\n`;
    message += `*CEP:* ${cep}\n`;
    message += `*Telefone:* ${phone}\n`;
    message += `\n*Itens do Pedido:*\n`;
    cart.forEach(item => {
      message += `▫️ ${item.quantity}x ${item.name} - R$ ${item.price}\n`;
    });
    message += `\n*Total:* R$ ${getTotalPrice().toFixed(2).replace('.', ',')}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    clearCart();
    navigate('/produtos');
  };

  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-12 max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-forest mb-6 text-center">Finalizar Pedido</h1>
        <form className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4" onSubmit={e => { e.preventDefault(); handleSendOrder(); }}>
          <div>
            <label className="block text-forest font-medium mb-1">Nome completo *</label>
            <input type="text" className="w-full border border-sage rounded-md px-3 py-2" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div>
            <label className="block text-forest font-medium mb-1">Endereço *</label>
            <input type="text" className="w-full border border-sage rounded-md px-3 py-2" value={address} onChange={e => setAddress(e.target.value)} required />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-forest font-medium mb-1">Número *</label>
              <input type="text" className="w-full border border-sage rounded-md px-3 py-2" value={number} onChange={e => setNumber(e.target.value)} required />
            </div>
            <div className="flex-1">
              <label className="block text-forest font-medium mb-1">CEP *</label>
              <input type="text" className="w-full border border-sage rounded-md px-3 py-2" value={cep} onChange={e => setCep(e.target.value)} required />
            </div>
          </div>
          <div>
            <label className="block text-forest font-medium mb-1">Telefone *</label>
            <input type="text" className="w-full border border-sage rounded-md px-3 py-2" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="Somente números" />
          </div>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <Button type="submit" className="bg-forest hover:bg-forest/90 text-white font-bold py-3 text-lg rounded-lg shadow-md w-full mt-2">
            Enviar Pedido via WhatsApp
          </Button>
        </form>
      </div>
    </RootLayout>
  );
};

export default Checkout; 