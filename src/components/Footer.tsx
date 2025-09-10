import Link from "next/link";
import React from "react";

const LINK_STYLE = "hover:text-hob-pink transition-colors duration-100";

export default function Footer() {
  return (
    <footer className="bg-hob-lightpink sm:h-32 flex items-center w-full relative font-semibold">
      <div className="hidden lg:flex text-center absolute left-0 right-0 ">
        <div className = "">
          <p>House of Berry</p>
          <p>Copyright &copy; 2025</p>

        </div>
        
        <div className="grid justify-end text-right underline top-0 right-10 absolute">
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
      </div>

      <div className="lg:hidden text-center absolute left-0 right-0">
        <p>House of Berry</p>
        <p>Copyright &copy; 2025</p>
        <div className="grid justify-end text-right underline top-0 right-10 absolute">
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
      </div>
    </footer>

    
    

  );
}
