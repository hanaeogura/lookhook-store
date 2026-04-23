import { notFound } from "next/navigation";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { getItem, items } from "@/lib/items";
import { siteConfig } from "@/lib/siteConfig";

function yen(amount: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }));
}

export default function ItemDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getItem(params.slug);
  if (!item) return notFound();

  const baseUrl = item.baseProductUrl || siteConfig.baseShopUrl;

  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
              <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-accent),transparent_82%),transparent_52%),linear-gradient(135deg,color-mix(in_oklab,var(--color-text),transparent_92%),transparent_30%)]" />
            </div>
            <div className="mt-8 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>
                写真/詳細情報は後から差し替えできます（BASEの既存商品情報から転記してもOK）。
              </p>
              {item.type === "madeToOrder" ? (
                <p>
                  受注制作は、BASEの「商品オプション」を想定しています（色など）。
                </p>
              ) : null}
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              {item.type === "oneOfAKind" ? "ONE_OF_A_KIND" : "MADE_TO_ORDER"}
            </p>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              {item.title}
            </h1>
            <p className="mt-3 text-base text-[var(--color-muted)]">
              {yen(item.priceJpy)}
              {item.soldOut ? " / SOLD" : ""}
            </p>

            <p className="mt-8 text-sm leading-7 text-[var(--color-muted)]">
              {item.summary}
            </p>

            {item.options?.length ? (
              <div className="mt-10 space-y-6">
                {item.options.map((opt) => (
                  <div key={opt.name} className="space-y-3">
                    <p className="text-sm font-medium">{opt.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.map((v) => (
                        <span
                          key={v}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-muted)]"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs leading-6 text-[var(--color-muted)]">
                      選択は購入時（BASE）に行います。
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button href="/items" variant="outline">
                一覧へ戻る
              </Button>
              {baseUrl ? (
                <a
                  href={baseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
                >
                  BASEで購入 →
                </a>
              ) : (
                <span className="text-sm text-[var(--color-muted)]">
                  `NEXT_PUBLIC_BASE_SHOP_URL` を設定すると購入導線が有効になります。
                </span>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

