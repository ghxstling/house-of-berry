"use client";
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

import Image from 'next/image'

export default function AvatarCard() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">

      <CarouselContent>

        <CarouselItem className="basis-1/3">
          <div className="p-4 bg-gray-100 rounded-lg text-center"><Image src="/Images/dylan1.png" width={130} height={150} alt="dylan" />the real dylan</div>
        </CarouselItem>

        <CarouselItem className="basis-1/3">
          <div className="p-4 bg-gray-100 rounded-lg text-center"><Image src="/Images/dylan2.png" width={130} height={150} alt="ryan" />fake dylan</div>
        </CarouselItem>

        <CarouselItem className="basis-1/3">
          <div className="p-4 bg-gray-100 rounded-lg text-center"> <Image src="/Images/ryan.png" width={130} height={150} alt="ryan" />Based Ryan </div>
        </CarouselItem>

        <CarouselItem className="basis-1/3">
          <div className="p-4 bg-gray-100 rounded-lg text-center"><Image src="/Images/shrek.png" width={130} height={150} alt="Shrek" />shrek is love shrek is life </div>
        </CarouselItem>

        <CarouselItem className="basis-1/3">
          <div className="p-4 bg-gray-100 rounded-lg text-center"><Image src="/Images/will.png" width={130} height={150} alt="will" />i cant find photos of will </div>
        </CarouselItem>

        <CarouselItem className="basis-1/3">
          <div className="p-4 bg-gray-100 rounded-lg text-center"><Image src="/Images/Amy.png" width={130} height={150} alt="amy" />amys serious linkedin</div>
        </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
