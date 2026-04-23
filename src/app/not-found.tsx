import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main className="py-20">
      <Container>
        <div className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-10 shadow-[var(--shadow-soft)]">
          <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
            NOT_FOUND
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight">
            ページが見つかりませんでした
          </h1>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            URLが変更されたか、削除された可能性があります。
          </p>
          <div className="mt-8">
            <Button href="/" variant="outline">
              トップへ戻る
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

