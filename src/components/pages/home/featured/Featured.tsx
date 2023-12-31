"use client";
import {
  AnimateFromLeft,
  AnimateFromRight,
} from "@/components/animation/Variants";
import Img3 from "@/images/dreamway-tower.jpg";
import Img2 from "@/images/popular-city-tower.jpg";
import Img1 from "@/images/zamzam-tower.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <div className="flex flex-col gap-8 px-3 py-20 md:px-10 md:py-12 lg:px-44 lg:py-16">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.6, once: false }}
        className="flex flex-col md:flex-row md:justify-between"
      >
        <motion.div
          variants={AnimateFromLeft}
          className="mb-4 text-2xl font-bold lg:mb-0 lg:text-3xl"
        >
          Our Featured Property
        </motion.div>
        <motion.div variants={AnimateFromRight}>
          <Link
            href="/ongoing-project"
            className="lg:text-md mx-auto flex w-fit items-center justify-center rounded-3xl bg-lime-300 px-5 py-2 text-base font-medium text-gray-900 hover:bg-lime-500 md:mx-0"
          >
            View All Project
          </Link>
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2">
        <Link
          href="/ongoing-project/zam-zam-tower"
          className=" relative col-span-1 row-span-2 w-full overflow-clip rounded-3xl md:h-[34rem] "
        >
          <div className="group h-full w-full">
            <Image
              src={Img1}
              alt=""
              className="h-full w-full rounded-3xl object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className=" absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-b-3xl bg-gradiantbg p-2">
              <p className="text-lg font-medium text-white">
                Featured | Ongoing Project
              </p>
              <p className="text-xl font-bold text-white">
                Zam Zam Tower, Noakhali
              </p>
              <button className="text-md my-2 rounded-full border border-lime-500 px-5 py-1 font-medium text-white hover:text-lime-500 group-hover:bg-lime-600">
                View Details
              </button>
            </div>
          </div>
        </Link>
        <Link
          href="/ongoing-project/popular-city-plaza"
          className=" relative col-span-1 row-span-1 h-[16rem] w-full overflow-clip rounded-3xl "
        >
          <div className="group">
            <Image
              src={Img2}
              alt=""
              className="h-full w-full rounded-3xl object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className=" absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-b-3xl bg-gradiantbg p-2">
              <p className="text-xl font-bold text-white">
                popular City Plaza, Ramgonj
              </p>
              <button className="text-md my-2 rounded-full border border-lime-500 px-5 py-1 font-medium text-white hover:text-lime-500 group-hover:bg-lime-600">
                View Details
              </button>
            </div>
          </div>
        </Link>
        <Link
          href="/ongoing-project/dream-way-tower-02"
          className=" relative col-span-1 row-span-1 h-[16rem] w-full overflow-clip rounded-3xl "
        >
          <div className="group">
            <Image
              src={Img3}
              alt=""
              className="h-full w-full rounded-3xl object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className=" absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-b-3xl bg-gradiantbg p-2">
              <p className="text-xl font-bold text-white">
                Dream Way Tower 02, Lakshmipur
              </p>
              <button className="text-md my-2 rounded-full border border-lime-500 px-5 py-1 font-medium text-white hover:text-lime-500 group-hover:bg-lime-600">
                View Details
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
