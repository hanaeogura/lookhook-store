import { Container } from "@/components/Container";

const works = [
  {
    title: "Pop-up / 出店",
    meta: "2026",
    description: "出店情報やアーカイブを掲載します。",
  },
  {
    title: "Collaboration",
    meta: "2025",
    description: "コラボ作品や制作背景をまとめます。",
  },
] as const;

export default function WorksPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              WORKS
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Works
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              これまでのコラボ、出店、掲載の記録をまとめます。
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {works.map((w) => (
            <div
              key={w.title}
              className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-sm text-[var(--color-muted)]">{w.meta}</p>
              <p className="mt-2 text-base font-medium">{w.title}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

