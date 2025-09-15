import React from "react";
import Link from "next/link";

const LINK_STYLE = "hover:text-hob-pink transition-colors duration-100";

export default function Header() {
  return (
    <header className="sticky flex items-center justify-between lg:px-16 bg-hob-lightpink shadow-md">
      <div>
        <img
          src="/header_logo.jpg"
          alt="House of Berry Logo"
          className="w-full lg:h-24 object-contain"
        />
      </div>

      <nav className="flex lg:space-x-8 text-gray-800 font-semibold">
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
