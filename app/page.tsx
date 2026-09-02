import type { Metadata } from "next";
import Home from "./home/Home";

export const metadata: Metadata = {
  title: "Original Artworks",
  description:
    "Explore PODGALLERY's curated collection of original paintings and mixed-media artworks.",
  openGraph: {
    title: "Original Artworks | PODGALLERY",
    description:
      "Explore PODGALLERY's curated collection of original paintings and mixed-media artworks.",
  },
};

export default function Page() {
  return <Home />;
}
