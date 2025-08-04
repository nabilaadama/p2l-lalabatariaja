'use client';

import React from 'react';
import { Leaf, Instagram, MapPin } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface FooterProps {
  scrollToElement?: (elementId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToElement }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle navigation
  const handleNavigation = (elementId: string, path?: string) => {
    // Jika ada path yang diberikan, navigasi ke halaman tersebut
    if (path) {
      router.push(path);
      return;
    }

    // Jika sedang di halaman home, gunakan scroll
    if (pathname === '/') {
      if (scrollToElement) {
        scrollToElement(elementId);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      // Jika tidak di halaman home, navigasi ke home dulu dengan hash
      router.push(`/#${elementId}`);
    }
  };

  // TikTok Icon Component (karena tidak tersedia di lucide-react)
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  return (
    <footer className="bg-green-800 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8" />
              <span className="text-xl font-bold">P2L Indonesia</span>
            </div>
            <p className="text-green-100">
              Membangun ketahanan pangan keluarga melalui pemanfaatan pekarangan berkelanjutan.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <button
                  onClick={() => handleNavigation('beranda', '/')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('manfaat')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Manfaat
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('panduan', '/panduan')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Panduan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('tanaman', '/tanaman')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tanaman
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontak & Sosial Media</h3>
            <div className="space-y-3 text-green-100">
              {/* Instagram */}
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-white" />
                <a 
                  href="https://instagram.com/kkn114_lalabatariaja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @kkn114_lalabatariaja
                </a>
              </div>
              
              {/* TikTok */}
              <div className="flex items-center space-x-3">
                <TikTokIcon className="w-5 h-5 text-white" />
                <a 
                  href="https://tiktok.com/@kkn114_lalabatariaja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @kkn114_lalabatariaja
                </a>
              </div>
              
              {/* Alamat */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <a 
                className="text-green-100"
                href="https://share.google/GvHxDlLXNIv9kjaJP">
                  Lalabata Riaja, Donri Donri,<br />
                  Kabupaten Soppeng,<br />
                  Sulawesi Selatan 90853
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2025 Sistem Informasi Pekarangan Pangan Lestari. KKNT 114 Universitas Hasanuddin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;