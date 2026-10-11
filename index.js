
export default function handler(req, res){
  res.status(200).json({ status: "VIDEON IA REAL ACTIVA", models: ["grok-video-3","veo-3.1-fast-hd"] });
}
