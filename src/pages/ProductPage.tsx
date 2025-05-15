import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import RootLayout from '../components/layout/RootLayout';

// Permitir string ou número para gotas/dias
export type DoseTableRow = {
  gotas: number | string;
  dias: number | string;
  descricao: string;
};

const productExample = {
  id: 101,
  name: 'Óleo Fitoterápico 1500mg - 30ml',
  image: 'https://via.placeholder.com/400x400?text=Produto',
  concentration: '1500mg',
  volume: '30ml',
  price: 'R$ 630,00',
  description:
    'Este óleo contém 1500mg de composto fitoterápico em 30ml de solução, oferecendo aproximadamente 50mg por ml. Ideal para quem busca equilíbrio natural e bem-estar diário.',
  doseTable: [
    { gotas: 5, dias: 60, descricao: 'Uso leve/moderado (5 gotas/dia): dura cerca de 2 meses.' },
    { gotas: 10, dias: 30, descricao: 'Uso regular (10 gotas/dia): dura cerca de 1 mês.' },
    { gotas: 20, dias: 15, descricao: 'Uso intenso (20 gotas/dia): dura cerca de 15 dias.' },
  ],
};

const ProductPage = ({ product = productExample }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addMultipleToCart } = useCart();

  const handleAddToCart = () => {
    addMultipleToCart(product, Number(quantity));
  };

  return (
    <RootLayout>
      <div className="min-h-screen bg-sage flex flex-col">
        <div className="container mx-auto px-4 py-6 flex-1">
          <button
            className="text-forest font-medium mb-6 hover:underline"
            onClick={() => navigate('/produtos')}
          >
            ← Voltar para loja
          </button>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Imagem */}
            <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-64 h-64 object-contain rounded-lg bg-sage border border-sage/50"
              />
            </div>
            {/* Info */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl font-bold text-forest mb-2">{product.name}</h1>
              <div className="flex gap-3 mb-2">
                <span className="bg-sage text-forest rounded-full px-4 py-1 text-base font-medium shadow-sm">
                  {product.concentration}
                </span>
                <span className="bg-sage text-forest rounded-full px-4 py-1 text-base font-medium shadow-sm">
                  {product.volume}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-forest">{product.price}</span>
              </div>
              {/* Tabela de dose */}
              <div className="mb-4">
                <h2 className="text-lg font-bold text-forest mb-2">Estimativa de Dose e Duração</h2>
                <table className="w-full text-left bg-sage/40 rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="py-2 px-3 text-forest">Gotas/dia</th>
                      <th className="py-2 px-3 text-forest">Duração média</th>
                      <th className="py-2 px-3 text-forest">Observação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.doseTable.map((row, idx) => (
                      <tr key={idx} className="border-b last:border-0 border-sage/50">
                        <td className="py-2 px-3">{row.gotas}</td>
                        <td className="py-2 px-3">{row.dias} {typeof row.dias === 'number' ? 'dias' : ''}</td>
                        <td className="py-2 px-3">{row.descricao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Seletor de quantidade */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-forest font-medium">Quantidade:</span>
                <button
                  className="w-8 h-8 rounded-full bg-sage text-forest text-xl font-bold border border-sage/60 hover:bg-sage/80"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Diminuir"
                >
                  -
                </button>
                <span className="text-lg font-bold text-forest w-8 text-center">{quantity}</span>
                <button
                  className="w-8 h-8 rounded-full bg-sage text-forest text-xl font-bold border border-sage/60 hover:bg-sage/80"
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>
              <Button
                className="bg-forest hover:bg-forest/90 text-white font-bold py-3 text-lg rounded-lg shadow-md"
                onClick={handleAddToCart}
              >
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ProductPage; 