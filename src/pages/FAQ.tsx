import React from 'react';
import RootLayout from '../components/layout/RootLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BackToHomeButton from '../components/layout/BlogBackButton';

const FAQ = () => {
  return (
    <RootLayout>
      <div className="bg-sage py-12">
        <div className="container mx-auto px-4">
          <BackToHomeButton className="mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4">Perguntas Frequentes</h1>
          <p className="text-gray-700 max-w-2xl">
            Encontre respostas para as dúvidas mais comuns sobre os produtos Oil Full Spectrum 
            e como utilizá-los.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="legal" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-lightgray">
              <TabsTrigger value="legal">Questões Legais</TabsTrigger>
              <TabsTrigger value="uso">Como Usar</TabsTrigger>
              <TabsTrigger value="efeitos">Efeitos</TabsTrigger>
              <TabsTrigger value="medicamentos">Interações</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="legal" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Os produtos Oil Full Spectrum são legais?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Sim, todos os nossos produtos são 100% legais no Brasil. Nossos produtos são elaborados dentro 
                      dos parâmetros estabelecidos pela legislação brasileira, seguindo as regulamentações da ANVISA.
                    </p>
                    <p>
                      Nossos óleos contêm apenas compostos naturais permitidos por lei e não possuem THC 
                      (tetraidrocanabinol) acima dos limites permitidos, o que os torna legais para comercialização 
                      e uso sem necessidade de prescrição médica.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    É necessário receita médica para comprar?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      Não, os produtos Oil Full Spectrum são classificados como suplementos naturais e não 
                      requerem prescrição médica para sua compra. No entanto, sempre recomendamos consultar 
                      um profissional de saúde antes de iniciar o uso, especialmente se você tem condições 
                      médicas pré-existentes ou utiliza outros medicamentos.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    É seguro viajar com os produtos Oil Full Spectrum?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Sim, é seguro viajar com nossos produtos dentro do território nacional, uma vez que são legais 
                      no Brasil. Para viagens internacionais, recomendamos verificar a legislação específica do país 
                      de destino, pois as leis podem variar significativamente.
                    </p>
                    <p>
                      Por precaução, sugerimos manter o produto em sua embalagem original com o rótulo 
                      intacto, que contém todas as informações sobre sua composição e legalidade.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Posso usar os produtos para fins medicinais?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      Nossos produtos são comercializados como suplementos para bem-estar e não como medicamentos. 
                      Não podemos fazer alegações medicinais específicas sobre sua eficácia no tratamento de doenças. 
                      Se você busca tratamento para uma condição específica, recomendamos consultar um profissional 
                      de saúde que possa orientá-lo adequadamente sobre as opções terapêuticas disponíveis.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="uso" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Como devo usar o óleo sublingual?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Para usar o óleo sublingual Oil Full Spectrum, siga estas etapas:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-2">
                      <li>Agite bem o frasco antes de usar.</li>
                      <li>Usando o conta-gotas, aplique a dose recomendada sob a língua.</li>
                      <li>Mantenha o óleo sob a língua por 60-90 segundos para permitir a absorção.</li>
                      <li>Em seguida, engula o restante.</li>
                    </ol>
                    <p>
                      Recomendamos tomar o óleo de 1-2 vezes ao dia, preferencialmente com o estômago vazio 
                      para melhor absorção. A dosagem ideal pode variar de pessoa para pessoa, então é 
                      recomendável começar com uma dose baixa e ajustar conforme necessário.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Qual a dosagem recomendada?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      A dosagem recomendada varia de acordo com diversos fatores como peso corporal, 
                      metabolismo, condição a ser tratada e sensibilidade individual. 
                    </p>
                    <p className="mb-2">
                      Como regra geral, sugerimos:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li><span className="font-bold">Iniciantes:</span> Comece com 1-2 gotas, 1-2 vezes ao dia.</li>
                      <li><span className="font-bold">Uso moderado:</span> 3-5 gotas, 1-2 vezes ao dia.</li>
                      <li><span className="font-bold">Uso avançado:</span> 5-10 gotas, 1-2 vezes ao dia.</li>
                    </ul>
                    <p>
                      Recomendamos a abordagem "Start Low, Go Slow" (comece baixo, aumente devagar), 
                      ajustando gradualmente até encontrar a dosagem ideal para suas necessidades.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Qual o melhor horário para tomar?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      O melhor horário depende do efeito desejado:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li><span className="font-bold">Pela manhã:</span> Pode ajudar a gerenciar o estresse ao longo do dia sem causar sonolência.</li>
                      <li><span className="font-bold">À noite (1-2 horas antes de dormir):</span> Pode beneficiar aqueles que buscam melhorar a qualidade do sono.</li>
                      <li><span className="font-bold">Antes de situações estressantes:</span> Pode ajudar a controlar a ansiedade em situações específicas.</li>
                    </ul>
                    <p>
                      Para condições crônicas, manter uma dose consistente dividida em duas vezes ao 
                      dia (manhã e noite) geralmente oferece os melhores resultados.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Como armazenar corretamente os produtos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Para maximizar a eficácia e durabilidade dos produtos Oil Full Spectrum:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Mantenha em local fresco e seco, afastado da luz solar direta.</li>
                      <li>A temperatura ideal é entre 15-25°C.</li>
                      <li>Feche bem o frasco após cada uso para evitar oxidação.</li>
                      <li>Mantenha longe do alcance de crianças e animais de estimação.</li>
                      <li>Não é necessário refrigerar, mas evite exposição a altas temperaturas.</li>
                      <li>Respeite a data de validade indicada na embalagem.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="efeitos" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Quanto tempo leva para sentir os efeitos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      O tempo para sentir os efeitos varia conforme o método de administração e a 
                      condição sendo tratada:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li><span className="font-bold">Uso sublingual (sob a língua):</span> Os primeiros efeitos podem ser percebidos entre 15-45 minutos.</li>
                      <li><span className="font-bold">Gummies:</span> Os efeitos geralmente começam a aparecer após 30-90 minutos.</li>
                    </ul>
                    <p className="mb-2">
                      Para condições crônicas como dores persistentes, ansiedade ou distúrbios do sono, 
                      os benefícios completos podem se desenvolver ao longo de 1-2 semanas de uso consistente, 
                      à medida que os compostos se acumulam no sistema.
                    </p>
                    <p>
                      A resposta individual pode variar significativamente. Algumas pessoas relatam benefícios 
                      imediatos, enquanto outras podem precisar de um período mais longo de uso regular.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Existem efeitos colaterais?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Os produtos Oil Full Spectrum são geralmente bem tolerados pela maioria das pessoas. 
                      No entanto, como com qualquer suplemento, algumas pessoas podem experimentar efeitos colaterais leves:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li>Boca seca</li>
                      <li>Sonolência (especialmente em doses mais elevadas)</li>
                      <li>Alterações leves no apetite</li>
                      <li>Desconforto gastrointestinal temporário</li>
                    </ul>
                    <p className="mb-2">
                      Esses efeitos são tipicamente suaves e transitórios, ocorrendo com maior frequência em doses iniciais 
                      ou mais elevadas. Muitos usuários relatam que os efeitos colaterais diminuem com o uso contínuo.
                    </p>
                    <p>
                      Se você experimentar qualquer efeito colateral persistente ou desconfortável, 
                      recomendamos reduzir a dosagem ou descontinuar o uso e consultar um profissional de saúde.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Os produtos Oil Full Spectrum causam sonolência?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      A sonolência é uma resposta individual que varia de pessoa para pessoa:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li>Em doses baixas a moderadas, a maioria dos usuários não relata sonolência significativa.</li>
                      <li>Doses mais elevadas, especialmente à noite, podem promover relaxamento que facilita o sono.</li>
                      <li>Pessoas sensíveis podem experimentar leve sonolência mesmo com doses padrão.</li>
                    </ul>
                    <p>
                      Se você estiver preocupado com a sonolência durante o dia, recomendamos começar com doses baixas 
                      e, se necessário, limitar o uso para o período noturno até entender como seu corpo responde.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    É possível desenvolver tolerância ou dependência?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Os estudos disponíveis sugerem que:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li>O desenvolvimento de tolerância (necessidade de doses crescentes para o mesmo efeito) é mínimo com produtos full spectrum.</li>
                      <li>Não há evidências de dependência física ou psicológica significativa.</li>
                      <li>Não há sintomas de abstinência relatados quando o uso é descontinuado.</li>
                    </ul>
                    <p>
                      Alguns usuários de longo prazo podem eventualmente ajustar suas doses, mas isso geralmente 
                      está relacionado à busca do efeito terapêutico ideal e não a um desenvolvimento de 
                      tolerância no sentido tradicional.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="medicamentos" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Posso usar junto com outros medicamentos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Os produtos Oil Full Spectrum podem interagir com certos medicamentos, uma vez que são 
                      metabolizados pelo mesmo sistema hepático (enzimas CYP450) que processa muitos fármacos comuns.
                    </p>
                    <p className="mb-2">
                      Recomendamos cautela especial se você usa:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li>Anticoagulantes e antiagregantes plaquetários</li>
                      <li>Antidepressivos e ansiolíticos</li>
                      <li>Medicamentos para pressão arterial</li>
                      <li>Imunossupressores</li>
                      <li>Anticonvulsivantes</li>
                      <li>Certos antibióticos e antifúngicos</li>
                    </ul>
                    <p className="font-bold">
                      É essencial consultar seu médico ou farmacêutico antes de combinar nossos produtos 
                      com qualquer medicação prescrita.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Posso usar durante a gravidez ou amamentação?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      <strong>Não recomendamos o uso de nossos produtos durante a gravidez ou amamentação.</strong>
                    </p>
                    <p className="mb-2">
                      Existem poucos estudos científicos conclusivos sobre a segurança do uso destes extratos 
                      durante estas fases importantes. Por precaução e seguindo o princípio da cautela médica, 
                      aconselhamos evitar o uso nestes períodos.
                    </p>
                    <p>
                      Se você está grávida, planejando engravidar ou amamentando e considera que poderia se 
                      beneficiar do uso, é fundamental discutir primeiro com seu obstetra ou médico responsável 
                      pelo seu acompanhamento.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    É seguro para idosos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      Os produtos Oil Full Spectrum podem ser utilizados por idosos, mas com algumas considerações importantes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li>Idosos podem ser mais sensíveis aos efeitos, por isso recomenda-se iniciar com doses mais baixas.</li>
                      <li>Devido à maior probabilidade de uso de múltiplos medicamentos, as interações medicamentosas devem ser cuidadosamente avaliadas.</li>
                      <li>A metabolização pode ser mais lenta em idosos, potencialmente aumentando a duração dos efeitos.</li>
                    </ul>
                    <p>
                      Para idosos, é especialmente importante consultar um profissional de saúde antes de iniciar o uso, 
                      particularmente se houver condições de saúde pré-existentes ou uso de medicações regulares.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg text-forest font-medium">
                    Posso dirigir após o uso?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="mb-2">
                      A capacidade de dirigir após o uso dos produtos Oil Full Spectrum varia conforme a dose e 
                      a sensibilidade individual:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-2">
                      <li>Doses baixas a moderadas geralmente não afetam significativamente a capacidade de dirigir na maioria das pessoas.</li>
                      <li>Doses mais elevadas podem causar sonolência ou leve diminuição do tempo de reação em algumas pessoas.</li>
                      <li>Usuários novos devem avaliar como seu corpo responde antes de dirigir ou operar maquinário pesado.</li>
                    </ul>
                    <p className="mb-2">
                      <strong>Recomendação de segurança:</strong> Se você está iniciando o uso, observe como seu corpo 
                      responde antes de dirigir. Se sentir sonolência, tontura ou qualquer alteração na coordenação 
                      motora, não dirija.
                    </p>
                    <p>
                      Cada pessoa responde de maneira única, então sempre priorize a segurança e esteja atento 
                      aos sinais do seu corpo.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Não encontrou a resposta que estava procurando? Entre em contato conosco!
          </p>
          <Link to="/contato">
            <Button className="bg-forest hover:bg-forest/90">
              Fale Conosco
            </Button>
          </Link>
        </div>
      </div>
    </RootLayout>
  );
};

export default FAQ;
