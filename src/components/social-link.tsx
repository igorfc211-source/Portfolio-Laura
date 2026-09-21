import type { SocialItem } from "@/src/lib/data/social";

export function SocialLink({
  social,
  showLabel = false,
  variant = "light",
}: {
  social: SocialItem;
  showLabel?: boolean;
  variant?: "light" | "dark";
}) {
  const Icon = social.icon;
  const isDark = variant === "dark";

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${social.label} de Laura Tagliari`}
      className={`group inline-flex items-center gap-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isDark
          ? "text-[#F5EEE8] focus-visible:ring-[#E8D8C8] focus-visible:ring-offset-[#21140F]"
          : "text-[#3A2118] focus-visible:ring-[#7A4A38] focus-visible:ring-offset-[#F5EEE8]"
      } ${showLabel ? "pr-4" : ""}`}
      style={{ ["--brand-color" as string]: social.color }}
    >
      <span
        className="grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 group-hover:border-[var(--brand-color)] group-hover:bg-[var(--brand-color)] group-hover:text-[#F5EEE8] group-hover:shadow-lg"
        style={{
          color: social.color,
          backgroundColor: `${social.color}18`,
          borderColor: `${social.color}22`,
        }}
      >
        <Icon className="h-4 w-4 transition-colors duration-300 group-hover:text-white" />
      </span>
      {showLabel && <span>{social.label}</span>}
    </a>
  );
}
