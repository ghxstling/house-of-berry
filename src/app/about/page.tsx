import React from "react";
import jacqueline from "../../../public/jackie.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-[100vh] relative">
      {/* Background Image */}
      <Image 
        src={jacqueline}
        alt="bg-img-about-page"
        fill
        className="object-cover object-center"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className=" max-w-md text-center m-40">
          <h1 className="text-6xl font-bold text-gray-800 mb-16">About Us</h1>
          <div className="text-center">
            <p className="text-lg text-gray-900 mb-4">
              A fun experience. An act of creativity. A moment of indulgence.
            </p>
            
            <p className="text-lg text-gray-900 mb-4">
              House of Berry was born from a simple love: the daily ritual of matcha. But not just any matcha—matcha made fun, fresh, and unexpected. Wanting to break away from the ordinary, we set out to reimagine what a morning pick-me-up could be.
            </p>
            
            <p className="text-lg text-gray-900 mb-4">
              Our drinks are designed to be as exciting as they are refreshing, from iced matcha whisked to perfection before your eyes to rich, smooth iced lattes crafted from bold flavours.
            </p>
            
            <p className="text-lg text-gray-900">
              House of Berry isn't just about coffee or matcha. It's about turning everyday moments into something special - one sip at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
