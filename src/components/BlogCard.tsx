'use client'; 
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/type";
// import finance1 from '../../assets/finance1.png'
// import finance2 from '../../assets/finance2.png'

export default function BlogCard({ post }: { post: Post }) {
    console.log(post, "post")
    const {image} = post;
  return (
    <article className="rounded-2xl shadow hover:shadow-lg transition p-4 bg-white dark:bg-zinc-900">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={image}
          alt={post.title}
          width={600}
          height={350}
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-sm text-zinc-500 mb-3">{post.description}</p>

        <ul className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <li
              key={t}
              className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700"
            >
              {t}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
