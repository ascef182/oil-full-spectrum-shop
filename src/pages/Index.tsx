
import React from 'react';
import RootLayout from '../components/layout/RootLayout';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ShippingBanner from '../components/home/ShippingBanner';
import HowItWorks from '../components/home/HowItWorks';
import BenefitsOverview from '../components/home/BenefitsOverview';
import Testimonials from '../components/home/Testimonials';

const Index = () => {
  return (
    <RootLayout>
      <HeroBanner />
      <ShippingBanner />
      <FeaturedProducts />
      <HowItWorks />
      <BenefitsOverview />
      <Testimonials />
    </RootLayout>
  );
};

export default Index;
