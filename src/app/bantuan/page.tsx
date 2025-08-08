'use client';

import React, { useState } from 'react';
import {
  MessageCircle,
  Send,
  BookOpen,
  Lightbulb,
  Bug,
  Plus,
  ChevronRight,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Bantuan = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const contactMethods = [
    {
      id: 1,
      title: 'Instagram',
      description: 'Hubungi kami melalui instagram untuk pertanyaan detail',
      icon: <Instagram className="w-6 h-6" />,
      value: '@kkn114_lalabatariaja',
      action: 'https://instagram.com/kkn114_lalabatariaja',
      color: 'bg-red-100 text-red-500'
    },
    {
      id: 2,
      title: 'WhatsApp',
      description: 'Chat langsung untuk respon cepat',
      icon: <MessageCircle className="w-6 h-6" />,
      value: '+62 852-2598-8870',
      action: 'https://wa.me/6285225988870',
      color: 'bg-green-100 text-green-600'
    },
  ];

  const helpTopics = [
    {
      id: 'tambah-informasi',
      title: 'Menambahkan Informasi Tanaman',
      description: 'Ingin berkontribusi menambahkan data tanaman baru?',
      icon: <Plus className="w-5 h-5" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'saran-website',
      title: 'Saran Perbaikan Website',
      description: 'Ada ide untuk meningkatkan website ini?',
      icon: <Lightbulb className="w-5 h-5" />,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 'lapor-masalah',
      title: 'Laporkan Masalah Teknis',
      description: 'Menemukan bug atau error pada website?',
      icon: <Bug className="w-5 h-5" />,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'panduan-p2l',
      title: 'Pertanyaan tentang P2L',
      description: 'Butuh bantuan terkait Pekarangan Pangan Lestari?',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-blue-100 text-blue-600'
    },
    
  ];

//   const teamMembers = [
//     {
//       id: 1,
//       name: 'Fiqrie Ghalibaldi Gazali',
//       role: 'Koordinator Desa',
//       department: 'Agribisnis',
//       nim: 'G021221153',
//       image: '/assets/ayu.JPEG'
//     },
//     {
//       id: 2,
//       name: 'Nur Azizah RAMADHANI',
//       role: 'Sekretaris',
//       department: 'Ilmu dan Teknologi Pangan',
//       nim: 'G031221054',
//       image: '/assets/ayu.JPEG'
//     },
//     {
//       id: 3,
//       name: 'Nabila Hamdayani Adama',
//       role: 'Bendahara',
//       department: 'Teknik Informatika',
//       nim: 'D121221093',
//       image: '/assets/ayu.JPEG'
//     },
//     {
//       id: 4,
//       name: 'Ayu Rahayu',
//       role: 'Anggota',
//       department: 'Peternakan',
//       nim: 'I011221121',
//       image: '/assets/ayu.JPEG'
//     },
//     {
//       id: 5,
//       name: 'Asyam Nabil',
//       role: 'Anggota',
//       department: 'Peternakan',
//       nim: 'I011221029',
//       image: '/assets/ayu.JPEG'
//     },
//     {
//       id: 6,
//       name: 'Intan Nuraeni',
//       role: 'Anggota',
//       department: 'Administrasi Publik',
//       nim: 'E011221064',
//       image: '/assets/ayu.JPEG'
//     }
//   ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Frontend form validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.topic || !formData.message.trim()) {
        alert('Mohon lengkapi semua field yang wajib diisi');
        setIsSubmitting(false);
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        alert('Format email tidak valid');
        setIsSubmitting(false);
        return;
      }

      // Send data to API
      const response = await fetch('/api/submit-to-sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          topic: formData.topic,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Success
        alert('✅ Pesan berhasil dikirim! Tim kami akan segera merespons melalui email.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          topic: '',
          message: ''
        });
        
        // Reset selected topic
        setSelectedTopic('');
        
      } else {
        // Server error
        throw new Error(result.error || 'Gagal mengirim pesan');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      
      // User-friendly error messages
      let errorMessage = 'Terjadi kesalahan saat mengirim pesan. ';
      
      if (error instanceof Error) {
        if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
          errorMessage += 'Periksa koneksi internet Anda dan coba lagi.';
        } else if (error.message.includes('tidak valid')) {
          errorMessage += error.message;
        } else {
          errorMessage += 'Silakan coba lagi atau hubungi kami melalui WhatsApp.';
        }
      } else {
        errorMessage += 'Silakan coba lagi atau hubungi kami melalui WhatsApp.';
      }
      
      alert('❌ ' + errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      
      {/* Hero Section - Fixed image path issue */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] sm:min-h-[500px] pt-16">
        {/* Image with error handling */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-panduan.jpg"
            alt="Bantuan dan Kontak"
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
            priority
            />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-700/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              Bantuan & Kontak
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 drop-shadow text-green-100 max-w-3xl mx-auto leading-relaxed">
              Hubungi kami untuk menambahkan informasi, memberikan saran, atau bantuan terkait website P2L
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Cara Menghubungi Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Pilih metode komunikasi yang paling nyaman untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.action}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${method.color} rounded-lg mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{method.description}</p>
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                  <span className="mr-2">{method.value}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Help Topics */}
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Topik Bantuan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kategori bantuan yang tersedia untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(topic.id);
                  setFormData(prev => ({ ...prev, topic: topic.id }));
                }}
                className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${
                  selectedTopic === topic.id ? 'border-green-500 shadow-lg' : 'border-gray-100'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 ${topic.color} rounded-lg mb-4`}>
                  {topic.icon}
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                <div className="flex items-center mt-4 text-green-600">
                  <span className="text-sm font-medium">
                    {selectedTopic === topic.id ? 'Topik dipilih' : 'Pilih topik ini'}
                  </span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Kirim Pesan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Isi form di bawah untuk mengirim pesan kepada tim kami
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-green-900 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Masukkan alamat email Anda"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-green-900 mb-2">
                Topik Bantuan *
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Pilih topik bantuan</option>
                {helpTopics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-green-900 mb-2">
                Pesan *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto flex items-center justify-center px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Team Section
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Tim Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Kenali tim yang berpartisipasi dalam KKNT 114 Universirtas Hasanuddin di Desa Lalabata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.department}</p>
                  <p className="text-gray-500 text-sm">{member.nim}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Bantuan;