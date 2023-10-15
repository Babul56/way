import Logo from "@/app/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CgDistributeVertical } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import Menu from "./NavMenu";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <header className="px-4 flex md:px-8 lg:px-44 py-4 md:py-6 lg:py-10 justify-between items-center">
      <div className="flex items-center md:gap-20">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-16 md:w-20 h-auto" />
        </Link>
        <nav className="hidden lg:flex gap-8">
          <Link href="/" className="hover:text-lime-700">
            Home
          </Link>
          <div className="group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-lime-700">
              Project <FaAngleDown />
            </span>
            <div className="hidden group-hover:flex flex-col gap-2 p-4 absolute mt-0  bg-white border rounded-lg shadow-lg hover:[&>*]:text-lime-700">
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
          <Link href="/home" className="hover:text-lime-700">
            Blog
          </Link>
          <Link href="/home" className="hover:text-lime-700">
            About Us
          </Link>
        </nav>
      </div>
      <div className="flex gap-10">
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-full ring-1 ring-black hover:bg-white transition-all duration-300">
            Contact Us
          </button>
          <SignUp />
        </div>
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
}
