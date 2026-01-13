
import { GoogleGenAI } from "@google/genai";

export async function getCoxieResponse(prompt: string) {
  // Fixed: Must use named parameter for apiKey and obtain it directly from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are 'Coxie', the official live digital assistant for the 'CoxHelp' app in Cox's Bazar, Bangladesh. 
        Your goal is to provide real-time, helpful, and welcoming advice.
        
        CRITICAL LANGUAGE RULES:
        - MIRROR THE USER'S STYLE: Detect the user's script and language.
        - If the user writes in Bengali (বাংলা), reply in Bengali.
        - If the user writes in English, reply in English.
        - If the user writes in Banglish (Bengali words in Latin script like "kemon achen?"), reply in Banglish.
        - Always match the user's tone and script.
        
        CRITICAL FORMATTING RULES:
        - DO NOT USE MARKDOWN. No asterisks (**), no hashes (#), no underscores (_).
        - Provide clean plain text only.
        
        CONTENT RULES:
        - Provide specific info about: weather alerts, sea conditions, the best time for beach visits, local delicacies like Shutki, Seafood, and Kalabati banana.
        - If someone asks for help, prioritize emergency numbers (999 or Tourist Police 01320160000).
        - Recommend specific spots: Laboni, Sugandha, Kolatoli, Inani, Himchari, and Saint Martin.
        - Be humanitarian, warm, and professional.
        - Keep responses concise (under 80 words).`,
        temperature: 0.7,
      },
    });
    
    // Safety check: strip any remaining common markdown-like asterisks just in case
    // Note: response.text is a property, not a method.
    let text = response.text || "";
    text = text.replace(/\*+/g, ''); 
    
    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "দুঃখিত, আমি এই মুহূর্তে যুক্ত হতে পারছি না। অনুগ্রহ করে সরাসরি আমাদের জরুরি নাম্বারে যোগাযোগ করুন। (Sorry, I'm having trouble connecting. Please contact our emergency numbers directly.)";
  }
}
