"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { OngoingData } from "./OngoingData";

export default function OnGoing() {
  const [itemsToShow, setItemsToShow] = useState(6);

  const toggleShowMore = () => {
    if (itemsToShow === 6) {
      setItemsToShow(OngoingData.length);
    } else {
      setItemsToShow(6);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      className="flex flex-col items-center justify-center gap-20 bg-green-50 px-3 py-10  lg:p-20"
    >
      <motion.div
        variants={container}
        initial={isInView ? "hidden" : "visible"}
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {OngoingData.slice(0, itemsToShow).map((data) => (
          <motion.div variants={item} key={data.id}>
            <Link
              href={`/ongoing-project/${data.slug}`}
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
                <div className="mb-2 flex items-start justify-between text-right">
                  <p className="flex items-center gap-2">
                    <BsCheck2Circle color="#84cc16" size="20" />
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
          </motion.div>
        ))}
      </motion.div>

      <button
        title="Show More Projects"
        onClick={toggleShowMore}
        className="flex items-center justify-center rounded-full bg-lime-400 px-10 py-2 hover:bg-lime-500"
      >
        {itemsToShow === 6 ? "Show More" : "Show Less"}
      </button>
    </motion.div>
  );
}
