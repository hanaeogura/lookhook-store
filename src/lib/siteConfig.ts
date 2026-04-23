import { getPublicSiteUrl } from "@/lib/publicSiteUrl";

export const siteConfig = {
  name: "lookhook",
  description: "lookhookのブランドサイト。作品の世界観と、BASEのオンラインストア（購入）をつなぎます。",
  siteUrl: getPublicSiteUrl(),
  baseShopUrl:
    process.env.NEXT_PUBLIC_BASE_SHOP_URL ?? "https://lookhook.official.ec/",
} as const;

