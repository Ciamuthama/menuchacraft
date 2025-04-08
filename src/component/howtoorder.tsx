"use client"
import React from 'react'
import { Didact_Gothic,Domine } from "next/font/google";
import {ClipboardDocumentCheckIcon,ShoppingCartIcon,CalculatorIcon,ChatBubbleOvalLeftEllipsisIcon,ArrowRightIcon} from '@heroicons/react/24/solid'

const inter = Didact_Gothic({ weight: "400", subsets: ["latin"] });
const arapey = Domine({
  weight: "400",
  subsets: ["latin"],
});


export default function HowTo() {
  return (
    <div className="mt-10 animate-fade-down animate-once animate-delay-[500ms] " >
    <h3 className={`${arapey.className} lg:text-3xl text-2xl text-center`} id='howto'>How to Place your order</h3>
    <ul className="flex lg:flex-row flex-col items-center justify-center gap-1 mt-5">
      <li className={`${inter.className} text-base text-background items-center flex gap-2 p-5 bg-foreground rounded-full`}><ShoppingCartIcon className='size-5 text-background'/> <span>Pick a product</span></li>
      <ArrowRightIcon className='size-5 lg:rotate-0 rotate-90'/>
      <li className={`${inter.className} text-base text-background items-center flex gap-2 p-5 bg-foreground rounded-full`}><CalculatorIcon className='size-5'/>  <span>Select the Quantity</span></li>
      <ArrowRightIcon className='size-5 lg:rotate-0 rotate-90'/>
      <li className={`${inter.className} text-base text-background items-center flex gap-2 p-5 bg-foreground rounded-full`}><ClipboardDocumentCheckIcon className='size-5'/>  <span>Checkout by filling in your details</span></li>
      <ArrowRightIcon className='size-5 lg:rotate-0 rotate-90'/>
      <li className={`${inter.className} text-base text-background items-center flex gap-2 p-5 bg-foreground rounded-full`}><ChatBubbleOvalLeftEllipsisIcon className='size-5'/>  <span>Continue the order on WhatsApp</span></li>
    </ul>
  </div>
  )
}
