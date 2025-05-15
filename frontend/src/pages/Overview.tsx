
import React from 'react';
import Navigation from '@/components/Navigation';
import Overview from '@/components/Overview';
import Footer from '@/components/Footer';

const OverviewPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Overview />
      <Footer />
    </div>
  );
};

export default OverviewPage;
