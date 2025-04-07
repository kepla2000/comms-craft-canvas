
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import UseCases from '@/components/UseCases';
import CTASection from '@/components/CTASection';
import ApiPlayground from '@/components/ApiPlayground';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <UseCases />
        <ApiPlayground />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
