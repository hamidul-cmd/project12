import { RiArrowDownLine, RiArrowRightLine } from "@remixicon/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

function IndooorCirds({ data, index }) {
  const [hover, sethover] = useState(false);
  const cirdref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cirdref.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay:0.3,
      ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cirdref.current,
          start: "top 75%",
          end: "bottom 75%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cirdref}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)} // ✅ Fixed here
      className={`relative rounded-20 overflow-hidden group ${
        index === 0 || index === 3 ? "col-span-2" : ""
      }`}
    >
      <img src={data.img} className="h-full w-full object-cover" alt="" />

      <div
        className={`absolute bottom-2.5 left-2.5 right-2.5 rounded-3xl py-5 px-6 text-white space-y-5
        transition-all duration-400 ease-bounce
        translate-y-1/2 group-hover:translate-y-0 translate-x-[-20px] group-hover:translate-x-0
        ${
          hover
            ? "bg-[#ffffff1a] backdrop-blur-[25px]"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <h3 className="text-[70px] font-bold tracking-1.5">{data.title}</h3>
        <p className="text-base tracking-1.5">{data.pera}</p>
      </div>

      <div
        className={`p-3.5 rounded-full border border-white w-fit transition-all duration-200 ease-in cursor-pointer absolute top-2.5 right-2.5 ${
          hover ? "bg-white" : "bg-transparent"
        }`}
      >
        <RiArrowRightLine
          size={34}
          color={hover ? "black" : "white"}
          className="my-icon"
        />
      </div>
    </div>
  );
}

export default IndooorCirds;
