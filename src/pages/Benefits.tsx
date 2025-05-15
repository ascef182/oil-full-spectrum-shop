import React from 'react';
import RootLayout from '../components/layout/RootLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import BackToHomeButton from '../components/layout/BlogBackButton';

const Benefits = () => {
  return (
    <RootLayout>
      <div className="bg-sage py-12">
        <div className="container mx-auto px-4">
          <BackToHomeButton className="mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4">Benefícios</h1>
          <p className="text-gray-700 max-w-2xl">
            Conheça os benefícios dos produtos Oil Full Spectrum e como eles podem ajudar 
            a melhorar sua saúde e bem-estar.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="sistema" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-lightgray">
              <TabsTrigger value="sistema">Sistema Endocanabinoide</TabsTrigger>
              <TabsTrigger value="terpenos">Terpenos</TabsTrigger>
              <TabsTrigger value="tratamentos">Tratamentos</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="sistema" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-forest mb-4">O Sistema Endocanabinoide</h2>
                    <p className="text-gray-700 mb-4">
                      O sistema endocanabinoide (SEC) é um complexo sistema de sinalização celular identificado no início dos anos 90. É um sistema regulatório crucial que ajuda a manter o equilíbrio interno do corpo, conhecido como homeostase.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Este sistema está presente em todo o corpo humano, incluindo o cérebro, órgãos, tecidos conectivos, glândulas e células imunológicas, desempenhando diferentes tarefas em cada área, mas sempre com o mesmo objetivo: manter o equilíbrio interno estável, apesar das flutuações no ambiente externo.
                    </p>
                    <p className="text-gray-700 mb-4">
                      O sistema endocanabinoide é composto por três componentes principais:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><span className="font-bold">Endocanabinoides:</span> Moléculas produzidas naturalmente pelo corpo, similares aos compostos encontrados nas plantas.</li>
                      <li><span className="font-bold">Receptores:</span> Presentes em todo o corpo, os endocanabinoides se ligam a estes receptores para sinalizar que o SEC precisa atuar.</li>
                      <li><span className="font-bold">Enzimas:</span> Responsáveis por quebrar os endocanabinoides após cumprirem suas funções.</li>
                    </ul>
                  </div>
                  <div className="bg-sage rounded-lg p-6">
                    <h3 className="text-xl font-bold text-forest mb-4">Principais Funções</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-forest mb-1">Regulação do Humor e Estresse</h4>
                        <p className="text-gray-700">Ajuda a regular neurotransmissores responsáveis pelo humor, reduzindo sintomas de ansiedade e depressão.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-forest mb-1">Controle da Dor</h4>
                        <p className="text-gray-700">Influencia a percepção da dor através da interação com os receptores específicos no sistema nervoso.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-forest mb-1">Funções Imunológicas</h4>
                        <p className="text-gray-700">Contribui para a comunicação entre células imunológicas, ajudando a regular inflamações.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-forest mb-1">Ciclos de Sono</h4>
                        <p className="text-gray-700">Influencia o ciclo circadiano e promove um sono mais reparador e de qualidade.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="terpenos" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-forest mb-6 text-center">Principais Terpenos e Suas Funções</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-sage hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest mb-3">Mirceno</h3>
                      <p className="text-gray-700 mb-3">
                        O mirceno é um dos terpenos mais abundantes encontrados na natureza.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Efeitos:</p>
                          <p className="text-gray-700 text-sm">Sedativo, analgésico, anti-inflamatório e relaxante muscular.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Benefícios:</p>
                          <p className="text-gray-700 text-sm">Alívio de dores crônicas, melhora do sono e redução da inflamação.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Também encontrado em:</p>
                          <p className="text-gray-700 text-sm">Manga, lúpulo, tomilho, louro.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-sage hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest mb-3">Limoneno</h3>
                      <p className="text-gray-700 mb-3">
                        Terpeno com aroma cítrico, comum em cascas de limão, laranja e toranja.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Efeitos:</p>
                          <p className="text-gray-700 text-sm">Elevação do humor, ansiolítico, antioxidante e antimicrobiano.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Benefícios:</p>
                          <p className="text-gray-700 text-sm">Redução da ansiedade, melhora da digestão e elevação do humor.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Também encontrado em:</p>
                          <p className="text-gray-700 text-sm">Citrinos, alecrim, hortelã-pimenta.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-sage hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest mb-3">Linalol</h3>
                      <p className="text-gray-700 mb-3">
                        Terpeno com aroma floral, semelhante à lavanda.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Efeitos:</p>
                          <p className="text-gray-700 text-sm">Ansiolítico, sedativo, analgésico e anti-convulsivo.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Benefícios:</p>
                          <p className="text-gray-700 text-sm">Redução da ansiedade, melhora do sono, alívio do estresse.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Também encontrado em:</p>
                          <p className="text-gray-700 text-sm">Lavanda, manjericão, coentro.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-sage hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest mb-3">Beta-cariofileno</h3>
                      <p className="text-gray-700 mb-3">
                        Terpeno com aroma picante e amadeirado, encontrado em pimenta-preta.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Efeitos:</p>
                          <p className="text-gray-700 text-sm">Anti-inflamatório, analgésico, antioxidante e neuroprotetor.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Benefícios:</p>
                          <p className="text-gray-700 text-sm">Redução de inflamações, alívio da dor, proteção gastrointestinal.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Também encontrado em:</p>
                          <p className="text-gray-700 text-sm">Pimenta preta, cravo, canela.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-sage hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest mb-3">Pineno</h3>
                      <p className="text-gray-700 mb-3">
                        Terpeno com aroma de pinho, predominante em coníferas.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Efeitos:</p>
                          <p className="text-gray-700 text-sm">Broncodilatador, anti-inflamatório, antioxidante e aumento da atenção.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Benefícios:</p>
                          <p className="text-gray-700 text-sm">Melhora respiratória, aumento da clareza mental, redução da inflamação.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Também encontrado em:</p>
                          <p className="text-gray-700 text-sm">Pinheiros, alecrim, manjericão.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-sage hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest mb-3">Humuleno</h3>
                      <p className="text-gray-700 mb-3">
                        Terpeno com aroma terroso e amadeirado, presente no lúpulo.
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Efeitos:</p>
                          <p className="text-gray-700 text-sm">Anti-inflamatório, analgésico, antibacteriano e supressor do apetite.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Benefícios:</p>
                          <p className="text-gray-700 text-sm">Redução de inflamações, alívio da dor, controle do apetite.</p>
                        </div>
                        <div className="bg-white p-3 rounded-md">
                          <p className="font-medium text-forest">Também encontrado em:</p>
                          <p className="text-gray-700 text-sm">Lúpulo, sálvia, gengibre.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-forest mb-4">O Efeito Entourage</h3>
                  <p className="text-gray-700 mb-4">
                    O "Efeito Entourage" refere-se à sinergia entre canabinoides, terpenos e outros compostos naturais, resultando em efeitos terapêuticos potencializados comparados ao uso de compostos isolados.
                  </p>
                  <p className="text-gray-700">
                    Nos produtos Oil Full Spectrum, mantemos o perfil natural de terpenos e compostos, maximizando os benefícios através dessa interação sinérgica, o que torna nossos produtos significativamente mais eficazes que aqueles produzidos com compostos isolados.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tratamentos" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-forest mb-6 text-center">Tratamentos Possíveis</h2>
                <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
                  Os produtos Oil Full Spectrum têm demonstrado benefícios em diversas condições de saúde, 
                  apoiados por evidências científicas e relatos de usuários. Confira abaixo as principais 
                  aplicações terapêuticas:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-sage p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-forest mb-4">Distúrbios Neurológicos</h3>
                    <ul className="space-y-3">
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Ansiedade e Estresse</h4>
                        <p className="text-gray-700 text-sm">
                          Estudos mostram eficácia significativa na redução de sintomas de ansiedade e estresse, 
                          promovendo sensação de calma sem os efeitos colaterais de medicamentos convencionais.
                        </p>
                      </li>
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Depressão</h4>
                        <p className="text-gray-700 text-sm">
                          Evidências preliminares sugerem benefícios como adjuvante no tratamento de 
                          transtornos depressivos, atuando sobre o humor e níveis de serotonina.
                        </p>
                      </li>
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Insônia e Distúrbios do Sono</h4>
                        <p className="text-gray-700 text-sm">
                          Melhora significativa na qualidade do sono, diminuição da latência para adormecer 
                          e redução de despertares noturnos.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-sage p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-forest mb-4">Dor e Inflamação</h3>
                    <ul className="space-y-3">
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Dor Crônica</h4>
                        <p className="text-gray-700 text-sm">
                          Resultados promissores no controle de dores crônicas resistentes a tratamentos 
                          convencionais, como fibromialgia e neuropatias.
                        </p>
                      </li>
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Dores Articulares</h4>
                        <p className="text-gray-700 text-sm">
                          Propriedades anti-inflamatórias que contribuem para o alívio de dores artríticas 
                          e melhora da mobilidade em condições como artrite e artrose.
                        </p>
                      </li>
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Enxaquecas</h4>
                        <p className="text-gray-700 text-sm">
                          Redução na frequência e intensidade de crises de enxaqueca em alguns pacientes, 
                          possivelmente pela ação anti-inflamatória e regulação vascular.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-sage p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-forest mb-4">Condições Autoimunes</h3>
                    <ul className="space-y-3">
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Doenças Inflamatórias Intestinais</h4>
                        <p className="text-gray-700 text-sm">
                          Estudos preliminares mostram potencial na redução de inflamação gastrointestinal 
                          em condições como Doença de Crohn e Colite Ulcerativa.
                        </p>
                      </li>
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Psoríase e Dermatites</h4>
                        <p className="text-gray-700 text-sm">
                          Efeitos anti-inflamatórios que podem beneficiar condições inflamatórias 
                          da pele, tanto com uso tópico quanto oral.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-sage p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-forest mb-4">Outras Aplicações</h3>
                    <ul className="space-y-3">
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Saúde Cardiovascular</h4>
                        <p className="text-gray-700 text-sm">
                          Potencial na redução de inflamação sistêmica e estresse oxidativo, fatores 
                          associados a doenças cardiovasculares.
                        </p>
                      </li>
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Recuperação Física</h4>
                        <p className="text-gray-700 text-sm">
                          Auxilia na recuperação muscular após exercícios intensos, reduzindo inflamação 
                          e acelerando a regeneração tecidual.
                        </p>
                      </li>
                      <li className="bg-white p-4 rounded-md">
                        <h4 className="font-bold text-forest mb-1">Equilíbrio Hormonal</h4>
                        <p className="text-gray-700 text-sm">
                          Alguns estudos sugerem benefícios em condições relacionadas ao desequilíbrio 
                          hormonal, como TPM e sintomas da menopausa.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 italic">
                    Nota: As informações acima são baseadas em estudos científicos e relatos de usuários, mas não 
                    substituem orientações médicas. Os produtos Oil Full Spectrum não têm a intenção de diagnosticar, 
                    tratar, curar ou prevenir qualquer doença. Consulte sempre um profissional de saúde antes de iniciar 
                    qualquer novo tratamento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </RootLayout>
  );
};

export default Benefits;
