import React from "react";
import jacqueline from "../../../public/jackie.png";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="lg:w-full bg-hob-lightpink grid gap-20">
      {/* Image  */}
      <div className="grid grid-cols-2 w-full lg:h-[30rem]">
        {/* TODO: replace placeholder images */}
        <div className="relative">
          <Image
            src={jacqueline}
            alt="Photo of Jacqueline"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={jacqueline}
            alt="Photo of Jacqueline"
            fill
            className="object-cover"
          />
        </div>
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
