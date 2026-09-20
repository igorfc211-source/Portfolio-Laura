import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";

export type SocialItem = {
  id: string;
  label: string;
  href: string;
  color: string;
  icon: IconType;
  handle: string;
};

export const socials: SocialItem[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/TODO-laura-tagliari",
    color: "#E4405F",
    icon: FaInstagram,
    handle: "TODO: Instagram da Laura",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/TODO-laura-tagliari",
    color: "#0A66C2",
    icon: FaLinkedinIn,
    handle: "TODO: LinkedIn da Laura",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Laura%21%20Quero%20solicitar%20meu%20slide.",
    color: "#25D366",
    icon: FaWhatsapp,
    handle: "TODO: WhatsApp da Laura",
  },
  {
    id: "behance",
    label: "Behance",
    href: "https://behance.net/TODO-laura-tagliari",
    color: "#1769FF",
    icon: FaBehance,
    handle: "TODO: Behance da Laura",
  },
  {
    id: "pinterest",
    label: "Pinterest",
    href: "https://pinterest.com/TODO-laura-tagliari",
    color: "#E60023",
    icon: FaPinterestP,
    handle: "TODO: Pinterest da Laura",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@TODO-laura-tagliari",
    color: "#FF0000",
    icon: FaYoutube,
    handle: "TODO: YouTube da Laura",
  },
  {
    id: "email",
    label: "E-mail",
    href: "mailto:TODO-email-da-laura@example.com?subject=Solicitar%20meu%20slide&body=Ol%C3%A1%2C%20Laura%21%20Quero%20solicitar%20meu%20slide.",
    color: "#2563EB",
    icon: LuMail,
    handle: "TODO: e-mail da Laura",
  },
];

export const primarySocials = socials.filter((social) =>
  ["instagram", "linkedin", "whatsapp", "email"].includes(social.id)
);
