import Link from "next/link";
import { studioImage } from "../data/artwork";

export default function CTA() {
  return (
    <section className="grid bg-[#211f1b] text-[#eee8dd] md:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-20">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#b99a67]">Commission an artwork
            </p>
            <h2 className="serif mt-5 text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl">Have a vision?<br />Let&apos;s create it together.
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60">Share your idea, space, preferred style or story. We&apos;ll work together to create an original piece that belongs uniquely to you.
            </p>
            <Link href="/contact-book" className="mt-10 w-fit border border-white/40 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition duration-300 hover:bg-white hover:text-black">
            Start a commission →
            </Link>
            </div>
      <div className="min-h-[450px] overflow-hidden">
        <img src={studioImage.image} alt={studioImage.alt} className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-[1.02]" />
        </div>
    </section>
  );
}
