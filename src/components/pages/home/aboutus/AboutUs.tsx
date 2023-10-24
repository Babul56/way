"use client";

import {
  AnimateFromLeft,
  AnimateFromRight,
} from "@/components/animation/Variants";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.4, once: false }}
      className="mb-28 bg-white px-4 md:px-10 md:py-12 lg:px-44 lg:py-20"
    >
      <div className="grid grid-cols-4  gap-10">
        <motion.div
          variants={AnimateFromLeft}
          className=" order-2 col-span-4 rounded-2xl bg-gray-50 lg:order-1 lg:col-span-2 xl:col-span-2"
        >
          <div className="mx-auto max-w-screen-md ">
            <form action="#" className="space-y-6">
              <div className="flex">
                <input
                  type="name"
                  id="name"
                  className="mr-2 w-full rounded-md bg-gray-200 p-2.5 text-sm text-gray-900"
                  placeholder="Name"
                  required
                />
                <input
                  type="phone"
                  id="phone"
                  className="ml-2 w-full rounded-md bg-gray-200 p-2.5 text-sm text-gray-900"
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="focus:ring-primary-500 focus:border-primary-500   mr-3 block w-full rounded-lg bg-gray-200 p-2.5 text-sm  text-gray-900 shadow-sm outline-none"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  className="block h-40 w-full rounded-lg bg-gray-200 p-2.5 text-sm text-gray-900 shadow-sm outline-none"
                  placeholder="Type Your Messages..."
                ></textarea>
              </div>
              <div>
                <button className="text-md mt-6 w-full rounded-3xl bg-lime-300 px-5 py-2 font-medium text-gray-900 hover:bg-lime-500 md:text-xl">
                  Send Messages
                </button>
              </div>
            </form>
          </div>
        </motion.div>
        <motion.div
          variants={AnimateFromRight}
          className="order-1 col-span-4  flex flex-col justify-center lg:order-2 lg:col-span-2 xl:col-span-2"
        >
          <h2 className="mb-6 text-3xl font-bold">
            What to Know More Details About us?
          </h2>
          <p className="text-justify text-lg">
            Way Housing Pvt. Ltd, is started its journey in 2013 having the
            motto of “Build for better future”. We are very much passionate in
            order to establish our theme. We believe in sustainable development
            which can ensure a better future. Our most important business focus
            on regional development. We are developing quality living services
            within optimum budget. Our two major services are residential
            apartment and shop space for the commercial purpose. Both products
            are designed considering the ability and expectations of mass
            peoples. We are working with our vision. We have a good numbers
            ongoing projects of which some are completed and some are to be
            completed very soon.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
