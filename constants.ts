
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
    explanation: 'Terbagi menjadi Muthaqqal (berat/ada tasydid) dan Mukhaffaf (ringan). Merupakan tingkatan Mad yang paling panjang.',
    letters: ['Huruf bertasydid setelah Mad'],
    howToRead: 'Wajib dibaca sepanjang 6 harakat (3 alif) tanpa boleh kurang sedikitpun.',
    commonMistakes: 'Membaca kurang dari 6 harakat karena nafas yang tidak cukup.',
    examples: [
      { arabic: 'وَلَا الضَّالِّينَ', transliteration: 'Waladh-dhaaaalliin', translation: 'Bukan jalan mereka yang sesat', rule_applied: 'Mad Lazim Muthaqqal Kilmi' }
    ]
  }
];
