import React from "react";

function NewPlantCird({ data }) {
  return (
    <>
      <div className="p-2.5 pb-6 rounded-3xl space-y-[13px] bg-[#efefef]">
        <div className="relative">
          <img
            src={data.img}
            alt="cird image"
            className="block min-h-[316px]"
          />
          <div className="p-5 rounded-full border border-white blur_15 absolute top-3.5 left-3.5 cursor-pointer hover:bg-[#fff3] transition-all duration-200 ease-in">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_508_242)">
                <path
                  d="M21.5066 4.60999C20.9959 4.099 20.3894 3.69364 19.722 3.41708C19.0545 3.14052 18.3391 2.99817 17.6166 2.99817C16.8941 2.99817 16.1787 3.14052 15.5113 3.41708C14.8438 3.69364 14.2374 4.099 13.7266 4.60999L12.6666 5.66999L11.6066 4.60999C10.5749 3.5783 9.17566 2.9987 7.71662 2.9987C6.25759 2.9987 4.85831 3.5783 3.82662 4.60999C2.79493 5.64169 2.21533 7.04096 2.21533 8.49999C2.21533 9.95903 2.79493 11.3583 3.82662 12.39L4.88662 13.45L12.6666 21.23L20.4466 13.45L21.5066 12.39C22.0176 11.8792 22.423 11.2728 22.6995 10.6053C22.9761 9.93789 23.1184 9.22248 23.1184 8.49999C23.1184 7.77751 22.9761 7.0621 22.6995 6.39464C22.423 5.72718 22.0176 5.12075 21.5066 4.60999V4.60999Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_508_242">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.666626)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-[32px] font-medium tracking-[2.5%] text-black">
              {data.title}
            </h3>
            <p className="text-lg text-[#959595] mb-3.5">{data.pera}</p>
            <h4 className="text-lg font-bold text-black">
              <span>₹</span>
              <span>{data.price}</span>
            </h4>
          </div>
          <div className="p-5 rounded-full bg-black cursor-pointer group">
            <svg
            className="group-hover:scale-90 transition-all duration-200 ease-in"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33339 9.16667C2.87316 9.16667 2.50006 9.53976 2.50006 10C2.50006 10.4602 2.87316 10.8333 3.33339 10.8333L15.0716 10.8333L11.0775 14.8274C10.752 15.1528 10.752 15.6805 11.0775 16.0059C11.4029 16.3314 11.9305 16.3314 12.256 16.0059L17.0834 11.1785C17.7343 10.5276 17.7343 9.47236 17.0834 8.82149L12.256 3.99408C11.9305 3.66864 11.4029 3.66864 11.0775 3.99408C10.752 4.31952 10.752 4.84715 11.0775 5.17259L15.0716 9.16667L3.33339 9.16667Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPlantCird;
