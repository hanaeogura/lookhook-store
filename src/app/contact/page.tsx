import { Container } from "@/components/Container";

export default function ContactPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              CONTACT
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Contact
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
              コラボ/出店/取材などのご連絡、作品に関するお問い合わせはこちらから。
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-medium">メール</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                例: hello@example.com
              </p>
              <p className="mt-6 text-xs leading-6 text-[var(--color-muted)]">
                フォーム送信を追加する場合は、Vercelの環境変数 + サーバーアクション（メール送信）で実装できます。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

