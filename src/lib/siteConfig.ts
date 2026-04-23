export const siteConfig = {
  name: "Crochet Brand",
  description: "クロシェ作品のブランドサイト兼オンラインストア。",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  baseShopUrl: process.env.NEXT_PUBLIC_BASE_SHOP_URL ?? "",
} as const;

