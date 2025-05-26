import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

function CommonTitle({ title, pera }) {
  const commontitleref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(commontitleref.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: commontitleref.current,
          start: "top 75%",
          end: "bottom 75%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div
        ref={commontitleref}
        className={`flex flex-wrap mb-10 items-center ${
          pera ? " justify-between" : "justify-center"
        }`}
      >
        <h1 className="text-[125px] tracking-[-5%] text-black font-extrabold text-center">
          {title}
        </h1>
        {pera && (
          <p className="max-w-[619px] text-lg font-semibold text-black text-center m-auto">
            {pera}
          </p>
        )}
      </div>
    </>
  );
}

export default CommonTitle;
