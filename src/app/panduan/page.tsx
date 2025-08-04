'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Download,
  Share2
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { guideSections, benefits, tools, faqs } from '@/data/panduanData';
import { GuideStep } from '@/interfaces/types';
import Footer from '@/components/Footer';

const Panduan = () => {
  const [activeSection, setActiveSection] = useState<string>('planning');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Mudah': return 'bg-green-100 text-green-800';
      case 'Sedang': return 'bg-yellow-100 text-yellow-800';
      case 'Sulit': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNecessityColor = (necessity: string) => {
    switch (necessity) {
      case 'Wajib': return 'bg-red-100 text-red-800';
      case 'Rekomendasi': return 'bg-blue-100 text-blue-800';
      case 'Opsional': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const StepCard = ({ step }: { step: GuideStep }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
              {step.id}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
          <button
            onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            {expandedStep === step.id ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {step.duration && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              <Clock className="w-4 h-4 mr-1" />
              {step.duration}
            </span>
          )}
          {step.difficulty && (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getDifficultyColor(step.difficulty)}`}>
              <Star className="w-4 h-4 mr-1" />
              {step.difficulty}
            </span>
          )}
        </div>

        {expandedStep === step.id && (
          <div className="mt-6 space-y-6 border-t pt-6">
            {step.image && (
              <div className="h-48 relative rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
            )}

            <div>
              <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Langkah Detail
              </h4>
              <ul className="space-y-2">
                {step.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {step.tips && step.tips.length > 0 && (
              <div>
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-blue-600" />
                  Tips & Trik
                </h4>
                <ul className="space-y-2">
                  {step.tips.map((tip, index) => (
                    <li key={index} className="flex items-start bg-blue-50 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-blue-800 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] pt-16">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-panduan.jpg"
            alt="P2L Guide Background"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Panduan P2L
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow text-green-100 max-w-3xl mx-auto">
              Panduan lengkap membangun Pekarangan Pangan Lestari dari nol hingga panen. 
              Mulai perjalanan menuju kemandirian pangan keluarga Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Manfaat Pekarangan Pangan Lestari
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membangun P2L memberikan berbagai keuntungan jangka panjang untuk keluarga dan lingkungan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Langkah-langkah Panduan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ikuti panduan step-by-step untuk membangun P2L yang sukses dan berkelanjutan
            </p>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {guideSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md'
                }`}
              >
                {section.icon}
                <span className="ml-2 hidden sm:inline">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Active Section */}
          {guideSections.map((section) => (
            activeSection === section.id && (
              <div key={section.id} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-lg text-gray-600">{section.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {section.steps.map((step) => (
                    <StepCard key={step.id} step={step} />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8">
                  <button
                    onClick={() => {
                      const currentIndex = guideSections.findIndex(s => s.id === activeSection);
                      if (currentIndex > 0) {
                        setActiveSection(guideSections[currentIndex - 1].id);
                      }
                    }}
                    disabled={guideSections.findIndex(s => s.id === activeSection) === 0}
                    className="flex items-center px-6 py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                    Sebelumnya
                  </button>
                  
                  <span className="text-gray-500">
                    {guideSections.findIndex(s => s.id === activeSection) + 1} dari {guideSections.length}
                  </span>
                  
                  <button
                    onClick={() => {
                      const currentIndex = guideSections.findIndex(s => s.id === activeSection);
                      if (currentIndex < guideSections.length - 1) {
                        setActiveSection(guideSections[currentIndex + 1].id);
                      }
                    }}
                    disabled={guideSections.findIndex(s => s.id === activeSection) === guideSections.length - 1}
                    className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Selanjutnya
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Alat dan Perlengkapan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Daftar peralatan yang dibutuhkan untuk membangun dan merawat P2L
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-green-900">{tool.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getNecessityColor(tool.necessity)}`}>
                    {tool.necessity}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                <p className="font-semibold text-green-600">{tool.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan umum seputar pembuatan P2L
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-green-900 pr-4">{faq.question}</span>
                  {expandedFAQ === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Panduan;