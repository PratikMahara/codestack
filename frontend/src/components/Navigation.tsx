import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false); // State to track scroll direction
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Overview', href: '/overview' },
    { name: 'Team', href: '/team' },
    { name: 'Our Works', href: '/works' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Find Us', href: '/find-us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if the user is scrolling up or down
      if (currentScrollY < lastScrollY) {
        setIsScrolledUp(true); // User is scrolling up
      } else {
        setIsScrolledUp(false); // User is scrolling down
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Dependency on lastScrollY to check scroll direction

  return (
    <nav className={cn(
      'fixed w-full z-50 py-4 transition-all duration-300',
      isScrolledUp ? 'bg-gray-500' : 'bg-codestack-black'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" height="50px" width="50px" alt="Logo" />
            <span className="text-white font-bold text-2xl">
              Code<span className="text-codestack-red">stack</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className="text-white font-medium hover:text-codestack-red transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-white font-medium hover:text-codestack-red transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
