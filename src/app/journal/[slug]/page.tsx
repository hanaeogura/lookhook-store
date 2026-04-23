import { notFound } from "next/navigation";

import { Container } from "@/components/Container";

const posts = [
  {
    slug: "materials-and-colors",
    title: "素材と色の選び方",
    date: "2026-04-23",
    body: [
      "素材や色は、手触り・光の反射・季節感を軸に選んでいます。",
      "写真と実物の差が出やすい色は、FAQにも補足を置きます。",
    ],
  },
  {
    slug: "made-to-order-flow",
    title: "受注制作の流れについて",
    date: "2026-04-23",
    body: [
      "受注制作は色などの選択肢を商品オプションとして用意します。",
      "納期の目安や注意点は、購入前に必ずご確認ください。",
    ],
  },
] as const;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.26em] text-[var(--color-muted)]">
              JOURNAL
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">{post.date}</p>
          </div>
          <article className="space-y-6 md:col-span-8">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {post.title}
            </h1>
            <div className="space-y-4 text-sm leading-8 text-[var(--color-muted)]">
              {post.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}

