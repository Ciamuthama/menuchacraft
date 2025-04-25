"use client";

import React from "react";
import { Domine, Didact_Gothic } from "next/font/google";
import products from "@/data/book";
import Link from "next/link";
import { CldImage } from 'next-cloudinary';

const arapey = Domine({
  weight: "400",
  subsets: ["latin"],
});
const inter = Didact_Gothic({ weight: "400", subsets: ["latin"] });
export default function Products() {
  return (
    <div className="mt-20 lg:mb-20 md:mb-15 mb-10 animate-fade-down animate-once animate-delay-[1000ms]">
      <h2 className={`${arapey.className} text-center lg:text-4xl text-3xl`} id="books">
        Pause. Rest. Reflect!
      </h2>
      <h4 className={`text-center text-lg ${inter.className}`}>Our Products</h4>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10 lg:mx-[10rem] md:mx-[5rem] mx-auto justify-items-center">
        {products.map((product) => (
          <div key={product.id} className="shadow shadow-[#fceae1] rounded-2xl w-[20rem]">
            <Link href={`/product/${product.slug}`} title={product.name}>
            <div className="object-cover rounded-2xl w-[20rem] h-[25rem] relative">
              <CldImage
              src={product.image}
              alt={product.name}
              fill
              quality={'auto'}
               format="auto"
              className="object-cover rounded-2xl w-[20rem] h-[25rem] "
            />
            </div>
            <h3 className={` ${inter.className} px-5`}>{product.name}</h3>
            <h4 className={`${inter.className} px-5 !font-medium py-2`}>Ksh {product.price}/-</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
