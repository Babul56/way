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

/**
 * Footer component for the website.
 */
export default function Footer() {
  const d = new Date();
  const date = d.getFullYear();

  return (
    <div className="mt-10 flex flex-col gap-10 bg-gray-800 px-3 py-12 md:mt-20 md:px-8 lg:px-32">
      <div className="grid grid-cols-12 gap-3 gap-y-10">
        {/* About Us Section */}
        <div className="col-span-12 flex flex-col gap-6 md:col-span-4">
          <div className="flex items-center justify-center md:justify-start">
            <Image src={Logo} alt="logo" className="h-auto w-20" />
          </div>
          <div className="text-justify text-sm text-slate-300 md:pr-8">
            {/* Company description */}
            Way Housing Pvt. Ltd. is improving and contributing to the culture
            of real estate companies in Bangladesh. Therefore, from the
            beginning, we have set our own standards in line with the
            world-class best practices in the real estate industry. Way Housing
            Pvt. Ltd. focusing on apartment sales in your own town.
          </div>
          <div className="flex gap-4 text-slate-200">
            {/* Social media links */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-lime-700">
              <FaFacebookF />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-lime-700">
              <FaTwitter />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-lime-700">
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* Useful Links Section */}
        <div className="col-span-6 flex flex-col gap-10 md:col-span-2">
          <div className="text-xl font-bold text-slate-100">Useful Links</div>
          <div className="flex flex-col gap-4 text-slate-300 hover:[&>*]:text-lime-500">
            {/* Links to various sections */}
            <Link href="/">Home</Link>
            <Link href="/project">Project</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about_us">About Us</Link>
          </div>
        </div>
        {/* Support Section */}
        <div className="col-span-6 flex flex-col gap-10 md:col-span-2">
          <div className="text-xl font-bold text-slate-100">Support</div>
          <div className="flex flex-col gap-4 text-slate-300 hover:[&>*]:text-lime-500">
            {/* Support-related links */}
            <Link href="/">Help</Link>
            <Link href="/project">Contact Us</Link>
            <Link href="/blog">Career</Link>
            <Link href="/about_us">Terms and Condition</Link>
          </div>
        </div>
        {/* Contact Info Section */}
        <div className="col-span-12 flex flex-col gap-10 md:col-span-4">
          <div className="text-xl font-bold text-slate-100">Contact Info</div>
          <div className="flex flex-col gap-4 text-slate-300">
            {/* Contact details */}
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
      <div className="h-0.5 w-full bg-lime-200"></div>
      <div className="flex items-center justify-center gap-2 text-lg text-slate-50">
        {/* Copyright notice */}
        <AiOutlineCopyrightCircle /> {date} Wayhousing, All Right Reserved
      </div>
    </div>
  );
}
