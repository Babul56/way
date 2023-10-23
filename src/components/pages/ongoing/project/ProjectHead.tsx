"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

interface props {
  name: string;
  feature: string;
  district: string;
  type: string;
  date: string;
  price: string;
  pic1: StaticImageData;
  pic2: StaticImageData;
  pic3: StaticImageData;
  overview: string;
}

export default function ProjectHead({
  name,
  feature,
  district,
  type,
  date,
  price,
  pic1,
  pic2,
  pic3,
  overview,
}: props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageSelection = (index: SetStateAction<number>) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="bg-green-50 px-3 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
      <div className="card grid grid-cols-4 grid-rows-4  gap-6">
        <div className="col-span-4 row-span-2 p-0 md:row-span-4 lg:col-span-2 lg:p-10 lg:pl-0 xl:col-span-2">
          <div>
            <h2 className="mb-4 justify-around text-3xl font-bold">{name}</h2>
            <p className="mb-8 justify-around text-lg font-light">{feature}</p>
          </div>
          <div className="border border-lime-300 p-4 lg:p-8">
            <div className="mb-2 flex justify-between">
              <p className=" flex items-center gap-2">
                <MdLocationPin color="#84cc16" size="20" />
                District
              </p>
              <p>{district}</p>
            </div>
            <div className="mb-2 flex items-start justify-between text-right">
              <p className="flex items-center gap-2">
                <BsCheck2Circle color="#84cc16" size="20" />
                Type
              </p>
              <p>{type}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className=" flex items-center gap-3">
                <SlCalender color="#84cc16" />
                Date
              </p>
              <p>{date}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg font-medium text-black">Booking Price</p>
            <p className="py-2 text-3xl font-bold text-lime-500">{price}</p>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="hidden rounded-3xl border border-solid border-white bg-lime-300 px-6 py-1.5 text-lg font-medium  text-black transition duration-200 lg:ml-auto lg:mr-3 lg:inline-block"
            >
              Book Now
            </Link>
            <Link
              href="/contact-us"
              className="hidden rounded-3xl border border-black bg-none px-6 py-1.5 text-lg font-medium text-black transition duration-200 hover:bg-gray-700 hover:text-white lg:inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-span-4 row-span-2 md:row-span-4 lg:col-span-2 xl:col-span-2">
          <div className="flex-shrink-0">
            <div className="flex max-w-full flex-col">
              <Image
                className="h-[23rem] w-full rounded-2xl object-cover"
                src={
                  selectedImageIndex === 0
                    ? pic1
                    : selectedImageIndex === 1
                    ? pic2
                    : pic3
                }
                alt=""
                loading="lazy"
              />

              <div className="mt-4 flex h-[5rem] gap-4 md:h-[7rem]">
                <Image
                  alt=""
                  src={pic1}
                  className={`h-full w-1/3 rounded-xl object-cover ${
                    selectedImageIndex === 0 ? "opacity-100" : "opacity-70"
                  }`}
                  onClick={() => handleImageSelection(0)}
                />
                <Image
                  alt=""
                  src={pic2}
                  className={`h-full w-1/3 rounded-xl object-cover ${
                    selectedImageIndex === 1 ? "opacity-100" : "opacity-70"
                  }`}
                  onClick={() => handleImageSelection(1)}
                />
                <Image
                  alt=""
                  src={pic3}
                  className={`h-full w-1/3 rounded-xl object-cover ${
                    selectedImageIndex === 2 ? "opacity-100" : "opacity-70"
                  }`}
                  onClick={() => handleImageSelection(2)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold">Overview</h2>
        <p className="text-lg font-light">{overview}</p>
      </div>
    </section>
  );
}
