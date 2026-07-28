import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import Hero from "@/components/Hero";
import { journalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — SUNDUS",
  description: "Notes on material, craft, and design from SUNDUS.",
};

export default function JournalPage() {
  return (
    <>
      <Hero
        image="/images/craft/hands-clipping-tool.jpg"
        eyebrow="Notes from the Studio"
        title="JOURNAL"
        subtitle="Material, craft, and design."
        height="h-[50vh]"
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {journalPosts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.15em] text-muted">
                {post.tag}
              </div>
              <h3 className="mt-2 font-serif text-xl">{post.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
