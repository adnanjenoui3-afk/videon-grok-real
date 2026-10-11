# VIDEON IA - IA REAL COMO GROK (No es demo)

Esta SÍ es IA real. Genera video de verdad con Grok Video 3 y VEO 3.1 usando tu API de apimodels.app

## ¿Por qué esto SÍ es IA y lo de GitHub Pages no?

GitHub Pages es solo frontend, apimodels.app bloquea peticiones directas por CORS -> página en blanco.
Este proyecto tiene BACKEND (api/generate.js) que esconde tu API key y hace la llamada real server-side, como hace Grok.

## PASO A PASO - Deploy en Vercel (gratis, 2 min) - IA REAL

### 1. Crea cuenta Vercel
Ve a https://vercel.com/signup - con GitHub

### 2. Crea nuevo repo en GitHub
- https://github.com/new
- Nombre: videon-grok-real
- Public
- Create

### 3. Sube esta carpeta
- Descomprime videon-ia-real-grok.zip
- En tu repo > Add file > Upload files > arrastra todo
- Commit

### 4. Conecta Vercel
- En Vercel > Add New > Project
- Importa tu repo videon-grok-real
- Click Deploy (no toques nada más)
- Espera 30s

### 5. ¡Tu IA real está lista!
Tu web será: https://videon-grok-real.vercel.app

Ahí SÍ genera video real con IA, no demo. Prueba:
- Sube foto + prompt
- Click Generar
- Espera 30-90s (es IA real, tarda como Grok)
- Descarga video

### Tu API key
Ya está fija en api/generate.js:
key_2ec73e...

Si da 401, regenera en https://apimodels.app y pega la nueva en api/generate.js linea 14

### Coste
- Vercel: gratis
- apimodels.app: $0.07 por video (VEO) / $0.08 (Grok Video 3)
