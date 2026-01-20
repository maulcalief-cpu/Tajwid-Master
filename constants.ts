
import { TajwidRule } from './types';

export const TAJWID_RULES: TajwidRule[] = [
  // --- MAKHARIJUL HURUF ---
  {
    id: 'makhraj-al-jauf',
    name: 'Al-Jauf (Rongga Mulut)',
    category: 'Makhraj',
    description: 'Tempat keluarnya huruf Mad dari rongga mulut dan tenggorokan.',
    explanation: 'Al-Jauf adalah lubang atau rongga yang dimulai dari akhir tenggorokan hingga mulut. Makhraj ini bersifat estimasi (Muqaddar) dan khusus untuk huruf-huruf Mad.',
    letters: ['ا', 'و', 'ي'],
    howToRead: 'Suara dikeluarkan dengan memanjangkan nafas dari rongga dalam tanpa ada hambatan makhraj tertentu di lidah atau tenggorokan.',
    commonMistakes: 'Memutus suara sebelum waktunya atau mencampurnya dengan suara dari hidung (ghunnah).',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
    examples: [
      { arabic: 'يَقُولُ', transliteration: 'Yaquulu', translation: 'Dia berkata', rule_applied: 'Wawu Mad (Al-Jauf)' },
      { arabic: 'فِي', transliteration: 'Fii', translation: 'Di dalam', rule_applied: 'Ya Mad (Al-Jauf)' }
    ]
  },
  {
    id: 'makhraj-al-halq',
    name: 'Al-Halq (Tenggorokan)',
    category: 'Makhraj',
    description: 'Tempat keluarnya huruf dari area tenggorokan.',
    explanation: `Tenggorokan terbagi menjadi tiga bagian: Pangkal (Aqshal Halq), Tengah (Wasthul Halq), dan Ujung (Adnal Halq).`,
    letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
    howToRead: `Keluarkan suara sesuai titiknya: Hamzah/Ha di pangkal, 'Ain/Ha di tengah, dan Ghayn/Kha di ujung tenggorokan.`,
    commonMistakes: `Membaca 'Ain terlalu masuk ke hidung atau suara Ha yang tidak bersih.`,
    imageUrl: 'https://images.unsplash.com/photo-1584017725562-959950669f6e?q=80&w=800&auto=format&fit=crop',
    examples: [
      { arabic: 'الْحَمْدُ', transliteration: 'Al-Hamdu', translation: 'Segala Puji', rule_applied: 'Ha (Wasthul Halq)' },
      { arabic: 'خَلَقَ', transliteration: 'Khalaqa', translation: 'Menciptakan', rule_applied: 'Kha (Adnal Halq)' }
    ]
  },
  {
    id: 'makhraj-al-lisan',
    name: 'Al-Lisan (Lidah)',
    category: 'Makhraj',
    description: 'Makhraj terbesar yang mencakup 18 huruf hijaiyah.',
    explanation: 'Lidah adalah makhraj yang paling kompleks. Terdiri dari pangkal, tengah, pinggir, dan ujung lidah.',
    letters: ['ق', 'ك', 'ج', 'ش', 'ي', 'ض', 'ل', 'ن', 'ر', 'د', 'ت', 'ط', 'ص', 'س', 'ز', 'ذ', 'ث', 'ظ'],
    howToRead: 'Perhatikan posisi lidah terhadap langit-langit, gigi seri atas, atau gigi seri bawah.',
    commonMistakes: 'Tertukarnya bunyi Dhad (ض) dengan Dal (د) atau To (ط) yang tidak tebal.',
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop',
    examples: [
      { arabic: 'وَلَا الضَّالِّينَ', transliteration: 'Waladh-dhaalliin', translation: 'Bukan jalan yang sesat', rule_applied: 'Dhad (Pinggir Lidah)' }
    ]
  },

  // --- QOLQOLAH ---
  {
    id: 'qolqolah',
    name: 'Qolqolah (Sugra & Kubra)',
    category: 'Qolqolah',
    description: 'Getaran suara atau pantulan saat mengucapkan huruf tertentu dalam keadaan sukun.',
    explanation: 'Qolqolah terjadi apabila salah satu dari lima huruf Qolqolah berharakat sukun atau mati karena waqaf. Terbagi menjadi Sugra (pantulan kecil di tengah kata) dan Kubra (pantulan besar di akhir kata).',
    letters: ['ق', 'ط', 'ب', 'ج', 'د'],
    howToRead: 'Pantulkan bunyi huruf dengan tegas. Pada Sugra pantulan mengalir ke huruf berikutnya, pada Kubra pantulan lebih kuat dan jelas di akhir bacaan.',
    commonMistakes: 'Memantulkan huruf selain huruf qolqolah (seperti Sin atau Lam) atau tidak memantulkan huruf qolqolah yang sukun.',
    examples: [
      { arabic: 'يَدْخُلُونَ', transliteration: 'Yadkhuluuna', translation: 'Mereka masuk', rule_applied: 'Dal (Qolqolah Sugra)' },
      { arabic: 'الْفَلَقِ', transliteration: 'Al-Falaq', translation: 'Waktu Subuh', rule_applied: 'Qaf (Qolqolah Kubra)' },
      { arabic: 'لَهَبٍ وَتَبَّ', transliteration: 'Lahabiw-watabb', translation: 'Api yang bergejolak dan binasa', rule_applied: 'Ba (Qolqolah Kubra)' }
    ]
  },

  // --- NUN SUKUN & TANWIN ---
  {
    id: 'izhar-halqi',
    name: 'Izhar Halqi',
    category: 'Nun Sukun',
    description: 'Membaca Nun Sukun atau Tanwin dengan jelas tanpa dengung.',
    explanation: 'Terjadi apabila Nun Sukun atau Tanwin bertemu dengan salah satu dari 6 huruf tenggorokan (Halq).',
    letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
    howToRead: 'Ucapkan bunyi N dengan jelas, tegas, dan tidak diseret atau didengungkan.',
    commonMistakes: 'Memberikan jeda atau pantulan pada bunyi N.',
    examples: [
      { arabic: 'مَنْ آمَنَ', transliteration: 'Man aamana', translation: 'Barangsiapa yang beriman', rule_applied: 'Nun + Hamzah' },
      { arabic: 'عَلِيمٌ حَكِيمٌ', transliteration: '‘Aliimun hakiim', translation: 'Maha Mengetahui lagi Maha Bijaksana', rule_applied: 'Tanwin + Ha' }
    ]
  },
  {
    id: 'idgham-bigunnah',
    name: 'Idgham Bigunnah',
    category: 'Nun Sukun',
    description: 'Memasukkan bunyi Nun ke huruf berikutnya disertai dengung.',
    explanation: 'Terjadi jika Nun Sukun atau Tanwin bertemu huruf Yanmu (Ya, Nun, Mim, Wawu).',
    letters: ['ي', 'ن', 'م', 'و'],
    howToRead: 'Masukkan suara ke huruf berikutnya dan tahan dengungan di hidung selama 2 harakat.',
    commonMistakes: 'Tidak menahan dengung cukup lama.',
    examples: [
      { arabic: 'مَنْ يَقُولُ', transliteration: 'May yaquulu', translation: 'Orang yang berkata', rule_applied: 'Nun + Ya' }
    ]
  },
  {
    id: 'idgham-bilagunnah',
    name: 'Idgham Bilagunnah',
    category: 'Nun Sukun',
    description: 'Memasukkan bunyi Nun tanpa disertai dengung.',
    explanation: 'Terjadi jika Nun Sukun atau Tanwin bertemu huruf Lam atau Ra.',
    letters: ['ل', 'ر'],
    howToRead: 'Langsung masukkan bunyi ke huruf berikutnya secara sempurna tanpa ada suara tersisa di hidung.',
    commonMistakes: 'Masih menyisakan bunyi dengung (nasal).',
    examples: [
      { arabic: 'مِنْ رَبِّهِمْ', transliteration: 'Mir rabbihim', translation: 'Dari Tuhan mereka', rule_applied: 'Nun + Ra' }
    ]
  },
  {
    id: 'iqlab',
    name: 'Iqlab',
    category: 'Nun Sukun',
    description: 'Mengganti bunyi Nun menjadi Mim disertai dengung.',
    explanation: 'Terjadi jika Nun Sukun atau Tanwin bertemu dengan huruf Ba.',
    letters: ['ب'],
    howToRead: 'Ubah bunyi N menjadi M yang samar dan tahan dengungan 2 harakat.',
    commonMistakes: 'Merapatkan bibir terlalu kuat atau tanpa dengung.',
    examples: [
      { arabic: 'مِنْ بَعْدِ', transliteration: 'Mim ba’di', translation: 'Setelah...', rule_applied: 'Nun + Ba' }
    ]
  },
  {
    id: 'ikhfa-haqiqi',
    name: 'Ikhfa Haqiqi',
    category: 'Nun Sukun',
    description: 'Menyamarkan bunyi Nun disertai dengung.',
    explanation: 'Terjadi jika Nun Sukun atau Tanwin bertemu 15 huruf sisa selain Izhar, Idgham, dan Iqlab.',
    letters: ['ت', 'ث', 'ج', 'د', 'ذ', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ف', 'ق', 'ك'],
    howToRead: 'Samarkan bunyi N ke makhraj huruf berikutnya dan dengungkan selama 2 harakat.',
    commonMistakes: 'Bunyi N masih terdengar terlalu jelas (seperti Izhar).',
    examples: [
      { arabic: 'مِنْ تَحْتِهَا', transliteration: 'Min tahtihaa', translation: 'Dari bawahnya', rule_applied: 'Nun + Ta' }
    ]
  },

  // --- MIM SUKUN ---
  {
    id: 'ikhfa-syafawi',
    name: 'Ikhfa Syafawi',
    category: 'Mim Sukun',
    description: 'Menyamarkan bunyi Mim sukun saat bertemu Ba.',
    explanation: 'Satu-satunya hukum Mim sukun yang dibaca samar dengan dengung.',
    letters: ['ب'],
    howToRead: 'Samarkan bunyi Mim ke bibir dan tahan dengung 2 harakat.',
    commonMistakes: 'Merapatkan bibir terlalu rapat seperti Idgham.',
    examples: [
      { arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ', transliteration: 'Tarmiihim bihijaaratin', translation: 'Melempari mereka dengan batu', rule_applied: 'Mim + Ba' }
    ]
  },
  {
    id: 'idgham-mimi',
    name: 'Idgham Mimi (Mutamasilain)',
    category: 'Mim Sukun',
    description: 'Memasukkan Mim sukun ke Mim berikutnya.',
    explanation: 'Terjadi jika Mim sukun bertemu dengan sesama huruf Mim.',
    letters: ['م'],
    howToRead: 'Masukkan Mim pertama ke Mim kedua dengan dengungan yang sempurna (2 harakat).',
    commonMistakes: 'Membaca terlalu cepat tanpa menahan ghunnah.',
    examples: [
      { arabic: 'لَهُمْ مَا يَشَاءُونَ', transliteration: 'Lahum maa yasyaa’uun', translation: 'Bagi mereka apa yang mereka kehendaki', rule_applied: 'Mim + Mim' }
    ]
  },
  {
    id: 'izhar-syafawi',
    name: 'Izhar Syafawi',
    category: 'Mim Sukun',
    description: 'Membaca Mim sukun dengan jelas.',
    explanation: 'Terjadi jika Mim sukun bertemu semua huruf hijaiyah selain Mim dan Ba.',
    letters: ['ا', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'ن', 'و', 'هـ', 'ي'],
    howToRead: 'Bunyi Mim dibaca jelas, singkat, dan tidak boleh dipantulkan atau didengungkan.',
    commonMistakes: 'Membaca dengung terutama saat bertemu Wawu (و) atau Fa (ف).',
    examples: [
      { arabic: 'أَمْ لَمْ تُنْذِرْهُمْ', transliteration: 'Am lam tundzirhum', translation: 'Atau kamu tidak memberi peringatan', rule_applied: 'Mim + Lam' }
    ]
  },

  // --- ALIF LAM ---
  {
    id: 'al-qamariyah',
    name: 'Alif Lam Qamariyah',
    category: 'Alif Lam',
    description: 'Membaca Alif Lam secara jelas (Izhar).',
    explanation: 'Terjadi jika Alif Lam (ال) bertemu salah satu dari 14 huruf Qamariyah.',
    letters: ['ء', 'ب', 'ج', 'ح', 'خ', 'ع', 'غ', 'ف', 'ق', 'ك', 'm', 'و', 'هـ', 'ي'],
    howToRead: 'Bunyi "L" pada Alif Lam terdengar sangat jelas.',
    commonMistakes: 'Memantulkan bunyi Lam sukun.',
    examples: [
      { arabic: 'الْقَمَرُ', transliteration: 'Al-Qamaru', translation: 'Bulan', rule_applied: 'Al + Qaf' },
      { arabic: 'الْحَمْدُ', transliteration: 'Al-Hamdu', translation: 'Segala Puji', rule_applied: 'Al + Ha' }
    ]
  },
  {
    id: 'al-syamsiyah',
    name: 'Alif Lam Syamsiyah',
    category: 'Alif Lam',
    description: 'Memasukkan bunyi Alif Lam ke huruf berikutnya (Idgham).',
    explanation: 'Terjadi jika Alif Lam (ال) bertemu salah satu dari 14 huruf Syamsiyah.',
    letters: ['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ل', 'ن'],
    howToRead: 'Bunyi "L" tidak dibaca, melainkan langsung melebur ke huruf berikutnya yang bertasydid.',
    commonMistakes: 'Masih membunyikan "L".',
    examples: [
      { arabic: 'الشَّمْسُ', transliteration: 'Asy-Syamsu', translation: 'Matahari', rule_applied: 'Al + Syin' },
      { arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahmanu', translation: 'Maha Pengasih', rule_applied: 'Al + Ra' }
    ]
  },

  // --- MAD ---
  {
    id: 'mad-thabii',
    name: 'Mad Thabi’i (Ashli)',
    category: 'Mad',
    description: 'Pemanjangan suara dasar sebanyak 2 harakat.',
    explanation: 'Terjadi jika Alif setelah Fathah, Ya sukun setelah Kasrah, atau Wawu sukun setelah Dhammah.',
    letters: ['ا', 'و', 'ي'],
    howToRead: 'Panjangkan suara secara stabil sebanyak dua ketukan harakat.',
    commonMistakes: 'Membaca terlalu panjang atau terlalu pendek.',
    examples: [
      { arabic: 'قَالَ', transliteration: 'Qaala', translation: 'Dia berkata', rule_applied: 'Alif + Fathah' },
      { arabic: 'يَقُولُ', transliteration: 'Yaquulu', translation: 'Dia berkata', rule_applied: 'Wawu + Dhammah' }
    ]
  },
  {
    id: 'mad-muttasil',
    name: 'Mad Wajib Muttasil',
    category: 'Mad',
    description: 'Mad Thabi’i bertemu Hamzah dalam satu kata.',
    explanation: 'Wajib dibaca panjang 4-5 harakat.',
    letters: ['ء'],
    howToRead: 'Panjangkan suara secara signifikan sebelum mengakhiri dengan bunyi Hamzah.',
    commonMistakes: 'Membaca kurang dari 4 harakat.',
    examples: [
      { arabic: 'جَاءَ', transliteration: 'Jaa’a', translation: 'Telah datang', rule_applied: 'Mad + Hamzah (1 kata)' }
    ]
  },

  // --- SIFATUL HURUF ---
  {
    id: 'sifat-al-hams',
    name: 'Al-Hams & Al-Jahr',
    category: 'Sifat',
    description: 'Hembusan nafas saat mengucapkan huruf.',
    explanation: 'Hams (Samar) adalah mengalirnya nafas. Lawannya adalah Jahr (Jelas).',
    letters: ['ف', 'ح', 'ث', 'هـ', 'ش', 'خ', 'ص', 'س', 'ك', 'ت'],
    howToRead: 'Biarkan udara mengalir sedikit saat mengucapkan huruf-huruf Hams.',
    commonMistakes: 'Membaca Ta (ت) sukun tanpa desis nafas.',
    examples: [
      { arabic: 'اشْتَرَوْا', transliteration: 'Isytaraw', translation: 'Mereka membeli', rule_applied: 'Syin (Hams)' }
    ]
  },
  {
    id: 'sifat-syiddah-rakhawah',
    name: 'Syiddah & Tawasut',
    category: 'Sifat',
    description: 'Aliran suara saat mengucapkan huruf.',
    explanation: 'Syiddah (Kuat) artinya suara tertahan. Tawasut (Sedang) artinya di antara tertahan dan mengalir.',
    letters: ['أ', 'ج', 'د', 'ق', 'ط', 'ب', 'ك', 'ت', 'ل', 'ن', 'ع', 'م', 'ر'],
    howToRead: 'Tekan makhraj dengan kuat untuk Syiddah agar suara berhenti seketika. Untuk Tawasut, suara dialirkan sedikit.',
    commonMistakes: 'Menahan suara terlalu lama pada huruf yang seharusnya mengalir.',
    examples: [
      { arabic: 'الْحَمْدُ', transliteration: 'Al-Hamdu', translation: 'Segala Puji', rule_applied: 'Lam & Mim (Tawasut)' }
    ]
  }
];
