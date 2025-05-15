
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-codestack-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
      
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-codestack-black to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-t from-codestack-red to-transparent opacity-20 rounded-tl-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforming Ideas Into <span className="gradient-text">Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            At Codestack, we build innovative software solutions that help businesses thrive in the digital era.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/overview" 
              className="px-8 py-3 bg-codestack-red text-white font-semibold rounded-md hover:bg-codestack-red-light transition-colors duration-300"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-transparent text-white font-semibold rounded-md border border-white hover:bg-white/10 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <span className="animate-bounce mt-2 block w-1 h-3 bg-white rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
