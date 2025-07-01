'use client'; 
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">FES Blog Platform</h1>
        <p className="max-w-lg mx-auto text-black-800">
          Built with Next.js 15 App Router & Tailwind CSS
        </p>
        <Link
          href="/blog"
          className="inline-block bg-black text-white px-6 py-3 rounded-full"
        >
          Read the Blog →
        </Link>
      </div>
    </main>
  );
}
