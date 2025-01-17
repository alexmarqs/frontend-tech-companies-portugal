import { Metadata } from "next/types";

export const TITLE =
  "Tech Companies in Portugal | Leading Startups & Innovators";
export const DESCRIPTION =
  "Explore a comprehensive directory of tech companies in Portugal, featuring innovative startups and established industry leaders. Access descriptions, visit their websites, explore career opportunities, and connect through their digital presence.";

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

// export const verificationMetadata: Metadata["verification"] = {
//   google: "_YWvg85foYnXGeQrGSAdi1xkOUoJ1O50TO6YbWzadx8",
// };
