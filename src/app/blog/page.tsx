// src/app/blog/page.tsx
import type { Metadata } from 'next';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
  title: 'Blog – fesblogg',
};

export default function BlogPage() {
  return <BlogListClient />;
}
