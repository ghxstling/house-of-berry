// components/Header.tsx

import React from "react";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#FFEFFB" }} className="text-black p-4 shadow-md">
      <div className="max-w-7x1 mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <img src="" alt="" />
        </h1>
      

        <nav className="space-x-4">
          <button>
            HOME
          </button>
          <button>
            ABOUT US
          </button>
          <button>
            OFFERINGS
          </button>
          <button>
            FAQS
          </button>
          <button>
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
}
