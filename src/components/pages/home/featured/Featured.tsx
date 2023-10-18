import Img3 from "@/images/dreamway-tower.jpg";
import Img2 from "@/images/popular-city-tower.jpg";
import Img1 from "@/images/zamzam-tower.jpg";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="flex flex-col gap-8 px-3 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
      <div className="flex justify-between">
        <div className="mb-4 text-2xl font-bold lg:mb-0 lg:text-3xl">
          Our Featured Property
        </div>
        <button className="lg:text-md rounded-3xl bg-lime-300 px-5 py-2 text-base font-medium text-gray-900 hover:bg-lime-500">
          View All Project
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2">
        <div className=" relative col-span-1 row-span-2 w-full overflow-clip rounded-3xl md:h-[34rem] ">
          <Image
            src={Img1}
            alt=""
            className="h-full w-full rounded-3xl object-cover transition-all duration-300 hover:scale-110"
          />
          <div className=" bg-gradiantbg absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-b-3xl p-2">
            <p className="text-lg font-medium text-white">
              Featured | Ongoing Project
            </p>
            <p className="text-xl font-bold text-white">
              Zam Zam Tower, Noakhali
            </p>
            <button className="text-md mt-2 border border-lime-500 px-2 font-medium text-white hover:text-lime-500">
              View Details
            </button>
          </div>
        </div>
        <div className=" relative col-span-1 row-span-1 h-[16rem] w-full overflow-clip rounded-3xl ">
          <Image
            src={Img2}
            alt=""
            className="h-full w-full rounded-3xl object-cover transition-all duration-300 hover:scale-110"
          />
          <div className=" bg-gradiantbg absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-b-3xl p-2">
            <p className="text-xl font-bold text-white">
              popular City Plaza, Ramgonj
            </p>
            <button className="text-md mt-2 border border-lime-500 px-2 font-medium text-white hover:text-lime-500">
              View Details
            </button>
          </div>
        </div>
        <div className=" relative col-span-1 row-span-1 h-[16rem] w-full overflow-clip rounded-3xl ">
          <Image
            src={Img3}
            alt=""
            className="h-full w-full rounded-3xl object-cover transition-all duration-300 hover:scale-110"
          />
          <div className=" bg-gradiantbg absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 rounded-b-3xl p-2">
            <p className="text-xl font-bold text-white">
              Dream Way Tower 02, Lakshmipurj
            </p>
            <button className="text-md mt-2 border border-lime-500 px-2 font-medium text-white hover:text-lime-500">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
