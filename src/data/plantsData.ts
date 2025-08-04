import { PlantsData } from '../entities/types';

export const plantsData: PlantsData = {
  'sayuran-daun': [
    {
      id: 1,
      name: 'Bayam',
      scientificName: 'Amaranthus spp.',
      image: '/assets/bayam.jpg',
      description: 'Sayuran hijau yang kaya akan zat besi, vitamin A, dan folat. Mudah tumbuh dan dapat dipanen dalam waktu singkat.',
      benefits: [
        'Kaya zat besi untuk mencegah anemia',
        'Tinggi vitamin A untuk kesehatan mata',
        'Sumber folat untuk ibu hamil',
        'Mengandung antioksidan tinggi'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '30-45 hari',
        water: 'Setiap hari, pagi dan sore',
        sunlight: 'Semi shade (4-6 jam)',
        spacing: '15-20 cm',
        steps: [
          'Siapkan media tanam berupa tanah kompos (2:1)',
          'Buat lubang tanam sedalam 1-2 cm',
          'Taburkan benih 3-5 butir per lubang',
          'Siram secara rutin pagi dan sore',
          'Lakukan penyiangan gulma secara berkala',
          'Panen daun muda setelah 30-45 hari'
        ]
      }
    },
    {
      id: 2,
      name: 'Kangkung',
      scientificName: 'Ipomoea aquatica',
      image: '/assets/kangkung.jpg',
      description: 'Sayuran air yang tumbuh cepat dan mudah dibudidayakan. Kaya akan vitamin A, C, dan mineral penting.',
      benefits: [
        'Sumber vitamin A dan C tinggi',
        'Mengandung zat besi dan kalsium',
        'Membantu menjaga kesehatan pencernaan',
        'Rendah kalori, baik untuk diet'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '25-30 hari',
        water: 'Banyak air, kondisi lembab',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '10-15 cm',
        steps: [
          'Pilih lokasi yang dekat sumber air',
          'Buat bedengan dengan sistem irigasi',
          'Tanam setek kangkung atau semai benih',
          'Jaga kelembaban tanah selalu basah',
          'Berikan pupuk organik setiap minggu',
          'Panen pucuk muda setelah 25-30 hari'
        ]
      }
    },
    {
      id: 3,
      name: 'Sawi Hijau',
      scientificName: 'Brassica rapa var. parachinensis',
      image: '/assets/sawi-hijau.jpg',
      description: 'Sayuran cruciferous yang kaya akan vitamin K, C, dan antioksidan. Cocok untuk iklim tropis.',
      benefits: [
        'Tinggi vitamin K untuk kesehatan tulang',
        'Mengandung antioksidan anti-kanker',
        'Sumber vitamin C untuk imunitas',
        'Membantu detoksifikasi tubuh'
      ],
      planting: {
        season: 'Musim hujan lebih baik',
        duration: '40-50 hari',
        water: 'Rutin, jaga kelembaban',
        sunlight: 'Semi shade (4-6 jam)',
        spacing: '20-25 cm',
        steps: [
          'Siapkan bedengan dengan drainase baik',
          'Campurkan kompos dengan tanah (1:2)',
          'Semai benih di persemaian terlebih dahulu',
          'Transplanting setelah 2-3 minggu',
          'Siram rutin dan berikan mulsa',
          'Panen seluruh tanaman setelah 40-50 hari'
        ]
      }
    },
    {
      id: 4,
      name: 'Sawi Putih',
      scientificName: 'Brassica rapa var. chinensis',
      image: '/assets/sawi-putih.jpg',
      description: 'Varietas sawi dengan batang putih tebal yang renyah. Mengandung banyak air dan mineral.',
      benefits: [
        'Tinggi kandungan air untuk hidrasi',
        'Rendah kalori, cocok untuk diet',
        'Mengandung vitamin C dan folat',
        'Membantu pencernaan dengan serat tinggi'
      ],
      planting: {
        season: 'Musim kemarau-hujan',
        duration: '45-55 hari',
        water: 'Teratur, hindari genangan',
        sunlight: 'Semi shade (5-6 jam)',
        spacing: '25-30 cm',
        steps: [
          'Buat bedengan tinggi 20-30 cm',
          'Campur tanah dengan kompos matang',
          'Semai benih di tray semai',
          'Pindah bibit umur 3-4 minggu',
          'Lakukan pemupukan setiap 2 minggu',
          'Panen saat daun sudah kompak'
        ]
      }
    },
    {
      id: 5,
      name: 'Selada',
      scientificName: 'Lactuca sativa',
      image: '/assets/selada.jpg',
      description: 'Sayuran daun yang segar dan renyah, ideal untuk salad. Mengandung vitamin A, K, dan folat.',
      benefits: [
        'Kaya vitamin A untuk kesehatan mata',
        'Mengandung folat untuk pertumbuhan sel',
        'Sumber vitamin K untuk pembekuan darah',
        'Rendah kalori, tinggi serat'
      ],
      planting: {
        season: 'Sepanjang tahun (hindari panas terik)',
        duration: '50-60 hari',
        water: 'Rutin, jaga kelembaban',
        sunlight: 'Semi shade (4-5 jam)',
        spacing: '20-25 cm',
        steps: [
          'Gunakan media tanam yang gembur',
          'Semai benih di tempat teduh',
          'Transplanting setelah 3-4 minggu',
          'Siram dengan sprayer halus',
          'Berikan naungan dari panas terik',
          'Panen daun luar secara bertahap'
        ]
      }
    },
    {
      id: 6,
      name: 'Daun Katuk',
      scientificName: 'Sauropus androgynus',
      image: '/assets/daun-katuk.jpg',
      description: 'Tanaman perdu yang daunnya sangat bergizi, terutama untuk ibu menyusui. Mudah tumbuh di pekarangan.',
      benefits: [
        'Melancarkan ASI untuk ibu menyusui',
        'Tinggi protein dan vitamin A',
        'Mengandung mineral penting',
        'Membantu pemulihan pasca melahirkan'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: 'Tanaman tahunan',
        water: 'Rutin, tahan kekeringan',
        sunlight: 'Semi shade (4-6 jam)',
        spacing: '50-75 cm',
        steps: [
          'Pilih lokasi yang terlindung angin kencang',
          'Tanam dari setek batang atau bibit',
          'Buat lubang tanam 30x30x30 cm',
          'Berikan pupuk organik saat tanam',
          'Lakukan pemangkasan untuk pertumbuhan',
          'Panen daun muda secara berkala'
        ]
      }
    }
  ],
  'sayuran-buah': [
    {
      id: 7,
      name: 'Cabai Rawit',
      scientificName: 'Capsicum frutescens',
      image: '/assets/cabai-rawit.jpg',
      description: 'Cabai kecil dengan tingkat kepedasan tinggi. Kaya akan vitamin C dan capsaicin yang bermanfaat untuk kesehatan.',
      benefits: [
        'Tinggi vitamin C untuk imunitas',
        'Mengandung capsaicin untuk metabolisme',
        'Membantu sirkulasi darah',
        'Memiliki sifat antibakteri alami'
      ],
      planting: {
        season: 'Musim kemarau',
        duration: '90-120 hari',
        water: 'Rutin, hindari genangan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '40-50 cm',
        steps: [
          'Semai benih di persemaian',
          'Pindah bibit setelah 4-6 minggu',
          'Buat bedengan dengan drainase baik',
          'Pasang ajir untuk penyangga',
          'Lakukan pemupukan rutin',
          'Panen buah setelah 90-120 hari'
        ]
      }
    },
    {
      id: 8,
      name: 'Cabai Besar',
      scientificName: 'Capsicum annuum',
      image: '/assets/cabai-besar.jpg',
      description: 'Cabai dengan ukuran lebih besar dan tingkat kepedasan sedang. Sangat produktif dan bernilai ekonomis tinggi.',
      benefits: [
        'Sumber vitamin A dan C tinggi',
        'Mengandung antioksidan kuat',
        'Membantu pencernaan',
        'Nilai ekonomis tinggi'
      ],
      planting: {
        season: 'Musim kemarau',
        duration: '100-150 hari',
        water: 'Teratur, sesuai kebutuhan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '50-60 cm',
        steps: [
          'Siapkan persemaian dengan media steril',
          'Semai benih di tray semai',
          'Transplanting setelah 6-8 minggu',
          'Berikan mulsa untuk menjaga kelembaban',
          'Lakukan pemangkasan tunas air',
          'Panen bertahap setelah buah matang'
        ]
      }
    },
    {
      id: 9,
      name: 'Tomat',
      scientificName: 'Solanum lycopersicum',
      image: '/assets/tomat.jpg',
      description: 'Buah yang kaya akan likopen dan vitamin C. Dapat ditanam di pot atau langsung di tanah.',
      benefits: [
        'Kaya likopen untuk kesehatan jantung',
        'Tinggi vitamin C dan antioksidan',
        'Membantu mencegah kanker',
        'Baik untuk kesehatan kulit'
      ],
      planting: {
        season: 'Musim kemarau',
        duration: '100-120 hari',
        water: 'Rutin, hindari daun basah',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '50-70 cm',
        steps: [
          'Semai benih di media steril',
          'Pindah bibit setelah 4-6 minggu',
          'Pasang ajir setinggi 1,5-2 meter',
          'Lakukan pemangkasan tunas samping',
          'Berikan pupuk NPK secara rutin',
          'Panen buah yang sudah memerah'
        ]
      }
    },
    {
      id: 10,
      name: 'Terong',
      scientificName: 'Solanum melongena',
      image: '/assets/terong.jpg',
      description: 'Sayuran buah berwarna ungu yang kaya akan nasunin dan anthocyanin. Mudah ditanam dan produktif.',
      benefits: [
        'Mengandung nasunin untuk kesehatan otak',
        'Tinggi serat untuk pencernaan',
        'Membantu menurunkan kolesterol',
        'Kaya antioksidan anthocyanin'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '90-110 hari',
        water: 'Rutin, jaga kelembaban',
        sunlight: 'Full sun (6-7 jam)',
        spacing: '60-70 cm',
        steps: [
          'Semai benih di persemaian',
          'Transplanting setelah 5-6 minggu',
          'Buat bedengan tinggi dengan mulsa',
          'Pasang penyangga untuk batang',
          'Lakukan pemupukan setiap 2 minggu',
          'Panen buah muda yang mengkilap'
        ]
      }
    },
    {
      id: 11,
      name: 'Mentimun',
      scientificName: 'Cucumis sativus',
      image: '/assets/mentimun.jpg',
      description: 'Sayuran buah yang segar dan tinggi kandungan air. Cocok untuk iklim tropis dan mudah dibudidayakan.',
      benefits: [
        'Tinggi kandungan air untuk hidrasi',
        'Mengandung silika untuk kesehatan kulit',
        'Membantu detoksifikasi tubuh',
        'Rendah kalori, cocok untuk diet'
      ],
      planting: {
        season: 'Musim kemarau',
        duration: '60-70 hari',
        water: 'Banyak air, jaga kelembaban',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '80-100 cm',
        steps: [
          'Buat bedengan dengan sistem rambatan',
          'Tanam benih langsung di lubang tanam',
          'Pasang ajir atau terali untuk merambat',
          'Siram rutin terutama saat berbunga',
          'Lakukan penyerbukan manual jika perlu',
          'Panen buah muda yang masih segar'
        ]
      }
    }
  ],
  'rempah-bumbu': [
    {
      id: 12,
      name: 'Jahe',
      scientificName: 'Zingiber officinale',
      image: '/assets/jahe.jpg',
      description: 'Tanaman rimpang yang sangat bermanfaat untuk kesehatan dan bumbu masakan. Mudah ditanam di pot.',
      benefits: [
        'Anti-inflamasi dan anti-mual',
        'Meningkatkan sistem imun',
        'Membantu pencernaan',
        'Menghangatkan tubuh'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '8-10 bulan',
        water: 'Sedang, hindari genangan',
        sunlight: 'Semi shade (4-6 jam)',
        spacing: '25-30 cm',
        steps: [
          'Pilih rimpang jahe yang sehat',
          'Potong rimpang dengan 2-3 mata tunas',
          'Keringkan potongan selama 1-2 hari',
          'Tanam di media gembur dengan kompos',
          'Siram secukupnya, jangan berlebihan',
          'Panen setelah 8-10 bulan'
        ]
      }
    },
    {
      id: 13,
      name: 'Kunyit',
      scientificName: 'Curcuma longa',
      image: '/assets/kunyit.jpg',
      description: 'Rimpang kuning yang mengandung curcumin tinggi. Memiliki khasiat anti-inflamasi dan antioksidan kuat.',
      benefits: [
        'Mengandung curcumin anti-inflamasi',
        'Membantu fungsi hati',
        'Antioksidan kuat',
        'Meningkatkan imunitas tubuh'
      ],
      planting: {
        season: 'Awal musim hujan',
        duration: '8-12 bulan',
        water: 'Cukup, sesuai musim',
        sunlight: 'Semi shade (4-5 jam)',
        spacing: '30-40 cm',
        steps: [
          'Pilih rimpang kunyit berkualitas',
          'Potong dengan mata tunas yang jelas',
          'Tanam di bedengan dengan drainase baik',
          'Berikan mulsa untuk menjaga kelembaban',
          'Lakukan penyiangan secara rutin',
          'Panen saat daun mulai menguning'
        ]
      }
    },
    {
      id: 14,
      name: 'Lengkuas',
      scientificName: 'Alpinia galanga',
      image: '/assets/lengkuas.jpg',
      description: 'Rimpang aromatik yang sering digunakan dalam masakan Asia. Memiliki aroma khas dan khasiat kesehatan.',
      benefits: [
        'Anti-bakteri dan anti-jamur',
        'Membantu sistem pencernaan',
        'Mengandung antioksidan',
        'Menambah cita rasa masakan'
      ],
      planting: {
        season: 'Musim hujan',
        duration: '10-12 bulan',
        water: 'Rutin, suka kelembaban',
        sunlight: 'Semi shade (3-5 jam)',
        spacing: '40-50 cm',
        steps: [
          'Siapkan rimpang lengkuas segar',
          'Potong dengan mata tunas yang baik',
          'Tanam di tempat yang teduh',
          'Berikan pupuk organik secara rutin',
          'Jaga kelembaban tanah',
          'Panen setelah 10-12 bulan'
        ]
      }
    },
    {
      id: 15,
      name: 'Serai',
      scientificName: 'Cymbopogon citratus',
      image: '/assets/serai.jpg',
      description: 'Tanaman rumput aromatik yang mudah tumbuh. Digunakan untuk bumbu masakan dan minuman herbal.',
      benefits: [
        'Aroma segar untuk masakan',
        'Mengandung citronella alami',
        'Membantu pencernaan',
        'Efek menenangkan'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: 'Tanaman tahunan',
        water: 'Rutin, tahan kekeringan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '30-40 cm',
        steps: [
          'Ambil anakan dari rumpun induk',
          'Potong akar dan daun seperlunya',
          'Tanam di lubang yang sudah disiapkan',
          'Siram rutin sampai tumbuh baik',
          'Lakukan pemangkasan berkala',
          'Panen batang sesuai kebutuhan'
        ]
      }
    },
    {
      id: 16,
      name: 'Bawang Merah',
      scientificName: 'Allium ascalonicum',
      image: '/assets/bawang-merah.jpg',
      description: 'Bumbu dasar masakan Indonesia yang memiliki nilai ekonomis tinggi. Dapat ditanam dalam pot atau polybag.',
      benefits: [
        'Mengandung antioksidan quercetin',
        'Anti-bakteri dan anti-inflamasi',
        'Membantu menurunkan kolesterol',
        'Nilai ekonomis tinggi'
      ],
      planting: {
        season: 'Musim kemarau',
        duration: '60-70 hari',
        water: 'Sedang, hindari genangan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '10-15 cm',
        steps: [
          'Pilih umbi bawang yang sehat',
          'Potong ujung umbi sedikit',
          'Tanam dengan ujung menonjol sedikit',
          'Siram secukupnya, jangan berlebihan',
          'Berikan pupuk NPK setiap 2 minggu',
          'Panen saat daun mulai menguning'
        ]
      }
    }
  ],
  'toga': [
    {
      id: 17,
      name: 'Kencur',
      scientificName: 'Kaempferia galanga',
      image: '/assets/kencur.jpg',
      description: 'Rimpang obat tradisional yang berkhasiat untuk mengobati batuk, masuk angin, dan gangguan pencernaan.',
      benefits: [
        'Mengobati batuk dan pilek',
        'Mengatasi masuk angin',
        'Melancarkan pencernaan',
        'Anti-inflamasi alami'
      ],
      planting: {
        season: 'Awal musim hujan',
        duration: '6-8 bulan',
        water: 'Sedang, hindari genangan',
        sunlight: 'Semi shade (3-5 jam)',
        spacing: '20-25 cm',
        steps: [
          'Pilih rimpang kencur yang segar',
          'Potong dengan mata tunas yang jelas',
          'Tanam di media yang gembur',
          'Tempatkan di lokasi yang teduh',
          'Siram secukupnya saja',
          'Panen setelah 6-8 bulan'
        ]
      }
    },
    {
      id: 18,
      name: 'Temulawak',
      scientificName: 'Curcuma xanthorrhiza',
      image: '/assets/temulawak.jpg',
      description: 'Tanaman obat yang baik untuk kesehatan liver dan pencernaan. Mengandung curcumin tinggi.',
      benefits: [
        'Menjaga kesehatan liver',
        'Meningkatkan nafsu makan',
        'Anti-inflamasi kuat',
        'Membantu sistem imun'
      ],
      planting: {
        season: 'Musim hujan',
        duration: '8-10 bulan',
        water: 'Cukup, sesuai musim',
        sunlight: 'Semi shade (4-6 hours)',
        spacing: '30-40 cm',
        steps: [
          'Siapkan rimpang temulawak berkualitas',
          'Potong dengan beberapa mata tunas',
          'Tanam di bedengan yang teduh',
          'Berikan mulsa organik',
          'Lakukan penyiraman secukupnya',
          'Panen saat daun menguning'
        ]
      }
    },
    {
      id: 19,
      name: 'Daun Sirih',
      scientificName: 'Piper betle',
      image: '/assets/daun-sirih.jpg',
      description: 'Tanaman merambat yang daunnya berkhasiat sebagai antiseptik alami dan obat tradisional.',
      benefits: [
        'Antiseptik alami',
        'Mengobati luka dan infeksi',
        'Menjaga kebersihan mulut',
        'Anti-bakteri dan anti-jamur'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: 'Tanaman tahunan',
        water: 'Rutin, suka kelembaban',
        sunlight: 'Semi shade (3-5 jam)',
        spacing: '50-70 cm',
        steps: [
          'Ambil stek dari tanaman induk',
          'Tanam di media yang lembab',
          'Sediakan penyangga untuk merambat',
          'Jaga kelembaban tanah',
          'Lakukan pemangkasan rutin',
          'Panen daun sesuai kebutuhan'
        ]
      }
    },
    {
      id: 20,
      name: 'Sambung Nyawa',
      scientificName: 'Gynura procumbens',
      image: '/assets/sambung-nyawa.jpg',
      description: 'Tanaman obat yang dipercaya dapat membantu mengobati diabetes dan hipertensi.',
      benefits: [
        'Membantu menurunkan gula darah',
        'Mengatasi hipertensi',
        'Anti-inflamasi',
        'Meningkatkan metabolisme'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: 'Tanaman tahunan',
        water: 'Rutin, jaga kelembaban',
        sunlight: 'Semi shade (4-6 jam)',
        spacing: '25-30 cm',
        steps: [
          'Ambil stek batang yang sehat',
          'Tanam di media yang subur',
          'Tempatkan di lokasi teduh',
          'Siram secara rutin',
          'Lakukan pemangkasan untuk pertumbuhan',
          'Panen daun muda secara berkala'
        ]
      }
    },
    {
      id: 21,
      name: 'Lidah Buaya',
      scientificName: 'Aloe vera',
      image: '/assets/lidah-buaya.jpg',
      description: 'Tanaman sukulen yang gelnya berkhasiat untuk perawatan kulit dan penyembuhan luka.',
      benefits: [
        'Menyembuhkan luka bakar',
        'Melembabkan kulit',
        'Anti-inflamasi untuk kulit',
        'Membantu pencernaan'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: 'Tanaman tahunan',
        water: 'Sedikit, tahan kekeringan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '40-50 cm',
        steps: [
          'Gunakan anakan dari tanaman induk',
          'Tanam di media yang well-drained',
          'Letakkan di tempat yang cerah',
          'Siram seminimal mungkin',
          'Hindari genangan air',
          'Panen daun yang sudah dewasa'
        ]
      }
    }
  ],
  'buah-pot': [
    {
      id: 22,
      name: 'Pisang',
      scientificName: 'Musa spp.',
      image: '/assets/pisang.jpg',
      description: 'Buah tropis yang kaya kalium dan vitamin B6. Varietas dwarf cocok untuk pekarangan kecil.',
      benefits: [
        'Tinggi kalium untuk jantung',
        'Sumber energi instant',
        'Vitamin B6 untuk sistem saraf',
        'Serat untuk pencernaan'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '8-12 bulan berbuah',
        water: 'Banyak air, drainase baik',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '2-3 meter',
        steps: [
          'Pilih varietas pisang dwarf/mini',
          'Tanam anakan pisang yang sehat',
          'Buat lubang tanam 60x60x60 cm',
          'Berikan pupuk organik yang cukup',
          'Siram rutin terutama musim kemarau',
          'Potong anakan berlebih secara berkala'
        ]
      }
    },
    {
      id: 23,
      name: 'Pepaya',
      scientificName: 'Carica papaya',
      image: '/assets/pepaya.jpg',
      description: 'Buah yang kaya enzim papain dan vitamin C. Cepat berbuah dan mudah dirawat.',
      benefits: [
        'Enzim papain untuk pencernaan',
        'Tinggi vitamin C dan A',
        'Antioksidan untuk kesehatan kulit',
        'Membantu sistem imun'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '6-8 bulan berbuah',
        water: 'Rutin, hindari genangan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '2-3 meter',
        steps: [
          'Semai benih pepaya yang segar',
          'Pindah bibit setelah 2-3 bulan',
          'Pilih lokasi yang terkena sinar matahari',
          'Buat lubang tanam yang dalam',
          'Berikan pupuk organik secara rutin',
          'Pangkas cabang yang tidak produktif'
        ]
      }
    },
    {
      id: 24,
      name: 'Jeruk Nipis',
      scientificName: 'Citrus aurantifolia',
      image: '/assets/jeruk-nipis.jpg',
      description: 'Jeruk kecil yang sangat tinggi vitamin C. Cocok ditanam dalam pot dan mudah berbuah.',
      benefits: [
        'Sangat tinggi vitamin C',
        'Antioksidan alami',
        'Membantu detoksifikasi',
        'Meningkatkan imunitas'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '1-2 tahun berbuah',
        water: 'Rutin, jaga kelembaban',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '1.5-2 meter',
        steps: [
          'Gunakan bibit okulasi berkualitas',
          'Tanam di pot besar atau langsung',
          'Gunakan media yang subur dan gembur',
          'Siram rutin terutama saat kemarau',
          'Berikan pupuk NPK secara berkala',
          'Lakukan pemangkasan untuk bentuk'
        ]
      }
    },
    {
      id: 25,
      name: 'Jeruk Purut',
      scientificName: 'Citrus hystrix',
      image: '/assets/jeruk-purut.jpg',
      description: 'Jeruk yang daunnya sangat aromatik untuk bumbu masakan. Buahnya juga bisa dimanfaatkan.',
      benefits: [
        'Daun aromatik untuk masakan',
        'Minyak esensial alami',
        'Antioksidan dari buah',
        'Pengusir serangga alami'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '1-2 tahun berbuah',
        water: 'Sedang, hindari genangan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '1.5-2 meter',
        steps: [
          'Pilih bibit jeruk purut yang sehat',
          'Tanam di lokasi yang cerah',
          'Gunakan tanah yang well-drained',
          'Lakukan penyiraman secukupnya',
          'Berikan pupuk organik rutin',
          'Panen daun dan buah sesuai kebutuhan'
        ]
      }
    },
    {
      id: 26,
      name: 'Markisa',
      scientificName: 'Passiflora edulis',
      image: '/assets/markisa.jpg',
      description: 'Buah tropis dengan rasa asam manis yang unik. Tanaman merambat yang produktif.',
      benefits: [
        'Tinggi vitamin C dan A',
        'Antioksidan flavonoid',
        'Serat untuk pencernaan',
        'Efek menenangkan alami'
      ],
      planting: {
        season: 'Musim hujan lebih baik',
        duration: '8-12 bulan berbuah',
        water: 'Rutin, suka kelembaban',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '2-3 meter',
        steps: [
          'Semai benih markisa segar',
          'Sediakan penyangga untuk merambat',
          'Tanam di media yang subur',
          'Siram rutin terutama saat kering',
          'Lakukan pemangkasan untuk produktivitas',
          'Panen buah yang sudah matang'
        ]
      }
    }
  ],
  'penutup-lahan': [
    {
      id: 27,
      name: 'Kacang Panjang',
      scientificName: 'Vigna unguiculata',
      image: '/assets/kacang-panjang.jpg',
      description: 'Legum yang dapat memperbaiki kesuburan tanah sambil menghasilkan sayuran bergizi.',
      benefits: [
        'Memperbaiki nitrogen tanah',
        'Tinggi protein nabati',
        'Sumber folat dan vitamin K',
        'Mencegah erosi tanah'
      ],
      planting: {
        season: 'Musim kemarau',
        duration: '60-70 hari',
        water: 'Sedang, tahan kekeringan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '30-40 cm',
        steps: [
          'Siapkan ajir atau terali untuk rambatan',
          'Tanam benih langsung di lubang',
          'Jaga kelembaban saat perkecambahan',
          'Lakukan pemupukan minimal',
          'Biarkan sebagian tanaman untuk benih',
          'Panen polong muda secara berkala'
        ]
      }
    },
    {
      id: 28,
      name: 'Kacang Tanah',
      scientificName: 'Arachis hypogaea',
      image: '/assets/kacang-tanah.jpg',
      description: 'Legum penghasil protein tinggi yang juga memperbaiki struktur tanah dengan sistem perakarannya.',
      benefits: [
        'Protein tinggi dan lemak sehat',
        'Memperbaiki nitrogen tanah',
        'Vitamin E dan niacin',
        'Menutup permukaan tanah'
      ],
      planting: {
        season: 'Musim kemarau',
        duration: '90-100 hari',
        water: 'Sedang, hindari genangan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '20-25 cm',
        steps: [
          'Pilih benih kacang tanah berkualitas',
          'Tanam di bedengan yang gembur',
          'Lakukan pembumbunan saat berbunga',
          'Jaga kelembaban tanah',
          'Hindari pemupukan nitrogen berlebih',
          'Panen saat daun mulai menguning'
        ]
      }
    },
    {
      id: 29,
      name: 'Ubi Jalar',
      scientificName: 'Ipomoea batatas',
      image: '/assets/ubi-jalar.jpg',
      description: 'Tanaman umbi yang merambat menutupi tanah, mencegah erosi dan menghasilkan karbohidrat bergizi.',
      benefits: [
        'Karbohidrat kompleks sehat',
        'Beta-karoten tinggi',
        'Mencegah erosi tanah',
        'Menutupi lahan kosong'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '90-120 hari',
        water: 'Sedang, tahan kekeringan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '40-50 cm',
        steps: [
          'Gunakan setek batang ubi jalar',
          'Tanam di bedengan yang lebar',
          'Biarkan sulur merambat menutupi tanah',
          'Siram secukupnya saja',
          'Lakukan pemupukan minimal',
          'Panen umbi setelah 3-4 bulan'
        ]
      }
    },
    {
      id: 30,
      name: 'Kenikir',
      scientificName: 'Cosmos caudatus',
      image: '/assets/kenikir.jpg',
      description: 'Sayuran daun yang tumbuh liar dan mudah menyebar, baik untuk menutupi lahan dan dikonsumsi.',
      benefits: [
        'Antioksidan tinggi',
        'Vitamin A dan C',
        'Menutupi lahan kosong',
        'Menarik serangga penyerbuk'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: '45-60 hari',
        water: 'Minimal, tahan kekeringan',
        sunlight: 'Full sun (5-7 jam)',
        spacing: '25-30 cm',
        steps: [
          'Taburkan benih secara langsung',
          'Tidak perlu perawatan intensif',
          'Biarkan menyebar secara alami',
          'Lakukan penjarangan jika terlalu rapat',
          'Panen daun muda untuk sayuran',
          'Biarkan berbunga untuk benih'
        ]
      }
    },
    {
      id: 31,
      name: 'Daun Kelor',
      scientificName: 'Moringa oleifera',
      image: '/assets/daun-kelor.jpg',
      description: 'Pohon ajaib yang daunnya sangat bergizi dan dapat digunakan sebagai pagar hidup.',
      benefits: [
        'Superfood dengan nutrisi lengkap',
        'Protein tinggi untuk tumbuhan',
        'Vitamin A, C, dan mineral',
        'Pagar hidup yang berguna'
      ],
      planting: {
        season: 'Sepanjang tahun',
        duration: 'Tanaman tahunan',
        water: 'Minimal, sangat tahan kekeringan',
        sunlight: 'Full sun (6-8 jam)',
        spacing: '1-2 meter',
        steps: [
          'Tanam dari benih atau setek',
          'Pilih lokasi untuk pagar hidup',
          'Minimal perawatan diperlukan',
          'Lakukan pemangkasan untuk bentuk',
          'Panen daun muda secara berkala',
          'Manfaatkan sebagai pagar alami'
        ]
      }
    }
  ]
};