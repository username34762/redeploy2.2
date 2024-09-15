"use client"
import Image from "next/image";
import React from 'react';
import { dataBrands } from "./SliderBrands.data";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export function SliderBrands() {
  
  
  return (
    <div className="w-full flex justify-center mt-2">
    <Carousel className="w-full max-w-3xl"
   opts={{
      loop: true,
    }}
    plugins={[
      Autoplay({
        delay:2500
      })
    ]}>
    <CarouselContent>
    {dataBrands.map(({ url }) => (
        <CarouselItem key={url} className="md:basis-1/4 lg:basis-1/3">
          <div className="p-1">
           <Link href="/places">
              <Image 
    src={`/images/brands/${url}`} 
    alt="Brand" 
    width={300} 
    height={250} className="rounded-xl object-cover aspect-[3/2] "
  />
              </Link>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden sm:flex md:flex justify-center items-center"/>
    <CarouselNext className="hidden sm:flex md:flex justify-center items-center"/>
  </Carousel>
  </div>
      
  )
}
