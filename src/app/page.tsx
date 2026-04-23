import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { items } from "@/lib/items";

function yen(amount: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Home() {
  return (
    <main className="pb-24">
      <section className="border-b border-[var(--color-border)]">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-12 md:items-end md:py-24">
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
                ONE_OF_A_KIND / MADE_TO_ORDER
              </p>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                Mode, yet made by hand.
              </h1>
            </div>
            <div className="space-y-6 md:col-span-5">
              <p className="text-pretty text-base leading-8 text-[var(--color-muted)]">
                1点ものと受注制作を中心に、クロシェ作品を制作しています。素材と色の“静かな主張”が、
                日常の輪郭を少しだけ変えるように。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/items" variant="solid">
                  Items
                </Button>
                <Button href="/works" variant="outline">
                  Works
                </Button>
              </div>
            </div>
          </div>
        </Container>
        <div className="h-[34vh] w-full bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-accent),transparent_80%),transparent_52%),linear-gradient(135deg,color-mix(in_oklab,var(--color-text),transparent_92%),transparent_30%)]" />
      </section>

      <Container>
        <section className="mt-10 border-b border-[var(--color-border)] pb-12 md:mt-14 md:pb-16">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
                FEATURED
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                Featured items
              </h2>
            </div>
            <div className="md:col-span-6 md:flex md:justify-end">
              <Button href="/items" variant="outline">
                すべて見る
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
            {items.slice(0, 3).map((item) => (
              <a
                key={item.slug}
                href={`/items/${item.slug}`}
                className="group rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[calc(var(--radius)-6px)] border border-[var(--color-border)] bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-accent),transparent_85%),transparent_55%)]" />
                <p className="mt-5 text-xs tracking-[0.22em] text-[var(--color-muted)]">
                  {item.type === "oneOfAKind" ? "ONE_OF_A_KIND" : "MADE_TO_ORDER"}
                </p>
                <p className="mt-2 text-base font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {yen(item.priceJpy)}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.summary}
                </p>
                <p className="mt-4 text-sm text-[var(--color-muted)] group-hover:text-[var(--color-text)]">
                  Details →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-medium">Shop notes</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              在庫は基本1点。受注制作は色などの選択肢を用意し、決済まで一気に完了できます（BASE）。
            </p>
          </div>
          <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
            {[
              {
                title: "One-of-a-kind",
                desc: "在庫は基本1点。SOLD後は再入荷通知を受付。",
              },
              {
                title: "Made-to-order",
                desc: "色選択などは商品オプションとして用意（受注制作）。",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]"
              >
                <p className="text-sm font-medium">{card.title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-medium">Journal</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              制作の記録・新作のお知らせ。最初は少数でも、継続できる形に。
            </p>
            <div className="mt-6">
              <Button href="/journal" variant="ghost" className="px-0">
                記事一覧へ →
              </Button>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "素材と色の選び方", meta: "2026.04" },
                { title: "受注制作の流れについて", meta: "2026.04" },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]"
                >
                  <p className="text-sm text-[var(--color-muted)]">{p.meta}</p>
                  <p className="mt-2 text-base font-medium">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
