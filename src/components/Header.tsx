import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-12 bg-[#fff0fc] shadow-sm">
      <div className="relative w-30 h-16">
        <Image
          src="/header_logo.jpg"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <nav className="flex space-x-8 text-gray-800 font-semibold">
        <Link href="/" className="hover:text-blue-600 ">
          HOME
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          ABOUT US
        </Link>
        <Link href="/offerings" className="hover:text-blue-600">
          OFFERINGS
        </Link>
        <Link href="/faqs" className="hover:text-blue-600">
          FAQS
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
