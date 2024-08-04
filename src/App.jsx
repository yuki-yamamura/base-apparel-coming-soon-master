function App() {
  return (
    <div className="grid h-dvh w-dvw grid-rows-10 gap-x-8 bg-[url('/images/bg-pattern-desktop.svg')] bg-cover lg:grid-cols-5 lg:grid-rows-6">
      {/* logo */}
      <div className="row-span-1 ml-4 content-center lg:col-span-2 lg:col-start-2 lg:row-start-2">
        <img src="/images/logo.svg" />
      </div>
      {/* hero */}
      <picture className="row-span-3 lg:col-span-2 lg:row-span-full">
        <source media="(max-width: 1023px)" srcSet="/images/hero-mobile.jpg" />
        <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.jpg" />
        <img src="/images/hero-mobile.jpg" className="size-full" />
      </picture>
      {/* content */}
      <div className="row-span-6 w-full max-w-[445px] content-center justify-self-center px-8 text-center lg:col-span-2 lg:col-start-2 lg:row-start-3 lg:content-start lg:justify-self-start lg:px-0 lg:text-start">
        <h1 className="mb-3 text-[40px] uppercase leading-[1.15] lg:mb-8 lg:text-[64px]">
          <span className="whitespace-pre-wrap tracking-[0.2em]">
            <span className="font-extralight text-softRed">We&apos;re</span>
            <br />
            <span className="font-semibold text-darkGrayish">Coming</span>
            <br />
            <span className="font-semibold text-darkGrayish">Soon</span>
          </span>
        </h1>
        <div className="mb-8 text-softRed lg:mb-10">
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="peer w-full rounded-full border border-softRed py-4 pl-8 text-sm leading-none outline-softRed placeholder:text-softRed invalid:outline-desaturatedRed lg:text-base"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 rounded-[40px] bg-gradient-to-br from-pink-100 to-pink-200 px-7 py-4 hover:bg-pink-100 lg:px-10 lg:py-5"
          >
            <img aria-hidden src="/images/icon-arrow.svg" />
          </button>
          <img
            src="/images/icon-error.svg"
            className="invisible absolute right-20 top-1/2 -translate-y-1/2 peer-invalid:visible lg:right-32"
            aria-hidden
          />
          <alert className="invisible absolute -bottom-8 left-8 text-[13px] text-desaturatedRed peer-invalid:visible">
            Please provide a valid email
          </alert>
        </div>
      </div>
    </div>
  );
}

export default App;
