"use client";

import Custom from "@/component/custom";
import Hero from "@/component/hero";
import HowTo from "@/component/howtoorder";
import Products from "@/component/products";
import { useState, useEffect } from "react";

export default function Home() {
   const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
  setTimeout(()=>{
    setLoading(true)
  }
  ,2000)
  }
  ,[])
    if(!loading){
      return <div className="absolute z-100 bg-background text-white top-0 bottom-0 w-screen loading"/>
    }
  
  return (
    <div className="overflow-hidden animate-fade-down animate-once animate-delay-[1000ms] ">
      <Hero />
      <Products/>
      <HowTo/>
      <Custom/>
    </div>
  );
}
