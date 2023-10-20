"use client";
import Menu from "@/components/layout/NavMenu";
import SignUp from "@/components/layout/SignUp";
import bg from "@/images/empire-tower.png";
import Logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { CgDistributeVertical } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
export default function CustomNav() {
  function formatBreadcrumbText(text: string) {
    return text
      .split("-")
      .map((word) => word.toUpperCase())
      .join(" ");
  }

  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1].replace(/-/g, " ");
  console.log(lastPart);
  return (
    <div className="relative">
      <Image
        src={bg}
        alt=""
        className="h-[16rem] w-full object-cover brightness-[0.6] filter md:h-[26rem]"
      />
      <header className="absolute top-3 z-50 flex w-full items-center justify-between px-4 py-4 md:px-8 md:py-6 lg:px-44 lg:py-10">
        <div className="flex items-center md:gap-20">
          {/* Logo with a link to the homepage */}
          <Link href="/">
            <Image src={Logo} alt="logo" className="h-auto w-16 md:w-20" />
          </Link>
          <nav className="hidden gap-8 md:text-lg lg:flex">
            {/* Home link */}
            <Link href="/" className="text-slate-50 hover:text-lime-300">
              Home
            </Link>
            <div className="group">
              {/* Project dropdown */}
              <span className="flex cursor-pointer items-center gap-1 text-slate-50 hover:text-lime-300">
                Project <FaAngleDown />
              </span>
              {/* Dropdown content */}
              <div className="absolute mt-0 hidden flex-col gap-2 rounded-lg border bg-white p-4 shadow-lg group-hover:flex hover:[&>*]:text-lime-700">
                {/* Ongoing Project link */}
                <Link href="/" className="flex items-center gap-2">
                  <CgDistributeVertical />
                  Ongoing Project
                </Link>
                {/* Upcoming Project link */}
                <Link href="/" className="flex items-center gap-2">
                  <CgDistributeVertical />
                  Upcoming Project
                </Link>
              </div>
            </div>
            {/* Blog link */}
            <Link href="/home" className="text-slate-50 hover:text-lime-300">
              Blog
            </Link>
            {/* About Us link */}
            <Link
              href="/about-us"
              className="text-slate-50 hover:text-lime-300"
            >
              About Us
            </Link>
          </nav>
        </div>
        <div className="flex gap-10">
          <div className="hidden items-center gap-4 md:flex">
            {/* Contact Us button */}
            <button className="rounded-full px-6 py-2 text-white ring-1 ring-white transition-all duration-300 hover:bg-slate-800 hover:ring-black">
              Contact Us
            </button>
            {/* Sign Up component */}
            <SignUp />
          </div>
          <div className="lg:hidden">
            {/* Mobile menu */}
            <Menu />
          </div>
        </div>
      </header>
      <div className="absolute inset-0 mt-20 flex flex-col items-center justify-center gap-6">
        <div className="text-4xl font-bold uppercase text-white">
          {lastPart}
        </div>
        <div className=" flex items-center justify-center gap-3 text-xl text-lime-200 hover:[&>*]:text-lime-500">
          <Link href="/">HOME</Link> <BsArrowRight />
          {pathname
            .split("/")
            .filter((part) => part !== "")
            .map((part, index, parts) => (
              <div key={part} className="flex items-center gap-3">
                {index > 0 ? <BsArrowRight /> : ""}
                <Link href={`/${parts.slice(0, index + 1).join("/")}`}>
                  <span className="flex items-center">
                    {formatBreadcrumbText(part)}
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
