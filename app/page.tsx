import type { Metadata } from "next";
import Home from "./home/Home";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div>
      <Home />

      <div className="fixed  right-5 bottom-[15%] z-50 flex flex-col px-2 rounded-full">

       

          <Link
            href="https://www.instagram.com/podgallerry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 gap-4 items-center w-full rounded-full justify-center shadow-gray-800/50 transition-transform duration-200 hover:scale-105" >
           
            <Image src="/instagram.webp" alt="Instagram" width={20} height={20} className="h-5 w-5" />
          </Link>
       

      

          <Link
            href="https://wa.me/+2347072971284?text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-12 gap-4 items-center w-full rounded-full justify-center shadow-gray-800/50 transition-transform duration-200 hover:scale-105">
           
            <Image src="/whatsapp.webp" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
          </Link>
      


      </div>
    </div>
  )
}
