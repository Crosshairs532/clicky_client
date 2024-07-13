import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiStar } from "react-icons/ci";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

export default function App() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <div className=" container mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {reviews?.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className=" cursor-pointer group w-full h-[300px] bg-[#1c2d5f]">
                <div className="flex flex-col w-full justify-center items-center h-full">
                  <div className=" relative overflow-hidden flex-1 w-full h-[50%] review_img">
                    <div className=" z-10 overlay absolute w-full h-full top-0 left-0 bg-[#1c2d5f6d]"></div>
                    <img
                      className=" -z-10 group-hover:scale-110 duration-300 w-full h-full object-fill object-center"
                      src="https://www.startech.com.bd/image/cache/catalog/keyboard/gamdias/hermes-e2/hermes-e2-01-500x500.jpg"
                      alt=""
                    />
                    <div className=" absolute bottom-2 right-3 z-20 rating">
                      {Array.from({ length: review.number }, (_, i) => (
                        <FaStar key={i} size={15} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className=" relative overflow-hidden  h-[50%] flex-1 w-full bg-[#1c2d5f] review_info">
                    <h1 className="  group-hover:top-[-50%] transition-all duration-700  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-base lg:text-2xl font-bold text-[#f0f0f0]">
                      {review?.customerName}
                    </h1>
                    <div className=" group-hover:bottom-[30%] opacity-0 group-hover:opacity-100 delay-200 transition-all  duration-300 absolute -bottom-[60%] review_para">
                      <p className=" lg:text-base md:text-[base] text-[12px] text-justify px-4 py-2  lg:w-[90%] text-[#f0f0f0]">
                        {review?.review}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

{
  /* <SwiperSlide>
            <div className=" w-full h-[200px] bg-[#1c2d5f]"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full h-[200px] bg-[#1c2d5f]"></div>
          </SwiperSlide> */
}
