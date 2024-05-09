import AnalyticsHeader from "@/components/AnalyticsHeader";
import {
  APP_URL,
  defaultMetadata,
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from "@/lib/metadata";
import { LayoutProps } from "@/lib/types";
import { Metadata } from "next/types";

const seoBaseConfig = {
  title: "Analytics | Tech companies in Portugal",
  description: "Explore the analytics of tech companies in Portugal.",
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: seoBaseConfig.title,
  description: seoBaseConfig.description,
  alternates: {
    canonical: `${APP_URL}/analytics`,
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: seoBaseConfig.title,
    description: seoBaseConfig.description,
    images: [
      `api/og?title=${`Analytics`}&description=${seoBaseConfig.description}`,
    ],
  },
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: seoBaseConfig.title,
    description: seoBaseConfig.description,
    url: `${APP_URL}/analytics`,
    images: [
      `api/og?title=${`Analytics`}&description=${seoBaseConfig.description}`,
    ],
  },
};

export default async function AnalyticsLayout({ children }: LayoutProps) {
  return (
    <main className="mx-auto flex w-full min-w-[300px] max-w-5xl flex-1 flex-col p-3">
      <AnalyticsHeader />
      {children}
    </main>
  );
}
