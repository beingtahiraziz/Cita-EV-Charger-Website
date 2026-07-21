import { use } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industries } from "@/data/industries";
import { IndustryDetail } from "@/components/industries/IndustryDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industries | CITA EV Chargers Pakistan" };
  return { title: `${industry.title} EV Charging | CITA EV Chargers Pakistan`, description: industry.short };
}

export default function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryDetail industry={industry} />;
}
