import { FaLinkedinIn } from "react-icons/fa6";
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
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/laura-tagliari/",
    color: "#7A4A38",
    icon: FaLinkedinIn,
    handle: "laura-tagliari",
  },
  {
    id: "email",
    label: "E-mail",
    href: "mailto:tagliarilaura14@gmail.com",
    color: "#5A3427",
    icon: LuMail,
    handle: "tagliarilaura14@gmail.com",
  },
];

export const primarySocials = socials;
