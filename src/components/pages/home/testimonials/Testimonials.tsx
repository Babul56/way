"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialData } from "./TestimonialData";

export default function Testimonials() {
  return (
    <div className="my-24">
      <div className="mx-3 text-3xl font-bold md:mx-24 md:text-4xl">
        What Our Client Says?
      </div>
      <div className="mt-10">
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
          {TestimonialData.map((data) => (
            <SwiperSlide key={data.id} className="mb-16">
              <div className="flex flex-col gap-6 rounded-lg border-2 bg-slate-50 p-5">
                <div className="flex items-center gap-4">
                  <Image
                    src={data.image}
                    alt=""
                    className=" h-16 w-16 rounded-full object-cover"
                  />

                  <div className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">{data.name}</div>
                    <div className="text-sm text-gray-500">{data.title}</div>
                  </div>
                </div>
                <div className="flex gap-1 text-orange-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>{data.des}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
