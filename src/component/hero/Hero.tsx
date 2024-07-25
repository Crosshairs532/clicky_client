import "../../styles/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    fetch("carousel.json")
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, []);

  console.log(count);

  return (
    <>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        className=" mySwiper container mx-auto rounded-xl"
      >
        {count.map((car, ind) => (
          <SwiperSlide key={ind}>
            <div
              key={ind}
              className=" rounded-xl h-[30vh] md:h-[50vh] lg:h-[80vh] w-full"
            >
              <div className="relative h-full w-full">
                <div className="img-info left-[50px] z-10 absolute">
                  <div className="line overflow-hidden">
                    <h1 className="font-clicky text-[6vw] font-semibold text-white">
                      {car.title}
                    </h1>
                  </div>
                  <div className="line overflow-hidden">
                    <h1 className="font-clicky text-3xl tracking-wide text-white">
                      {car.short_functionality}
                    </h1>
                  </div>
                </div>
                <div className="image -z-10">
                  <img
                    className="w-full h-full object-center object-cover"
                    src={car.image}
                    alt={car.title}
                  />
                </div>
                <div className="line overflow-hidden">
                  <button className="absolute right-9 bottom-[40px] px-4 py-2 z-20 bg-white text-black rounded-full">
                    Browse Collection
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
