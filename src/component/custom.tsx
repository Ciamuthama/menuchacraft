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
    <div className='lg:h-[30rem]  w-[90%] overflow-hidden rounded-xl mx-auto mt-20 relative animate-fade-down animate-once animate-delay-[500ms] '>
        <img title='custom' src='/custom.jpg' alt='custom' className='mx-auto w-full' />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-foreground/60 flex items-center justify-center flex-col'>
            <h2 className={`${arapey.className} lg:text-3xl text-[12px] text-background text-center w-[60%] mx-auto`}>&quot;The Lord is my Shepherd my peace, my guide, my protector. Even in the darkest valleys, His light leads me. His love and mercy are my forever companions.&quot;</h2>
            <h4 className={`text-center lg:text-base text-[10px] ${inter.className} text-background !italic`}>~ Psalms 23 ~</h4>

        </div>
    </div>
  )
}
