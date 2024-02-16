import { Inter } from "next/font/google";
import localFont from "next/font/local";

const fontInter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontCalsans = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-calsans",
});

export { fontCalsans, fontInter };
