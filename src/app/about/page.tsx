import React from "react";
import jacqueline from "../../../public/jackie.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { sloopFont } from "@/css/fonts";

export default function About() {
  return (
    <section className="w-full h-[60rem] relative">
      {/* Background Image */}
      <Image
        src={jacqueline}
        alt="Photo of Jacqueline"
        fill
        className="object-cover -z-10"
      />

      {/* Text Overlay */}
      <div className="absolute right-30 top-20 text-center w-[36rem]">
        <h1 className={cn("text-8xl text-gray-800 mb-4", sloopFont.className)}>
          About Us
        </h1>
        <div className="text-lg text-gray-900 space-y-4">
          <p>A fun experience. An act of creativity. A moment of indulgence.</p>
          <p>
            House of Berry was born from a simple love: the daily ritual of
            matcha. But not just any matcha—matcha made fun, fresh, and
            unexpected. Wanting to break away from the ordinary, we set out to
            reimagine what a morning pick-me-up could be.
          </p>
          <p>
            Our drinks are designed to be as exciting as they are refreshing,
            from iced matcha whisked to perfection before your eyes to rich,
            smooth iced lattes crafted from bold flavours.
          </p>
          <p>
            House of Berry isn&apos;t just about coffee or matcha. It&apos;s
            about turning everyday moments into something special - one sip at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
