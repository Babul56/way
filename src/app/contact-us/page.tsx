import CustomNav from "@/components/layout/CustomNav";
import bg from "@/images/g-map.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function page() {
  return (
    <div>
      <CustomNav />
      <div>
        <section className="bg-green-50 px-2 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
          <div className="grid items-center gap-5 rounded-xl bg-[#1e3747] p-0 lg:grid-cols-2 lg:p-16">
            <div className="order-1 mt-2 px-2 pb-4 lg:order-1 lg:mt-0 lg:px-10 lg:pl-0 xl:mt-0">
              <h2 className="mb-2 text-center text-2xl font-bold text-white lg:mb-6 lg:text-left">
                Get a quote
              </h2>
              <p className="text-md text-center text-white lg:text-left">
                Feel free to get in touch with us for any inquiries, feedback,
                or assistance. We are dedicated to providing excellent service
                and are eager to hear from you. Whether you have questions about
                our products, want to discuss a project, or just want to say
                hello, we are here for you.
              </p>
              <div className="mb-4 ml-4 mt-6 flex items-center justify-center gap-6 lg:mt-8 lg:justify-start">
                <FaPhone color="#a4cd39" />
                <p className="text-lg font-medium text-white">+8801407100300</p>
              </div>
              <div className="mb-4 flex items-center justify-center lg:justify-start">
                <p className=" flex items-center gap-6 rounded-lg border border-lime-500 p-2 px-4 py-2 text-lg font-medium text-white">
                  <FaMailBulk color="#a4cd39" />
                  <span className="mr-4">info@wayhousing.com</span>
                </p>
              </div>
              <div className="mt-2 flex justify-center gap-4 text-white lg:mt-12 lg:justify-start hover:[&>*]:text-black">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-500 hover:bg-lime-500">
                  <FaFacebookF />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-500 hover:bg-lime-500">
                  <FaTwitter />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-500 hover:bg-lime-500">
                  <FaYoutube />
                </div>
              </div>
            </div>
            <div className="order-1 rounded-2xl bg-none px-4 py-4 lg:order-1 lg:bg-white lg:px-10 lg:py-10">
              <div className="mx-auto max-w-screen-md">
                <form action="#" className="space-y-6">
                  <div className="flex">
                    <input
                      type="email"
                      id="name"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="flex">
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="flex">
                    <input
                      type="email"
                      id="phone"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      id="message"
                      className="block h-32 w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 shadow-sm"
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
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="relative px-2 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
          <Image
            src={bg}
            alt=""
            className="h-[25rem] w-full object-cover md:h-[30rem]"
          />
          <div className="absolute inset-0 my-20 flex flex-col md:mx-20 md:my-32 lg:mx-40 ">
            <div className="px-4 md:px-12 lg:px-44">
              <h2 className="mb-3 text-center text-2xl font-bold">
                Visit Our Website
              </h2>
              <p className="text-center text-lg font-normal">
                Welcome to our online home, where you can explore everything our
                website has to offer. Whether you are a first-time visitor or a
                returning customer, we invite you to navigate through our
                digital space to discover a world of information, products, and
                services that await you.
              </p>
              <a
                href="https://maps.app.goo.gl/jhNuEPq4RMrnrHmq6"
                target="_blank"
              >
                <button className="m-auto mt-6 flex rounded-2xl bg-lime-300 px-8 py-2 font-medium text-gray-900 hover:bg-lime-500 md:text-xl">
                  View Map
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
