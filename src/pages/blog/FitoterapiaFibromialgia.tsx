import React from 'react';
import BackToHomeButton from '../../components/layout/BlogBackButton';

export default function FitoterapiaFibromialgia() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 bg-sage-50 rounded-b-lg">
      <BackToHomeButton className="mb-8" />
      <h1 className="text-2xl font-bold mb-4">Fitoterapia no auxílio à fibromialgia: evidências e dicas</h1>
      <p className="mb-4">A fibromialgia é uma condição caracterizada por dores musculares generalizadas e fadiga. A fitoterapia, com o uso de óleos e extratos naturais, pode ser uma aliada importante no manejo dos sintomas, promovendo mais qualidade de vida.</p>
      <h2 className="text-xl font-semibold mb-2">Benefícios da fitoterapia para fibromialgia</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Redução da dor muscular</li>
        <li>Melhora da qualidade do sono</li>
        <li>Auxílio no controle do estresse</li>
        <li>Promoção do bem-estar geral</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Como utilizar óleos naturais</h2>
      <p className="mb-4">A escolha do óleo e a dosagem devem ser orientadas por um profissional de saúde. O uso regular, aliado a hábitos saudáveis, pode potencializar os benefícios.</p>
      <h2 className="text-xl font-semibold mb-2">Evidências científicas</h2>
      <p className="mb-4">Estudos indicam que compostos bioativos naturais presentes em óleos fitoterápicos podem atuar em mecanismos relacionados à dor e ao sono, auxiliando no controle dos sintomas da fibromialgia.</p>
      <p className="italic text-sm">Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento.</p>
    </div>
  );
} 