/* =====================================================================
   LA BÓVEDA DE AURA.SPIA · DATOS
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que tienes que tocar para cambiar la bóveda.
   Cada bloque entre { } es una tarjeta. Para añadir una tarjeta nueva:
     1. Copia una línea entera de su lista (desde { hasta },).
     2. Pégala debajo y cambia los textos entre comillas.
     3. Guarda y ejecuta publicar.cmd.
   Reglas para no romperlo:
     - Los textos van siempre entre comillas "así".
     - Cada tarjeta acaba en una coma: },
     - Si un texto lleva comillas dentro, usa las españolas « ».
     - Nada de correos, teléfonos, rutas del ordenador ni cifras de dinero:
       todo lo que pongas aquí se ve en internet.
   ===================================================================== */

window.BOVEDA = {

  /* ---------- 1. MIS REDES ----------
     nombre: la red · usuario: lo que se ve debajo · enlace: la dirección completa */
  redes: [
    { nombre: "Instagram", usuario: "@alvaro.icardo.aura",       enlace: "https://www.instagram.com/alvaro.icardo.aura/" },
    { nombre: "TikTok",    usuario: "@alvaro_aura",              enlace: "https://www.tiktok.com/@alvaro_aura" },
    { nombre: "YouTube",   usuario: "@coke_37",                  enlace: "https://www.youtube.com/@coke_37" },
    { nombre: "Twitch",    usuario: "directo en mis días libres", enlace: "https://www.twitch.tv/coke_37" },
  ],

  /* ---------- 2. LO IMPORTANTE (destacados) ----------
     Lo que pongas PRIMERO sale arriba del todo.
     tipo: Carrusel, Vídeo, Lección, Plantilla... · titulo · texto: una frase
     enlace: una página de este sitio (como "neurolab/") o una dirección completa (https://...)
     imagen: opcional; si no tienes, borra esa parte (desde imagen: hasta la coma) */
  destacados: [
    { tipo: "Vídeo",    titulo: "Le pedí una alarma a mi IA",    texto: "…y al final me la puse yo. 25 segundos, fallos incluidos.",     enlace: "https://www.instagram.com/reel/DgIqzolgUrm/", imagen: "portadas/alarma.jpg" },
    { tipo: "Carrusel", titulo: "NeuroLab: así piensa una IA",  texto: "De una neurona a una red neuronal, en 8 láminas.",              enlace: "neurolab/",             imagen: "neurolab/salida/carrusel/neurolab-carrusel-01.png" },
    { tipo: "Lección",  titulo: "Juega con una neurona",         texto: "Mueve tú los pesos y mira cuándo se dispara. Sin instalar nada.", enlace: "neurolab/leccion.html" },
  ],

  /* ---------- 3. HERRAMIENTAS DE IA ----------
     nombre · para: para qué la uso, en una frase · enlace: su web oficial.
     Sin precios: cambian a menudo y no quiero poner un dato viejo. */
  herramientas: [
    { nombre: "Claude",      para: "Escribir, resumir y entender código paso a paso.",        enlace: "https://claude.ai/" },
    { nombre: "Claude Code", para: "Programar desde la terminal: con él construyo JARVIS.",   enlace: "https://claude.com/product/claude-code" },
    { nombre: "ChatGPT",     para: "Sacar ideas de vídeo y redactar correos.",                enlace: "https://chatgpt.com/" },
    { nombre: "Gemini",      para: "Buscar información y montar planes de estudio.",          enlace: "https://gemini.google.com/" },
    { nombre: "Grok",        para: "Comparar propuestas y revisar el trabajo de mis agentes.", enlace: "https://grok.com/" },
    { nombre: "ElevenLabs",  para: "Poner voz a mis vídeos y a JARVIS.",                       enlace: "https://elevenlabs.io/" },
    { nombre: "Higgsfield",  para: "Planos de vídeo hechos con IA para mis reels.",            enlace: "https://higgsfield.ai/" },
    { nombre: "Canva",       para: "Portadas y carruseles.",                                   enlace: "https://www.canva.com/" },
    { nombre: "Notion",      para: "Organizar estudio y contenido; con ella hago plantillas.", enlace: "https://www.notion.com/" },
  ],

  /* ---------- 4. MIS PROYECTOS ----------
     nombre · texto: qué es · estado: una o dos palabras
     enlace: opcional; si algún día tiene página propia, añade  enlace: "https://..."  */
  proyectos: [
    { nombre: "JARVIS",       estado: "en construcción", texto: "Mi asistente de trabajo, hecho con Claude Code: planifica mi semana, prepara borradores y tiene un centro de mando por voz." },
    { nombre: "AUTRON",       estado: "en construcción", texto: "Un cerebro 3D que reúne mi código, mis recuerdos y mis agentes en una sola página." },
    { nombre: "Cartera SPIA", estado: "en construcción", texto: "Una app para ver y analizar una cartera de inversiones. Informa; no compra ni vende." },
  ],

};
