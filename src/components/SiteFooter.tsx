import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-sm font-medium">Crochet Brand</p>
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            1点もの/受注制作を中心に、クロシェ作品を制作しています。
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Pages</p>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>
              <Link className="hover:text-[var(--color-text)]" href="/items">
                Items
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--color-text)]" href="/works">
                Works
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--color-text)]" href="/journal">
                Journal
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium">Contact</p>
          <p className="text-sm text-[var(--color-muted)]">
            コラボ/出店/取材などのご連絡は{" "}
            <Link
              href="/contact"
              className="font-medium text-[var(--color-text)] hover:opacity-80"
            >
              Contact
            </Link>
            へ。
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Crochet Brand</p>
          <p>Built on Vercel</p>
        </div>
      </div>
    </footer>
  );
}

