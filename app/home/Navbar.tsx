import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-black/10 px-5 md:px-10">
            <nav className="mx-auto flex max-w-[1400px] items-center justify-between py-6" aria-label="Main navigation">
                <Link href="/" className="serif text-xl tracking-[0.28em]" aria-label="ARTERY home">
                    PODGALLERY
                </Link>

                <div className="flex items-center gap-7 text-[10px] uppercase tracking-[0.18em] text-[#716c63]">
                    <Link href="/#collection" className="transition hover:text-[#1d1b18]">
                        Collection
                    </Link>
                    <Link href="/#contact" className="transition hover:text-[#1d1b18]">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}