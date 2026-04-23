export type CmsProvider = "local" | "microcms";

export const cmsProvider: CmsProvider =
  (process.env.NEXT_PUBLIC_CMS_PROVIDER as CmsProvider) ?? "local";

export const cmsNotes = {
  local:
    "MVPはローカルデータで運用。更新頻度が上がったらCMSへ切り替え。",
  microcms:
    "microCMSを想定（日本語運用しやすい）。スキーマ: journal/works/faq。",
} as const;

