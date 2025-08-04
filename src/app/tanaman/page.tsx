'use client';

import React, { useState } from 'react';
import { 
  Search,
  Clock,
  Droplets,
  Sun,
  Scissors,
  Heart,
  TreePine,
  X,
  Leaf
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { CategoryKey, Plant } from '@/entities/types';
import { categories } from '@/data/categories';
import { plantsData } from '@/data/plantsData';
import Footer from '@/components/Footer';

const Tanaman = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('sayuran-daun');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filteredPlants = plantsData[activeCategory]?.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const PlantCard = ({ plant }: { plant: Plant }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="h-48 relative overflow-hidden">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center hover:scale-110 transition-transform duration-500"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-lg">{plant.name}</h3>
          <p className="text-white/90 text-sm italic drop-shadow">{plant.scientificName}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{plant.description}</p>
        <button
          onClick={() => setSelectedPlant(plant)}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );

  const PlantDetailModal = ({ plant, onClose }: { plant: Plant | null; onClose: () => void }) => {
    if (!plant) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-green-900 ">{plant.name}</h2>
              <p className="text-gray-600 italic">{plant.scientificName}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            {/* Image */}
            <div className="h-64 relative rounded-lg overflow-hidden mb-6">
              <Image
                src={plant.image}
                alt={plant.name}
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center text-green-900">
                <Leaf className="w-5 h-5 mr-2 text-green-600" />
                Deskripsi
              </h3>
              <p className="text-gray-700 leading-relaxed">{plant.description}</p>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center text-green-900 ">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Manfaat
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {plant.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planting Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-900">Musim Tanam</span>
                </div>
                <p className="text-blue-800">{plant.planting.season}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Scissors className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-medium text-green-900">Durasi</span>
                </div>
                <p className="text-green-800">{plant.planting.duration}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Droplets className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="font-medium text-orange-900">Penyiraman</span>
                </div>
                <p className="text-orange-800">{plant.planting.water}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sun className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-900">Sinar Matahari</span>
                </div>
                <p className="text-yellow-800">{plant.planting.sunlight}</p>
              </div>
            </div>

            {/* Planting Steps */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-green-900 ">
                <TreePine className="w-5 h-5 mr-2 text-green-600" />
                Cara Penanaman P2L
              </h3>
              <div className="space-y-4">
                {plant.planting.steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacing Info */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Jarak Tanam yang Disarankan</h4>
              <p className="text-gray-700">{plant.planting.spacing} antar tanaman</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-jenistanaman.jpg" 
            alt="Garden Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Jenis Tanaman P2L
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow text-green-100 max-w-2xl mx-auto">
              Panduan lengkap tanaman untuk Pekarangan Pangan Lestari. 
              Temukan berbagai jenis tanaman yang cocok untuk kebun rumah Anda.
            </p>
            
            {/* Search Box in Hero */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari tanaman..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block text-gray-600 w-full pl-10 pr-3 py-3 border border-transparent rounded-full leading-5 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform  ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md'
                }`}
              >
                {category.icon}
                <span className="ml-2 hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-900 mb-2">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* No Results */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-medium text-green-900 mb-3">Tanaman tidak ditemukan</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Coba ubah kata kunci pencarian atau pilih kategori lain untuk menemukan tanaman yang Anda cari.
            </p>
          </div>
        )}
      </div>

      {/* Plant Detail Modal */}
      <PlantDetailModal 
        plant={selectedPlant} 
        onClose={() => setSelectedPlant(null)} 
      />

      <Footer />
    </div>
  );
};

export default Tanaman;