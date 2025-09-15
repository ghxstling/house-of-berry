import React from "react";

export default function About() {
  return (
    <section className="w-full lg:h-[60rem] relative">
      {/* Background Image */}
      <img
        src="/jackie.png"
        alt="Photo of Jacqueline"
        className="w-full h-60 object-cover -z-10"
      />

      {/* Text Overlay */}
      <div className="relative px-6 py-10 text-center lg:absolute lg:right-30 lg:top-20 lg:w-[36rem]">
        <h1 className="text-6xl lg:text-8xl text-gray-800 lg:mb-4 font-script">
          About Us
        </h1>
        <div className="lg:text-lg text-gray-900 space-y-6 lg:space-y-4">
          <p>A fun experience. An act of creativity. A moment of indulgence.</p>
          <p>
            House of Berry was born from a simple love: the daily ritual of
            matcha. But not just any matcha—matcha made fun, fresh, and
            unexpected. Wanting to break away from the ordinary, we set out to
            reimagine what a morning pick-me-up could be.
          </p>
          <p>
            Our drinks are designed to be as exciting as they are refreshing,
            from iced matcha whisked to perfection before your eyes to rich,
            smooth iced lattes crafted from bold flavours.
          </p>
          <p>
            House of Berry isn&apos;t just about coffee or matcha. It&apos;s
            about turning everyday moments into something special - one sip at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
