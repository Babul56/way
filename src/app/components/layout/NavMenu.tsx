"use client";
import Logo from "@/app/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgDistributeVertical } from "react-icons/cg";
import SignUp from "./SignUp";

export default function Menu() {
  const [NavOpen, setNavOpen] = useState(false);

  const HandleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden relative">
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
            NavOpen ? "-rotate-45 duration-300 ease-in-out opacity-0" : ""
          } `}
        ></span>
      </div>
      <div
        className={`fixed top-0 left-0 z-50 flex h-screen w-full transform justify-start  bg-slate-200 bg-opacity-5 backdrop-blur-sm transition duration-300 ease-out  ${
          NavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex w-9/12 flex-col gap-4 bg-white z-50">
          <div className="flex items-center justify-between px-8 py-5 text-primary-200 dark:text-primary-100">
            <Link href={"/"}>
              <Image src={Logo} alt="logo" className="w-16 md:w-20 h-auto" />
            </Link>
            <AiOutlineClose size={24} onClick={HandleClick} />
          </div>
          <hr />
          <div className="flex flex-col gap-8 p-6 ">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <div className=" space-y-6">
              <div className="font-bold">Project</div>
              <div className="flex gap-4 flex-col">
                <Link href="/" className="flex gap-2 items-center">
                  <CgDistributeVertical />
                  Ongoing Project
                </Link>
                <Link href="/" className="flex gap-2 items-center">
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

          <div className="flex flex-col p-4  gap-4">
            <button className="px-6 py-2 rounded-full ring-1 ring-black hover:bg-white transition-all duration-300">
              Contact Us
            </button>
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
