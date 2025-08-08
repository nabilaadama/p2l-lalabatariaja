import React from 'react';
import {
  MapPin,
  Shovel,
  Sprout,
  Droplets,
  Sun,
  Shield,
  Heart,
  DollarSign,
  Leaf,
  Users,
} from 'lucide-react';
import { GuideSection, FAQ, Tool, Benefit } from '../interfaces/types';

export const guideSections: GuideSection[] = [
  {
    id: 'planning',
    title: 'Perencanaan Lahan',
    subtitle: 'Langkah awal menentukan desain dan tata letak P2L',
    icon: React.createElement(MapPin, { className: "w-6 h-6" }),
    color: 'bg-blue-500',
    steps: [
      {
        id: 1,
        title: 'Survei dan Analisis Lahan',
        description: 'Melakukan pengamatan kondisi lahan yang akan digunakan',
        duration: '2-3 hari',
        difficulty: 'Mudah',
        details: [
          'Ukur luas lahan yang tersedia (minimal 6x4 meter)',
          'Perhatikan arah sinar matahari (minimal 6 jam/hari)',
          'Cek ketersediaan sumber air terdekat',
          'Perhatikan drainase dan tingkat kemiringan tanah',
          'Identifikasi jenis tanah (liat, pasir, atau campuran)',
          'Catat kondisi lingkungan sekitar (bangunan, pohon besar)'
        ],
        tips: [
          'Gunakan aplikasi kompas untuk menentukan arah mata angin',
          'Lakukan pengamatan pada berbagai waktu dalam sehari',
          'Konsultasi dengan tetangga yang sudah berpengalaman'
        ],
        image: '/assets/galeri-1.jpg'
      },
      {
        id: 2,
        title: 'Desain Tata Letak',
        description: 'Merancang pembagian zona dan penempatan tanaman',
        duration: '1-2 hari',
        difficulty: 'Sedang',
        details: [
          'Bagi lahan menjadi zona: sayuran, rempah, tanaman obat, buah',
          'Tentukan lokasi kompos dan tempat penyimpanan alat',
          'Rencanakan jalur akses dan area kerja',
          'Pertimbangkan ketinggian tanaman (rendah di depan, tinggi di belakang)',
          'Sisakan ruang untuk ekspansi di masa depan',
          'Buat sketsa sederhana atau gunakan aplikasi desain'
        ],
        tips: [
          'Prinsip companion planting: kelompokkan tanaman yang saling menguntungkan',
          'Letakkan tanaman yang sering dipanen dekat dengan rumah',
          'Pertimbangkan rotasi tanaman untuk keberlanjutan'
        ]
      },
      {
        id: 3,
        title: 'Pembuatan Denah Detail',
        description: 'Membuat denah teknis dengan ukuran yang presisi',
        duration: '1 hari',
        difficulty: 'Sedang',
        details: [
          'Gambar denah dengan skala yang tepat',
          'Tentukan ukuran bedengan (lebar 100-120 cm)',
          'Rencanakan jarak antar bedengan (60-80 cm)',
          'Tentukan lokasi sistem irigasi/penyiraman',
          'Tandai area untuk tanaman vertikal',
          'Buat timeline penanaman bertahap'
        ],
        tips: [
          'Gunakan kertas milimeter untuk akurasi',
          'Pertimbangkan kemudahan maintenance',
          'Dokumentasikan dengan foto untuk referensi'
        ]
      }
    ]
  },
  {
    id: 'preparation',
    title: 'Persiapan Lahan',
    subtitle: 'Menyiapkan media tanam dan infrastruktur dasar',
    icon: React.createElement(Shovel, { className: "w-6 h-6" }),
    color: 'bg-orange-500',
    steps: [
      {
        id: 4,
        title: 'Pembersihan Lahan',
        description: 'Membersihkan area dari gulma dan sampah',
        duration: '1-2 hari',
        difficulty: 'Mudah',
        details: [
          'Bersihkan rumput liar dan gulma dengan cangkul',
          'Buang batu, sampah, dan debris lainnya',
          'Potong akar-akar yang mengganggu',
          'Ratakan permukaan tanah',
          'Buat kompos dari sisa organik yang bisa digunakan',
          'Semprotkan herbisida organik jika diperlukan'
        ],
        tips: [
          'Lakukan pada cuaca cerah untuk hasil optimal',
          'Simpan tanah bagus untuk media tanam',
          'Manfaatkan material organik untuk kompos'
        ]
      },
      {
        id: 5,
        title: 'Pengolahan Tanah',
        description: 'Menggemburkan dan memperbaiki struktur tanah',
        duration: '2-3 hari',
        difficulty: 'Sedang',
        details: [
          'Bajak atau cangkul tanah sedalam 20-30 cm',
          'Tambahkan kompos matang 2-3 kg/m²',
          'Campurkan pupuk kandang yang sudah matang',
          'Atur pH tanah jika terlalu asam/basa',
          'Pastikan drainase yang baik',
          'Diamkan tanah selama 1-2 minggu'
        ],
        tips: [
          'Tanah yang baik: gembur, subur, dan tidak becek',
          'Gunakan tes pH sederhana dengan kertas lakmus',
          'Waktu terbaik: awal musim hujan atau akhir kemarau'
        ]
      },
      {
        id: 6,
        title: 'Pembuatan Bedengan',
        description: 'Membuat bedengan sesuai desain yang telah dibuat',
        duration: '2-3 hari',
        difficulty: 'Sedang',
        details: [
          'Buat bedengan dengan tinggi 20-30 cm',
          'Lebar bedengan ideal 100-120 cm',
          'Jarak antar bedengan 60-80 cm untuk akses',
          'Pasang pembatas bedengan (bambu, batu bata, atau kayu)',
          'Isi bedengan dengan campuran tanah + kompos (2:1)',
          'Ratakan permukaan dan siram secukupnya'
        ],
        tips: [
          'Bentuk bedengan sedikit melengkung di tengah untuk drainase',
          'Gunakan material lokal untuk pembatas yang ekonomis',
          'Pastikan bedengan tidak terlalu lebar agar mudah dijangkau'
        ]
      }
    ]
  },
  {
    id: 'planting',
    title: 'Penanaman',
    subtitle: 'Teknik penanaman yang tepat untuk berbagai jenis tanaman',
    icon: React.createElement(Sprout, { className: "w-6 h-6" }),
    color: 'bg-green-500',
    steps: [
      {
        id: 7,
        title: 'Pemilihan Benih dan Bibit',
        description: 'Memilih benih berkualitas dan bibit yang sehat',
        duration: '1 hari',
        difficulty: 'Mudah',
        details: [
          'Pilih benih bersertifikat dari toko pertanian terpercaya',
          'Cek tanggal kadaluarsa dan daya kecambah benih',
          'Pilih varietas yang cocok untuk iklim lokal',
          'Untuk bibit: pilih yang batangnya tegak dan daunnya hijau segar',
          'Hindari bibit yang layu, berpenyakit, atau akarnya rusak',
          'Siapkan benih cadangan 20% dari kebutuhan'
        ],
        tips: [
          'Beli benih dari petani lokal yang sudah terbukti',
          'Simpan benih di tempat kering dan sejuk',
          'Tes daya kecambah dengan menanam 10 benih contoh'
        ]
      },
      {
        id: 8,
        title: 'Teknik Penyemaian',
        description: 'Melakukan penyemaian benih dengan benar',
        duration: '3-7 hari',
        difficulty: 'Sedang',
        details: [
          'Siapkan media semai: campuran tanah, kompos, dan sekam (1:1:1)',
          'Gunakan tray semai, polybag kecil, atau pot untuk penyemaian',
          'Kedalaman tanam: 2-3 kali diameter benih',
          'Siram dengan sprayer halus agar benih tidak terbawa air',
          'Tempatkan di lokasi teduh dengan pencahayaan cukup',
          'Jaga kelembaban media semai tetap stabil'
        ],
        tips: [
          'Media semai harus steril dan bebas hama',
          'Beri label tanggal dan jenis tanaman',
          'Penyiraman dilakukan pagi dan sore hari'
        ]
      },
      {
        id: 9,
        title: 'Transplantasi',
        description: 'Memindahkan bibit ke lokasi tanam permanent',
        duration: '1-2 hari',
        difficulty: 'Sedang',
        details: [
          'Lakukan transplantasi saat bibit berumur 2-4 minggu',
          'Pilih waktu sore hari atau cuaca mendung',
          'Siram bibit 2 jam sebelum transplantasi',
          'Buat lubang tanam sesuai jarak yang disarankan',
          'Pindahkan bibit beserta tanah di sekitar akar',
          'Siram segera setelah tanam dan berikan naungan sementara'
        ],
        tips: [
          'Jangan transplantasi saat cuaca panas terik',
          'Beri pupuk starter NPK dengan dosis rendah',
          'Pantau kondisi bibit selama seminggu pertama'
        ]
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Perawatan',
    subtitle: 'Pemeliharaan rutin untuk pertumbuhan optimal',
    icon: React.createElement(Droplets, { className: "w-6 h-6" }),
    color: 'bg-cyan-500',
    steps: [
      {
        id: 10,
        title: 'Sistem Penyiraman',
        description: 'Mengatur jadwal dan teknik penyiraman yang efektif',
        duration: 'Rutin harian',
        difficulty: 'Mudah',
        details: [
          'Siram pada pagi hari (06.00-08.00) dan sore hari (16.00-18.00)',
          'Gunakan air yang sudah diendapkan minimal 24 jam',
          'Sesuaikan volume air dengan jenis tanaman dan cuaca',
          'Siram pada media tanam, hindari membasahi daun',
          'Gunakan sprayer untuk tanaman muda, gembor untuk tanaman dewasa',
          'Pasang mulsa untuk mengurangi penguapan'
        ],
        tips: [
          'Cek kelembaban tanah dengan menusukkan jari',
          'Kurangi penyiraman saat musim hujan',
          'Gunakan sistem irigasi tetes untuk efisiensi'
        ]
      },
      {
        id: 11,
        title: 'Pemupukan',
        description: 'Program pemupukan berkelanjutan untuk nutrisi optimal',
        duration: 'Rutin mingguan/bulanan',
        difficulty: 'Sedang',
        details: [
          'Berikan pupuk organik (kompos) setiap 2 minggu',
          'Aplikasi pupuk NPK sesuai fase pertumbuhan tanaman',
          'Pupuk daun setiap minggu untuk nutrisi cepat',
          'Gunakan pupuk kandang matang setiap bulan',
          'Sesuaikan jenis pupuk dengan kebutuhan tanaman',
          'Catat jadwal dan jenis pupuk yang digunakan'
        ],
        tips: [
          'Pupuk organik lebih aman untuk konsumsi',
          'Berikan pupuk saat tanah lembab',
          'Hindari pemupukan berlebihan yang dapat merusak tanaman'
        ]
      },
      {
        id: 12,
        title: 'Pengendalian Hama dan Penyakit',
        description: 'Pencegahan dan penanganan hama penyakit secara organik',
        duration: 'Rutin mingguan',
        difficulty: 'Sedang',
        details: [
          'Lakukan inspeksi rutin setiap pagi',
          'Gunakan pestisida organik dari bahan alami',
          'Terapkan sistem rotasi tanaman',
          'Tanam tanaman pengusir hama (kemangi, lavender)',
          'Buat perangkap hama dengan botol bekas',
          'Jaga kebersihan area tanam dari sisa tanaman'
        ],
        tips: [
          'Pencegahan lebih baik daripada pengobatan',
          'Gunakan campuran air sabun untuk aphids',
          'Konsultasi dengan penyuluh pertanian setempat'
        ]
      }
    ]
  },
  {
    id: 'harvesting',
    title: 'Panen dan Pasca Panen',
    subtitle: 'Teknik panen yang tepat dan penanganan hasil',
    icon: React.createElement(Sun, { className: "w-6 h-6" }),
    color: 'bg-yellow-500',
    steps: [
      {
        id: 13,
        title: 'Menentukan Waktu Panen',
        description: 'Mengidentifikasi tanda-tanda tanaman siap panen',
        duration: 'Sesuai siklus tanaman',
        difficulty: 'Mudah',
        details: [
          'Pelajari karakteristik setiap tanaman saat matang',
          'Panen sayuran daun saat masih muda dan segar',
          'Buah dipanen saat warna dan tekstur optimal',
          'Lakukan panen pada pagi hari saat suhu sejuk',
          'Gunakan alat panen yang bersih dan tajam',
          'Panen secara bertahap sesuai kebutuhan'
        ],
        tips: [
          'Jangan menunda panen terlalu lama',
          'Sisakan sebagian tanaman untuk benih',
          'Dokumentasikan hasil panen untuk evaluasi'
        ]
      },
      {
        id: 14,
        title: 'Teknik Panen yang Benar',
        description: 'Cara memanen yang tidak merusak tanaman dan hasil',
        duration: 'Sesuai kebutuhan',
        difficulty: 'Mudah',
        details: [
          'Gunakan pisau atau gunting yang bersih',
          'Potong pada bagian yang tepat agar tanaman bisa tumbuh lagi',
          'Kumpulkan hasil panen dalam wadah yang bersih',
          'Pisahkan hasil berdasarkan jenis dan kualitas',
          'Bersihkan dari tanah dan kotoran lainnya',
          'Lakukan sortasi untuk memisahkan yang rusak'
        ],
        tips: [
          'Panen sedikit demi sedikit untuk kesegaran optimal',
          'Simpan alat panen di tempat yang aman',
          'Libatkan keluarga dalam proses panen'
        ]
      },
      {
        id: 15,
        title: 'Pengolahan dan Penyimpanan',
        description: 'Mengelola hasil panen untuk konsumsi dan penyimpanan',
        duration: 'Segera setelah panen',
        difficulty: 'Mudah',
        details: [
          'Cuci bersih hasil panen dengan air mengalir',
          'Keringkan dengan lap bersih atau angin-anginkan',
          'Simpan di tempat yang sejuk dan kering',
          'Gunakan wadah penyimpanan yang food grade',
          'Olah sebagian hasil menjadi produk awetan',
          'Bagikan surplus kepada tetangga dan kerabat'
        ],
        tips: [
          'Konsumsi hasil panen sesegera mungkin',
          'Pelajari teknik pengawetan sederhana',
          'Manfaatkan kulit dan sisa untuk kompos'
        ]
      }
    ]
  }
];

export const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Ketahanan Pangan Keluarga',
    description: 'Menyediakan sumber pangan segar dan bergizi untuk keluarga setiap hari',
    icon: React.createElement(Shield, { className: "w-8 h-8" }),
  },
  {
    id: 2,
    title: 'Kesehatan dan Gizi',
    description: 'Memastikan konsumsi sayuran dan buah-buahan yang bebas pestisida',
    icon: React.createElement(Heart, { className: "w-8 h-8" }),
  },
  {
    id: 3,
    title: 'Penghematan Ekonomi',
    description: 'Mengurangi biaya belanja sayuran hingga 60% dari pengeluaran bulanan',
    icon: React.createElement(DollarSign, { className: "w-8 h-8" }),
  },
  {
    id: 4,
    title: 'Kelestarian Lingkungan',
    description: 'Mengurangi jejak karbon dan mendukung ekosistem yang berkelanjutan',
    icon: React.createElement(Leaf, { className: "w-8 h-8" }),
  },
  {
    id: 5,
    title: 'Aktivitas Keluarga',
    description: 'Menciptakan kegiatan positif yang melibatkan seluruh anggota keluarga',
    icon: React.createElement(Users, { className: "w-8 h-8" }),
  },
  {
    id: 6,
    title: 'Keterampilan Hidup',
    description: 'Mengembangkan kemampuan bercocok tanam dan kemandirian pangan',
    icon: React.createElement(Sprout, { className: "w-8 h-8" }),
  }
];

