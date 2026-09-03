import Link from "next/link";
import { artworks } from "../data/artwork";

export default function Collection() {
    return (
        <section id="collection" className="border-y border-black/10 px-5 py-20 md:px-10 md:py-28">
            <div className="mx-auto max-w-350">
                <div className="flex items-end justify-between gap-8">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#8a6c40]">
                            Featured artworks
                        </p>

                        <h2 className="serif mt-4 max-w-3xl text-4xl leading-none tracking-[-0.04em] md:text-5xl">
                            Curated pieces<br />Timeless expression
                        </h2>
                    </div>

                   
                </div>
                
                <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    {artworks.map((artwork, index) =>

                        <Link href={{ pathname: "/checkout", query: { artwork: artwork.title } }} key={artwork.title} className={`group block ${index === 1 ? "lg:mt-20" : index === 4 ? "lg:mt-12" : ""}`}>

                            <div className="overflow-hidden bg-[#ddd6ca]">
                                <img 
                                src={artwork.image} 
                                alt={artwork.title} 
                                className="block h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
                            </div>
                            <div className="flex items-start justify-between gap-5 pt-4">

                                <div>
                                    <h3 className="serif text-lg">{artwork.title} </h3>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#716c63]">
                                        {artwork.medium} · {artwork.size}

                                    </p>
                                </div>
                            </div>
                        </Link>)}
                </div>
                {/* <Link href="/more-arts" className="mt-14 inline-block text-[10px] uppercase tracking-[0.18em] underline underline-offset-8 md:hidden">View all works →</Link> */}
            </div>
        </section>
    );
}
