import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the people, process, and purpose behind PODGALLERY, where art finds a home.",
  openGraph: {
    title: "About Us | PODGALLERY",
    description:
      "Discover the people, process, and purpose behind PODGALLERY, where art finds a home.",
  },
};

const values = [
  {
    title: "Creativity",
    description: "We believe creativity has the power to transform how we see and experience the world.",
  },
  {
    title: "Storytelling",
    description: "Every artwork carries a story, and every collector becomes part of that story.",
  },
  {
    title: "Authenticity",
    description: "We value originality, individuality, and the unique voice behind every creation.",
  },
  {
    title: "Community",
    description: "We believe art brings people together and creates meaningful connections.",
  },
  {
    title: "Excellence",
    description: "From creation to presentation, we produce and deliver beautiful work with intention and care.",
  },
];

const artists = [
  {
    name: "Kelvin Mathew Ijiko",
    image: "/artist3.jpeg",
    description:
      "Kelvin Mathew Ijiko is a Lagos-based contemporary visual artist whose practice explores philosophy, religion, culture, identity, and memory through pyrography, charcoal on canvas and papers, pastels, acrylic on canvas and many other conventional materials. Drawing from his upbringing in Benue State, he fuses realism, surrealism, and abstraction to create thought-provoking visual narratives. His work has been exhibited nationally and internationally, including Dakar Biennale and LIMCAF",

      statement: "My practice explores African philosophy through pyrography, using fire, line, form, and wood as tools for visual inquiry and communication. I am interested in how philosophical thought shapes the ways we understand ourselves, our communities, our beliefs, and the world around us. My work is grounded in five interconnected branches of philosophy: logic, aesthetics, metaphysics, ethics, and epistemology.",
  },
  {
    name: "Koke Xavier",
    image:
      "/artist2.jpeg",
    description:
      "Xavier is a contemporary visual artist whose practice explores human experience through painting and mixed-media works. Working primarily with acrylics, he combines figurative elements, symbolism, surrealism, and expressive mark-making to examine perception, emotion, memory, and the complexities of everyday life. His creative process often begins with an idea, observation, or human experience, which he develops through layered imagery, colour, distortion, and symbolic forms. His works invite viewers to look beyond the literal image and engage with the different experiences and interpretations that exist within it.",
  },

  {
    name: "Ayomide Adegbite",
    image:
      "/artist1.jpeg",
    description:
      "Their preferred medium is painting and mixed-media-inspired visual art, combining bold colours, figurative forms, line work, and symbolism. The creative process begins with an idea or emotion, gradually developing through experimentation, layering, and thoughtful composition.Through their art, the artist tells stories of resilience, transformation, individuality, and the many roles women embody—inviting viewers to see beauty not only in who we are, but also in who we are becoming",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f8f6f1] text-[#1d1b18]">
      <Navbar />

      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40] sm:text-xs">
            About PODGALLERY
          </p>
          <h1 className="serif mt-5 max-w-3xl text-3xl leading-[0.94] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Where art finds a home.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#716c63] sm:text-lg">
            Welcome to PODGALLERY, a creative space where art, culture, imagination,
            and storytelling come together.
          </p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40]">Our story</p>
            <h2 className="serif mt-4 max-w-md text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Art that gives a space its soul.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-sm leading-7 text-[#716c63] sm:text-base sm:leading-8">
            <p>
              We believe that art is more than something beautiful to look at. Art has
              the power to transform a space, preserve emotions, start conversations,
              and tell stories that words sometimes cannot.
            </p>
            <p>
              At PODGALLERY, we curate and create artworks that bring personality,
              warmth, depth, and meaning into homes, offices, and everyday spaces.
              Every creation is an invitation to experience beauty differently.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
        <div className="overflow-hidden bg-[#e7dfd2]">
          <Image
            src="/owner.png"
            alt="Portrait of Aderolake Oyedotun, founder and creative director"
            width={1000}
            height={1250}
            className="aspect-[4/5] h-full w-full object-cover grayscale-[20%]"
          />
        </div>
        <div className="self-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40]">Meet the owner</p>
          <h2 className="serif mt-4 text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
            Aderolake Oyedotun
          </h2>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#716c63]">
            Founder &amp; Creative Director
          </p>
          <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-[#716c63] sm:text-base sm:leading-8">
            <p>
              PODGALLERY was founded by Aderolake Oyedotun, a creative entrepreneur
              with a deep appreciation for beauty, storytelling, design, and the
              transformative power of art.
            </p>
            <p>
              Aderolake believes that art should not only exist within the walls of
              galleries. It should live with us, inspire our workspaces, welcome our
              guests, and become part of the stories we tell.
            </p>
            <p>
              Her vision is simple: to make meaningful art accessible, relatable, and
              a beautiful part of everyday living.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#211f1b] px-5 py-16 text-[#eee8dd] sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c6a979]">Meet the studio artists</p>
            <h2 className="serif mt-4 text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              The hands behind the art.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Behind every PODGALLERY piece is a story. Our studio artists bring ideas,
              emotions, culture, and imagination to life through their work.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:gap-12">
            {artists.map((artist) => (
              <article key={artist.name} className="grid gap-6 sm:grid-cols-[0.7fr_1fr] sm:items-end">
                <div className="overflow-hidden bg-[#403b34]">
                  <Image
                    src={artist.image}
                    alt={`${artist.name}, PODGALLERY studio artist`}
                    width={900}
                    height={1125}
                    className="aspect-[4/5] h-full w-full object-cover grayscale-[20%]"
                  />
                </div>
                <div>
                  <h3 className="serif text-3xl tracking-[-0.03em]">{artist.name}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#c6a979]">Studio Artist</p>
                  <p className="mt-5 text-sm leading-7 text-white/60">{artist.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40]">Our creative process</p>
            <h2 className="serif mt-4 max-w-lg text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
              From inspiration to your walls.
            </h2>
          </div>
          <div className="space-y-6 text-sm leading-7 text-[#716c63] sm:text-base sm:leading-8">
            <p>
              Every artwork begins with an idea. Sometimes it begins with a feeling;
              sometimes with nature, culture, femininity, architecture, colour, or the
              beauty found in everyday life.
            </p>
            <p>
              Our creative process takes each idea through exploration,
              experimentation, and craftsmanship. From concept development to the final
              finishing touches, we pay attention to the details that make every artwork
              special.
            </p>
            <p>The result is art created not just to fill a wall, but to bring life to a space.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40]">What guides us</p>
              <h2 className="serif mt-4 text-4xl leading-tight tracking-[-0.04em] sm:text-4xl">Our values.</h2>
            </div>
            <div className="divide-y divide-black/10">
              {values.map((value) => (
                <div key={value.title} className="grid gap-3 py-6 sm:grid-cols-[0.5fr_1fr] sm:gap-8">
                  <h3 className="serif text-2xl">{value.title}</h3>
                  <p className="text-sm leading-7 text-[#716c63]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 sm:py-32">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40]">Our mission &amp; vision</p>
        <h2 className="serif mt-5 text-4xl leading-tight tracking-[-0.04em] sm:text-4xl">
          Art for your space. Stories for your soul.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#716c63] sm:text-base sm:leading-8">
          We create and curate meaningful artworks that inspire people, transform
          spaces, and make art an accessible part of everyday life. Welcome to
          PODGALLERY, where art finds a home.
        </p>
      </section>

      <Footer />
    </main>
  );
}