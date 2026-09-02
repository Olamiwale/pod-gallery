export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">

        {/* Image */}
        <div className="order-1">
          <img
            src="/hero.png"
            alt="Original artwork"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="order-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6c40] sm:text-xs">
            Original Artworks
          </p>

          <h1 className="serif mt-5 max-w-2xl text-4xl leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Art that speaks beyond boundaries.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#716c63] sm:mt-8 sm:text-base sm:leading-8">
            Original works created to inspire, provoke and transform spaces.
            Discover pieces available for your collection or commission
            something made specifically for you.
          </p>
        </div>

      </div>
    </section>
  );
}