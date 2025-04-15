"use client";

import Link from "next/link";
import React from "react";
import { Domine } from "next/font/google";


const arapey = Domine({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="mt-14" id="footer">
      <div className="flex lg:mx-[15rem] mx-3 justify-between items-center">
        <Link href="#home" className="flex items-center">
          <img title="logo" src="/logo2.png" className="lg:h-[5rem] h-[3.5rem]"/>
        </Link>
        <div>
          <ul className="flex flex-col lg:gap-4 gap-2">
            <li>
              <Link href="/" className={`${arapey.className}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#books" className={`${arapey.className}`}>
                Books
              </Link>
            </li>
            <li>
              <Link href="#howto" className={`${arapey.className}`}>
                How to Order
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col  lg:gap-4 gap-2">
            <li>
              <Link
                href="https://www.instagram.com/menuchacrafts/"
                target="_blank"
                className={`${arapey.className}`}
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@esthernjerim"
                target="_blank"
                className={`${arapey.className}`}
              >
                Tiktok
              </Link>
            </li>
            <li>
              <Link href="https://bit.ly/3PtBc2B" target="_blank"  className={`${arapey.className}`}>
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer lg:h-[70vh] md:h-[40vh] h-[20vh]"></div>
    </div>
  );
}
