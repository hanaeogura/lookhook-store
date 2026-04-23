import { Container } from "@/components/Container";

export default function AboutPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              ABOUT
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              About
            </h1>
          </div>
          <div className="space-y-6 text-sm leading-8 text-[var(--color-muted)] md:col-span-7">
            <p>
              クロシェで、日常に溶けるモード感を。糸の表情と色の奥行きを大切に、静かな強さのある佇まいを目指しています。
            </p>
            <p>
              作品は1点ものと受注制作が中心。受注制作では、色などの選択肢を商品オプションとして用意します。
            </p>
            <p>
              お手入れ方法や素材についてはFAQにまとめています。ご不明点はContactからお気軽にどうぞ。
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

