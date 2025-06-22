import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faqs() {
  return (
      <div style={{ backgroundColor: "#FFEFFB" }} className="w-full h-screen flex justify-center">

          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
          >
      {/* Accordion Question One */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full justify-center text-center">What is Matcha?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            Matcha is a finely ground powder made from specially grown and processed 
            green tea leaves. Unlike regular tea where you steep and discard the 
            leaves, with matcha you consume the entire leaf, maximising its nutritional 
            benefits and delivering a unique, rich flavor experience.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Two */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="w-full justify-center text-center">What are the benefits of Matcha?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            Matcha is a nutritional powerhouse packed with many different benefits:
          </p>
          <p className="italic">
           Rich in antioxidants (especially catechins like EGCG) that help fight free radicals<br/>
           Provides calm, focused energy through its unique combination of caffeine and L-theanine<br/>
           Supports metabolism and may aid in fat burning<br/>
           Contains vitamins A, C, E, K, and B-complex<br/>
           Provides chlorophyll, fiber, and amino acids<br/>
           Can help improve concentration and mental clarity<br/>
           Supports heart health and immune function<br/>
           Offers detoxifying properties<br/>
           And more!!<br/>
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Three */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="w-full justify-center text-center">Why is ceremonial grade matcha special?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            Ceremonial grade matcha is the highest quality available, made from the youngest tea leaves with stems and veins removed.
            This creates a smoother, naturally sweeter flavor without bitterness. It's traditionally used in Japanese tea ceremonies
            and offers the most vibrant color and delicate taste experience.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Four */}
      <AccordionItem value="item-4">
        <AccordionTrigger className="w-full justify-center text-center">Why choose matcha over coffee?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            Matcha provides a different kind of energy boost than coffee. The L-theanine in matcha creates a state of calm 
            alertness without the jitters or crash that often comes with coffee. Matcha releases caffeine more slowly 
            (over 4-6 hours), providing sustained energy rather than a quick spike and drop.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Five */}
      <AccordionItem value="item-5">
        <AccordionTrigger className="w-full justify-center text-center">What does matcha taste like?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            Our creative matcha drinks transform the traditional earthy, grassy flavor of matcha into exciting taste experiences.
            From naturally sweet and creamy to bright and refreshing, we've crafted unique flavor combinations that make matcha 
            accessible even to first-time drinkers.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Six */}
      <AccordionItem value="item-6">
        <AccordionTrigger className="w-full justify-center text-center">Are your drinks healthy, vegan, gluten free?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            Yes! Our drinks start with nutrient-rich ingredients like ceremonial grade matcha, coffee. We focus on natural ingredients 
            and offer options to customise sweetness levels. Our menu includes both indulgent treats and more health-conscious options.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Seven */}
      <AccordionItem value="item-7">
        <AccordionTrigger className="w-full justify-center text-center">Where can I find House of Berry?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            We currently operate as a pop-up at selected markets and events throughout Auckland. Follow us on{" "}
            <a
            href="https://www.instagram.com/houseofberrynz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            >
              Instagram
            </a>{" "}

             and {" "}
            <a
            href="https://www.tiktok.com/@houseofberrynz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            >
              TikTok
            </a>{" "}
             
            @houseofberrynz
            to see where we'll be next or to inquire about private event bookings.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Eight */}
      <AccordionItem value="item-8">
        <AccordionTrigger className="w-full justify-center text-center">Do you cater events?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            Yes! We offer customised matcha and beverage services for private events, corporate functions, and special occasions. 
            Contact us for packages and pricing.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Accordion Question Nine */}
      <AccordionItem value="item-9">
        <AccordionTrigger className="w-full justify-center text-center">What makes your matcha different from others in Auckland?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 items-center text-center text-balance">
          <p className="italic">
            We focus on creating an experience, not just a drink. Each matcha is freshly whisked before your eyes, and we offer creative flavor combinations
            you won't find elsewhere. We're bringing fun and innovation to Auckland's matcha scene, moving beyond the boring traditional options.
          </p>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
    </div>



    
    

    
  );
}