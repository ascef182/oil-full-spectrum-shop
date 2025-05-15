import React from 'react';
import BackToHomeButton from '../../components/layout/BlogBackButton';

export default function TratamentoNaturalInsonia() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 bg-sage-50 rounded-b-lg">
      <BackToHomeButton className="mb-8" />
      <h1 className="text-2xl font-bold mb-4">Tratamento natural para insônia: benefícios dos óleos essenciais terapêuticos</h1>
      <p className="mb-4">A insônia é um distúrbio do sono que pode prejudicar a saúde física e mental. Os óleos essenciais terapêuticos, extraídos de plantas medicinais, são aliados naturais para promover o relaxamento e melhorar a qualidade do sono.</p>
      <h2 className="text-xl font-semibold mb-2">Como os óleos essenciais atuam</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Induzem o relaxamento do corpo e da mente</li>
        <li>Reduzem a ansiedade e o estresse</li>
        <li>Favorecem o início e a manutenção do sono</li>
        <li>Podem ser utilizados em aromaterapia ou via oral, conforme orientação profissional</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Dicas para melhorar o sono naturalmente</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Estabeleça uma rotina de sono regular</li>
        <li>Evite estimulantes à noite</li>
        <li>Utilize óleos essenciais terapêuticos em difusores ou conforme prescrição</li>
        <li>Pratique técnicas de relaxamento</li>
      </ul>
      <p className="italic text-sm">Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento.</p>
    </div>
  );
} 