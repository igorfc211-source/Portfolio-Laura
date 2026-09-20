import { Project, Service, Testimonial, BeforeAfter } from "../types/types";

export const categories = ["Todos", "Pitch Deck", "Keynote", "Corporativo"];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Fintech Series A",
    category: "Pitch Deck",
    client: "Nova Bank",
    year: "2024",
    tagline: "Captação de R$ 20M em Series A",
    objective: "Criar uma narrativa de crescimento para investidores internacionais.",
    highlights: [
      "Design minimalista focado em dados",
      "Animações de gráficos no Canva",
      "Reestruturação completa do storytelling"
    ],
    result: "Rodada fechada em 2 semanas com valuation 30% acima do esperado.",
    tags: ["Fintech", "Investidores", "Série A"],
    
    // ── Mídia Real ──
    cover: "/images/covers/nova-bank.jpg",
    coverBg: "#0B1120",
    coverAccent: "#2563EB",
    presentationUrl: "https://www.canva.com/design/DAF.../view",
    previewType: "flipbook",
    pages: [
      "/images/slides/nova-bank-1.jpg",
      "/images/slides/nova-bank-2.jpg",
      "/images/slides/nova-bank-3.jpg",
      "/images/slides/nova-bank-4.jpg",
      "/images/slides/nova-bank-5.jpg"
    ]
  },
  {
    id: "proj-2",
    name: "Product Launch 2024",
    category: "Keynote",
    client: "TechCorp",
    year: "2024",
    tagline: "Lançamento de produto com animações complexas",
    objective: "Apresentar o novo ecossistema de software em um evento ao vivo.",
    highlights: [
      "Vídeo de fundo integrado",
      "Transições cinematográficas",
      "Icons animados customizados"
    ],
    result: "Mais de 10mil visualizações online nas primeiras 24h.",
    tags: ["Tech", "Evento", "Launch"],
    
    // ── Mídia Real ──
    cover: "/images/covers/techcorp.jpg",
    coverBg: "#052E2B",
    coverAccent: "#10B981",
    presentationUrl: "https://www.canva.com/design/DAF.../view",
    previewType: "video",
    video: "/videos/techcorp-launch.mp4"
  }
];

export const services: Service[] = [
  // ... seus serviços
];

export const testimonials: Testimonial[] = [
  // ... seus depoimentos
];

export const beforeAfters: BeforeAfter[] = [
  // ... seus antes e depois
];
