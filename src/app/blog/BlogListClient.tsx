'use client';

import postsData from '@/data/posts.json';
import type { Post } from '@/type';
import BlogCard from '@/components/BlogCard';
import { useState } from 'react';

export default function BlogListClient() {
  const posts = postsData as Post[];
  const [query, setQuery] = useState('');

  const filtered = posts.filter((p) =>
    p.tags.join(' ').toLowerCase().includes(query.toLowerCase())
  );
  console.log(filtered, "filtered")
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <input
        placeholder="Filter by tag..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        
        ))}
      </section>
    </main>
  );
}
