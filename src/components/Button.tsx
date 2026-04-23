import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-[var(--color-text)] text-[var(--color-bg)] hover:opacity-90 shadow-[var(--shadow-soft)]",
  outline:
    "border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[color-mix(in_oklab,var(--color-surface),var(--color-bg)_25%)]",
  ghost: "text-[var(--color-muted)] hover:text-[var(--color-text)]",
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

