export type CategoryKey = 
  | 'sayuran-daun'
  | 'sayuran-buah'
  | 'rempah-bumbu'
  | 'toga'
  | 'buah-pot'
  | 'penutup-lahan';

export type Plant = {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  description: string;
  benefits: string[];
  planting: {
    season: string;
    duration: string;
    water: string;
    sunlight: string;
    spacing: string;
    steps: string[];
  };
};

export type Category = {
  id: CategoryKey;
  name: string;
  icon: React.ReactNode;
  color: string;
};

export type PlantsData = Record<CategoryKey, Plant[]>;