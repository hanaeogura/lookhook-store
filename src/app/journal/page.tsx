import Link from "next/link";

import { Container } from "@/components/Container";

const posts = [
  { slug: "materials-and-colors", title: "素材と色の選び方", date: "2026-04-23" },
  { slug: "made-to-order-flow", title: "受注制作の流れについて", date: "2026-04-23" },
] as const;

export default function JournalPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              JOURNAL
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Journal
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              制作の記録、新作のお知らせ、受注制作の案内などを掲載します。
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/journal/${p.slug}`}
              className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-[var(--color-muted)]">{p.date}</p>
                  <p className="mt-2 text-base font-medium">{p.title}</p>
                </div>
                <p className="text-sm text-[var(--color-muted)]">Read →</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}

