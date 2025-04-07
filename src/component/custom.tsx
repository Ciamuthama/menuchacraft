"use client"
import React from 'react'
import { Didact_Gothic,Domine } from "next/font/google";

const inter = Didact_Gothic({ weight: "400", subsets: ["latin"] });
const arapey = Domine({
  weight: "400",
  subsets: ["latin"],
});
export default function Custom() {
  return (
    <div className='lg:h-[25rem] lg:w-[70%] w-[90%] overflow-hidden rounded-xl mx-auto mt-20 relative'>
        <img title='custom' src='/custom.jpg' alt='custom' className='mx-auto' />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-foreground/60 flex items-center justify-center flex-col'>
            <h2 className={`${arapey.className} lg:text-5xl text-2xl text-background `}>Need a different design?</h2>
            <h4 className={`text-center lg:text-lg text-base ${inter.className} text-background`}>Own your book with your custom design</h4>

        </div>
    </div>
  )
}
