import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "@/components/Image";
import { journalPosts, getJournalPost } from "@/lib/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  const title = `${post.title} — SUNDUS Journal`;
  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      type: "article",
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const more = journalPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-28 md:pt-36">
      <div className="mx-auto max-w-[760px] px-6 md:px-10">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink"
        >
          ← Back to Journal
        </Link>

        <div className="mt-8 text-[11px] uppercase tracking-[0.2em] text-muted">
          {post.tag}
        </div>
        <h1 className="mt-2 font-serif text-4xl leading-[1.1] md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 h-px w-10 bg-ink/40" />

        <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>

        <div className="mt-10 space-y-5">
          {post.content.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      </div>

      {more.length > 0 && (
        <section className="mt-24 border-t border-line">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
            <h2 className="font-serif text-2xl md:text-3xl">More from the Journal</h2>
            <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-3">
              {more.map((p) => (
                <Link key={p.slug} href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 text-[11px] uppercase tracking-[0.15em] text-muted">
                    {p.tag}
                  </div>
                  <h3 className="mt-2 font-serif text-xl">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
