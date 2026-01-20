
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
    contents: `Berikan penjelasan mendalam tentang hukum tajwid "${ruleName}". Sertakan sejarah singkat, cara pengucapan yang benar, dan 3 contoh ayat Al-Quran (tulis dalam teks Arab dan Latin). Format dalam Markdown yang rapi.`,
  });
  return response.text;
};

export const generateQuiz = async (category: string, level: QuizLevel = 'Dasar') => {
  const ai = getAI();
  
  let levelInstruction = "";
  if (level === 'Dasar') {
    levelInstruction = "Fokus pada pengenalan huruf, nama hukum, dan cara membaca sederhana.";
  } else if (level === 'Menengah') {
    levelInstruction = "Fokus pada identifikasi hukum dalam potongan ayat pendek dan pemahaman durasi harakat.";
  } else {
    levelInstruction = "Fokus pada kasus-kasus sulit, pengecualian hukum (seperti Izhar Mutlaq), dan analisis hukum tajwid dalam ayat yang panjang/kompleks.";
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Buatkan 5 soal pilihan ganda tentang tajwid kategori "${category}" dengan tingkat kesulitan "${level}" dalam Bahasa Indonesia. ${levelInstruction}`,
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
            explanation: { type: Type.STRING }
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
