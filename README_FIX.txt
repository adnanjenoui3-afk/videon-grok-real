FIX del error: Error El patrón api/generate.js no coincide

Solución: Borra vercel.json, Vercel detecta solo api/

PASOS:
1. En tu repo GitHub videon-grok-real, borra vercel.json (si existe)
2. Sube estos 3 archivos:
   - index.html
   - api/generate.js
   - api/status.js
3. Vercel > Deployments > Redeploy
