"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Menu } from "lucide-react";

const LINK_STYLE = "hover:text-hob-pink transition-colors duration-100";

export default function Header() {
  const { isMobile } = useMediaQuery();
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/?scroll=contact");
    }

    const contact = document.getElementById("contact");
    if (!contact) return;

    const rect = contact.getBoundingClientRect();
    setTimeout(() => {
      window.scrollTo({ top: rect.top + window.scrollY, behavior: "smooth" });
    }, 0);
  };

  return (
    <header className="sticky flex justify-end items-center w-full h-16 lg:h-24 bg-hob-lightpink shadow-md">
      <div className="absolute w-full h-full -top-2">
        <Image
          src="/header_logo.jpg"
          alt="House of Berry Logo"
          fill
          className="object-contain"
        />
      </div>

      {isMobile ? (
        <nav className="z-10 p-4 text-gray-800 font-semibold">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              onCloseAutoFocus={(e) => {
                e.preventDefault();
              }}
            >
              <Link href="/" className={LINK_STYLE}>
                <DropdownMenuItem>HOME</DropdownMenuItem>
              </Link>
              <Link href="/about" className={LINK_STYLE}>
                <DropdownMenuItem>ABOUT US</DropdownMenuItem>
              </Link>
              <Link href="/offerings" className={LINK_STYLE}>
                <DropdownMenuItem>OFFERINGS</DropdownMenuItem>
              </Link>
              <Link href="/faqs" className={LINK_STYLE}>
                <DropdownMenuItem>FAQS</DropdownMenuItem>
              </Link>
              <span
                onClick={(e) => handleScrollToContact(e)}
                className={LINK_STYLE + " cursor-pointer"}
              >
                <DropdownMenuItem>CONTACT</DropdownMenuItem>
              </span>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      ) : (
        <nav className="z-10 grid grid-flow-col justify-end w-full lg:gap-8 text-gray-800 font-semibold text-lg pr-8">
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
          <span
            onClick={(e) => handleScrollToContact(e)}
            className={LINK_STYLE + " cursor-pointer"}
          >
            Contact
          </span>
        </nav>
      )}
    </header>
  );
}
