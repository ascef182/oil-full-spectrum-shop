import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductPage, { DoseTableRow } from './ProductPage';
import { products as allProducts } from './Products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find(p => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-sage">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-forest mb-4">Produto não encontrado</h2>
          <button className="text-forest underline" onClick={() => navigate('/produtos')}>Voltar para loja</button>
        </div>
      </div>
    );
  }

  // Montar objeto para ProductPage
  const doseTable: DoseTableRow[] = product.category === 'gummies'
    ? [{ gotas: '-', dias: '-', descricao: 'Consuma 1 a 2 unidades ao dia, conforme orientação.' }]
    : [
        { gotas: 5, dias: 60, descricao: 'Uso leve/moderado (5 gotas/dia): dura cerca de 2 meses.' },
        { gotas: 10, dias: 30, descricao: 'Uso regular (10 gotas/dia): dura cerca de 1 mês.' },
        { gotas: 20, dias: 15, descricao: 'Uso intenso (20 gotas/dia): dura cerca de 15 dias.' },
      ];

  const description = product.category === 'gummies'
    ? 'Cada unidade contém 30mg de composto fitoterápico. Ideal para quem busca praticidade e sabor no cuidado diário.'
    : `Este óleo contém ${product.concentration} de composto fitoterápico em ${product.volume} de solução, oferecendo aproximadamente ${product.concentration && product.volume ? Math.round(parseInt(product.concentration) / parseInt(product.volume)) : ''}mg por ml.`;

  return (
    <ProductPage product={{
      ...product,
      description,
      doseTable
    }} />
  );
};

export default ProductDetails; 