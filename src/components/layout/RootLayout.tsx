import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>Oil Full Spectrum | Produtos Naturais e Fitoterapia</title>
        <meta name="description" content="Óleos e produtos naturais para saúde, bem-estar e qualidade de vida. Fitoterapia baseada em ciência e tradição." />
        <meta property="og:title" content="Oil Full Spectrum | Produtos Naturais para Bem-estar" />
        <meta property="og:description" content="Óleos e produtos naturais para saúde, bem-estar e qualidade de vida." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
