export type Slide = {
  id: string;
  title: string;
  category: string;
  description: string;
  pdf: string;
  cover?: string;
  featured?: boolean;
};

export type SlideWithStatus = Slide & {
  pdfExists: boolean;
  coverExists: boolean;
};

export const slides: Slide[] = [
  {
    id: "metodologia-5s",
    title: "Metodologia 5S",
    category: "Corporativo",
    description:
      "TODO: descrever o contexto, objetivo e resultado desta apresentação em 1 ou 2 frases.",
    // PDF esperado: public/media/slides/metodologia-5s.pdf
    pdf: "/media/slides/metodologia-5s.pdf",
    cover: "/media/covers/metodologia-5s.webp",
  },
  {
    id: "antidepressivos-na-vet",
    title: "Como antidepressivos são usados na VET",
    category: "Universitário",
    description:
      "TODO: descrever o contexto acadêmico e o desafio visual desta apresentação.",
    // PDF esperado: public/media/slides/antidepressivos-na-vet.pdf
    pdf: "/media/slides/antidepressivos-na-vet.pdf",
    cover: "/media/covers/antidepressivos-na-vet.webp",
  },
  {
    id: "sarcoma-fusocelular",
    title: "Sarcoma Fusocelular",
    category: "Sarcoma Fusocelular",
    description:
      "TODO: registrar o objetivo da apresentação e o cuidado visual necessário para o tema.",
    // PDF esperado: public/media/slides/sarcoma-fusocelular.pdf
    pdf: "/media/slides/sarcoma-fusocelular.pdf",
    cover: "/media/covers/sarcoma-fusocelular.webp",
  },
  {
    id: "etica-da-complexidade",
    title: "Ética da Complexidade",
    category: "Palestra",
    description:
      "TODO: resumir a ideia central da palestra e o papel dos slides na narrativa.",
    // PDF esperado: public/media/slides/etica-da-complexidade.pdf
    pdf: "/media/slides/etica-da-complexidade.pdf",
    cover: "/media/covers/etica-da-complexidade.webp",
  },
  {
    id: "plante-e-floresca",
    title: "Plante e Floresça!",
    category: "Apresentação especial (TODO: confirmar rótulo)",
    description:
      "TODO: Laura escrever a história real deste slide, explicando por que ele foi tão importante.",
    // PDF esperado: public/media/slides/plante-e-floresca.pdf
    pdf: "/media/slides/plante-e-floresca.pdf",
    cover: "/media/covers/plante-e-floresca.webp",
    featured: true,
  },
];
