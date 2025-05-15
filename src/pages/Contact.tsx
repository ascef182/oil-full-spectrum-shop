import React, { useState } from 'react';
import RootLayout from '../components/layout/RootLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import BackToHomeButton from '../components/layout/BlogBackButton';

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
    // Aqui simularia envio para ascefpam@gmail.com
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato, retornaremos em breve.",
      duration: 5000,
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Estou entrando em contato através do site.";
    window.open(`https://wa.me/5511934154811?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <RootLayout>
      <div className="bg-sage py-12">
        <div className="container mx-auto px-4">
          <BackToHomeButton className="mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-forest mb-4 text-center">Informações de Contato</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-center">
            Entre em contato conosco para dúvidas, pedidos ou informações sobre nossos produtos.
          </p>
        </div>
      </div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="bg-sage p-8 rounded-lg max-w-lg w-full">
            <div className="space-y-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="h-6 w-6 text-forest mb-2" />
                <h3 className="font-bold text-forest">Telefone</h3>
                <a href="tel:5511934154811" className="text-gray-700 hover:text-forest transition-colors">
                  (11) 93415-4811
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 text-forest mb-2" />
                <h3 className="font-bold text-forest">Endereço</h3>
                <p className="text-gray-700">
                  Avenida 9 de julho, 1981<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01313-001
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-6 w-6 text-forest mb-2" />
                <h3 className="font-bold text-forest">Horário de Atendimento</h3>
                <p className="text-gray-700">
                  Segunda à Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h<br />
                  Domingo: Fechado
                </p>
              </div>
              <div>
                <h3 className="font-bold text-forest mb-3">Siga-nos</h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-forest hover:bg-gold hover:text-forest transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-forest hover:bg-gold hover:text-forest transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center gap-2" onClick={handleWhatsAppClick}>
                  <MessageSquare size={18} />
                  Contato via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default Contact;
