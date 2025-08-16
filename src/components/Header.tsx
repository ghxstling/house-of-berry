import React from "react";
import Image from "next/image";
import Link from "next/link";

const LINK_STYLE = "hover:text-hob-pink transition-colors duration-100";

export default function Header() {
  return (
    <header className="flex items-center justify-between lg:py-4 lg:px-12 bg-hob-lightpink shadow-sm">
      <div className="relative w-30 h-16">
        <Image
          src="/header_logo.jpg"
          alt="Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      <nav className="flex lg:space-x-8 text-gray-800 font-semibold">
        <Link href="/" className={LINK_STYLE}>
          HOME
        </Link>
        <Link href="/about" className={LINK_STYLE}>
          ABOUT US
        </Link>
        <Link href="/offerings" className={LINK_STYLE}>
          OFFERINGS
        </Link>
        <Link href="/faqs" className={LINK_STYLE}>
          FAQS
        </Link>
        <Link href="/contact" className={LINK_STYLE}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
