/* eslint-disable @next/next/no-img-element */
"use client";
import { Domine, Didact_Gothic } from "next/font/google";

import React from "react";
import StackedCards from "./heroimg";

const arapey = Domine({
  weight: "400",
  subsets: ["latin"],
});

const inter = Didact_Gothic({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <div id="home" className="mt-5 animate-fade-down animate-once animate-delay-[500ms]">
      <div className="flex flex-col lg:gap-5 md:gap-3 gap-1.5" id="home">
        <h4 className={`${inter.className} text-base text-center font-normal`} >
          Christian stationery & gifts
        </h4>
        <h2 className={`${arapey.className}  text-center lg:text-7xl md:text-5xl text-3xl`}>
          Menucha Crafts
        </h2>
        <p
          className={`${inter.className} text-base text-center font-normal text-[#696969]`}
        >
          Inspired by Psalm 23
        </p>
      </div>
      <StackedCards />
    </div>
  );
}
