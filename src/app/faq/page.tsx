import { Container } from "@/components/Container";

const faqs = [
  {
    q: "発送は国内のみですか？",
    a: "スタート時点では国内のみを想定しています。海外発送は準備が整い次第ご案内します。",
  },
  {
    q: "受注制作の納期はどのくらいですか？",
    a: "作品/時期により異なります。商品ページ（またはFAQ）に目安を記載します。",
  },
  {
    q: "ギフトラッピングはできますか？",
    a: "ギフトラッピング用のオプション（または追加商品）で対応します。",
  },
] as const;

export default function FaqPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              FAQ
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              FAQ
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              発送、受注制作、返品などのよくある質問をまとめます。
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-sm font-medium">{f.q}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

