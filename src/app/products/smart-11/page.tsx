"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Smart 11 has been removed from the catalog. Client-side redirect keeps this
// compatible with static export (server redirect() is not allowed with output: export).
export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/products");
  }, [router]);
  return null;
}
