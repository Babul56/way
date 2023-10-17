"use client";
import Logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgDistributeVertical } from "react-icons/cg";
import SignUp from "./SignUp";

/**
 * Mobile menu component for the website.
 */
export default function Menu() {
  const [NavOpen, setNavOpen] = useState(false);

  /**
   * Toggles the mobile menu open or closed.
   */
  const HandleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="relative lg:hidden">
      {/* Hamburger icon for opening the menu */}
      <div
        className={`z-40 flex flex-col gap-1 p-3 duration-300 ${
          NavOpen ? "rotate-[360deg] opacity-0" : ""
        }`}
        onClick={HandleClick}
      >
        <span
          className={`h-0.5 w-6 bg-lime-500 duration-300 ${
            NavOpen ? "translate-y-1.5 rotate-45 opacity-0" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-lime-500 duration-300  ${
            NavOpen ? "hidden" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-lime-500 duration-300 ${
            NavOpen ? "-rotate-45 opacity-0 duration-300 ease-in-out" : ""
          } `}
        ></span>
      </div>

      {/* Mobile menu content */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen w-full transform justify-start  bg-slate-200 bg-opacity-5 backdrop-blur-sm transition duration-300 ease-out  ${
          NavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="z-50 flex w-9/12 flex-col gap-4 bg-white">
          {/* Header with logo and close button */}
          <div className="text-primary-200 dark:text-primary-100 flex items-center justify-between px-8 py-5">
            <Link href={"/"}>
              <Image src={Logo} alt="logo" className="h-auto w-16 md:w-20" />
            </Link>
            <AiOutlineClose size={24} onClick={HandleClick} />
          </div>
          <hr />
          <div className="flex flex-col gap-8 p-6">
            {/* Menu links */}
            <Link href="/" className="font-bold">
              Home
            </Link>
            <div className=" space-y-6">
              <div className="font-bold">Project</div>
              <div className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2">
                  <CgDistributeVertical />
                  Ongoing Project
                </Link>
                <Link href="/" className="flex items-center gap-2">
                  <CgDistributeVertical />
                  Upcoming Project
                </Link>
              </div>
            </div>
            <Link href="/" className="font-bold">
              About Us
            </Link>
            <Link href="/" className="font-bold">
              Blog
            </Link>
          </div>
          <hr />

          <div className="flex flex-col gap-4  p-4">
            {/* Contact Us button */}
            <button className="rounded-full px-6 py-2 ring-1 ring-black transition-all duration-300 hover:bg-white">
              Contact Us
            </button>
            {/* Sign Up component */}
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
