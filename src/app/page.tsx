import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const heroCollage = [
  [
    {
      src: "/homepage/1.png",
      alt: "Lots of Love Matcha",
    },
    {
      src: "/homepage/2.png",
      alt: "House of Berry Market Stand",
    },
    {
      src: "/homepage/3.png",
      alt: "Love you so Matcha",
    },
    {
      src: "/homepage/4.png",
      alt: "Pouring whisked matcha into cup",
    },
  ],
  [
    {
      src: "/homepage/8.png",
      alt: "House of Berry setup",
    },
    {
      src: "/homepage/7.png",
      alt: "Whisked just for you, matcha bar on the go",
    },
    {
      src: "/homepage/6.png",
      alt: "Whisking matcha at home",
    },
    {
      src: "/homepage/5.png",
      alt: "Serving matcha and coffee with love",
    },
  ],
];

const berryDiffBoxes = [
  {
    title: "Premium Matcha, Always",
    description:
      "We only serve the best! Ceremonial grade matcha that is smooth, vibrant, and whisked fresh for every cup.",
  },
  {
    title: "Flavours you won't forget",
    description:
      "We go beyond basic! From strawberry to banana bread. Our drinks are fun, refreshing, and creative.",
  },
  {
    title: "More than just a drink",
    description:
      "We want to deliver an experience, that you love and we love, whisked to perfection right before your eyes.",
  },
  {
    title: "A Matcha Cart like no other",
    description:
      "We're mobile, magical, and full of flavour! We bring bold sips and good vibes to markets and events near you.",
  },
];

export default function HomePage() {
  return (
    <section className="flex flex-col w-full h-full">
      <div className="-z-10">
        <div className="flex w-full h-90 justify-center">
          {heroCollage[0].map((img, _) => {
            return (
              <img
                key={_}
                src={img.src}
                alt={img.alt}
                className="object-cover"
              />
            );
          })}
        </div>
        <div className="flex w-full h-90 justify-center">
          {heroCollage[1].map((img, _) => {
            return (
              <img
                key={_}
                src={img.src}
                alt={img.alt}
                className="object-cover"
              />
            );
          })}
        </div>
      </div>

      <div className="text-center py-12 leading-tight space-y-4 w-2xl justify-center mx-auto font-semibold text-xl">
        <div className="text-[2.5rem] text-hob-darkgray text-center leading-tight">
          <p>
            Serving
            <span className="text-hob-matcha font-script font-medium text-[3rem]">
              {" Matcha "}
            </span>
            and
            <span className="text-[#77380C] font-script font-medium text-[3rem]">
              {" Coffee "}
            </span>
            with Love, and on the go.
          </p>
        </div>

        <p className="italic">
          House of Berry isn&apos;t just about coffee or matcha. It&apos;s about
          turning everyday moments into something special—one sip at a time.
        </p>
        <Button className="bg-hob-pink text-black rounded-xl px-6 cursor-pointer hover:bg-[#F6CBD7] hover:shadow-md mt-4 tracking-wide">
          <Link href="/offerings" className="text-lg">
            Offerings
          </Link>
        </Button>
      </div>

      <div className="bg-[#FFEFFB] text-center gap-4 py-12">
        <h1 className="text-hob-darkgray text-6xl font-script">
          The Berry Difference
        </h1>

        <p className="text-hob-darkgray pt-4">
          Matcha made fun, flavour made bold, and moments <br />
          made memorable. We&apos;re not just whisking drinks - we&apos;re
          <br />
          shaking up expectations. Here&apos;s what makes us different...
        </p>
        <div className="flex justify-center gap-6 mt-8">
          {berryDiffBoxes.map((box, _) => {
            return (
              <div
                key={_}
                className="size-72 flex flex-col items-center justify-between bg-white rounded-md p-4 shadow-lg"
              >
                <div className="size-40 bg-[#F5F5F5] rounded-md" />
                <h1 className="text-hob-matcha text-base font-semibold">
                  {box.title}
                </h1>

                <p className="text-hob-darkgray text-center text-sm">
                  {box.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* TODO: use high-res images */}
      <div className="grid text-left px-20 py-30 gap-6 w-[115rem] mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-112 justify-center mx-auto">
            <h1 className="font-modern-serif text-hob-matcha text-3xl font-bold mb-4">
              What is Matcha?
            </h1>
            Matcha is a finely ground powder made from specially grown and
            processed green tea leaves. Unlike regular tea where you steep and
            discard the leaves, with matcha you consume the entire leaf,
            maximizing its nutritional benefits and delivering a unique, rich
            flavor experience.
          </div>
          <img src="/matcha/1.png" alt="Matcha 1" />
        </div>
        <div className="flex items-center justify-between">
          <img src="/matcha/2.png" alt="Matcha 2" />
          <div className="w-112 justify-center mx-auto  text-right">
            <h1 className="font-modern-serif text-hob-matcha text-3xl font-bold mb-4">
              Our Commitment to Quality
            </h1>
            We use ceremonial grade matcha. which is the highest quality
            available, made from the youngest tea leaves with stems and veins
            removed. This creates a smoother, naturally sweeter flavor without
            bitterness. It&apos;s traditionally used in Japanese tea ceremonies
            and offers the most vibrant colour and delicate taste experience.
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-112 justify-center mx-auto">
            <h1 className="font-modern-serif text-hob-matcha text-3xl font-bold mb-4">
              Benefits in Every Sip
            </h1>
            Matcha is a green powerhouse. It is rich in antioxidants, packed
            with vitamins, and loaded with feel-good perks. It boosts energy
            (without the crash), supports focus, aids digestion, and helps you
            glow from the inside out
          </div>
          <img src="/matcha/3.png" alt="Matcha 3" />
        </div>
      </div>
    </section>
  );
}
