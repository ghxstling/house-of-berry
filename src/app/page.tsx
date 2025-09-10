import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const heroCollage = [
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
    <section className="w-full">
      <div className="lg:max-w-[120rem] mx-auto lg:px-20">
        <div className="grid grid-cols-4">
          {heroCollage.map((img, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center lg:py-12 leading-tight space-y-4 lg:w-2xl justify-center mx-auto font-semibold lg:text-xl">
        <div className="lg:text-[2.5rem] text-hob-darkgray text-center leading-tight">
          <p>
            Serving
            <span className="text-hob-matcha font-script font-medium lg:text-[3rem]">
              {" Matcha "}
            </span>
            and
            <span className="text-[#77380C] font-script font-medium lg:text-[3rem]">
              {" Coffee "}
            </span>
            with Love, and on the go.
          </p>
        </div>

        <p className="italic">
          House of Berry isn&apos;t just about coffee or matcha. It&apos;s about
          turning everyday moments into something special—one sip at a time.
        </p>
        <Button className="bg-hob-pink text-black rounded-xl lg:px-6 cursor-pointer hover:bg-[#F6CBD7] hover:shadow-md mt-4 tracking-wide">
          <Link href="/offerings" className="text-lg">
            Offerings
          </Link>
        </Button>
      </div>

      <div className="bg-hob-lightpink text-center lg:gap-8 lg:py-12 grid">
        <h1 className="text-hob-darkgray lg:text-7xl font-modern-serif font-semibold tracking-tighter flex flex-row items-center justify-center gap-2">
          THE{" "}
          <span className="text-hob-pink font-script font-normal lg:text-[4rem] tracking-wide">
            Berry
          </span>{" "}
          DIFFERENCE
        </h1>
        <div className="text-hob-darkgray italic lg:w-[34rem] mx-auto">
          <p>
            Since 2025, we&apos;ve been on a mission to make matcha fun - bold
            in flavour, and whisked to perfection right in front of you.
            We&apos;re not just crafting drinks, we&apos;re shaking up
            expectations.
          </p>
          <p className="font-bold">Here&apos;s what makes us different...</p>
        </div>
        <div className="flex justify-center lg:gap-6">
          {berryDiffBoxes.map((box, _) => {
            return (
              <div
                key={_}
                className="lg:size-72 flex flex-col items-center justify-between bg-white rounded-md lg:p-4 shadow-lg"
              >
                <div className="lg:size-40 bg-[#F5F5F5] rounded-md" />
                <h1 className="text-hob-matcha lg:text-base font-semibold">
                  {box.title}
                </h1>

                <p className="text-hob-darkgray text-center lg:text-sm">
                  {box.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* TODO: use high-res images */}
      <div className="lg:py-8 flex flex-col gap-8 w-4/5 lg:max-w-screen-2xl mx-auto lg:px-12">
        <h1 className="col-span-2 font-modern-serif text-hob-pink lg:text-5xl font-bold text-center">
          MATCHA 101
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 mx-auto place-items-center">
          <div className="lg:w-112 justify-center mx-auto">
            <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
              WHAT IS{" "}
              <span className="text-hob-matcha font-script font-medium lg:text-[3rem]">
                Matcha?
              </span>
            </h1>
            Matcha is a finely ground powder made from specially grown and
            processed green tea leaves. Unlike regular tea where you steep and
            discard the leaves, with matcha you consume the entire leaf,
            maximizing its nutritional benefits and delivering a unique, rich
            flavor experience.
          </div>
          <img src="/matcha/1.png" alt="Matcha 1" className="size-full" />
          <img src="/matcha/2.png" alt="Matcha 2" className="size-full" />
          <div className="lg:w-112 justify-center mx-auto">
            <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
              Our Commitment to Quality
            </h1>
            We use ceremonial grade matcha. which is the highest quality
            available, made from the youngest tea leaves with stems and veins
            removed. This creates a smoother, naturally sweeter flavor without
            bitterness. It&apos;s traditionally used in Japanese tea ceremonies
            and offers the most vibrant colour and delicate taste experience.
          </div>
          <div className="lg:w-112 justify-center mx-auto">
            <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
              Benefits in Every Sip
            </h1>
            Matcha is a green powerhouse. It is rich in antioxidants, packed
            with vitamins, and loaded with feel-good perks. It boosts energy
            (without the crash), supports focus, aids digestion, and helps you
            glow from the inside out.
          </div>
          <img src="/matcha/1.png" alt="Matcha 1" />
        </div>
      </div>
    </section>
  );
}
