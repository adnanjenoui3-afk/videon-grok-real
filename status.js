
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  const API_KEY = "[STRIPPED 132 bytes]";
  const { id } = req.query;

  if (!id) return res.status(400).json({ error: 'Falta ID' });

  try {
    const response = await fetch(`https://apimodels.app/api/v1/video/generations/${id}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
