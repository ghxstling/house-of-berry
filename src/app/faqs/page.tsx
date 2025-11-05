import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Faqs() {
  return (
    <div className="w-full bg-hob-lightpink">
      {/* HERO SECTION */}
      <div className="flex flex-col items-center text-center mb-12 lg:px-20">
        {/* IMAGE COLLAGE */}
        <div className="grid grid-flow-col">
          <img
            src="/jacqueline.jpg"
            alt="Jacqueline"
            className="lg:size-100 size-full object-cover"
          />
          <img
            src="/matchapour.jpeg"
            alt="Matcha Pour"
            className="lg:size-100 size-full object-cover"
          />
          <img
            src="/marketing/showcase-1.jpeg"
            alt="Matcha Setup"
            className="lg:size-100 size-full object-cover"
          />
          <img
            src="/marketing/showcase-2.jpeg"
            alt="Matcha Showcase of Materials"
            className="lg:size-100 size-full object-cover"
          />
        </div>
        <img
          src="/header_logo.jpg"
          alt="House of Berry Logo"
          className="lg:w-150 lg:h-80 w-60 mb-8 lg:mb-16 h-full object-cover"
        />
        <div className="lg:text-lg text-hob-darkgray">
          <p className="font-bold">GOT A QUESTION?</p>
          <p>
            If you have any other questions feel free to <br />
            email{" "}
            <Link
              href="mailto:houseofberrynz@gmail.com"
              className="italic hover:underline"
            >
              houseofberry@gmail.com
            </Link>
          </p>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="lg:w-4xl lg:mx-auto px-8 w-full text-lg"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Matcha?</AccordionTrigger>
          <AccordionContent>
            <p>
              Matcha is a finely ground powder made from specially grown and
              processed green tea leaves. Unlike regular tea where you steep and
              discard the leaves, with matcha you consume the entire leaf,
              maximising its nutritional benefits and delivering a unique, rich
              flavor experience.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What are the benefits of Matcha?</AccordionTrigger>
          <AccordionContent>
            Matcha is a nutritional powerhouse packed with many different
            benefits:
            <ul className="list-disc list-inside">
              <li>
                Rich in antioxidants (especially catechins like EGCG) that help
                fight free radicals
              </li>
              <li>
                Provides calm, focused energy through its unique combination of
                caffeine and L-theanine
              </li>
              <li>Supports metabolism and may aid in fat burning</li>
              <li>Contains vitamins A, C, E, K, and B-complex</li>
              <li>Provides chlorophyll, fiber, and amino acids</li>
              <li>Can help improve concentration and mental clarity</li>
              <li> Supports heart health and immune function</li>
              <li>Offers detoxifying properties</li>
            </ul>
            And more!!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Why is ceremonial grade matcha special?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Ceremonial grade matcha is the highest quality available, made
              from the youngest tea leaves with stems and veins removed. This
              creates a smoother, naturally sweeter flavor without bitterness.
              It&apos;s traditionally used in Japanese tea ceremonies and offers
              the most vibrant color and delicate taste experience.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Accordion Question Four */}
        <AccordionItem value="item-4">
          <AccordionTrigger>Why choose matcha over coffee?</AccordionTrigger>
          <AccordionContent>
            <p>
              Matcha provides a different kind of energy boost than coffee. The
              L-theanine in matcha creates a state of calm alertness without the
              jitters or crash that often comes with coffee. Matcha releases
              caffeine more slowly (over 4-6 hours), providing sustained energy
              rather than a quick spike and drop.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Accordion Question Five */}
        <AccordionItem value="item-5">
          <AccordionTrigger>What does matcha taste like?</AccordionTrigger>
          <AccordionContent>
            <p>
              Our creative matcha drinks transform the traditional earthy,
              grassy flavor of matcha into exciting taste experiences. From
              naturally sweet and creamy to bright and refreshing, we&apos;ve
              crafted unique flavor combinations that make matcha accessible
              even to first-time drinkers.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Accordion Question Six */}
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Are your drinks healthy, vegan, gluten free?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Yes! Our drinks start with nutrient-rich ingredients like
              ceremonial grade matcha. We focus on natural ingredients and offer
              options to customise sweetness levels. Our menu includes both
              indulgent treats and more health-conscious options.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Accordion Question Seven */}
        <AccordionItem value="item-7">
          <AccordionTrigger>Where can I find House of Berry?</AccordionTrigger>
          <AccordionContent>
            <p>
              We currently operate as a pop-up at selected markets and events
              throughout Auckland. Follow us on{" "}
              <a
                href="https://www.instagram.com/houseofberrynz/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Instagram
              </a>{" "}
              and{" "}
              <a
                href="https://www.tiktok.com/@houseofberrynz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                TikTok
              </a>{" "}
              @houseofberrynz to see where we&apos;ll be next or to inquire
              about private event bookings.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Accordion Question Eight */}
        <AccordionItem value="item-8">
          <AccordionTrigger>Do you cater events?</AccordionTrigger>
          <AccordionContent>
            <p>
              Yes! We offer customised matcha and beverage services for private
              events, corporate functions, and special occasions. Contact us for
              packages and pricing.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Accordion Question Nine */}
        <AccordionItem value="item-9">
          <AccordionTrigger>
            What makes your matcha different from others in Auckland?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We focus on creating an experience, not just a drink. Each matcha
              is freshly whisked before your eyes, and we offer creative flavor
              combinations you won&apos;t find elsewhere. We&apos;re bringing
              fun and innovation to Auckland&apos;s matcha scene, moving beyond
              the boring traditional options.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
