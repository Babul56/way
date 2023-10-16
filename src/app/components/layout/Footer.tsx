import Logo from "@/app/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {
  FaFacebookF,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const d = new Date();

  const date = d.getFullYear();

  return (
    <div className="bg-gray-800 px-3 md:px-8 lg:px-32 py-12 flex flex-col gap-10">
      <div className="grid grid-cols-12 gap-3 gap-y-10">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
          <div className="flex items-center justify-center md:justify-start">
            <Image src={Logo} alt="logo" className="w-20 h-auto" />
          </div>
          <div className="text-sm text-slate-300 md:pr-8 text-justify">
            Way Housing Pvt. Ltd. is improving and contributing to the culture
            of real estate companies in Bangladesh. Therefore, from the
            beginning, we have set our own standards in line with the
            world-className best practices in the real estate industry. Way
            Housing Pvt. Ltd. focusing on apartment sales in your own town.
          </div>
          <div className="flex gap-4 text-slate-200">
            <div className="flex items-center justify-center h-9 w-9 rounded-full border hover:bg-lime-700">
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center h-9 w-9 rounded-full border hover:bg-lime-700">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center h-9 w-9 rounded-full border hover:bg-lime-700">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-10">
          <div className="text-slate-100 font-bold text-xl">Useful Links</div>
          <div className="flex flex-col gap-4 text-slate-300  hover:[&>*]:text-lime-500">
            <Link href="/">Home</Link>
            <Link href="/project">Project</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about_us">About Us</Link>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-10">
          <div className="text-slate-100 font-bold text-xl">Support</div>
          <div className="flex flex-col gap-4 text-slate-300  hover:[&>*]:text-lime-500">
            <Link href="/">Help</Link>
            <Link href="/project">Contact Us</Link>
            <Link href="/blog">Career</Link>
            <Link href="/about_us">Terms and Condition</Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-10">
          <div className="text-slate-100 font-bold text-xl">Contact Info</div>
          <div className="flex flex-col gap-4 text-slate-300">
            <div className="flex items-center gap-3">
              <FaPhone />
              <div>+8801407100300</div>
            </div>
            <div className="flex items-center gap-3">
              <FaMailBulk />
              <div>info@wayhousing.com</div>
            </div>
            <div className="flex gap-3">
              <FaLocationArrow size="25" />
              <div>
                Corporate Office- Khan ABC Tradeplex, Road# 02, Level-02,
                Dhanmondi, Dhaka-1209.
              </div>
            </div>
            <div className="flex gap-3">
              <FaLocationArrow size="25" />
              <div>
                Head Office-849, East Shewrapara, Prime Bank, 6th Floor, Begum
                Rokeya Ave, Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lime-200 w-full h-0.5"></div>
      <div className="flex gap-2 items-center justify-center text-slate-50 text-lg">
        <AiOutlineCopyrightCircle /> {date} Wayhousing, All Right Reserved
      </div>
    </div>
  );
}
