import Link from "next/link";
import React from "react";

const LINK_STYLE = "hover:text-red-500 transition-colors duration-150";

export default function Footer() {
  return (
    <footer className="bg-[#FFEFFB] p-10 flex items-center w-full relative">
      <div className="text-center absolute left-0 right-0">
        <p>House of Berry</p>
        <p>Copyright &copy; 2025</p>
      </div>
      <div className="grid justify-end text-right underline w-full">
        <Link
          href={"https://www.instagram.com/houseofberrynz/"}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_STYLE}
        >
          <p>Instagram</p>
        </Link>
        <Link
          href={"https://www.tiktok.com/@houseofberrynz"}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_STYLE}
        >
          <p>TikTok</p>
        </Link>
      </div>
    </footer>
  );
}
