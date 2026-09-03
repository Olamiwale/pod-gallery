import Link from "next/link";
import type { Metadata } from "next";
import { artworks } from "../data/artwork";
import Navbar from "../home/Navbar";

type CheckoutPageProps = {
    searchParams: Promise<{ artwork?: string }>;
};

export async function generateMetadata({ searchParams }: CheckoutPageProps): Promise<Metadata> {
    const { artwork: artworkTitle } = await searchParams;
    const artwork = artworks.find((item) => item.title === artworkTitle) ?? artworks[0];

    return {
        title: `Enquire about ${artwork.title}`,
        description: `Enquire about ${artwork.title}, an original ${artwork.medium} artwork available from PODGALLERRY.`,
        alternates: {
            canonical: `/checkout?artwork=${encodeURIComponent(artwork.title)}`,
        },
        openGraph: {
            type: "website",
            title: `Enquire about ${artwork.title}`,
            description: `Enquire about ${artwork.title}, an original ${artwork.medium} artwork available from PODGALLERRY.`,
            images: [{ url: artwork.image, alt: artwork.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: `Enquire about ${artwork.title}`,
            description: `Enquire about ${artwork.title}, an original ${artwork.medium} artwork available from PODGALLERRY.`,
            images: [artwork.image],
        },
    };
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
    const { artwork: artworkTitle } = await searchParams;
    const artwork = artworks.find((item) => item.title === artworkTitle) ?? artworks[0];

    return (
        <main className="min-h-screen bg-[#f5f2ec] text-[#1d1b18]">
            <Navbar />
            <div className="mx-auto max-w-350 px-5 py-8 md:px-10 md:py-12">
                <Link href="/#collection" className="text-[10px] uppercase tracking-[0.2em] text-[#716c63] transition hover:text-[#1d1b18]">
                    ← Back to collection
                </Link>

                <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-20">
                    <div>
                        <div className="overflow-hidden bg-[#ddd6ca]">
                            <img src={artwork.image} alt={artwork.title} className="block aspect-[4/3] h-auto w-full object-cover" />
                        </div>
                        <div className="flex items-start justify-between gap-8 pt-5">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.24em] text-[#8a6c40]">Selected artwork</p>
                                <h1 className="serif mt-3 text-4xl leading-none tracking-[-0.04em] md:text-5xl">{artwork.title}</h1>
                            </div>
                            {/* <p className="serif pt-1 text-xl">{artwork.price}</p> */}
                        </div>
                        <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-[#716c63]">{artwork.medium} · {artwork.size}</p>
                    </div>

                    <div className="lg:pt-12">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#8a6c40]">Enquiry &amp; contact</p>
                        <h2 className="serif mt-4 text-4xl leading-none tracking-[-0.04em]">Make this piece yours.</h2>
                        <p className="mt-5 max-w-lg text-sm leading-7 text-[#716c63]">
                            Share your details and our team will be in touch with availability, delivery, and payment information.
                        </p>

                        <div className="mt-8 border-y border-black/10 py-6 text-sm leading-7">
                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#716c63]">Gallery contact</p>
                            <p className="mt-2">hello@podgallerry.com</p>
                            <p>+234 801 234 5678</p>
                            <p>Lagos, Nigeria</p>
                        </div>

                        <form className="mt-8 space-y-5">
                            <label className="block text-[10px] uppercase tracking-[0.16em]">
                                Full name
                                <input name="name" type="text" required className="mt-2 block w-full border-b border-black/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal outline-none transition placeholder:text-[#9b958a] focus:border-[#8a6c40]" placeholder="Your name" />
                            </label>
                            <label className="block text-[10px] uppercase tracking-[0.16em]">
                                Email address
                                <input name="email" type="email" required className="mt-2 block w-full border-b border-black/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal outline-none transition placeholder:text-[#9b958a] focus:border-[#8a6c40]" placeholder="you@example.com" />
                            </label>
                            <label className="block text-[10px] uppercase tracking-[0.16em]">
                                Your enquiry
                                <textarea name="message" rows={4} required className="mt-2 block w-full resize-none border-b border-black/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal outline-none transition placeholder:text-[#9b958a] focus:border-[#8a6c40]" placeholder={`I am enquiring about ${artwork.title}.`} />
                            </label>
                            <button type="submit" className="w-full bg-[#1d1b18] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#8a6c40]">
                                Send enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}