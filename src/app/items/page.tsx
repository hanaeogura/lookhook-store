import Link from "next/link";

import { Container } from "@/components/Container";
import { items } from "@/lib/items";
import { siteConfig } from "@/lib/siteConfig";

function yen(amount: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ItemsPage() {
  const hasBase = Boolean(siteConfig.baseShopUrl);

  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              ONLINE_STORE
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Items
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              購入はBASEで決済します。{hasBase ? "ショップへも移動できます。" : ""}
            </p>
            {hasBase ? (
              <p className="mt-3 text-sm">
                <a
                  className="font-medium hover:opacity-80"
                  href={siteConfig.baseShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BASEショップを開く →
                </a>
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/items/${item.slug}`}
              className="group rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.type === "oneOfAKind" ? "One-of-a-kind" : "Made-to-order"}
                    {item.soldOut ? " / SOLD" : ""}
                  </p>
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {item.summary}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-medium">{yen(item.priceJpy)}</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)] group-hover:text-[var(--color-text)]">
                    Details →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}

