import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fontCalsans, fontInter } from "@/lib/fonts";
import {
  defaultMetadata,
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from "@/lib/metadata";
import { LayoutProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  ...defaultMetadata,
  twitter: {
    ...defaultTwitterMetadata,
  },
  openGraph: {
    ...defaultOpenGraphMetadata,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          fontInter.variable,
          fontCalsans.variable,
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