export const tools: Tool[] = [
  {
    id: 1,
    name: 'Cangkul Mini',
    description: 'Untuk mengolah tanah dan membuat lubang tanam',
    price: 'Rp 50.000 - 100.000',
    necessity: 'Wajib'
  },
  {
    id: 2,
    name: 'Gembor atau Sprayer',
    description: 'Untuk menyiram tanaman dengan tepat',
    price: 'Rp 25.000 - 75.000',
    necessity: 'Wajib'
  },
  {
    id: 3,
    name: 'Gunting Tanaman',
    description: 'Untuk memanen dan pemangkasan',
    price: 'Rp 30.000 - 80.000',
    necessity: 'Wajib'
  },
  {
    id: 4,
    name: 'Sekop Kecil',
    description: 'Untuk transplantasi dan perawatan detail',
    price: 'Rp 20.000 - 50.000',
    necessity: 'Rekomendasi'
  },
  {
    id: 5,
    name: 'Garpu Tanah',
    description: 'Untuk menggemburkan tanah tanpa merusak akar',
    price: 'Rp 40.000 - 90.000',
    necessity: 'Rekomendasi'
  },
  {
    id: 6,
    name: 'Tray Semai',
    description: 'Untuk penyemaian benih berbagai tanaman',
    price: 'Rp 15.000 - 40.000',
    necessity: 'Rekomendasi'
  },
  {
    id: 7,
    name: 'pH Meter Tanah',
    description: 'Untuk mengukur keasaman tanah',
    price: 'Rp 100.000 - 300.000',
    necessity: 'Opsional'
  },
  {
    id: 8,
    name: 'Kompos Tumbler',
    description: 'Untuk membuat kompos secara efisien',
    price: 'Rp 500.000 - 1.500.000',
    necessity: 'Opsional'
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Berapa luas lahan minimal untuk membuat P2L?',
    answer: 'Luas minimal yang disarankan adalah 6x4 meter (24 m²). Namun, P2L bisa dibuat di lahan yang lebih kecil dengan menggunakan sistem vertikal atau pot. Yang terpenting adalah mendapat sinar matahari minimal 6 jam per hari.'
  },
  {
    id: 2,
    question: 'Berapa biaya yang diperlukan untuk memulai P2L?',
    answer: 'Biaya awal berkisar Rp 500.000 - 2.000.000 tergantung luas lahan dan kelengkapan yang diinginkan. Investasi ini akan kembali dalam 3-6 bulan melalui penghematan biaya belanja sayuran.'
  },
  {
    id: 3,
    question: 'Tanaman apa yang cocok untuk pemula?',
    answer: 'Untuk pemula, disarankan memulai dengan sayuran yang mudah tumbuh seperti bayam, kangkung, sawi, cabai rawit, dan tomat cherry. Tanaman ini relatif tahan hama dan cepat panen.'
  },
  {
    id: 4,
    question: 'Bagaimana jika lahan saya tidak terkena sinar matahari penuh?',
    answer: 'Pilih tanaman yang toleran terhadap naungan seperti sawi, selada, bayam, dan tanaman obat. Anda juga bisa menggunakan reflektor atau mirror untuk menambah intensitas cahaya.'
  },
  {
    id: 5,
    question: 'Apakah P2L bisa dibuat di apartemen atau rumah susun?',
    answer: 'Ya, P2L bisa dibuat di balkon, rooftop, atau area terbuka apartemen menggunakan pot, polybag, atau sistem hidroponik sederhana. Kunci sukses adalah pencahayaan yang cukup dan sirkulasi udara yang baik.'
  },
  {
    id: 6,
    question: 'Bagaimana cara mengatasi hama dan penyakit secara organik?',
    answer: 'Gunakan pestisida alami seperti air sabun, ekstrak bawang putih, atau neem oil. Tanam tanaman pengusir hama seperti kemangi dan marigold. Praktikkan rotasi tanaman dan jaga kebersihan area tanam.'
  },
  {
    id: 7,
    question: 'Seberapa sering harus menyiram tanaman?',
    answer: 'Umumnya 2 kali sehari (pagi dan sore), tetapi frekuensi tergantung jenis tanaman, cuaca, dan kondisi tanah. Cek kelembaban tanah dengan jari - jika kering hingga kedalaman 2-3 cm, berarti perlu disiram.'
  },
  {
    id: 8,
    question: 'Bagaimana cara membuat kompos sendiri?',
    answer: 'Campurkan sisa sayuran, kulit buah, dan dedaunan kering dengan perbandingan 3:1 (basah:kering). Aduk setiap minggu dan siram secukupnya. Kompos akan jadi dalam 2-3 bulan dengan aroma tanah.'
  }
];