import { ReactNode } from 'react';

export interface GuideStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  tips?: string[];
  image?: string;
  duration?: string;
  difficulty?: 'Mudah' | 'Sedang' | 'Sulit';
}

export interface GuideSection {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
  steps: GuideStep[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  price: string;
  necessity: 'Wajib' | 'Opsional' | 'Rekomendasi';
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}