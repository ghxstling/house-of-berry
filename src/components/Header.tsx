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

      <nav className="hidden lg:flex lg:space-x-8 text-gray-800 font-semibold">
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
