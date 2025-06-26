import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import clsx from "clsx";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '900'],
  style: ['normal', 'italic']
});





export default function HomePage(): React.JSX.Element {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid grid-cols-4 grid-rows-2 gap-0">
        <img src="/homepage/Image.png" alt="Image 1" className="w-full h-full object-cover" />
        <img src="/homepage/Image2.png" alt="Image 2" className="w-full h-full object-cover" />
        <img src="/homepage/Image3.png" alt="Image 3" className="w-full h-full object-cover" />
        <img src="/homepage/Image4.png" alt="Image 4" className="w-full h-full object-cover" />
        <img src="/homepage/Image8.png" alt="Image 5" className="w-full h-full object-cover" />
        <img src="/homepage/Image7.png" alt="Image 6" className="w-full h-full object-cover" />
        <img src="/homepage/Image6.png" alt="Image 7" className="w-full h-full object-cover" />
        <img src="/homepage/Image5.png" alt="Image 8" className="w-full h-full object-cover" />
      </div>
      <div className="text-center bg-white-500 h-[300px]">
        {/* This is the text below the grid */}
        <section className={`text-[40px] text-[#262626] text-center leading-tight pt-7 font-semibold ${playfair.className}`}>
          Serving 
          <span style={{ color: '#25995C' }}> Matcha </span> 
          and 
          <span style={{color: '#77380C'}}> Coffee </span>
          with Love,<br /> and on the go.
        </section>

        {/* little Description */}
        <p className={`
          text-[20px] 
          text-[#333333]      /* Slightly lighter than #262626 for softer contrast */
          text-center 
          leading-tight       /* Tighter line height for neatness */
          pt-4                /* Slightly less top padding */
          font-semibold       /* Slightly less heavy than extrabold */
          italic
          ${playfair.className}
        `}>
          House of Berry isn’t just about coffee or matcha. It’s about turning <br />
          everyday moments into something special—one sip at a time.
        </p>


        {/* Now the Button */}
        <button
        className={clsx(
          'bg-[#ECAFC0] text-black',
          'py-2.5 px-6 leading-6',
          'rounded-[1.1rem]',
          'font-semibold tracking-wide',
          'cursor-pointer',
          'inline-flex items-center justify-center',
          'relative-shadow',
          'mt-7',
          // The Hoverstate
          'transition',
          'hover:bg-[#F6CBD7] hover:shadow-md'
        )}>
          <text className={`${playfair.className}`}>Offerings</text>
        </button>
      </div>

      <div className=" bg-[#FFEFFB] h-[590px] text-center gap-4 p-4">
        {/* heading for this container */}
        <h4 className={
          `text-[#ECAFC0]
          font-bold
          text-[33px]
          pt-12
          ${playfair.className}`}>
          The Berry Difference
        </h4>

          {/* small description about what is different */}
        <p className={`
        text-[#262626]
        pt-4
          ${playfair.className}`}>
          Matcha made fun, flavour made bold, and moments <br />
          made memorable. We’re not just whisking drinks - we’re <br />
           shaking up expectations. Here’s what makes us <br />
            different...
        </p>
        <div className="flex justify-center gap-4 pt-8">
          <div className="w-[272px] h-[284px] flex flex-col items-center justify-between bg-white rounded-md p-4 shadow-lg">
            {/* Icon or image box */}
            <div className="w-40 h-40 bg-[#F5F5F5] rounded-md" />

            {/* Subtitle */}
            <h5 className={`text-[#25995C] text-[15px] text-lg font-semibold ${playfair.className}`}>
              Premium Matcha, Always
            </h5>

            {/* Description */}
            <p className={`text-[#262626] text-center text-[13px] text-[#262626] font-[500] ${playfair.className}`}>
              We only serve the best! Ceremonial <br />
              grade matcha that is smooth, vibrant, <br />
              and whisked fresh for every cup.
            </p>
          </div>

          <div className="w-[272px] h-[284px] flex flex-col items-center justify-between bg-white rounded-md p-4 shadow-lg">
            {/* Icon or image box */}
            <div className="w-40 h-40 bg-[#F5F5F5] rounded-md" />

            {/* Subtitle */}
            <h5 className={`text-[#25995C] text-[15px] text-lg font-semibold ${playfair.className}`}>
              Flavours you won’t forget
            </h5>

            {/* Description */}
            <p className={`text-[#262626] text-center text-[13px] text-[#262626] font-[500] ${playfair.className}`}>
              We go beyond basic! From strawberry to <br />
               banana bread. Our drinks are fun,<br />
                refreshing, and creative.
            </p>
          </div>
          <div className="w-[272px] h-[284px] flex flex-col items-center justify-between bg-white rounded-md p-4 shadow-lg">
            {/* Icon or image box */}
            <div className="w-40 h-40 bg-[#F5F5F5] rounded-md" />

            {/* Subtitle */}
            <h5 className={`text-[#25995C] text-[15px] text-lg font-semibold ${playfair.className}`}>
              More than just a drink
            </h5>

            {/* Description */}
            <p className={`text-[#262626] text-center text-[13px] text-[#262626] font-[500] ${playfair.className}`}>
              We want to deliver an experience, that <br />
               you love and we love, whisked to <br />
                perfection right before your eyes.
            </p>
          </div>
          <div className="w-[272px] h-[284px] flex flex-col items-center justify-between bg-white rounded-md p-4 shadow-lg">
            {/* Icon or image box */}
            <div className="w-40 h-40 bg-[#F5F5F5] rounded-md" />

            {/* Subtitle */}
            <h5 className={`text-[#25995C] text-[15px] text-lg font-semibold ${playfair.className}`}>
              A Matcha Cart like no other
            </h5>

            {/* Description */}
            <p className={`text-[#262626] text-center text-[13px] text-[#262626] font-[500] ${playfair.className}`}>
              We’re mobile, magical, and full of <br />
               flavour! We bring bold sips and good <br />
                vibes to markets and events near you.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-row text-center justify-center h-[1390px]">
        <h1 className={`text-[#ECAFC0] text-[40px] font-bold pt-10 ${playfair.className}`}>
          Matcha
        </h1>
        {/* box 1 */}
        <div className="border w-auto h-[400px] mt-5 p-4">
          <div className="flex justify-between gap-5">
            <div className="flex items-center justify-center bg-white w-1/2 h-[365px] rounded-md padding-center">Left Box</div>
            <div className="flex items-center justify-center bg-white w-1/2 h-[365px] rounded-md">
            <img src="/matcha/image%202.png" alt="matcha-1" />
            </div>
          </div>
        </div>

        {/* box 2 */}
        <div className="border w-auto h-[400px] mt-5 p-4">
          <div className="flex justify-between gap-5">
            <div className="flex items-center justify-center bg-white w-1/2 h-[365px] rounded-md">
            <img src="/matcha/image%203.png" alt="matcha-2" />
            </div>
            <div className="flex items-center justify-center bg-white w-1/2 h-[365px] rounded-md"> Right Box</div>
          </div>
        </div>

        {/* box 3 */}
        <div className="border w-auto h-[400px] mt-5 p-4">
          <div className="flex justify-between gap-5">
            <div className="flex items-center justify-center bg-white w-1/2 h-[365px] rounded-md">Left Box</div>
            <div className="flex items-center justify-center bg-white w-1/2 h-[365px] rounded-md">
            <img src="/matcha/image%204.png" alt="matcha-3" />
            </div>
          </div>
        </div>



      </div>
      <div className="flex-1 border p-4">Container 4</div>
    </div>
  );
}


type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

