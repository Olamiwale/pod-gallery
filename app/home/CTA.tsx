import Link from "next/link";

export default function CTA() {
  return (
    <>
      <section className="grid bg-[#211f1b] text-[#eee8dd] md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-20">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#b99a67]">
            Commission an artwork
          </p>
          <h2 className="serif mt-5 text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Have a vision?
            <br />
            Let&apos;s create it together.
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/60">
            Share your idea, space, preferred style or story. We&apos;ll work
            together to create an original piece that belongs uniquely to you.
          </p>
          <Link
            href="/contact-book"
            className="mt-10 w-fit border border-white/40 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition duration-300 hover:text-black"
          >
            Start a commission
          </Link>
        </div>
      </section>

      <section className="bg-[#f4efe9] px-6 py-20 text-[#1d1b18] md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8f7249]">
              Contact us
            </p>
            <h3 className="serif mt-5 text-4xl leading-[1.05] tracking-[-0.04em] md:text-5xl">
              Enquire about your next piece.
            </h3>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#1d1b18]/70">
              Whether you&apos;re planning a collection, a bespoke commission or a
              private viewing, we&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-5 text-sm text-[#1d1b18]/80">
              <a
                href="mailto:hello@podgallary.com"
                className="block transition hover:text-[#8f7249]"
              >
                podgallarry@gmail.com
              </a>
              <a
                href="tel:+4402030000000"
                className="block transition hover:text-[#8f7249]">
                234 703 382 1612
              </a>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <form className="border border-[#1d1b18]/10 bg-white p-6 shadow-[0_20px_60px_rgba(29,27,24,0.06)] md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col text-xs uppercase tracking-[0.18em] text-[#1d1b18]/60">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 border border-[#1d1b18]/10 bg-[#f7f3ee] px-4 py-3 text-sm uppercase tracking-[0.04em] text-[#1d1b18] placeholder:text-[#1d1b18]/35 focus:border-[#8f7249] focus:outline-none"
                />
              </label>

              <label className="flex flex-col text-xs uppercase tracking-[0.18em] text-[#1d1b18]/60">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 border border-[#1d1b18]/10 bg-[#f7f3ee] px-4 py-3 text-sm text-[#1d1b18] placeholder:text-[#1d1b18]/35 focus:border-[#8f7249] focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col text-xs uppercase tracking-[0.18em] text-[#1d1b18]/60">
              Enquiry type
              <select
                defaultValue=""
                className="mt-2 border border-[#1d1b18]/10 bg-[#f7f3ee] px-4 py-3 text-sm text-[#1d1b18] focus:border-[#8f7249] focus:outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>Commission</option>
                <option>Private viewing</option>
                <option>Interior styling</option>
                <option>Press / partnership</option>
              </select>
            </label>

            <label className="mt-5 flex flex-col text-xs uppercase tracking-[0.18em] text-[#1d1b18]/60">
              Project details
              <textarea
                rows={5}
                placeholder="Tell us about your space, timeline, and inspiration..."
                className="mt-2 resize-none border border-[#1d1b18]/10 bg-[#f7f3ee] px-4 py-3 text-sm leading-6 text-[#1d1b18] placeholder:text-[#1d1b18]/35 focus:border-[#8f7249] focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex items-center border border-[#1d1b18] px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition duration-300 hover:bg-[#1d1b18] hover:text-[#f4efe9]"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

