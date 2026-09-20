// ═══════════════════════════════════════════════════════════════════════════════
// TIPOS
// ═══════════════════════════════════════════════════════════════════════════════

export interface Project {
  id: string; // Alterado para string para melhor uso em URLs e keys
  name: string;
  category: string;
  client: string;
  year: string;
  
  // ── Metadados (Seus campos originais) ──
  tagline: string;
  objective: string;
  highlights: string[];
  result: string;
  tags: string[];
  
  // ── Mídia Real (Novos campos) ──
  cover: string;           // Caminho da imagem real da capa (ex: /images/covers/proj1.jpg)
  coverBlur?: string;      // Data URL base64 para blur placeholder (opcional, mas recomendado)
  coverBg: string;         // Cor/fundo usado nos mockups de capa
  coverAccent: string;     // Cor de destaque do projeto (mantido para a UI)
  presentationUrl: string; // Link real para a apresentação (Canva, Google Slides, etc.)
  
  // Tipo de visualização no Modal
  previewType: "flipbook" | "video";
  
  // Mídia para o Modal
  pages?: string[];        // Array de imagens das páginas (para o Flipbook)
  video?: string;          // Caminho do vídeo MP4 (para o VideoViewer)
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface SlideImage {
  layout: "cover" | "chart" | "text" | "split" | "data";
  bg: string;
  accent: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface BeforeAfter {
  id: number;
  title: string;
  category: string;
  beforeDescription: string;
  afterDescription: string;
}
