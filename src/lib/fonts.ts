import { Caveat, DM_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["700", "800"]
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hand",
  weight: ["500"]
});

export const migra = localFont({
  src: [
    {
      path: "../assets/fonts/migra-extrabold.woff2",
      weight: "600",
      style: "normal"
    }
  ],
  display: "swap",
  variable: "--font-brand"
});
