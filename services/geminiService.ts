
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getArchitecturalAdvice(problem: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Waseem Afzal's AI Architectural Assistant. A client has described a business problem. Provide a senior-level, concise, business-focused architectural suggestion that highlights scalability, security, and cost-efficiency. Keep it under 150 words. Problem: ${problem}`,
      config: {
        systemInstruction: "You represent Waseem Afzal, a Senior MERN Stack Developer. Your tone is professional, confident, and business-oriented. Focus on ROI and technical reliability.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently optimizing my architectural engine. Please reach out directly on Upwork to discuss your specific requirements!";
  }
}
