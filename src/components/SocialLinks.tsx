import React from "react";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import clsx from "clsx";

type Variant = "light" | "dark";
type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

interface SocialLinksProps {
  variant?: Variant;      // colores
  size?: Size;            // tamaño de icono
  className?: string;     // clases extra
  rounded?: boolean;      // iconos en círculo
}

const LINKS = [
  { name: "Instagram", href: "https://instagram.com/tucuenta", Icon: Instagram },
  { name: "Facebook",  href: "https://facebook.com/tucuenta",  Icon: Facebook  },
  { name: "LinkedIn",  href: "https://linkedin.com/company/tucuenta", Icon: Linkedin },
  { name: "X (Twitter)", href: "https://x.com/tucuenta", Icon: Twitter },
  { name: "YouTube",   href: "https://youtube.com/@tucuenta", Icon: Youtube },
  { name: "Email",     href: "mailto:hola@tudominio.com", Icon: Mail },
];

export function SocialLinks({
  variant = "light",
  size = "md",
  className,
  rounded = true,
}: SocialLinksProps) {
  const iconColor =
    variant === "light" ? "text-white" : "text-neutral-900";
  const ringColor =
    variant === "light" ? "ring-white/15 hover:ring-white/30" : "ring-neutral-900/20 hover:ring-neutral-900/40";
  const bgHover =
    variant === "light" ? "hover:bg-white hover:text-neutral-900" : "hover:bg-neutral-900 hover:text-white";
  const base =
    "inline-flex items-center justify-center transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400";

  return (
    <div className={clsx("flex items-center gap-2", className)}>
      {LINKS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={clsx(
            base,
            iconColor,
            ringColor,
            bgHover,
            rounded ? "rounded-full" : "rounded-md",
            "ring-1",
            // tamaño del botón
            size === "sm" ? "h-8 w-8" : size === "lg" ? "h-11 w-11" : "h-9 w-9",
          )}
        >
          <Icon className={sizeMap[size]} />
        </a>
      ))}
    </div>
  );
}
