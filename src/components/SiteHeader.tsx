import Link from "next/link";

import { Wordmark } from "@/components/Wordmark";

const nav = [
  { href: "/about", label: "About" },
  { href: "/items", label: "Items" },
  { href: "/patterns", label: "Patterns" },
  { href: "/works", label: "Works" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg),transparent_10%)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)] hover:bg-[color-mix(in_oklab,var(--color-surface),var(--color-bg)_35%)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/items"
            className="rounded-full bg-[var(--color-text)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            Shop
          </Link>
        </div>
      </div>
    </header>
  );
}

