import { Container } from "@/components/Container";

export default function PatternsPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              PATTERNS
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Patterns
            </h1>
          </div>
          <div className="space-y-6 text-sm leading-8 text-[var(--color-muted)] md:col-span-7">
            <p>
              将来的に編み図（デジタル）を販売するためのページです。まずは準備状況や、販売ポリシーを掲載していきます。
            </p>
            <p>
              販売開始後は、購入後にダウンロードできる形式（PDF等）を想定しています。EC基盤の変更（BASE→Shopifyなど）にも対応できるよう設計します。
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

