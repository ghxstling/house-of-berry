import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const heroCollage = [
  {
    src: "/homepage/hero/1.png",
    alt: "Lots of Love Matcha",
  },
  {
    src: "/homepage/hero/2.png",
    alt: "House of Berry Market Stand",
  },
  {
    src: "/homepage/hero/3.png",
    alt: "Love you so Matcha",
  },
  {
    src: "/homepage/hero/4.png",
    alt: "Pouring whisked matcha into cup",
  },
  {
    src: "/homepage/hero/8.png",
    alt: "House of Berry setup",
  },
  {
    src: "/homepage/hero/7.png",
    alt: "Whisked just for you, matcha bar on the go",
  },
  {
    src: "/homepage/hero/6.png",
    alt: "Whisking matcha at home",
  },
  {
    src: "/homepage/hero/5.png",
    alt: "Serving matcha and coffee with love",
  },
];

const berryDiffBoxes = [
  {
    title: "Premium Matcha, Always",
    description:
      "We only serve the best! Ceremonial grade matcha that is smooth, vibrant, and whisked fresh for every cup.",
    image: "/homepage/berry-difference/premium-matcha.jpeg",
    alt: "Girls holding matcha drinks",
  },
  {
    title: "Flavours you won't forget",
    description:
      "We go beyond basic! From strawberry to banana bread. Our drinks are fun, refreshing, and creative.",
    image: "/homepage/berry-difference/flavours-you-wont-forget.jpeg",
    alt: "House of Berry stall with products on display",
  },
  {
    title: "More than just a drink",
    description:
      "We want to deliver an experience, that you love and we love, whisked to perfection right before your eyes.",
    image: "/homepage/berry-difference/just-a-drink.jpeg",
    alt: "A matcha drink being prepared",
  },
  {
    title: "A Matcha Cart like no other",
    description:
      "We're mobile, magical, and full of flavour! We bring bold sips and good vibes to markets and events near you.",
    image: "/homepage/berry-difference/matcha-cart.jpeg",
    alt: "House of Berry stall at a market",
  },
];

const customers = [
  {
    image: "/homepage/customers/1.png",
    alt: "Customer Showcase 1",
  },
  {
    image: "/homepage/customers/2.png",
    alt: "Customer Showcase 2",
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

      <div className="text-center lg:py-12 leading-tight flex flex-col gap-4 justify-center items-center font-semibold">
        <p className="lg:text-[2.5rem] text-hob-darkgray leading-tight lg:w-lg">
          Serving
          <span className="text-hob-matcha font-script font-medium lg:text-[3rem]">
            {" Matcha "}
          </span>
          with Love, and on the go.
        </p>

        <p className="italic lg:w-2xl lg:text-xl">
          House of Berry isn&apos;t just about matcha. It&apos;s about turning
          everyday moments into something special—one sip at a time.
        </p>

        <Button className="w-fit bg-hob-pink text-black rounded-xl lg:px-6 cursor-pointer hover:bg-[#F6CBD7] hover:shadow-md mt-4 tracking-wide">
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
                className="lg:max-w-100 lg:h-full flex flex-col items-center justify-between bg-white rounded-md lg:p-4 lg:pt-8 shadow-lg lg:gap-2"
              >
                <img
                  src={box.image}
                  alt={box.alt}
                  className="lg:size-80 object-cover rounded-md shadow-lg lg:text-base"
                />
                <h1 className="text-hob-matcha font-semibold">{box.title}</h1>
                <p className="text-hob-darkgray text-center lg:text-sm">
                  {box.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:py-12 flex flex-col gap-8 w-4/5 lg:max-w-screen-2xl mx-auto lg:px-12">
        <div className="grid grid-cols-2 grid-rows-3 mx-auto place-items-center">
          <div className="lg:w-112 justify-center mx-auto lg:text-xl">
            <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
              WHAT IS
              <span className="text-hob-matcha font-script font-medium lg:text-[3rem]">
                {" Matcha?"}
              </span>
            </h1>
            Matcha is a finely ground powder made from specially grown and
            processed green tea leaves. Unlike regular tea where you steep and
            discard the leaves, with matcha you consume the entire leaf,
            maximizing its nutritional benefits and delivering a unique, rich
            flavor experience.
          </div>
          <img
            src="/homepage/matcha-101/what-is-matcha.JPG"
            alt="Pouring matcha into cup"
          />
          <img src="/homepage/matcha-101/quality.JPG" alt="Prepping matcha" />
          <div className="lg:w-112 justify-center mx-auto lg:text-xl">
            <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
              Our Commitment to
              <span className="text-hob-matcha font-script font-medium lg:text-[3rem]">
                {" Quality"}
              </span>
            </h1>
            We use ceremonial grade matcha. which is the highest quality
            available, made from the youngest tea leaves with stems and veins
            removed. This creates a smoother, naturally sweeter flavor without
            bitterness. It&apos;s traditionally used in Japanese tea ceremonies
            and offers the most vibrant colour and delicate taste experience.
          </div>
          <div className="lg:w-112 justify-center mx-auto lg:text-xl">
            <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
              <span className="text-hob-matcha font-script font-medium lg:text-[3rem]">
                {"Benefits "}
              </span>
              in Every Sip
            </h1>
            Matcha is a green powerhouse. It is rich in antioxidants, packed
            with vitamins, and loaded with feel-good perks. It boosts energy
            (without the crash), supports focus, aids digestion, and helps you
            glow from the inside out.
          </div>
          <img src="/homepage/matcha-101/benefits.JPG" alt="Serving matcha" />
        </div>
      </div>

      {/* TODO: replace this with instagram API in near future */}
      <div className="bg-hob-lightpink lg:text-4xl font-semibold flex flex-col lg:gap-8 items-center lg:py-12">
        <h1 className="text-hob-pink font-modern-serif">Sipped & Spotted</h1>
        <div className="flex justify-center lg:gap-6">
          {customers.map((showcase, _) => {
            return (
              <div key={_} className="bg-white rounded-md lg:p-8 shadow-lg">
                <img
                  src={showcase.image}
                  alt={showcase.alt}
                  className="lg:size-120 object-cover rounded-md shadow-lg lg:text-base"
                />
              </div>
            );
          })}
        </div>
        <p className="text-center lg:text-lg font-normal leading-tight">
          Tag @houseofberrynz to be featured!
          <br />
          Follow the fun, one post at a time.
          <br />
          The drinks are cute. The vibes? Even cuter!
        </p>
      </div>

      <div className="lg:gap-12 lg:py-12 grid justify-items-center bg-white">
        <div className="lg:text-lg lg:space-y-6 text-center lg:w-4xl">
          <h1 className="text-4xl lg:mb-12 text-hob-pink font-bold">
            Catch the Cart
          </h1>
          <p>Got an event coming up? We&apos;d love to be there!</p>
          <p>
            Fill out the form below and our team will get back to you ASAP.
            Whether it&apos;s a market, birthday,
            <br />
            wedding, or corporate function, House of Berry brings the fun
            experience with a tailored menu to you!
          </p>
          <p>
            Feel free to share a little about your event, the vibe you&apos;re
            going for, and any questions you have.
            <br />
            We&apos;ll get back to you as soon as possible and take it from
            there!
          </p>
        </div>
        <div className="lg:w-3xl">
          <ContactForm />
        </div>
        <p className="text-center italic">
          If you have any other questions, feel free to <br />
          email houseofberrynz@gmail.com
        </p>
      </div>
    </section>
  );
}
