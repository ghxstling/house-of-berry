"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";


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
      
      <nav className="lg:hidden md:space-x-8 sm:space-x-8 lg:space-x-8 px-10 text-gray-800 font-semibold">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"> Menu </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56 p-2">
            <DropdownMenuRadioGroup >
              <DropdownMenuRadioItem value="home">  <Link href="/" className={LINK_STYLE}> HOME </Link>  </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="home">  <Link href="/about" className={LINK_STYLE}> ABOUT US </Link>  </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="home">  <Link href="/offerings" className={LINK_STYLE}> OFFERINGS </Link>  </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="home">  <Link href="/faqs" className={LINK_STYLE}> FAQS </Link>  </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="home">  <Link href="/contact" className={LINK_STYLE}> CONTACT </Link>  </DropdownMenuRadioItem>
              
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

      </nav>

      
    </header>
  );
}
