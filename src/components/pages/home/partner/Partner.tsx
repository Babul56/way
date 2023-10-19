"use client";
import Client1 from "@/images/client-1.png";
import Client2 from "@/images/client-2.png";
import Client3 from "@/images/client-3.png";
import Client4 from "@/images/client-4.jpg";
import Client5 from "@/images/client-5.jpg";
import Client6 from "@/images/client-6.jpg";
import Client7 from "@/images/client-7.jpg";
import Client8 from "@/images/client-8.png";
import Image from "next/image";
import React, { useEffect } from "react";

const InfiniteScrollAnimation: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(
          ".scroller__inner"
        ) as HTMLElement;
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="mt-20">
      <h1 className="mx-3 my-10 text-4xl font-bold md:mx-24">Our Partner</h1>
      <div className="scroller overflow-hidden">
        <div className="scroller__inner flex animate-scroll gap-4">
          <Image src={Client1} alt="" className="h-24 w-auto" />
          <Image src={Client2} alt="" className="h-24 w-auto" />
          <Image src={Client3} alt="" className="h-24 w-auto" />
          <Image src={Client4} alt="" className="h-24 w-auto" />
          <Image src={Client5} alt="" className="h-24 w-auto" />
          <Image src={Client6} alt="" className="h-24 w-auto" />
          <Image src={Client7} alt="" className="h-24 w-auto" />
          <Image src={Client8} alt="" className="h-24 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimation;
