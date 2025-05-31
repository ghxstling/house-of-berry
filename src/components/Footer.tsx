import Link from "next/link";
import React from "react";

const LINK_STYLE = "hover:text-red-500 transition-colors duration-150";

export default function Footer() {
  return (
    <footer className="bg-[#FFEFFB] p-10 grid items-center w-full">
      <div className="col-start-2 text-center">
        <p>House of Berry</p>
        <p>Copyright &copy; 2025</p>
      </div>
      <div className="col-start-3 grid justify-end text-right underline">
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
