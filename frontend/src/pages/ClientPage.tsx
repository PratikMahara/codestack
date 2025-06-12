
import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Client from '@/components/Client'
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Client/>
      <Footer />
    </div>
  );
};

export default ContactPage;
