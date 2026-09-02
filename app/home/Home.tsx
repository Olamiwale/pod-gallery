import CTA from "./CTA";
import Collection from "./Collection";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main id="top" className="bg-white text-[#1d1b18]">
      <Navbar />
      <Hero />
      <Collection />
      <CTA />
      <Footer />
    </main>
  );
}
