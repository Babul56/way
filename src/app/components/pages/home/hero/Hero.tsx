import HeroImage from "@/app/images/Rectangle10.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaHandsClapping } from "react-icons/fa6";

/**
 * Hero component for the website's landing page.
 */
export default function Hero() {
  return (
    <section className="bg-gradient-to-t from-green-100 to-green-50 px-4 py-10 pt-32 md:px-10 md:pb-12 md:pt-40 lg:px-44 lg:pb-16">
      <div className="grid items-center gap-5 lg:grid-cols-2">
        {/* Welcome and Title Section */}
        <div className="order-2 mt-10 lg:order-1 lg:mt-0 xl:mt-0">
          <span className="text-md flex w-fit items-center gap-2 rounded-3xl bg-lime-200 px-4 py-2 pr-6 font-light text-gray-900 md:text-xl ">
            {/* Welcome message */}
            welcome to way housing
            <FaHandsClapping color="#f4a025" />
          </span>
          <h2 className="hero-text mt-6  text-4xl font-bold leading-tight tracking-wide lg:text-5xl lg:leading-snug">
            {/* Hero title */}
            Your Dream Home
            <br /> Just a Click Away
          </h2>
          <p className="mb-6 mt-6 text-sm md:text-xl">
            {/* Subtitle */}
            Find Your Dream Home Today – One Click, Endless Possibilities.
          </p>
          <Link
            href="/upcoming-project"
            className="md:text-md mt-10 rounded-lg bg-lime-300 px-5 py-3 font-medium text-gray-900 hover:bg-lime-500 lg:text-lg"
          >
            {/* CTA button */}
            Discover More
          </Link>
        </div>
        {/* Hero Image Section */}
        <div className="relative order-1 lg:order-1">
          <div className="relative z-20">
            <Image
              src={HeroImage}
              alt="hero image"
              className="h-full w-full rounded-3xl object-cover md:h-[25rem] lg:h-[31rem] lg:w-[31rem]"
            />
          </div>
          <div className="absolute z-10 hidden h-full w-full rounded-3xl border-2 border-dashed border-green-200 lg:left-8 lg:top-6 lg:block"></div>
          <div className="hide absolute left-0 top-3/4 z-30 rounded-3xl bg-gray-100 px-2 py-1 lg:-left-9 lg:top-3/4">
            <div className="flex items-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-600 text-white">
                <AiFillStar />
              </div>
              <span className="pl-2">5.0</span>
            </div>
          </div>
          <div className="hero-dot absolute hidden h-4 w-4 rounded-3xl bg-yellow-600 lg:-right-20 lg:top-14 lg:block"></div>
        </div>
      </div>
    </section>
  );
}
