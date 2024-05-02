import { Metadata } from "next/types";

export const TITLE = "Tech companies in Portugal";
export const DESCRIPTION =
  "The most comprehensive list of tech companies in Portugal, all in one place.";
export const APP_URL = process.env.VERCEL_URL
  ? "https://tech-companies-pt.alexandremarques.io"
  : "http://localhost:3000";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: APP_URL,
  },
};

export const defaultTwitterMetadata: Metadata["twitter"] = {
  title: TITLE,
  description: DESCRIPTION,
  card: "summary_large_image",
  images: [`api/og`],
};

export const defaultOpenGraphMetadata: Metadata["openGraph"] = {
  title: TITLE,
  description: DESCRIPTION,
  url: APP_URL,
  type: "website",
  siteName: TITLE,
  images: [`api/og`],
};

export const verificationMetadata: Metadata["verification"] = {
  google: "_YWvg85foYnXGeQrGSAdi1xkOUoJ1O50TO6YbWzadx8",
};
