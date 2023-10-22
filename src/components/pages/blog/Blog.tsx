import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { BlogData } from "./BlogData";

export default function Blog() {
  return (
    <div className="grid gap-16 bg-green-50 px-3 py-20 md:grid-cols-2 md:gap-10 md:px-12 lg:grid-cols-3 lg:gap-16 lg:px-28">
      {BlogData.map((data) => (
        <Link
          key={data.id}
          href={`/blog/${data.slug}`}
          className="group rounded-lg shadow-lg"
        >
          <div className="h-[15rem] w-full overflow-clip rounded-t-lg">
            <Image
              alt="Placeholder"
              className="flex h-auto w-full object-cover transition-all duration-300 group-hover:scale-110"
              src={data.img}
            />
          </div>

          <div className="px-6 py-8">
            <h1 className="text-xl font-bold">{data.name}</h1>
            <p className="text-md py-4 font-normal">{data.sum}</p>
            <span className="flex items-center gap-2 text-lime-700 hover:text-lime-500">
              Load More
              <FaAngleRight />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
