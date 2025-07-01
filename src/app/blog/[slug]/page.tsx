import posts from "@/data/posts.json";
import type { Post } from "@/type";
import Image from "next/image";
import { notFound } from "next/navigation";

// For static generation of all paths
export async function generateStaticParams() {
  return (posts as Post[]).map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = (posts as Post[]).find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={450}
        className="rounded-xl"
      />
      <p className="text-zinc-600">{post.description}</p>

      
      <p className="text-lg leading-7">
        (Write or import your full article content here…)
      </p>
    </article>
  );
}

