import { Playfair_Display, Bodoni_Moda } from "next/font/google";
import localFont from "next/font/local";

const playfairFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const sloopFont = localFont({
  src: "../../public/fonts/sloop-script.ttf",
  variable: "--font-sloop",
});

const bodoniFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

export { playfairFont, sloopFont, bodoniFont };
