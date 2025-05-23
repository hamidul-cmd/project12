import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import leaf from "../assets/leaf.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import leafcapsule1 from "../assets/leafcapsule1.png";
import leafcapsule2 from "../assets/leafcapsule2.png";
import leafcapsule3 from "../assets/leafcapsule3.png";
import {
  RiArrowDownFill,
  RiArrowDownLine,
  RiHeartFill,
} from "@remixicon/react";

function Hero() {
  const leftlinks = ["home", "contact", "blog"];
  const rightlinks = ["Shop", "Log in"];
  const lefttextref = useRef(null);
  const righttextref = useRef(null);
  const leafref = useRef(null);
  const [scrollDir, setScrollDir] = useState(null);
  const lastScrollY = useRef(0);
  const leafcapsule = [leafcapsule1, leafcapsule2, leafcapsule3];
  const [arrowactive, setarrowactive] = useState(false);
  useGSAP(() => {
    gsap.from(lefttextref.current, {
      translateX: -150,
      duration: 2.5,
      ease: "power4.out",
    });
    gsap.from(righttextref.current, {
      translateX: 150,
      duration: 2.5,
      ease: "power4.out",
    });
    gsap.from(leafref.current, {
      scale: 0.7,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });
  });
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      if (direction !== scrollDir) {
        setScrollDir(direction);

        if (leafref.current) {
          gsap.to(leafref.current, {
            rotate: direction === "down" ? 10 : 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDir]);
  return (
    <>
      <section className="p-2.5 w-full h-screen">
        <div className="hero__bg w-full h-full rounded-[40px] relative">
          <header className="text-white flex justify-between items-center px-[45px] py-[37px] mb-[130px] relative z-[500]">
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="block p-2.5 rounded-full border border-white blur_10 w-fit"
              >
                <svg
                  width="40"
                  height="38"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9995 8.60991C17.907 11.162 16.8157 14.3365 16.9034 17.6871L16.9247 18.4988L15.3802 18.1368L14.2529 16.956C14.2944 15.0283 14.6696 13.1442 15.3715 11.3443C16.7136 7.90256 18.6664 6.09923 19.9995 4.76605L20.5294 6.90926L19.9995 8.60991Z"
                    fill="white"
                  />
                  <path
                    d="M16.0733 9.78378C15.8268 10.2639 15.5909 10.7819 15.3715 11.3444C14.7613 12.9092 14.3983 14.5377 14.2866 16.203C15.4508 16.4362 16.3593 16.7789 16.902 17.0172C16.9495 14.7408 17.5437 12.5609 18.6281 10.6208C17.6667 10.1004 16.7514 9.87691 16.0733 9.78378Z"
                    fill="white"
                  />
                  <path
                    d="M9.89792 26.1059C13.2224 26.6485 16.5412 25.944 19.3073 24.2488L19.9995 23.8246L20.5294 25.5619L19.9995 26.9094C17.5782 28.237 14.8676 28.9352 12.1109 28.9354C9.68332 28.9355 8.08147 28.4341 6.56873 28.0288L8.13251 26.5957L9.89792 26.1059Z"
                    fill="white"
                  />
                  <path
                    d="M12.7377 26.2709C13.3755 27.1672 13.7062 28.1064 13.8775 28.8393C16.0181 28.6062 18.098 27.952 19.9995 26.9094L20.0341 26.8216C19.8332 25.7584 19.4379 24.9227 19.1068 24.3687C17.1807 25.5052 14.9979 26.1673 12.7377 26.2709Z"
                    fill="white"
                  />
                  <path
                    d="M30.1011 26.1059C28.9368 23.017 26.7333 20.4847 23.7879 18.8862L23.0743 18.4988L24.3718 17.2197L25.746 16.956C27.395 17.9557 28.8395 19.2228 30.0473 20.731C32.3566 23.614 32.9413 26.2044 33.4302 28.0289L31.8309 27.635L30.1011 26.1059Z"
                    fill="white"
                  />
                  <path
                    d="M24.6215 19.3762C26.5078 20.5729 28.0437 22.1773 29.1391 24.0735C30.0344 23.4692 30.6611 22.7655 31.0807 22.1704C30.7803 21.7005 30.4392 21.22 30.0475 20.731C28.9896 19.4102 27.7503 18.2742 26.351 17.3409C25.7265 18.2461 25.0919 18.9275 24.6215 19.3762Z"
                    fill="white"
                  />
                  <path
                    d="M12.7325 37.6377C10.2371 37.6377 7.74171 36.099 5.92488 34.3589C-4.17481 24.2594 -0.622017 7.16291 12.5101 1.83765C25.5582 -3.45334 39.9041 6.13316 39.9041 20.2845C39.9041 30.3227 32.5432 37.6377 27.2673 37.6377C23.0159 37.6377 20.5118 33.2686 21.4406 28.8606C23.0978 20.9969 27.9009 21.1163 30.3744 14.3326C25.4414 13.3358 22.7456 14.7849 19.9996 16.4678C17.2572 14.7871 14.5765 13.332 9.62463 14.3326C12.0954 21.1087 16.9036 21.008 18.5585 28.8606C19.4888 33.276 16.9779 37.6375 12.7325 37.6377ZM7.77821 32.4653C13.7997 37.9734 16.7842 33.2904 15.9659 29.407C14.4216 22.0786 9.23907 22.7258 6.64847 13.7413L6.27446 12.444C10.089 11.4219 14.4327 10.2513 19.9996 13.3779C22.4499 12.0017 24.8049 11.3569 27.3518 11.3569C29.9025 11.3569 31.9857 11.9781 33.7246 12.444L33.3506 13.7413C30.7603 22.7245 25.5777 22.077 24.0332 29.407C23.2166 33.2819 26.1844 37.9871 32.2208 32.4653C38.9287 25.7361 38.9217 14.8046 32.2007 8.08339C25.4573 1.33998 14.5423 1.33946 7.79824 8.08339C1.07721 14.8046 1.07025 25.7362 7.77821 32.4653Z"
                    fill="white"
                  />
                  <path
                    d="M23.9024 30.5326C23.9119 30.1563 23.9552 29.7778 24.0334 29.407C24.5228 27.0844 25.3776 25.5628 26.3993 24.2819C25.2659 24.0808 24.3294 23.7624 23.6677 23.4889C22.7376 24.8215 21.944 26.4726 21.4408 28.8607C21.3855 29.123 21.3428 29.385 21.3115 29.646C22.2964 30.2003 23.2343 30.4349 23.9024 30.5326Z"
                    fill="white"
                  />
                  <path
                    d="M8.93475 18.8797C10.3711 21.0683 11.9874 22.3574 13.3486 23.9759C14.0228 23.1282 14.6959 22.4938 15.2048 22.069C13.7991 20.474 12.2439 19.1831 10.9494 17.0876C10.0249 17.6506 9.36964 18.3237 8.93475 18.8797Z"
                    fill="white"
                  />
                  <path
                    d="M27.3425 14.0064C27.2446 13.0001 26.9556 12.0561 26.6955 11.3718C24.4844 11.4703 22.4023 12.0725 20.2544 13.2375C20.7557 14.3429 20.9168 15.2604 20.9537 15.8969C22.7732 14.8446 24.6857 14.0045 27.3425 14.0064Z"
                    fill="white"
                  />
                  <path
                    d="M6.56873 28.0289C7.0181 26.3519 7.5927 23.6761 9.9516 20.731C11.1595 19.2228 12.6039 17.9557 14.2529 16.956L16.9246 18.4988L16.211 18.8862C13.2657 20.4848 11.0622 23.017 9.89792 26.106L6.56873 28.0289Z"
                    fill="white"
                  />
                  <path
                    d="M33.4303 28.0288L32.1508 28.3717C27.9986 29.4843 23.6745 28.9244 19.9995 26.9094V23.8246L20.6918 24.2488C23.4566 25.9433 26.7745 26.6487 30.1011 26.1058L33.4303 28.0288Z"
                    fill="white"
                  />
                  <path
                    d="M23.0744 18.4988L23.0956 17.6871C23.1834 14.3365 22.092 11.1619 19.9995 8.60991V4.76605L20.9362 5.70278C24.0502 8.81671 25.6583 12.8758 25.7461 16.9559L23.0744 18.4988Z"
                    fill="white"
                  />
                </svg>
              </a>
              {leftlinks.map((link, index) => {
                return (
                  <a
                    href="#"
                    key={index}
                    className="block px-12.5 py-4.8 rounded-full text-lg font-medium tracking-[-1.5%] border border-white capitalize hover:bg-white hover:text-black transition-all duration-300 leading-5.5"
                  >
                    {link}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="block p-4.8 rounded-full border border-white w-fit"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177Z"
                    fill="white"
                  />
                </svg>
              </a>
              {rightlinks.map((link, index) => {
                return (
                  <a
                    href="#"
                    key={index}
                    className="block px-12.5 py-4.8 rounded-full text-lg font-medium tracking-[-1.5%] border border-white capitalize hover:bg-white hover:text-black transition-all duration-300 leading-5.5"
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </header>
          <div className="text-white w-full flex flex-col items-center m-auto relative">
            <div className="w-full">
              <h3 className="text-5xl font-semibold tracking-[-1.5%] leading-16 ml-[150px]">
                Plantique
              </h3>
            </div>
            <h1 className="text-[342px] font-extrabold tracking-[-1.5%] leading-10 mt-24.5">
              <span ref={lefttextref} className="relative z-40 inline-block">
                grow
              </span>
              <span ref={righttextref} className="relative z-20 inline-block">
                th
              </span>
            </h1>
            <img
              ref={leafref}
              src={leaf}
              alt="leaf"
              className="absolute top-6 left-[42%] z-30"
            />
          </div>
          <div className="absolute bottom-5 left-5 flex items-center">
            <div className="max-w-[272px] p-4 pr-12.5 rounded-[32px] border border-[#979797] blur_14 bg-[#fff3]">
              <h4 className="text-[38px] font-medium text-white tracking-[-1.5%] mb-5 whitespace-nowrap leading-13">
                100+ Plants
              </h4>
              <p className="text-base font-medium tracking-[-1.5%] text-white">
                We want our visitors to be inspire to get their hands dirty
              </p>
            </div>
            <div className="h-[192px] w-[112px] border border-[#979797] rounded-[32px] blur_14 bg-[#fff3] hover:ml-5 bounce">
              {leafcapsule.map((leaf, index) => {
                return (
                  <img
                    src={leaf}
                    alt="leaf"
                    key={index}
                    className={`absolute h-[72px] w-[72px] rounded-full hover:h-[126px] hover:w-[72px] hover:rounded-3xl bounce ${
                      index === 0
                        ? "top-5 left-1/2 -translate-x-1/2 z-10 hover:z-40"
                        : index === 1
                        ? "top-1/2 left-1/2 -translate-1/2 z-20 hover:z-40"
                        : "bottom-5 left-1/2 -translate-x-1/2 z-10 hover:z-40"
                    }`}
                  />
                );
              })}
            </div>
          </div>
          <div className="absolute right-0 bottom-0 flex flex-col items-end p-5">
            <div
              onMouseEnter={() => setarrowactive(!arrowactive)}
              className="mr-10 mb-10 p-5 rounded-full border-2 border-white w-fit hover:bg-white transition-all duration-200 ease-in cursor-pointer"
            >
              <RiArrowDownLine
                size={50} // set custom `width` and `height`
                color={arrowactive? "black":"white"} // set `fill` color
                className="my-icon" // add custom class name
              />
            </div>
            <a href="" className="block p-2.5 bg-white rounded-[32px]">
              <span className="px-24.5 py-7.5 block text-[25px] font-semibold rounded-[32px] border border-black hover:text-white hover:bg-black transition-all duration-300 ease-in-out">Shop Tropical Plants</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
