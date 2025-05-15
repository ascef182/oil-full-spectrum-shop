import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackToHomeButton({ className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      <Link
        to="/"
        className="inline-flex items-center text-forest text-lg font-medium hover:underline"
        style={{ textDecoration: 'none' }}
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Voltar para loja
      </Link>
    </div>
  );
} 