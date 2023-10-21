"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { UpComingData } from "./UpComingData";

export default function UpComing() {
  const [itemsToShow, setItemsToShow] = useState(6);

  const toggleShowMore = () => {
    if (itemsToShow === 6) {
      setItemsToShow(UpComingData.length);
    } else {
      setItemsToShow(6);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-green-50 px-3 py-10  lg:p-20">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {UpComingData.slice(0, itemsToShow).map((data) => (
          <Link
            href={`/upcoming-project/${data.slug}`}
            key={data.id}
            className="group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              alt="Placeholder"
              className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-110"
              src={data.image}
            />
            <header className="m-4 border-b-2 border-dashed border-green-200 p-4 pl-0">
              <h1 className="text-bl text-xl font-semibold">{data.name}</h1>
            </header>
            <footer className="flex flex-col gap-3 p-4 pt-0">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1">
                  <MdLocationPin color="#a4cd39" size={20} />
                  District
                </p>
                <p>{data.district}</p>
              </div>
              <div className="flex items-start justify-between">
                <p className="flex items-center gap-1">
                  <BsCheck2Circle color="#a4cd39" size={20} />
                  Type
                </p>
                <p>{data.type}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1">
                  <SlCalender color="#a4cd39" size={17} />
                  Date
                </p>
                <p>{data.date}</p>
              </div>
            </footer>
          </Link>
        ))}
      </div>

      <button
        onClick={toggleShowMore}
        className="flex items-center justify-center rounded-full bg-lime-400 px-10 py-2 hover:bg-lime-500"
      >
        {itemsToShow === 6 ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}
