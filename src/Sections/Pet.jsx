import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

function Pet() {
  const links = ["Outdoor Plant", "Indoor Plant", "Flower Pot", "Potted Plant"];
  return (
    <>
      <div className="flex justify-between items-center mb-20">
        <ul className="flex gap-1">
          {links.map((data, i) => {
            return (
              <li key={i}>
                <a
                  href=""
                  className="block py-3 px-10 rounded-full border border-black text-[25px] font-medium tracking-1.5 text-black hover:text-white hover:bg-black transition-all duration-300 ease-in"
                >
                  {data}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href=""
          className="block py-3 px-10 rounded-full border border-black text-[25px] font-medium tracking-1.5 text-black hover:text-white hover:bg-black transition-all duration-300 ease-in"
        >
          See All
        </a>
      </div>
      <div className="flex justify-center gap-3.5">
        <div className="cird1 max-w-[633px] bg-center bg-cover rounded-20 text-white px-5 py-2.5">
          <div className="pl-5 flex justify-between items-center text-[53px] font-bold tracking-1.5 mb-[35px]">
            <h3>Pet Friendly Plants</h3>
            <a href="" className="p-3.5 bg-white rounded-full">
              <RiArrowRightLine size={25} color="black" />
            </a>
          </div>
          <p className="text-base pl-5 mb-[94px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
          <div className="py-[22px]">
            <div className="flex blur_7 w-fit items-center gap-1">
              <div className="p-[9px] rounded-full border border-white bg-[#c7c7c75c]">
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8626 8.71593C15.7313 7.03101 15.0506 5.50258 14 4.31406C12.8267 5.64135 12.1125 7.39171 12.1125 9.31144C12.1125 11.2312 12.8267 12.9815 14 14.3088M14 14.3088C14.1768 16.0794 13.7361 17.9194 12.6193 19.4725C11.5024 21.0254 9.90616 22.0176 8.18475 22.3946C8.02604 20.809 8.3648 19.168 9.23894 17.7272M14 14.3088C14.8873 12.7713 16.3139 11.5443 18.1217 10.9511C19.9286 10.3579 21.7971 10.503 23.4091 11.2202C22.6152 12.5973 21.3861 13.7237 19.8406 14.3702M17.2635 8.14717C16.9606 5.78821 15.7521 3.71681 14 2.30117C11.9646 3.94566 10.6597 6.47399 10.6597 9.31144C10.6597 11.3751 11.3524 13.2733 12.512 14.7889M18.6839 7.79744C18.2423 4.73018 16.4807 2.09599 14 0.5C11.1194 2.35333 9.20693 5.60555 9.20693 9.31125C9.20693 11.3861 9.80689 13.3185 10.8403 14.9434M9.31038 10.7908C7.68367 10.396 6.03428 10.5777 4.59066 11.2202C5.47756 12.7573 6.90499 13.9845 8.71213 14.5777C10.5193 15.1709 12.388 15.0256 14.0002 14.3086C15.7218 14.6859 17.318 15.6779 18.4349 17.2311C19.5516 18.7838 19.9924 20.6243 19.8154 22.3946C18.2735 22.057 16.8333 21.2244 15.7469 19.9393M9.20769 9.26909C6.89336 8.83141 4.56989 9.35244 2.69549 10.5981C3.61459 13.0618 5.59169 15.0968 8.26306 15.9737C10.2059 16.6114 12.207 16.5325 13.992 15.8867M9.31724 7.79648C6.29321 7.27314 3.26917 8.1514 1 10.0417C1.8547 13.3819 4.32545 16.2245 7.81418 17.3695C9.76765 18.0107 11.7724 18.0315 13.6212 17.5408M7.77455 17.3559C6.6472 19.4442 6.41972 21.8372 7.0134 24.0233C9.61656 23.9015 12.1437 22.631 13.7946 20.3354C14.9953 18.6658 15.5395 16.7188 15.4831 14.8042M6.422 16.7954C4.99496 19.5391 4.88712 22.7161 5.9655 25.4804C9.3744 25.6913 12.8138 24.1958 14.97 21.198C16.1771 19.5191 16.8162 17.5995 16.9257 15.6713M14.9446 21.2315C16.5624 22.9599 18.7449 23.9181 20.9864 24.0232C21.6763 21.4846 21.261 18.6637 19.6101 16.3685C18.4092 14.699 16.7443 13.5743 14.9244 13.0368M13.999 22.3579C16.1411 24.5769 19.0989 25.6623 22.0345 25.4804C23.2865 22.2703 22.9414 18.5038 20.7854 15.5058C19.5779 13.8271 17.9681 12.6203 16.1867 11.9189M20.8092 15.5405C22.9365 14.5202 24.5129 12.7194 25.3043 10.5983C23.1276 9.15072 20.3438 8.6782 17.6726 9.55511C15.7298 10.1928 14.1566 11.445 13.088 13.0273M21.5772 16.7969C24.3284 15.4244 26.264 12.9184 27 10.0413C24.3648 7.84671 20.7121 7.01427 17.2235 8.15929C15.2701 8.80061 13.6365 9.97451 12.4257 11.4691"
                    stroke="white"
                    stroke-width="0.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-semibold">Piperaceae</span>
            </div>
          </div>
        </div>
        <div className="cird2 max-w-[340px] bg-center bg-cover rounded-20"></div>
        <div className="cird3 max-w-[340px] bg-center bg-cover rounded-20"></div>
      </div>
    </>
  );
}

export default Pet;
