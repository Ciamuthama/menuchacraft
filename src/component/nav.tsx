/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { Domine } from "next/font/google";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

const arapey = Domine({
  weight: "400",
  subsets: ["latin"],
});

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div className="sticky top-0 w-full bg-background z-100 px-1 py-2">
      <div className="flex items-center lg:justify-around lg:w-[60%] w-full mx-auto">
       <Link href={"/"}> <img
          title="logo"
          src="/logo2.png"
          className="lg:h-12 md:h-12 h-10 float-left"
        /></Link>

        <ul className="lg:flex md:flex hidden justify-center items-center lg:gap-10 gap-5 mx-auto w-full text-nowrap">
          <li>
            <Link
              href="#"
              className={`${arapey.className} lg:text-base text-[13px] hover:border-b-2 hover:border-foreground`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${arapey.className} lg:text-base text-[13px] hover:border-b-2 hover:border-foreground`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${arapey.className} lg:text-base text-[13px] hover:border-b-2 hover:border-foreground`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${arapey.className} lg:text-base text-[13px] hover:border-b-2 hover:border-foreground`}
            >
              How to order
            </Link>
          </li>
        </ul>

        <button
          title="menu"
          className="lg:hidden md:hidden w-full"
          onClick={handleMenuToggle}
        >
          {open ? (
            <XCircleIcon className="size-7 text-foreground float-right" />
          ) : (
            <Bars3Icon className="size-7 text-foreground float-right" />
          )}
        </button>
      </div>

    
      {open && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-5 text-foreground"
            onClick={handleMenuClose}
          >
            <XCircleIcon className="h-8 w-8" />
          </button>
          <ul className="flex flex-col gap-5 text-center">
            <li>
              <Link
                href="#"
                className={`${arapey.className} text-lg hover:border-b-2 hover:border-foreground`}
                onClick={handleMenuClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${arapey.className} text-lg hover:border-b-2 hover:border-foreground`}
                onClick={handleMenuClose}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${arapey.className} text-lg hover:border-b-2 hover:border-foreground`}
                onClick={handleMenuClose}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${arapey.className} text-lg hover:border-b-2 hover:border-foreground`}
                onClick={handleMenuClose}
              >
                How to order
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
