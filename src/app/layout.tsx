import { fontCalsans, fontInter } from "@/fonts/utils";
import { LayoutProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech companies in Portugal 🇵🇹",
  description:
    "The most comprehensive list of tech companies in Portugal, all in one place. Made with ❤️ by the community, for the community.",
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
        {children}
      </body>
    </html>
  );
}
