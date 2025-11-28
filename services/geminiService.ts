import { GoogleGenAI, Type } from "@google/genai";

// Initialize the API client
// Note: In a real production app, you might proxy this through a backend to protect the key,
// but for this client-side demo per instructions, we use process.env.API_KEY directly.
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateQuickRecipe = async (ingredients: string, image?: { data: string; mimeType: string }) => {
  const ai = getAiClient();
  if (!ai) return { error: "API Key missing" };

  try {
    const model = "gemini-2.5-flash";
    
    let contents;
    
    if (image) {
      // Multimodal prompt with image
      contents = {
        parts: [
          {
            inlineData: {
              mimeType: image.mimeType,
              data: image.data
            }
          },
          {
            text: `Analyze this image to identify the ingredients available. ${ingredients ? `Also include these specific items: ${ingredients}.` : ''} Suggest one creative, simple recipe using these ingredients. Return a JSON object with title, time, and a very short description.`
          }
        ]
      };
    } else {
      // Text-only prompt
      contents = `Suggest one creative, simple recipe using these ingredients: ${ingredients}. Return a JSON object with title, time, and a very short description.`;
    }
    
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            time: { type: Type.STRING },
            description: { type: Type.STRING },
            calories: { type: Type.INTEGER }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { error: "Failed to generate recipe." };
  }
};