"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  const { isMobile } = useMediaQuery();
  const searchParams = useSearchParams();
  const scrollParam = searchParams.get("scroll");

  useEffect(() => {
    if (scrollParam) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollParam);
        if (!element) return;
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [scrollParam]);

  return (
    <section className="w-full">
      <div className="lg:max-w-480 mx-auto lg:px-20">
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

      <div className="text-center py-6 lg:py-12 leading-tight flex flex-col gap-4 justify-center items-center">
        <p className="text-[1.5rem] w-xs lg:text-[2.5rem] text-hob-darkgray leading-none lg:leading-tight lg:w-lg font-semibold">
          Serving
          <span className="text-hob-matcha font-script font-medium lg:text-[3rem] text-[2rem]">
            {" Matcha "}
          </span>
          with Love, and on the go.
        </p>

        <p className="italic w-xs lg:w-2xl lg:text-xl">
          House of Berry isn&apos;t just about matcha. It&apos;s about turning
          everyday moments into something special — one sip at a time.
        </p>

        <Button className="w-fit bg-hob-pink text-black rounded-xl lg:px-6 cursor-pointer hover:bg-[#F6CBD7] hover:shadow-md lg:mt-4 tracking-wide">
          <Link href="/offerings" className="text-lg">
            Offerings
          </Link>
        </Button>
      </div>

      <div className="bg-hob-lightpink text-center py-6 gap-4 lg:gap-8 lg:py-12 grid">
        <h1 className="text-hob-darkgray text-3xl lg:text-7xl font-modern-serif font-semibold tracking-tighter flex lg:flex-row items-center justify-center gap-2">
          THE{" "}
          <span className="text-hob-pink font-script font-normal lg:text-[4rem] text-[3rem] tracking-wide">
            Berry
          </span>{" "}
          DIFFERENCE
        </h1>

        <div className="text-hob-darkgray italic lg:w-136 mx-auto w-90 space-y-2 lg:text-lg font-normal">
          <p>
            Since 2025, we&apos;ve been on a mission to make matcha fun - bold
            in flavour, and whisked to perfection right in front of you.
            We&apos;re not just crafting drinks, we&apos;re shaking up
            expectations.
          </p>
          <p className="font-bold">Here&apos;s what makes us different...</p>
        </div>

        {isMobile ? (
          <MobileCarousel />
        ) : (
          <div className="flex justify-center gap-6">
            {berryDiffBoxes.map((box, i) => (
              <div
                key={i}
                className="lg:max-w-100 lg:h-full flex flex-col items-center justify-between bg-white rounded-md lg:p-4 lg:pt-8 shadow-lg lg:gap-2"
              >
                <img
                  src={box.image}
                  alt={box.alt}
                  className="lg:size-80 object-cover rounded-md shadow-lg lg:text-base"
                />
                <h2 className="text-hob-matcha font-semibold">{box.title}</h2>
                <p className="text-hob-darkgray text-center lg:text-sm">
                  {box.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 lg:grid-rows-3 mx-auto lg:place-items-center lg:p-12 lg:w-4/5 lg:max-w-screen-2xl py-6 px-6">
        {isMobile ? (
          <MobileInfo />
        ) : (
          <>
            <div className="lg:w-md justify-center mx-auto lg:text-xl">
              <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
                WHAT IS
                <span className="font-script font-medium lg:text-[3rem]">
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
            <div className="lg:w-md justify-center mx-auto lg:text-xl">
              <h1 className="font-modern-serif text-hob-matcha lg:text-3xl font-bold lg:mb-4">
                Our Commitment to
                <span className="text-hob-matcha font-script font-medium lg:text-[3rem]">
                  {" Quality"}
                </span>
              </h1>
              We use ceremonial grade matcha. which is the highest quality
              available, made from the youngest tea leaves with stems and veins
              removed. This creates a smoother, naturally sweeter flavor without
              bitterness. It&apos;s traditionally used in Japanese tea
              ceremonies and offers the most vibrant colour and delicate taste
              experience.
            </div>
            <div className="lg:w-md justify-center mx-auto lg:text-xl">
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
          </>
        )}
      </div>

      {/* TODO: replace this with instagram API in near future */}
      <div className="bg-hob-lightpink flex flex-col gap-4 lg:gap-8 items-center lg:py-12 py-8">
        <h1 className="text-hob-pink font-modern-serif text-2xl lg:text-4xl font-semibold">
          Sipped & Spotted
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-6">
          {customers.map((showcase, _) => {
            return (
              <div
                key={_}
                className="bg-white lg:rounded-md lg:p-8 lg:shadow-lg"
              >
                <img
                  src={showcase.image}
                  alt={showcase.alt}
                  className="size-100 lg:size-120 object-cover lg:rounded-md lg:shadow-lg"
                />
              </div>
            );
          })}
        </div>
        <p className="text-center text-base lg:text-lg font-normal leading-tight">
          Tag @houseofberrynz to be featured!
          <br />
          Follow the fun, one post at a time.
          <br />
          The drinks are cute. The vibes? Even cuter!
        </p>
      </div>

      <div
        id="contact"
        className="py-6 gap-6 lg:gap-12 lg:py-12 grid justify-items-center bg-white text-center px-4 lg:px-0"
      >
        <h1 className="text-3xl lg:text-4xl text-hob-pink font-bold">
          Catch the Cart
        </h1>
        <div className="lg:text-lg lg:w-4xl space-y-2">
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
          </p>
          <p>
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

function MobileCarousel() {
  return (
    <Carousel className="w-70 mx-auto">
      <CarouselContent>
        {berryDiffBoxes.map((box, i) => (
          <CarouselItem key={i}>
            <div className="bg-white rounded-md shadow-lg flex flex-col place-items-center gap-1 p-4 lg:gap-3">
              <img
                src={box.image}
                alt={box.alt}
                className="size-60 object-cover rounded-md"
              />
              <h2 className="text-hob-matcha font-semibold text-lg lg:text-base">
                {box.title}
              </h2>
              <p className="text-hob-darkgray text-sm text-center">
                {box.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function MobileInfo() {
  return (
    <div className="text-center grid gap-4">
      <img
        src="/homepage/matcha-101/what-is-matcha.JPG"
        alt="Pouring matcha into cup"
      />
      <h1 className="font-modern-serif text-hob-matcha text-2xl font-bold leading-none mt-2 -mb-2">
        WHAT IS
        <span className="font-script font-medium text-[2.5rem]">
          {" Matcha?"}
        </span>
      </h1>
      <p>
        Matcha is a finely ground powder made from specially grown and processed
        green tea leaves. Unlike regular tea where you steep and discard the
        leaves, with matcha you consume the entire leaf, maximizing its
        nutritional benefits and delivering a unique, rich flavor experience.
      </p>
      <img src="/homepage/matcha-101/quality.JPG" alt="Prepping matcha" />
      <h1 className="font-modern-serif text-hob-matcha text-2xl font-bold leading-none mt-2 -mb-2">
        Our Commitment to
        <span className="font-script font-medium text-[2.5rem]">
          {" Quality"}
        </span>
      </h1>
      <p>
        We use ceremonial grade matcha. which is the highest quality available,
        made from the youngest tea leaves with stems and veins removed. This
        creates a smoother, naturally sweeter flavor without bitterness.
        It&apos;s traditionally used in Japanese tea ceremonies and offers the
        most vibrant colour and delicate taste experience.
      </p>
      <img src="/homepage/matcha-101/benefits.JPG" alt="Serving matcha" />
      <h1 className="font-modern-serif text-hob-matcha text-2xl font-bold leading-none mt-2 -mb-2">
        <span className="font-script font-medium text-[2.5rem]">
          {"Benefits "}
        </span>
        in Every Sip
      </h1>
      <p>
        Matcha is a green powerhouse. It is rich in antioxidants, packed with
        vitamins, and loaded with feel-good perks. It boosts energy (without the
        crash), supports focus, aids digestion, and helps you glow from the
        inside out.
      </p>
    </div>
  );
}
