import React from 'react';
import { 
  Leaf, 
  Apple,
  Flower2,
  Heart,
  TreePine,
  ShieldCheck
} from 'lucide-react';
import { Category } from '../entities/types';

export const categories: Category[] = [
  {
    id: 'sayuran-daun',
    name: 'Sayuran Daun',
    icon: React.createElement(Leaf, { className: "w-5 h-5" }),
    color: 'bg-green-500'
  },
  {
    id: 'sayuran-buah',
    name: 'Sayuran Buah',
    icon: React.createElement(Apple, { className: "w-5 h-5" }),
    color: 'bg-red-500'
  },
  {
    id: 'rempah-bumbu',
    name: 'Rempah & Bumbu',
    icon: React.createElement(Flower2, { className: "w-5 h-5" }),
    color: 'bg-yellow-500'
  },
  {
    id: 'toga',
    name: 'Tanaman Obat (TOGA)',
    icon: React.createElement(Heart, { className: "w-5 h-5" }),
    color: 'bg-purple-500'
  },
  {
    id: 'buah-pot',
    name: 'Buah dalam Pot',
    icon: React.createElement(TreePine, { className: "w-5 h-5" }),
    color: 'bg-orange-500'
  },
  {
    id: 'penutup-lahan',
    name: 'Penutup Lahan',
    icon: React.createElement(ShieldCheck, { className: "w-5 h-5" }),
    color: 'bg-blue-500'
  }
];