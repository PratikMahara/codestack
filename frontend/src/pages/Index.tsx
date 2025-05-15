
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Team from '@/components/Team';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import FindUs from '@/components/FindUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Overview />
      <Team />
      <Works />
      <Contact />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Index;
