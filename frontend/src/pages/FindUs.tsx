
import React from 'react';
import Navigation from '@/components/Navigation';
import FindUs from '@/components/FindUs';
import Footer from '@/components/Footer';

const FindUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FindUs />
      <Footer />
    </div>
  );
};

export default FindUsPage;
