"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This product was replaced by the PDF catalogue. Client-side redirect keeps this
// compatible with static export (server redirect() is not allowed with output: export).
export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/products");
  }, [router]);
  return null;
}
