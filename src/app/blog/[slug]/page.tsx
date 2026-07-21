import { use } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, blogPosts } from "@/data/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog | CITA EV Chargers Pakistan" };
  return { title: `${post.title} | CITA EV Chargers Pakistan`, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getBlogBySlug(slug);
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
