/* eslint-disable react/no-unescaped-entities */
import "./App.css";

function App() {
  return (
    <div className="h-dvh w-dvw bg-[url('/images/bg-pattern-desktop.svg')] bg-cover grid lg:grid-cols-5 lg:grid-rows-6 grid-rows-10">
      {/* logo */}
      <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2 content-center row-span-1 ml-4">
        <img src="/images/logo.svg" />
      </div>
      {/* hero */}
      <picture className="lg:col-span-2 lg:row-span-full row-span-3">
        <source media="(max-width: 1023px)" srcSet="/images/hero-mobile.jpg" />
        <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.jpg" />
        <img src="/images/hero-mobile.jpg" className="h-full w-full" />
      </picture>
      {/* content */}
      <div className="lg:col-span-2 lg:col-start-2 max-w-[445px] lg:row-start-3 content-center text-center lg:text-start row-span-6 px-8 lg:px-0 lg:content-start">
        <h1 className="uppercase lg:text-[64px] leading-[1.15] lg:mb-8 text-[40px] mb-3">
          <span className="tracking-[0.2em] whitespace-pre-wrap">
            <span className="text-softRed font-extralight">We're</span>
            <br />
            <span className="font-semibold text-darkGrayish">Coming</span>
            <br />
            <span className="font-semibold text-darkGrayish">Soon</span>
          </span>
        </h1>
        <div className="text-softRed lg:mb-10 mb-8">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="py-4 border border-softRed rounded-full max-w-96 w-full leading-none pl-8 invalid:outline-desaturatedRed outline-softRed peer placeholder-softRed text-sm lg:text-base"
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-pink-100 to-pink-200 py-4 lg:px-10 rounded-[40px] absolute right-0 top-0 hover:bg-pink-100 px-7 lg:right-5 lg:py-5"
          >
            <img aria-hidden src="/images/icon-arrow.svg" />
          </button>
          <img
            src="/images/icon-error.svg"
            className="absolute right-20 lg:right-32 top-1/2 -translate-y-1/2 inv peer-invalid:visible invisible"
            aria-hidden
          />
          <alert className="text-desaturatedRed absolute left-8 -bottom-8 text-[13px] invisible peer-invalid:visible">
            Please provide a valid email
          </alert>
        </div>
      </div>
    </div>
  );
}

export default App;
