export interface Effect {
  name: string;
  desc: string;
}

export interface Category {
  icon: string;
  title: string;
  effects: Effect[];
}

export type EffectsData = Record<string, Category>;

export const effectsData: EffectsData = {
  camera: {
    icon: "🎥",
    title: "Movimientos de Cámara",
    effects: [
      { name: "Pan / Panorámica", desc: "La cámara gira horizontalmente (izquierda/derecha)" },
      { name: "Tilt / Inclinación", desc: "La cámara gira verticalmente (arriba/abajo)" },
      { name: "Zoom In / Zoom Out", desc: "Acercamiento o alejamiento óptico del sujeto" },
      { name: "Dolly In / Dolly Out", desc: "La cámara física se acerca o aleja del sujeto (más natural que el zoom)" },
      { name: "Truck / Travelling Lateral", desc: "La cámara se mueve de lado a lado paralela al sujeto" },
      { name: "Pedestal", desc: "La cámara sube o baja verticalmente sin inclinarse" },
      { name: "Crane / Jib Shot", desc: "Movimiento elevado, dramático, desde arriba hacia abajo" },
      { name: "Handheld", desc: "Ligero temblor orgánico para realismo o tensión" },
      { name: "Steadicam", desc: "Movimiento suave, fluido y flotante siguiendo al sujeto" },
      { name: "Orbit / Arc Shot", desc: "La cámara gira en círculo alrededor del sujeto" },
      { name: "FPV Drone", desc: "Vista de dron en primera persona, movimientos rápidos y acrobáticos" },
      { name: "Dolly Zoom / Efecto Vértigo", desc: "La cámara se aleja mientras hace zoom in, distorsionando el fondo" },
    ],
  },
  transitions: {
    icon: "🔄",
    title: "Transiciones",
    effects: [
      { name: "Cut", desc: "Corte directo y seco" },
      { name: "Crossfade / Dissolve", desc: "Disolvencia suave entre dos escenas" },
      { name: "Fade to Black / White", desc: "Fundido a negro o blanco" },
      { name: "Whip Pan", desc: "Barrido rápido de cámara que sirve como transición" },
      { name: "Zoom Transition", desc: "Transición que usa un zoom rápido para entrar en la siguiente escena" },
      { name: "Masking Transition", desc: "Transición oculta detrás de un objeto que pasa frente a la cámara" },
      { name: "Glitch Transition", desc: "Corte con interferencia digital o fallo de señal" },
      { name: "Light Leak Transition", desc: "Transición con un destello o fuga de luz analógica" },
    ],
  },
  vfx: {
    icon: "🌀",
    title: "Efectos Visuales y Distorsión",
    effects: [
      { name: "Glitch / Datamosh", desc: "Fallo digital, artefactos de compresión o fusión de píxeles" },
      { name: "Chromatic Aberration", desc: "Aberración cromática (bordes de colores rojo/azul en contornos)" },
      { name: "VHS Effect / Scanlines", desc: "Efecto retro de cinta VHS con líneas de escaneo y ruido" },
      { name: "Film Grain", desc: "Grano de película analógica (añade textura y realismo)" },
      { name: "Motion Blur", desc: "Desenfoque de movimiento (da sensación de velocidad)" },
      { name: "Gaussian Blur", desc: "Desenfoque general o de fondo" },
      { name: "Pixelate", desc: "Pixelado o censura digital" },
      { name: "Mirror Effect / Kaleidoscope", desc: "Efecto espejo o caleidoscopio simétrico" },
      { name: "Fisheye / Lens Distortion", desc: "Distorsión de lente gran angular o ojo de pez" },
    ],
  },
  time: {
    icon: "⏱️",
    title: "Efectos de Tiempo y Velocidad",
    effects: [
      { name: "Slow Motion", desc: "Acción ralentizada para énfasis dramático" },
      { name: "Time-lapse", desc: "Lapso de tiempo (nubes moviéndose rápidamente, flores abriéndose)" },
      { name: "Hyperlapse", desc: "Time-lapse con la cámara en movimiento a través de un espacio" },
      { name: "Reverse", desc: "La acción se reproduce hacia atrás" },
      { name: "Speed Ramping", desc: "Cambio progresivo de velocidad (de rápido a lento o viceversa)" },
      { name: "Freeze Frame", desc: "Congelado de la imagen en un momento específico" },
      { name: "Bullet Time", desc: "Efecto Matrix, cámara lenta extrema mientras la cámara virtual gira" },
    ],
  },
  lighting: {
    icon: "💡",
    title: "Iluminación y Ópticos",
    effects: [
      { name: "Lens Flare", desc: "Destello o reflejo del sol/luz en la lente" },
      { name: "Bokeh", desc: "Desenfoque estético y suave de las luces en el fondo" },
      { name: "Shallow Depth of Field", desc: "Profundidad de campo reducida (sujeto nítido, fondo borroso)" },
      { name: "Rim Light / Backlight", desc: "Luz de borde o contraluz que separa al sujeto del fondo" },
      { name: "Silhouette", desc: "Silueta oscura contra un fondo brillante" },
      { name: "Volumetric Lighting / God Rays", desc: "Rayos de luz visibles atravesando polvo, niebla o ventanas" },
      { name: "Neon Glow", desc: "Resplandor intenso de luces de neón" },
      { name: "Chiaroscuro", desc: "Alto contraste dramático entre luces y sombras" },
    ],
  },
  color: {
    icon: "🎨",
    title: "Color y Estilo",
    effects: [
      { name: "Color Grading / Cinematic LUT", desc: "Etalonaje de color con aspecto de película de cine" },
      { name: "Black and White (B&W)", desc: "Blanco y negro" },
      { name: "Sepia", desc: "Tono marrón vintage/antiguo" },
      { name: "Teal and Orange", desc: "Verde azulado y naranja (estándar de Hollywood)" },
      { name: "Vignette", desc: "Oscurecimiento suave de las esquinas de la imagen" },
      { name: "Technicolor", desc: "Colores altamente saturados y vibrantes" },
      { name: "Cyberpunk Aesthetic", desc: "Paleta dominada por cian, magenta y neón" },
    ],
  },
  composition: {
    icon: "🧩",
    title: "Composición y Capas",
    effects: [
      { name: "Double Exposure", desc: "Doble exposición (dos imágenes superpuestas)" },
      { name: "Chroma Key / Green Screen", desc: "Pantalla verde para reemplazar el fondo" },
      { name: "Rotoscoping", desc: "Recorte preciso y animado de un sujeto para separarlo del fondo" },
      { name: "Particle Effects", desc: "Efectos de partículas (lluvia, nieve, chispas, polvo, cenizas)" },
      { name: "Overlay", desc: "Superposición de texturas (humo, luz, papel viejo, gotas)" },
      { name: "Split Screen", desc: "Pantalla dividida en dos o más secciones" },
    ],
  },
  text: {
    icon: "📝",
    title: "Texto y Subtítulos",
    effects: [
      { name: "Dynamic Subtitles / Auto-captions", desc: "Subtítulos dinámicos que aparecen palabra por palabra con colores resaltados" },
      { name: "Kinetic Typography", desc: "Tipografía cinética (texto que se mueve con energía al ritmo de la voz)" },
      { name: "Lower Thirds", desc: "Tercios inferiores (gráficos en la parte baja con nombre, cargo)" },
      { name: "Typewriter Effect", desc: "Efecto de máquina de escribir (texto aparece letra por letra)" },
      { name: "Glitch Text", desc: "Texto que se distorsiona digitalmente por un instante" },
      { name: "Neon Glow Text", desc: "Texto con resplandor de neón" },
      { name: "Text Masking / Text Reveal", desc: "El video se reproduce dentro de las letras del texto" },
      { name: "Karaoke Effect", desc: "El texto cambia de color a medida que se lee o canta" },
    ],
  },
  ui: {
    icon: "🔔",
    title: "Notificaciones y UI",
    effects: [
      { name: "Push Notification Pop-up", desc: "Ventana emergente de notificación (estilo iOS/Android) que se desliza desde arriba" },
      { name: "Chat Bubbles / iMessage", desc: "Burbujas de chat apareciendo en pantalla con animación de escribiendo..." },
      { name: "Social Media Alerts", desc: "Animaciones de Nuevo Seguidor, Like, Comentario o Donación" },
      { name: "System Alerts", desc: "Ventanas de error de Windows, Batería baja, Actualización disponible" },
      { name: "Loading Bar / Progress Bar", desc: "Barra de carga o progreso animada en la parte inferior o superior" },
      { name: "Mouse Cursor Click", desc: "Cursor de ratón que se mueve y hace clic con efecto de onda" },
      { name: "Screen Recording Overlay", desc: "Marco que simula grabación de pantalla de móvil o escritorio" },
    ],
  },
  cues: {
    icon: "🎯",
    title: "Gráficos de Señalización",
    effects: [
      { name: "Animated Arrows", desc: "Flechas animadas que se dibujan solas o rebotan señalando un objeto" },
      { name: "Highlight / Spotlight", desc: "Círculo o cuadrado brillante que resalta una zona de la pantalla" },
      { name: "Zoom-in Box / Picture in Picture", desc: "Recuadro que hace zoom en un detalle pequeño de la escena" },
      { name: "Emojis / Stickers Pop-up", desc: "Emojis o pegatinas 3D que aparecen con efecto de rebote" },
      { name: "Checkmarks / Crosses", desc: "Ticks verdes ✅ o cruces rodas ❌ con animación de rebote" },
      { name: "Sound Waves / Audio Visualizer", desc: "Ondas de sonido animadas que reaccionan al audio" },
    ],
  },
  platform: {
    icon: "📱",
    title: "Estilo de Plataforma",
    effects: [
      { name: "TikTok / Reels UI Overlay", desc: "Simulación de interfaz de TikTok (botones de like, comentario, compartir)" },
      { name: "VHS Date Stamp", desc: "Fecha y hora en la esquina con fuente digital retro (estilo cámara 90s)" },
      { name: "REC Indicator", desc: "Icono rojo de Grabando parpadeante en la esquina" },
      { name: "Watermark", desc: "Marca de agua semitransparente en una esquina" },
    ],
  },
};

export const categories = [
  { id: "all", label: "Todos", icon: "" },
  { id: "camera", label: "Cámara", icon: "🎥" },
  { id: "transitions", label: "Transiciones", icon: "🔄" },
  { id: "vfx", label: "VFX", icon: "🌀" },
  { id: "time", label: "Tiempo", icon: "⏱️" },
  { id: "lighting", label: "Iluminación", icon: "💡" },
  { id: "color", label: "Color", icon: "🎨" },
  { id: "composition", label: "Composición", icon: "🧩" },
  { id: "text", label: "Texto", icon: "📝" },
  { id: "ui", label: "UI/Notificaciones", icon: "🔔" },
  { id: "cues", label: "Señalización", icon: "🎯" },
  { id: "platform", label: "Plataformas", icon: "📱" },
];
