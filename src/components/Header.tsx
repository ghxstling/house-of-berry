import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-[#fff0fc] shadow-sm">
      
      <div className="relative w-100 h-16"> 
        <Image 
          src="/header_logo.jpg"
          alt="Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">HOME</Link>
        <Link href="/about" className="text-gray-800 hover:text-blue-600 font-medium">ABOUT US</Link>
        <Link href="/offerings" className="text-gray-800 hover:text-blue-600 font-medium">OFFERINGS</Link>
        <Link href="/faqs" className="text-gray-800 hover:text-blue-600 font-medium">FAQS</Link>
        <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">CONTACT</Link>
      </nav>

      
      
    </header>
  );
}