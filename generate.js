
// api/generate.js - Backend REAL como Grok - Vercel Serverless Function
export default async function handler(req, res) {
  // CORS para que funcione desde cualquier frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // TU API KEY FIJA PARA SIEMPRE - escondida en el backend, no visible en el frontend
  const API_KEY = "[STRIPPED 132 bytes]";
  const API_ENDPOINT = "https://apimodels.app/api/v1/video/generations";

  try {
    const { prompt, image, model = "grok-video-3", duration = 5, resolution = "720p" } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Falta prompt' });
    }

    console.log("Generando video con:", model, prompt.substring(0,50));

    // Llamada REAL a apimodels.app (Grok Video 3 / VEO 3.1)
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        prompt,
        duration: parseInt(duration),
        resolution,
        ...(image ? { image } : {})
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error API:", data);
      return res.status(response.status).json({ 
        error: `Error ${response.status}: ${data.message || data.error || JSON.stringify(data)}`,
        details: data
      });
    }

    // Si es async, devolver ID para polling
    // Si ya tiene URL, devolver directo
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error backend:", error);
    return res.status(500).json({ error: error.message });
  }
}
