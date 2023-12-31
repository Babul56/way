"use client";
import AnimatedTextWord from "@/components/animation/AnimatedText";
import {
  AnimateFromBottom,
  AnimateFromLeft,
  AnimateFromLeft1,
  AnimateFromRight,
  AnimateFromTop,
} from "@/components/animation/Variants";
import HeroImage from "@/images/Rectangle10.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaHandsClapping } from "react-icons/fa6";

/**
 * Hero component for the website's landing page.
 */
export default function Hero() {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6, once: false }}
      className="bg-gradient-to-t from-green-100 to-green-50 px-4 py-10 pt-32 md:px-10 md:pb-12 md:pt-40 lg:px-44 lg:pb-16"
    >
      <div className="grid items-center gap-5 lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center gap-10 lg:order-1 ">
          <motion.span
            variants={AnimateFromLeft}
            className="text-md flex w-fit items-center gap-2 rounded-3xl bg-lime-200 px-4 py-2 pr-6 font-light text-gray-900 md:text-xl "
          >
            welcome to way housing
            <FaHandsClapping color="#f4a025" />
          </motion.span>
          <motion.h2
            variants={AnimateFromLeft1}
            className="hero-text text-4xl font-bold leading-tight tracking-wide lg:text-5xl lg:leading-snug"
          >
            Your Dream Home Just a Click Away
          </motion.h2>
          <AnimatedTextWord
            text="Find  Your Dream Home Today – One Click, Endless Possibilities."
            size="1.3"
            weight="normal"
            colour="black"
          />
          <motion.div variants={AnimateFromBottom}>
            <Link
              href="/upcoming-project"
              className="md:text-md w-fit rounded-lg bg-lime-300 px-5 py-3 font-medium text-gray-900 hover:bg-lime-500 lg:text-lg"
            >
              Discover More
            </Link>
          </motion.div>
        </div>
        {/* Hero Image Section */}
        <div className="relative order-1 lg:order-1">
          <motion.div variants={AnimateFromRight} className="relative z-20">
            <Image
              src={HeroImage}
              alt="hero image"
              className="h-full w-full rounded-3xl object-cover md:h-[25rem] lg:h-[31rem] lg:w-[31rem]"
            />
          </motion.div>
          <div className="absolute z-10 hidden h-full w-full rounded-3xl border-2 border-dashed border-green-200 lg:left-8 lg:top-6 lg:block"></div>
          <motion.div
            variants={AnimateFromTop}
            className="hide absolute left-0 top-3/4 z-30 rounded-3xl bg-gray-100 px-2 py-1 lg:-left-9 lg:top-3/4"
          >
            <div className="flex items-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-600 text-white">
                <AiFillStar />
              </div>
              <span className="pl-2">5.0</span>
            </div>
          </motion.div>
          <motion.div
            variants={AnimateFromTop}
            className="hero-dot absolute hidden h-4 w-4 rounded-3xl bg-yellow-600 lg:-right-20 lg:top-14 lg:block"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
}
