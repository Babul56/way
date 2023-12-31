"use client";
import Image from "next/image";
import Link from "next/link";
import { BsCheck2Circle } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { OngoingData } from "../../ongoing/OngoingData";
import "./style.css";

export default function OtherProperty() {
  return (
    <>
      <div className=" mx-4 mb-10 mt-10 text-3xl font-bold md:mx-16  md:text-4xl">
        Our Other&#39;s Property
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mb-10 w-11/12 pb-10"
      >
        {OngoingData.map((data) => (
          <SwiperSlide key={data.id} className="mb-16">
            <Link
              href={`/ongoing-project/${data.slug}`}
              className="swiper-slide flex items-center justify-center rounded-2xl border border-gray-200"
            >
              <div className="h-full w-full">
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={data.image}
                  />

                  <div>
                    <header className="m-4 border-b-2 border-dashed border-green-200 p-4 pl-0">
                      <h1 className="text-xl font-semibold text-black">
                        {data.name}
                      </h1>
                    </header>
                    <footer className="p-4 pt-0">
                      <div className="flex p-2">
                        <p className="mr-auto flex items-center gap-2">
                          <MdLocationPin color="#a4cd39" />
                          District
                        </p>
                        <p>{data.district}</p>
                      </div>
                      <div className="flex p-2 pt-0">
                        <p className="mr-auto flex gap-2">
                          <BsCheck2Circle color="#a4cd39" />
                          Type
                        </p>
                        <p className="text-right">{data.type}</p>
                      </div>
                      <div className="flex p-2 pt-0">
                        <p className="mr-auto flex items-center gap-2">
                          <SlCalender color="#a4cd39" />
                          Date
                        </p>
                        <p>{data.date}</p>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
