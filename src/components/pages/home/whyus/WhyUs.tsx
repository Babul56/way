import Other from "@/images/other-p.png";
import Image from "next/image";
import Link from "next/link";

export default function WhyUs() {
  return (
    <section className="bg-white px-6 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
      <div className="card grid grid-cols-4  gap-6">
        <div className="col-span-4 row-span-2 rounded-2xl md:row-span-4 lg:col-span-2 xl:col-span-2">
          <Image
            src={Other}
            alt=""
            className="h-[350px] w-full rounded-2xl object-cover lg:h-[450px]"
          />
        </div>
        <div className="col-span-4 row-span-2 md:row-span-4 lg:col-span-2 xl:col-span-2">
          <div className="lg:pl-10">
            <h2 className="text-2xl font-bold">Why Choose Us?</h2>
            <div className="mt-6">
              <h4 className="pb-2 text-xl font-medium">Easy and Safe</h4>
              <p className="text-md font-light">
                Property is any item that a person or a business has legal title
                over. Property can be tangible items, such as houses, cars
              </p>
            </div>
            <div className="mt-6">
              <h4 className="pb-2 text-xl font-medium">Fast and Efficient</h4>
              <p className="text-md font-light">
                Property is any item that a person or a business has legal title
                over. Property can be tangible items, such as houses, cars
              </p>
            </div>
            <div className="mb-6 mt-6">
              <h4 className="pb-2 text-xl font-medium">
                Suitable For Investment
              </h4>
              <p className="text-md font-light">
                Property is any item that a person or a business has legal title
                over. Property can be tangible items, such as houses, cars
              </p>
            </div>
            <Link
              href="/contact"
              className="md:text-md anim-hero-button mt-6 rounded-3xl bg-lime-300 px-5 py-2 font-medium text-gray-900 hover:bg-lime-500 lg:text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
