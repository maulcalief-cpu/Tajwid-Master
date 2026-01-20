
import { TajwidRule } from './types';

export const TAJWID_RULES: TajwidRule[] = [
  // --- GHUNNAH ---
  {
    id: 'ghunnah-musyaddadah',
    name: 'Ghunnah Musyaddadah',
    category: 'Dasar',
    description: 'Hukum mendengung pada huruf Mim dan Nun bertasydid.',
    explanation: 'Ghunnah secara bahasa artinya suara yang keluar dari pangkal hidung (Al-Khaisyum). Tingkatan ghunnah pada huruf bertasydid adalah yang paling sempurna (Akmalu ma takun). Suara harus bergetar di hidung tanpa melibatkan lidah secara aktif untuk Nun, atau bibir yang tertutup rapat untuk Mim.',
    letters: ['نّ', 'مّ'],
    howToRead: 'Tekan suara pada huruf Nun atau Mim bertasydid, kemudian tahan getaran di pangkal hidung selama 2 hingga 3 harakat secara stabil sebelum berpindah.',
    commonMistakes: 'Seringkali pembaca terburu-buru sehingga dengung kurang dari 2 harakat, atau suara keluar dari mulut bukan dari hidung.',
    examples: [
      { arabic: 'إِنَّ اللَّهَ', transliteration: 'Inna-llaha', translation: 'Sesungguhnya Allah', rule_applied: 'Nun bertasydid (Akmal)' },
      { arabic: 'ثُمَّ كَلَّا', transliteration: 'Tsumma kalla', translation: 'Kemudian janganlah', rule_applied: 'Mim bertasydid (Akmal)' }
    ]
  },

  // --- NUN SUKUN & TANWIN ---
  {
    id: 'izhar-halqi',
    name: 'Izhar Halqi',
    category: 'Nun Sukun',
    description: 'Membaca Nun Sukun/Tanwin secara jelas tanpa dengung saat bertemu huruf tenggorokan.',
    explanation: 'Izhar artinya nampak/jelas. Halqi merujuk pada makhraj hurufnya yang berada di tenggorokan (Halaq). Tidak diperbolehkan ada jeda atau dengung tambahan antara Nun dan huruf setelahnya.',
    letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
    howToRead: 'Bunyi "N" diucapkan dengan ujung lidah menyentuh gusi atas secara tegas dan langsung berpindah ke huruf halaq tanpa saktah (henti) maupun ghunnah.',
    commonMistakes: 'Terdapat sentakan (qalqalah) pada Nun sukun atau justru dibaca mendengung karena ragu.',
    examples: [
      { arabic: 'مِنْ حَيْثُ', transliteration: 'Min haitsu', translation: 'Dari arah', rule_applied: 'Nun Sukun bertemu Ha' },
      { arabic: 'عَذَابٌ أَلِيمٌ', transliteration: 'Adzabun aliim', translation: 'Azab yang pedih', rule_applied: 'Tanwin bertemu Hamzah' }
    ]
  },
  {
    id: 'idgham-bighunnah',
    name: 'Idgham Bi Ghunnah',
    category: 'Nun Sukun',
    description: 'Meleburkan Nun sukun ke huruf berikutnya dengan dengung 2 harakat.',
    explanation: 'Idgham berarti memasukkan (tasydid maknawi). Suara Nun hilang dan berubah menjadi suara huruf berikutnya namun sifat ghunnah (dengung) dari Nun tetap dipertahankan dan ditahan.',
    letters: ['ي', 'ن', 'م', 'و'],
    howToRead: 'Suara Nun masuk ke huruf berikutnya, lalu tahan dengungan di hidung selama 2 harakat. Khusus untuk Wawu dan Ya, bibir harus ikut menyesuaikan makhraj huruf tersebut.',
    commonMistakes: 'Tidak mendengungkan suara (dibaca seperti Bilaghunnah) atau dengung terlalu singkat.',
    examples: [
      { arabic: 'مَنْ يَقُولُ', transliteration: 'May yaqulu', translation: 'Orang yang berkata', rule_applied: 'Nun Sukun bertemu Ya' }
    ]
  },
  {
    id: 'idgham-bilaghunnah',
    name: 'Idgham Bila Ghunnah',
    category: 'Nun Sukun',
    description: 'Meleburkan Nun sukun ke huruf berikutnya tanpa suara dengung.',
    explanation: 'Bila Ghunnah berarti tanpa dengung. Terjadi jika Nun sukun atau Tanwin bertemu huruf Lam (ل) atau Ra (ر). Bunyi Nun harus hilang sepenuhnya dan langsung masuk ke huruf berikutnya.',
    letters: ['ل', 'ر'],
    howToRead: 'Masukkan bunyi Nun ke dalam huruf Lam atau Ra dengan tegas tanpa menahan suara di hidung.',
    commonMistakes: 'Seringkali pembaca masih menahan atau mendengungkan suara saat bertemu Ra, yang seharusnya dibaca cepat.',
    examples: [
      { arabic: 'مِنْ لَدُنْكَ', transliteration: 'Mil-ladunka', translation: 'Dari sisi-Mu', rule_applied: 'Nun Sukun bertemu Lam' },
      { arabic: 'غَفُورٌ رَحِيمٌ', transliteration: 'Ghafuurur-rahiim', translation: 'Maha Pengampun lagi Maha Penyayang', rule_applied: 'Tanwin bertemu Ra' }
    ]
  },
  {
    id: 'iqlab',
    name: 'Iqlab',
    category: 'Nun Sukun',
    description: 'Mengubah bunyi Nun sukun atau Tanwin menjadi bunyi Mim.',
    explanation: 'Secara bahasa artinya "membalikkan". Terjadi jika Nun sukun atau Tanwin bertemu huruf Ba (ب). Bunyi N berubah menjadi M disertai dengungan.',
    letters: ['ب'],
    howToRead: 'Rapatkan bibir secara ringan (tidak ditekan kuat) seolah-olah mengucapkan huruf Mim, lalu tahan dengungan selama 2 harakat sebelum masuk ke huruf Ba.',
    commonMistakes: 'Menutup bibir terlalu rapat sehingga bunyi menjadi murni M tanpa ghunnah, atau tidak mengubah bunyi N sama sekali.',
    examples: [
      { arabic: 'مِنْ بَعْدِ', transliteration: 'Mim ba\'di', translation: 'Setelah', rule_applied: 'Nun sukun menjadi Mim' }
    ]
  },
  {
    id: 'ikhfa-haqiqi',
    name: 'Ikhfa Haqiqi',
    category: 'Nun Sukun',
    description: 'Menyamarkan bunyi Nun sukun dengan dengung.',
    explanation: 'Ikhfa berarti menyembunyikan. Bunyi Nun disamarkan ke makhraj huruf setelahnya. Ikhfa dibagi menjadi 3: Akrab (Dengung singkat, dekat makhraj), Ab\'ad (Dengung panjang/tebal, jauh makhraj), dan Ausat (Tengah-tengah).',
    letters: ['ت', 'ث', 'ج', 'د', 'ذ', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ف', 'ق', 'ك'],
    howToRead: 'Posisikan lidah di dekat makhraj huruf yang akan dibaca setelah Nun, lalu keluarkan suara dengung dari hidung selama 2 harakat.',
    commonMistakes: 'Ujung lidah masih menempel pada gusi (seperti Izhar) atau tidak mempersiapkan makhraj huruf berikutnya saat mendengung.',
    examples: [
      { arabic: 'مِنْ قَبْلُ', transliteration: 'Min-qablu', translation: 'Sebelum', rule_applied: 'Ikhfa Ab\'ad (Dengung Tebal)' },
      { arabic: 'أَنْتُمْ', transliteration: 'An-tum', translation: 'Kalian', rule_applied: 'Ikhfa Akrab (Dekat)' }
    ]
  },

  // --- MIM SUKUN ---
  {
    id: 'izhar-syafawi',
    name: 'Izhar Syafawi',
    category: 'Mim Sukun',
    description: 'Membaca Mim sukun secara jelas kecuali bertemu Mim dan Ba.',
    explanation: 'Syafawi artinya bibir. Terjadi jika Mim sukun bertemu dengan seluruh huruf hijaiyah selain Mim dan Ba. Harus dibaca sangat jelas terutama saat bertemu huruf Wawu (و) dan Fa (ف) agar makhrajnya tidak tertukar.',
    letters: ['Semua huruf kecuali م dan ب'],
    howToRead: 'Tutup bibir dengan sempurna pada huruf Mim, lalu segera lepas untuk mengucapkan huruf berikutnya tanpa ada dengung.',
    commonMistakes: 'Membaca Mim dengan dengung (seperti Ikhfa) saat bertemu Wawu atau Fa karena kedekatan makhraj.',
    examples: [
      { arabic: 'لَهُمْ فِيهَا', transliteration: 'Lahum fiihaa', translation: 'Bagi mereka di dalamnya', rule_applied: 'Mim sukun bertemu Fa (Wajib Jelas)' }
    ]
  },
  {
    id: 'ikhfa-syafawi',
    name: 'Ikhfa Syafawi',
    category: 'Mim Sukun',
    description: 'Menyamarkan Mim sukun saat bertemu huruf Ba.',
    explanation: 'Terjadi apabila Mim sukun bertemu dengan huruf Ba (ب). Bunyi Mim disamarkan dengan dengungan yang halus di bibir.',
    letters: ['ب'],
    howToRead: 'Pertemukan kedua bibir dengan ringan (tidak ditekan) dan tahan suara dengung dari hidung selama 2 harakat.',
    commonMistakes: 'Membaca Mim secara jelas (seperti Izhar) atau menutup bibir terlalu kuat.',
    examples: [
      { arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ', transliteration: 'Tarmiihim-bihijaaratin', translation: 'Melempari mereka dengan batu', rule_applied: 'Mim sukun bertemu Ba' }
    ]
  },
  {
    id: 'idgham-mimi',
    name: 'Idgham Mimi / Mutamathilain',
    category: 'Mim Sukun',
    description: 'Meleburkan Mim sukun ke huruf Mim berikutnya.',
    explanation: 'Terjadi jika Mim sukun bertemu dengan sesama huruf Mim (م). Disebut juga Idgham Mutamathilain karena bertemunya dua huruf yang sama makhraj dan sifatnya.',
    letters: ['م'],
    howToRead: 'Masukkan Mim pertama ke Mim kedua sehingga menjadi satu Mim bertasydid, lalu tahan dengungan selama 2 harakat.',
    commonMistakes: 'Tidak menahan dengung (langsung dilepas) sehingga hukum ghunnah-nya hilang.',
    examples: [
      { arabic: 'لَهُمْ مَا يَشَاءُونَ', transliteration: 'Lahum-maa yasyaa-uun', translation: 'Bagi mereka apa yang mereka kehendaki', rule_applied: 'Mim sukun bertemu Mim' }
    ]
  },

  // --- ALIF LAM ---
  {
    id: 'alif-lam-qomariyah',
    name: 'Alif Lam Qomariyah',
    category: 'Alif Lam',
    description: 'Membaca Alif Lam secara jelas (Izhar).',
    explanation: 'Disebut Qomariyah (seperti bulan) karena Lam-nya tetap terlihat/terdengar jelas saat bertemu 14 huruf tertentu.',
    letters: ['ا', 'ب', 'ج', 'ح', 'خ', 'ع', 'غ', 'ف', 'ق', 'ك', 'م', 'و', 'هـ', 'ي'],
    howToRead: 'Bunyi "L" pada Alif Lam harus diucapkan secara jelas dengan ujung lidah menyentuh gusi atas.',
    commonMistakes: 'Menghilangkan bunyi L atau memantulkannya (qalqalah) secara tidak sengaja.',
    examples: [
      { arabic: 'الْقَمَرُ', transliteration: 'Al-Qamaru', translation: 'Bulan', rule_applied: 'Izhar Qomariyah' },
      { arabic: 'الْحَمْدُ', transliteration: 'Al-Hamdu', translation: 'Segala Puji', rule_applied: 'Izhar Qomariyah' }
    ]
  },
  {
    id: 'alif-lam-syamsiyah',
    name: 'Alif Lam Syamsiyah',
    category: 'Alif Lam',
    description: 'Meleburkan bunyi Alif Lam ke huruf berikutnya.',
    explanation: 'Disebut Syamsiyah (seperti matahari) karena bunyi Lam hilang dan langsung masuk (Idgham) ke huruf berikutnya yang bertasydid.',
    letters: ['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ل', 'ن'],
    howToRead: 'Lewati bunyi Lam dan langsung tekan ke huruf setelahnya seolah-olah huruf tersebut bertasydid.',
    commonMistakes: 'Tetap membunyikan "L" sehingga terdengar kaku.',
    examples: [
      { arabic: 'الشَّمْسُ', transliteration: 'Asy-Syamsu', translation: 'Matahari', rule_applied: 'Idgham Syamsiyah' },
      { arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahmanu', translation: 'Maha Pengasih', rule_applied: 'Idgham Syamsiyah' }
    ]
  },

  // --- QALQALAH ---
  {
    id: 'qalqalah',
    name: 'Qalqalah',
    category: 'Dasar',
    description: 'Pantulan suara pada huruf tertentu saat sukun atau waqaf.',
    explanation: 'Qalqalah artinya getaran atau pantulan. Terbagi menjadi Sughra (pantulan kecil di tengah kata) dan Kubra (pantulan kuat di akhir ayat/waqaf).',
    letters: ['ق', 'ط', 'ب', 'ج', 'د'],
    howToRead: 'Hentakkan makhraj huruf tersebut sehingga menghasilkan pantulan suara yang kokoh. Untuk Kubra, pantulan lebih tebal dan jelas.',
    commonMistakes: 'Menambahkan bunyi hamzah di akhir pantulan atau tidak memantulkan suara sama sekali.',
    examples: [
      { arabic: 'يَدْخُلُونَ', transliteration: 'Yadkhuluuna', translation: 'Mereka masuk', rule_applied: 'Qalqalah Sughra (Dal)' },
      { arabic: 'الْفَلَقِ', transliteration: 'Al-Falaq', translation: 'Waktu Subuh', rule_applied: 'Qalqalah Kubra (Qaf di akhir)' }
    ]
  },

  // --- HUKUM MAD ---
  {
    id: 'mad-thabii',
    name: 'Mad Thabi\'i / Asli',
    category: 'Mad',
    description: 'Hukum mad dasar dengan panjang 2 harakat.',
    explanation: 'Terjadi jika huruf Alif didahului Fathah, Wawu sukun didahului Dhammah, atau Ya sukun didahului Kasrah.',
    letters: ['ا', 'و', 'ي'],
    howToRead: 'Panjangkan suara huruf tersebut tepat selama 2 harakat (1 alif), tidak boleh lebih dan tidak boleh kurang.',
    commonMistakes: 'Membaca terlalu panjang atau justru terlalu pendek seperti huruf biasa.',
    examples: [
      { arabic: 'قَالَ', transliteration: 'Qaala', translation: 'Dia berkata', rule_applied: 'Alif didahului Fathah' },
      { arabic: 'يَقُولُ', transliteration: 'Yaqulu', translation: 'Dia sedang berkata', rule_applied: 'Wawu didahului Dhammah' }
    ]
  },
  {
    id: 'mad-wajib-muttasil',
    name: 'Mad Wajib Muttasil',
    category: 'Mad',
    description: 'Mad Thabi\'i bertemu Hamzah dalam satu kata.',
    explanation: 'Disebut Muttasil karena Mad dan Hamzah berada dalam satu kata (sambung). Merupakan mad yang wajib dibaca panjang.',
    letters: ['Mad + ء (Satu Kata)'],
    howToRead: 'Wajib dipanjangkan selama 4 atau 5 harakat secara konsisten.',
    commonMistakes: 'Membaca pendek hanya 2 harakat karena mengira Mad Thabi\'i biasa.',
    examples: [
      { arabic: 'السَّمَاءِ', transliteration: 'As-Samaaa-i', translation: 'Langit', rule_applied: 'Mad + Hamzah (1 Kata)' }
    ]
  },
  {
    id: 'mad-jaiz-munfasil',
    name: 'Mad Jaiz Munfasil',
    category: 'Mad',
    description: 'Mad Thabi\'i bertemu Hamzah di lain kata.',
    explanation: 'Disebut Munfasil karena Mad dan Hamzah terpisah kata. Jaiz berarti boleh dibaca pendek (2 harakat) atau panjang (4-5 harakat).',
    letters: ['Mad + ء (Beda Kata)'],
    howToRead: 'Boleh dibaca 2, 4, atau 5 harakat. Jika sudah memilih satu panjang, gunakan secara konsisten dalam tilawah tersebut.',
    commonMistakes: 'Tidak konsisten dalam memilih panjang harakat dalam satu sesi bacaan.',
    examples: [
      { arabic: 'إِنَّا أَنْزَلْنَاهُ', transliteration: 'Innaaa-anzalnahu', translation: 'Sesungguhnya Kami menurunkannya', rule_applied: 'Mad + Hamzah (Beda Kata)' }
    ]
  },
  {
    id: 'mad-arid-lissukun',
    name: 'Mad Arid Lissukun',
    category: 'Mad',
    description: 'Mad Thabi\'i yang dihentikan (waqaf).',
    explanation: 'Terjadi apabila ada Mad Thabi\'i bertemu dengan huruf hidup dalam satu kalimat, kemudian huruf tersebut dimatikan karena waqaf (berhenti).',
    letters: ['ا', 'ي', 'و (di akhir waqaf)'],
    howToRead: 'Boleh dibaca sepanjang 2, 4, atau 6 harakat. Namun, dalam satu kali tilawah, panjangnya harus konsisten (istiqamah).',
    commonMistakes: 'Panjang harakat yang tidak konsisten antar ayat.',
    examples: [
      { arabic: 'الْعَالَمِينَ', transliteration: 'Al-Aalamiin', translation: 'Semesta alam', rule_applied: 'Mad Arid (Boleh 2/4/6 harakat)' }
    ]
  },
  {
    id: 'mad-lazim-kilmi',
    name: 'Mad Lazim Kilmi',
    category: 'Mad',
    description: 'Mad Thabi\'i bertemu tasydid dalam satu kata.',
    explanation: 'Terjadi apabila ada Mad Thabi\'i bertemu dengan huruf bertasydid dalam satu kata. Ini adalah tingkatan Mad paling berat (Muthaqqal).',
    letters: ['Huruf bertasydid setelah Mad'],
    howToRead: 'Wajib dibaca sepanjang 6 harakat (3 alif) tanpa boleh kurang sedikitpun.',
    commonMistakes: 'Membaca kurang dari 6 harakat karena nafas yang tidak cukup.',
    examples: [
      { arabic: 'وَلَا الضَّالِّينَ', transliteration: 'Waladh-dhaaaalliin', translation: 'Bukan jalan mereka yang sesat', rule_applied: 'Mad Lazim Muthaqqal Kilmi' }
    ]
  }
];
