export type ItemType = "oneOfAKind" | "madeToOrder";

export type ItemOption = {
  name: string;
  values: string[];
};

export type Item = {
  slug: string;
  title: string;
  type: ItemType;
  priceJpy: number;
  summary: string;
  baseProductUrl?: string;
  options?: ItemOption[];
  tags?: string[];
  soldOut?: boolean;
};

export const items: Item[] = [
  {
    slug: "lace-bag-01",
    title: "Lace bag 01",
    type: "oneOfAKind",
    priceJpy: 22000,
    summary: "細い糸で編んだ、軽さのあるレースバッグ。",
    soldOut: false,
    tags: ["bag", "lace"],
  },
  {
    slug: "mohair-scarf-mto",
    title: "Mohair scarf (made-to-order)",
    type: "madeToOrder",
    priceJpy: 18000,
    summary: "モヘアの光沢と空気感。色はオプションから選択。",
    options: [{ name: "Color", values: ["Ivory", "Charcoal", "Rust"] }],
    soldOut: false,
    tags: ["scarf", "mto"],
  },
];

export function getItem(slug: string) {
  return items.find((i) => i.slug === slug) ?? null;
}

