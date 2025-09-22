import React from "react";
import Link from "next/link";
import Image from "next/image";

const LINK_STYLE = "hover:text-hob-pink transition-colors duration-100";

export default function Header() {
  return (
    <header className="sticky flex justify-center items-center w-full lg:px-12 lg:h-24 bg-hob-lightpink shadow-md">
      <div className="absolute w-full lg:h-24 -top-2">
        <Image
          src="/header_logo.jpg"
          alt="House of Berry Logo"
          fill
          objectFit="contain"
        />
      </div>

      <nav className="z-10 grid grid-flow-col justify-end w-full lg:gap-8 text-gray-800 font-semibold">
        <Link href="/" className={LINK_STYLE}>
          Home
        </Link>
        <Link href="/about" className={LINK_STYLE}>
          About Us
        </Link>
        <Link href="/offerings" className={LINK_STYLE}>
          Offerings
        </Link>
        <Link href="/faqs" className={LINK_STYLE}>
          FAQs
        </Link>
        <Link href="/contact" className={LINK_STYLE}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
