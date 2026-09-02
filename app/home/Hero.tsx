import Link from "next/link";
import { featuredArtwork } from "../data/artwork";

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-[1400px] md:grid-cols-[0.85fr_1.15fr]">

            <div className="flex min-h-[650px] flex-col justify-center px-6 py-20 md:px-12 lg:px-20">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40]">
                    Original artworks</p>

                <h1 className="serif mt-6 max-w-xl text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl">
                    Art that speaks beyond boundaries.</h1>

                <p className="mt-8 max-w-md text-sm leading-7 text-[#716c63]">
                    Original works created to inspire, provoke and transform spaces. Discover pieces available for your collection or commission something made specifically for you.</p>

                <div className="mt-10">
                    <Link href="/more-arts" className="inline-flex items-center bg-[#211f1b] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-black">
                    Explore artworks
                    <span className="ml-8 text-base">→</span></Link>
                </div>
             </div>
             <div className="min-h-[650px] overflow-hidden">
                <img src={featuredArtwork.image} alt={featuredArtwork.alt} className="h-full min-h-[650px] w-full object-cover transition duration-1000 hover:scale-[1.02]" />
                </div>
        </section>
    );
}
