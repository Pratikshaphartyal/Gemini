// To run this code you need to install the following dependencies:
// npm install @google/genai mime dotenv

import{ GoogleGenAI  } from "g @google/genai mime .env" 
= require('@google/genai');
require('dotenv').config();


async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.VITE_GEMINI_API_KEY,
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-pro-preview-05-06';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: (prompt), // Replace this with your actual input
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    
    console.log(chunk.text);
  }
}

export default main