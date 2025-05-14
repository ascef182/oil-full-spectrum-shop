
import React, { useState } from 'react';
import RootLayout from '../components/layout/RootLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission success
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato, retornaremos em breve.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Estou entrando em contato através do site.";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <RootLayout>
      <div className="bg-sage py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4">Contato</h1>
          <p className="text-gray-700 max-w-2xl">
            Entre em contato conosco para tirar dúvidas, fazer pedidos ou conhecer mais sobre nossos produtos.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-forest mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem aqui"
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-forest hover:bg-forest/90">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-forest mb-6">Informações de Contato</h2>
              
              <div className="bg-sage p-6 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-forest mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-forest">Email</h3>
                      <a href="mailto:contato@oilfullspectrum.com.br" className="text-gray-700 hover:text-forest transition-colors">
                        contato@oilfullspectrum.com.br
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-forest mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-forest">Telefone</h3>
                      <a href="tel:+551199999999" className="text-gray-700 hover:text-forest transition-colors">
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-forest mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-forest">Endereço</h3>
                      <p className="text-gray-700">
                        Rua Exemplo, 123<br />
                        Bairro, São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-forest mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-forest">Horário de Atendimento</h3>
                      <p className="text-gray-700">
                        Segunda à Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-forest mb-3">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-forest hover:bg-gold hover:text-forest transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-forest hover:bg-gold hover:text-forest transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center gap-2"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageSquare size={18} />
                    Contato via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-lightgray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-forest mb-6">Cadastre-se para receber novidades</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Inscreva-se para receber atualizações sobre lançamentos, promoções exclusivas e dicas sobre bem-estar.
          </p>
          
          <div className="max-w-md mx-auto">
            <form 
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                toast({
                  title: "Cadastro realizado!",
                  description: "Você receberá nossas novidades por email.",
                  duration: 5000,
                });
                // Reset the input
                (e.target as HTMLFormElement).reset();
              }}
            >
              <Input 
                type="email" 
                placeholder="Seu melhor email" 
                className="flex-grow"
                required
              />
              <Button type="submit" className="bg-forest hover:bg-forest/90">
                Inscrever
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Respeitamos sua privacidade. Não compartilhamos seus dados com terceiros.
            </p>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default Contact;
