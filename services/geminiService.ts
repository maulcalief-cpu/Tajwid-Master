
import { GoogleGenAI, Type } from "@google/genai";
import { QuizLevel } from "../types";

const getAI = () => {
  const key = process.env.API_KEY;
  if (!key) throw new Error("API Key is missing");
  return new GoogleGenAI({ apiKey: key });
};

export const getAdvancedExplanation = async (ruleName: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Berikan penjelasan mendalam tentang hukum tajwid "${ruleName}". Sertakan sejarah singkat, cara pengucapan yang benar (posisi lidah/mulut), dan 3 contoh ayat Al-Quran (tulis dalam teks Arab dan Latin). Format dalam Markdown yang rapi dan gunakan bahasa yang mudah dimengerti anak muda.`,
  });
  return response.text;
};

export const generateQuiz = async (category: string, level: QuizLevel = 'Dasar') => {
  const ai = getAI();
  
  let levelInstruction = "";
  if (level === 'Dasar') {
    levelInstruction = "Fokus pada pengenalan huruf, nama hukum, dan cara membaca sederhana.";
  } else if (level === 'Menengah') {
    levelInstruction = "Fokus pada identifikasi hukum dalam potongan ayat pendek, durasi harakat, dan makhraj yang tepat.";
  } else {
    levelInstruction = "Fokus pada kasus-kasus sulit, pengecualian hukum (seperti Izhar Mutlaq), perbandingan sifat huruf, dan analisis hukum kompleks dalam ayat panjang.";
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Buatkan 5 soal pilihan ganda tentang tajwid kategori "${category}" dengan tingkat kesulitan "${level}" dalam Bahasa Indonesia. 
    PENTING: Berikan penjelasan (explanation) yang SANGAT DETAIL untuk setiap soal, jelaskan makhrajnya atau alasan mengapa hukum tersebut berlaku pada contoh tersebut. 
    Gunakan potongan ayat Al-Quran asli dalam pertanyaan jika memungkinkan.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            question: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctAnswer: { type: Type.INTEGER, description: 'Index of correct answer starting from 0' },
            explanation: { type: Type.STRING, description: 'Detailed pedagogical explanation of the answer' }
          },
          required: ["id", "question", "options", "correctAnswer", "explanation"]
        }
      }
    }
  });
  
  try {
    return JSON.parse(response.text || '[]');
  } catch (e) {
    console.error("Failed to parse AI quiz response", e);
    return [];
  }
};
