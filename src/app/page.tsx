"use client";

import Custom from "@/component/custom";
import Hero from "@/component/hero";
import HowTo from "@/component/howtoorder";
import Products from "@/component/products";

export default function Home() {
  return (
    <div className="overflow-hidden my-5">
      <Hero />
      <Products/>
      <HowTo/>
      <Custom/>
    </div>
  );
}
