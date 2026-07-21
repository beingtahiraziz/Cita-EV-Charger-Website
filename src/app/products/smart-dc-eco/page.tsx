import type { Metadata } from "next";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProductBySlug } from "@/data/products";

const product = getProductBySlug("smart-dc-eco")!;

export const metadata: Metadata = {
  title: `${product.name} | CITA EV Chargers Pakistan`,
  description: product.heroSubheadline,
};

export default function Page() {
  return <ProductDetail product={product} />;
}
