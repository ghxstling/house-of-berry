import React from "react";
import jacqueline from "../../../public/jackie.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="w-full lg:h-[60rem] relative">
      {/* Background Image */}
      <Image
        src={jacqueline}
        alt="Photo of Jacqueline"
        fill
        className="object-cover -z-10"
      />

      {/* Text Overlay */}
      <div className="lg:absolute lg:right-30 lg:top-20 text-center lg:w-[36rem] lg:space-y-4">
        <h1 className="lg:text-8xl text-gray-800 font-script">About Us</h1>
        <div className="lg:text-lg text-gray-900 lg:space-y-4">
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
        <Button className="bg-hob-pink text-black rounded-xl lg:px-6 cursor-pointer hover:bg-[#F6CBD7] shadow-lg mt-4 tracking-wide">
          <Link
            href="https://www.instagram.com/houseofberrynz/"
            className="text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            FIND OUR NEXT STALL
          </Link>
        </Button>
      </div>
    </section>
  );
}
