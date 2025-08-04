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
  ArrowLeft,
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
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start flex-1 min-w-0">
            <div className="bg-green-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold mr-3 sm:mr-4 flex-shrink-0">
              {step.id}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2 pr-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
            </div>
          </div>
          <button
            onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 ml-2"
          >
            {expandedStep === step.id ? (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {step.duration && (
            <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="whitespace-nowrap">{step.duration}</span>
            </span>
          )}
          {step.difficulty && (
            <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${getDifficultyColor(step.difficulty)}`}>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="whitespace-nowrap">{step.difficulty}</span>
            </span>
          )}
        </div>

        {expandedStep === step.id && (
          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6 border-t pt-4 sm:pt-6">
            {step.image && (
              <div className="h-40 sm:h-48 relative rounded-lg overflow-hidden">
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
              <h4 className="font-semibold text-green-900 mb-3 flex items-center text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600 flex-shrink-0" />
                Langkah Detail
              </h4>
              <ul className="space-y-2">
                {step.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {step.tips && step.tips.length > 0 && (
              <div>
                <h4 className="font-semibold text-green-900 mb-3 flex items-center text-sm sm:text-base">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 flex-shrink-0" />
                  Tips & Trik
                </h4>
                <ul className="space-y-2">
                  {step.tips.map((tip, index) => (
                    <li key={index} className="flex items-start bg-blue-50 p-2 sm:p-3 rounded-lg">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-blue-800 text-xs sm:text-sm leading-relaxed">{tip}</span>
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
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] sm:min-h-[500px] pt-16">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              Panduan P2L
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 drop-shadow text-green-100 max-w-3xl mx-auto leading-relaxed">
              Panduan lengkap membangun Pekarangan Pangan Lestari dari nol hingga panen. 
              Mulai perjalanan menuju kemandirian pangan keluarga Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Manfaat Pekarangan Pangan Lestari
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Membangun P2L memberikan berbagai keuntungan jangka panjang untuk keluarga dan lingkungan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-full mb-3 sm:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Sections */}
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Langkah-langkah Panduan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ikuti panduan step-by-step untuk membangun P2L yang sukses dan berkelanjutan
            </p>
          </div>

          {/* Section Navigation - Fixed Version */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
            {guideSections.map((section) => (
                <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeSection === section.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md'
                }`}
                >
                <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                    {section.icon}
                </span>
                <span className="ml-2 hidden sm:inline whitespace-nowrap">{section.title}</span>
                </button>
            ))}
            </div>

          {/* Active Section */}
          {guideSections.map((section) => (
            activeSection === section.id && (
              <div key={section.id} className="space-y-6 sm:space-y-8">
                <div className="text-center px-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900 mb-2 sm:mb-3">
                    {section.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">{section.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {section.steps.map((step) => (
                    <StepCard key={step.id} step={step} />
                  ))}
                </div>

                {/* Navigation - Responsive Pagination */}
                <div className="flex justify-between items-center pt-6 sm:pt-8 px-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => {
                      const currentIndex = guideSections.findIndex(s => s.id === activeSection);
                      if (currentIndex > 0) {
                        setActiveSection(guideSections[currentIndex - 1].id);
                      }
                    }}
                    disabled={guideSections.findIndex(s => s.id === activeSection) === 0}
                    className="flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
                    <span className="hidden sm:inline">Sebelumnya</span>
                  </button>
                  
                  {/* Page Indicator - Hidden on mobile and tablet */}
                  <span className="text-gray-500 text-sm sm:text-base hidden lg:block">
                    {guideSections.findIndex(s => s.id === activeSection) + 1} dari {guideSections.length}
                  </span>
                  
                  {/* Dots Indicator - Visible on mobile and tablet */}
                  <div className="flex space-x-2 lg:hidden">
                    {guideSections.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === guideSections.findIndex(s => s.id === activeSection)
                            ? 'bg-green-600'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Next Button */}
                  <button
                    onClick={() => {
                      const currentIndex = guideSections.findIndex(s => s.id === activeSection);
                      if (currentIndex < guideSections.length - 1) {
                        setActiveSection(guideSections[currentIndex + 1].id);
                      }
                    }}
                    disabled={guideSections.findIndex(s => s.id === activeSection) === guideSections.length - 1}
                    className="flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Selanjutnya</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 sm:ml-2" />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Alat dan Perlengkapan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Daftar peralatan yang dibutuhkan untuk membangun dan merawat P2L
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <h3 className="font-semibold text-green-900 text-sm sm:text-base mb-2 sm:mb-0 sm:pr-2">{tool.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium self-start ${getNecessityColor(tool.necessity)}`}>
                    {tool.necessity}
                  </span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">{tool.description}</p>
                <p className="font-semibold text-green-600 text-sm sm:text-base">{tool.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3 sm:mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Jawaban untuk pertanyaan umum seputar pembuatan P2L
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-green-900 pr-4 text-sm sm:text-base leading-relaxed">{faq.question}</span>
                  {expandedFAQ === faq.id ? (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
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