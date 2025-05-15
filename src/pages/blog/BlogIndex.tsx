import React from 'react';
import { Link } from 'react-router-dom';
import BackToHomeButton from '../../components/layout/BlogBackButton';
import Header from '../../components/layout/Header';

export const posts = [
  {
    slug: 'oleo-fitoterapico-ansiedade',
    title: 'Como o óleo fitoterápico pode ajudar no controle da ansiedade',
    summary: 'Descubra como compostos bioativos naturais presentes em óleos fitoterápicos podem auxiliar no equilíbrio emocional e no bem-estar, de forma segura e natural.'
  },
  {
    slug: 'tratamento-natural-insonia',
    title: 'Tratamento natural para insônia: benefícios dos óleos essenciais terapêuticos',
    summary: 'Conheça alternativas naturais para melhorar a qualidade do sono, utilizando óleos essenciais terapêuticos e práticas integrativas.'
  },
  {
    slug: 'fitoterapia-fibromialgia','title': 'Fitoterapia no auxílio à fibromialgia: evidências e dicas','summary': 'Saiba como a fitoterapia pode ser uma aliada no manejo dos sintomas da fibromialgia, promovendo mais qualidade de vida.'
  }
];

export default function BlogIndex() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto py-10 px-4 bg-sage-50 rounded-b-lg">
        <BackToHomeButton className="mb-8" />
        <h1 className="text-3xl font-bold mb-8 text-forest">Blog: Saúde Natural e Fitoterapia</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(post => (
            <div key={post.slug} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between border border-sage-200 hover:shadow-lg transition-shadow">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-forest">{post.title}</h2>
                <p className="mb-4 text-gray-700">{post.summary}</p>
              </div>
              <Link to={`/blog/${post.slug}`} className="text-green-700 hover:underline font-medium">Ler artigo completo</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 