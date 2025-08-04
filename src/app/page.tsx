'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Sprout, 
  Home as HomeIcon, 
  Heart, 
  Recycle
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

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

  const crops = [
    {
      name: "Terong",
      image: "/assets/terong.jpg",
      description: "Kaya vitamin A, mudah ditanam di media pot atau polybag"
    },
    {
      name: "Mentimun",
      image: "/assets/mentimun.jpg",
      description: "Sumber vitamin C tinggi, cocok untuk iklim tropis"
    },
    {
      name: "Tomat",
      image: "/assets/tomat.jpg",
      description: "Mengandung likopen, dapat dipanen sepanjang tahun"
    },
    {
      name: "Cabai Rawit",
      image: "/assets/cabai-rawit.jpg",
      description: "Bumbu dasar masakan, nilai ekonomis tinggi"
    },
    {
      name: "Kangkung",
      image: "/assets/kangkung.jpg",
      description: "Pertumbuhan cepat, kaya zat besi dan vitamin"
    },
    {
      name: "Bayam",
      image: "/assets/bayam.jpg",
      description: "Sumber folat dan vitamin K, mudah perawatan"
    }
  ];

  const benefits = [
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Ketahanan Pangan Keluarga",
      description: "Memenuhi kebutuhan pangan harian keluarga dengan produksi sendiri yang berkelanjutan"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Gizi dan Kesehatan",
      description: "Menyediakan sayuran segar kaya nutrisi langsung dari halaman rumah"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Ramah Lingkungan",
      description: "Mengurangi jejak karbon dengan sistem pertanian organik berkelanjutan"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Nilai Ekonomis",
      description: "Menghemat pengeluaran belanja dan potensi income tambahan dari surplus panen"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pemberdayaan Masyarakat",
      description: "Membangun komunitas yang mandiri dan gotong royong dalam pangan"
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Edukasi Lingkungan",
      description: "Mengajarkan generasi muda tentang pertanian dan cinta lingkungan"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Persiapan Lahan",
      description: "Identifikasi dan persiapkan lahan pekarangan dengan memperhatikan pencahayaan, drainase, dan aksesibilitas untuk kegiatan bertani."
    },
    {
      number: "2", 
      title: "Perencanaan Tanaman",
      description: "Tentukan jenis tanaman sesuai kebutuhan keluarga, iklim lokal, dan luas lahan yang tersedia dengan sistem rotasi tanaman."
    },
    {
      number: "3",
      title: "Implementasi & Perawatan", 
      description: "Mulai menanam dengan teknik organik, lakukan perawatan rutin seperti penyiraman, pemupukan, dan pengendalian hama alami."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Navigation - menggunakan komponen Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/bg-hero.png"
            alt="Pekarangan Pangan Lestari Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Pekarangan Pangan Lestari
              </h1>
              <p className="text-lg sm:text-xl lg:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Wujudkan ketahanan pangan keluarga melalui pemanfaatan pekarangan rumah 
                dengan sistem pertanian berkelanjutan yang ramah lingkungan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <button 
                  onClick={() => scrollToElement('tentang')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Tentang P2L
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigateToPage('/panduan')}
                  className="border-2 border-white text-white hover:bg-white/80 hover:text-green-800 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Panduan
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-900/80 font-semibold uppercase tracking-wide text-sm">TENTANG P2L</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900  mt-2 mb-4">
              Apa Itu Pekarangan Pangan Lestari?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Pekarangan Pangan Lestari (P2L) adalah konsep pemanfaatan lahan pekarangan rumah 
                untuk budidaya tanaman pangan yang berkelanjutan. Program ini bertujuan untuk 
                meningkatkan ketahanan pangan keluarga, diversifikasi pangan, dan menciptakan 
                lingkungan yang lebih hijau dan sehat.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Dengan menerapkan prinsip-prinsip pertanian organik dan ramah lingkungan, P2L 
                tidak hanya memberikan manfaat ekonomi tetapi juga mendukung pelestarian 
                lingkungan dan peningkatan kualitas hidup masyarakat.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Berkelanjutan dan ramah lingkungan</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Meningkatkan ketahanan pangan keluarga</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Mendukung gaya hidup sehat</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Statistik P2L Indonesia</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Keluarga Terlibat</span>
                  <span className="font-semibold text-green-600 text-lg">2.5 Juta+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Luas Lahan Produktif</span>
                  <span className="font-semibold text-green-600 text-lg">15,000 Ha</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Penghematan Belanja</span>
                  <span className="font-semibold text-green-600 text-lg">30-50%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Varietas Tanaman</span>
                  <span className="font-semibold text-green-600 text-lg">50+ Jenis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crops Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900  mb-4">
              Jenis Tanaman P2L
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Berbagai pilihan tanaman yang cocok untuk ditanam di pekarangan rumah 
              dengan hasil optimal dan perawatan yang mudah
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crops.map((crop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="h-48 relative overflow-hidden bg-gray-200">
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center hover:scale-110 transition-transform duration-500"
                    quality={80}
                    priority={index < 3}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-lg">{crop.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{crop.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => navigateToPage('/tanaman')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="manfaat" className="py-16 lg:py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tahap-Tahap Pemanfaatan Pekarangan
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto text-lg">
              Manfaat komprehensif yang dapat diperoleh dari implementasi Pekarangan Pangan Lestari
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-green-700 p-6 rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-yellow-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-green-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="panduan" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-4">
              Tujuan P2L
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Langkah-langkah sistematis untuk memulai Pekarangan Pangan Lestari di rumah Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Main Gallery Image */}
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/galeri-1.jpg"
                  alt="Pekarangan Pangan Lestari - Contoh Implementasi"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Small Gallery Grid */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="relative h-24 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/assets/galeri-2.jpg"
                    alt="Gallery 1"
                    fill
                    className="object-cover object-center hover:scale-110 transition-transform duration-500"
                    quality={80}
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/assets/galeri-3.jpg"
                    alt="Gallery 2"
                    fill
                    className="object-cover object-center hover:scale-110 transition-transform duration-500"
                    quality={80}
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/assets/galeri-4.jpg"
                    alt="Gallery 3"
                    fill
                    className="object-cover object-center hover:scale-110 transition-transform duration-500"
                    quality={80}
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="text-green-900/80 font-semibold uppercase tracking-wide">Galeri</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mt-2 mb-6">
                Inspirasi Pekarangan Pangan Lestari
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Lihat berbagai contoh implementasi P2L yang berhasil dari berbagai daerah di Indonesia. 
                Dari lahan sempit hingga pekarangan luas, semua bisa dimanfaatkan untuk ketahanan pangan keluarga.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Setiap pekarangan memiliki karakteristik unik, namun dengan perencanaan yang tepat 
                dan teknik yang sesuai, hasil yang optimal dapat dicapai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - menggunakan komponen Footer */}
      <Footer scrollToElement={scrollToElement} />
    </div>
  );
};

export default Home;