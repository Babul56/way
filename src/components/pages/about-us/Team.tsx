"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { TeamData } from "./TeamData";

export default function Team() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Function to calculate items per page based on screen size
  function getItemsPerPage() {
    const innerWidth = window.innerWidth;
    return innerWidth < 768 ? 1 : innerWidth < 1024 ? 2 : 3;
  }

  useEffect(() => {
    // Dynamically import window object for client-side rendering
    const dynamicWindow = typeof window !== "undefined" ? window : null;
    if (dynamicWindow) {
      dynamicWindow.addEventListener("resize", handleResize);
    }

    // Update itemsPerPage when the window is resized
    function handleResize() {
      setItemsPerPage(getItemsPerPage());
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      if (dynamicWindow) {
        dynamicWindow.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(TeamData.length / itemsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return TeamData.slice(startIndex, endIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-green-50 py-10 md:px-6 lg:px-44">
      <div className="px-2 text-3xl font-bold md:text-4xl">
        Meet Our Team Member
      </div>
      <div className="flex gap-10">
        {getPaginatedData().map((data) => (
          <div
            key={data.id}
            className="flex w-[20rem] flex-col justify-center rounded-lg pb-4 shadow-2xl"
          >
            <Image
              src={data.image}
              alt=""
              className="h-[18rem] w-full rounded-t-lg object-cover"
            />
            <div className="flex flex-col justify-center gap-3 text-center md:m-4">
              <div className="text-2xl font-bold">{data.name}</div>
              <div className="text-lg">{data.title}</div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black hover:bg-lime-500">
                  <FaFacebookF />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black hover:bg-lime-500">
                  <FaTwitter />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black hover:bg-lime-500">
                  <FaPinterest />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mx-1 rounded-md px-3  py-2 text-gray-700 hover:bg-lime-500 hover:text-white md:mx-2 md:px-4 ${
            currentPage === 1 ? "bg-lime-400" : "bg-gray-200"
          }`}
        >
          <FaAnglesLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 rounded-md px-3  py-2 text-gray-700 hover:bg-lime-500 hover:text-white md:mx-2 md:px-4 ${
              currentPage === number ? "bg-lime-400" : "bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= TeamData.length}
          className={`mx-1 rounded-md px-3  py-2 text-gray-700 hover:bg-lime-500 hover:text-white md:mx-2 md:px-4 ${
            currentPage === totalPages ? "bg-lime-400" : "bg-gray-200"
          }`}
        >
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
}
