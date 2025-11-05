"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollHandler() {
  const searchParams = useSearchParams();
  const scrollParam = searchParams.get("scroll");

  useEffect(() => {
    if (scrollParam) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollParam);
        if (!element) return;
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [scrollParam]);

  return null;
}
