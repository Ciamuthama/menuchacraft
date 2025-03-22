"use client";

import Hero from "@/component/hero";
import Products from "@/component/products";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Products/>
    </div>
  );
}
