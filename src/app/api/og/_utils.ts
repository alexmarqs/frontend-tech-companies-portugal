export const SIZE = {
  width: 1200,
  height: 630,
};

export const TITLE = "Explore Tech Companies in Portugal 🇵🇹";
export const DESCRIPTION =
  "The most comprehensive list of tech companies in Portugal, all in one place.";

export const calSemiBold = fetch(
  new URL(
    "../../../../public/assets/fonts/CalSans-SemiBold.ttf",
    import.meta.url,
  ),
).then((res) => res.arrayBuffer());

export const interRegular = fetch(
  new URL("../../../../public/assets/fonts/Inter-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export const imageLogo = fetch(
  new URL("../../../../public/assets/images/logo.png", import.meta.url),
).then((res) => res.arrayBuffer());
