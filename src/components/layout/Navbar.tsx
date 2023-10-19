import Logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CgDistributeVertical } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import Menu from "./NavMenu";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    // Header section with flexible layout
    <header className="absolute z-50 flex w-full items-center justify-between px-4 py-4 md:px-8 md:py-6 lg:px-44 lg:py-10">
      <div className="flex items-center md:gap-20">
        {/* Logo with a link to the homepage */}
        <Link href="/">
          <Image src={Logo} alt="logo" className="h-auto w-16 md:w-20" />
        </Link>
        <nav className="hidden gap-8 md:text-lg lg:flex">
          {/* Home link */}
          <Link href="/" className="hover:text-lime-700">
            Home
          </Link>
          <div className="group">
            {/* Project dropdown */}
            <span className="flex cursor-pointer items-center gap-1 hover:text-lime-700">
              Project <FaAngleDown />
            </span>
            {/* Dropdown content */}
            <div className="absolute mt-0 hidden flex-col gap-2 rounded-lg border  bg-white p-4 shadow-lg group-hover:flex hover:[&>*]:text-lime-700">
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
          <Link href="/home" className="hover:text-lime-700">
            Blog
          </Link>
          {/* About Us link */}
          <Link href="/home" className="hover:text-lime-700">
            About Us
          </Link>
        </nav>
      </div>
      <div className="flex gap-10">
        <div className="hidden items-center gap-4 md:flex">
          {/* Contact Us button */}
          <Link
            href="/contact-us"
            className="rounded-full px-6 py-2 ring-1 ring-black transition-all duration-300 hover:bg-white"
          >
            Contact Us
          </Link>
          {/* Sign Up component */}
          <SignUp />
        </div>
        <div className="lg:hidden">
          {/* Mobile menu */}
          <Menu />
        </div>
      </div>
    </header>
  );
}
