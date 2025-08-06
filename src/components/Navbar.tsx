'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  // Props untuk kustomisasi navbar jika diperlukan
  showBackground?: boolean;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  showBackground = false, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to scroll to element
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to navigate to different pages
  const navigateToPage = (path: string) => {
    router.push(path);
  };

  // Function to handle home navigation (scroll to beranda if on home page, otherwise navigate to home)
  const handleHomeNavigation = () => {
    if (window.location.pathname === '/') {
      scrollToElement('beranda');
    } else {
      navigateToPage('/');
    }
  };

  // Function to handle manfaat navigation
  const handleManfaatNavigation = () => {
    if (window.location.pathname === '/') {
      scrollToElement('manfaat');
    } else {
      navigateToPage('/#manfaat');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      // Background conditional: white on mobile, original on desktop/tablet
      showBackground 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-white/95 shadow-lg lg:bg-transparent lg:shadow-none'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              {/* Government Logos */}
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/logo-unhas.png"
                  alt="Logo Unhas"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/assets/logo-kkn.png"
                  alt="Logo KKN 114"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/assets/logo-berdampak.png"
                  alt="Logo Berdampak"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
                />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/assets/logo-soppeng.png"
                  alt="Logo Soppeng"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
                />
              </div>

              <div className="hidden sm:flex items-center justify-center">
                <Image
                  src="/assets/logo-kknlalabata.png"
                  alt="Logo KKNT 114 Lalabata Riaja"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 bg-green-800/80 rounded-lg p-2">
            <button 
              onClick={handleHomeNavigation}
              className="text-[#FEF7EF] font-medium hover:text-green-800 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-green-50/80"
            >
              Beranda
            </button>

            <button 
              onClick={handleManfaatNavigation}
              className="text-[#FEF7EF] font-medium hover:text-green-800 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-green-50/80"
            >
              Manfaat
            </button>

            <button 
              onClick={() => navigateToPage('/tanaman')}
              className="text-[#FEF7EF] hover:text-green-700 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-green-50/80"
            >
              Tanaman
            </button>
        
            <button 
              onClick={() => navigateToPage('/panduan')}
              className="text-[#FEF7EF] hover:text-green-700 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-green-50/80"
            >
              Panduan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-green-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  handleHomeNavigation();
                  toggleMobileMenu();
                }}
                className="block w-full text-left px-3 py-2 text-green-700 font-medium hover:bg-green-50 rounded-md transition-colors duration-200"
              >
                Beranda
              </button>
              
              <button
                onClick={() => {
                  handleManfaatNavigation();
                  toggleMobileMenu();
                }}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-200"
              >
                Manfaat
              </button>

              <button
                onClick={() => {
                  navigateToPage('/tanaman');
                  toggleMobileMenu();
                }}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-200"
              >
                Tanaman
              </button>
           
              <button
                onClick={() => {
                  navigateToPage('/panduan');
                  toggleMobileMenu();
                }}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-200"
              >
                Panduan
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;