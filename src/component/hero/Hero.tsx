import "../../styles/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useLocation } from "react-router-dom";
// import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState([]);
  // const [activeSlide, setActive] = useState(0);
  // const slideContainers = useRef(null);
  const location = useLocation();

  useEffect(() => {
    fetch("carousel.json")
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, []);

  // useEffect(() => {
  //   console.log(slideContainers.current, "slide", activeSlide);
  //   if (slideContainers.current) {
  //     console.log("sliding");
  //     gsap.from(slideContainers.current.querySelectorAll(".line h1"), {
  //       y: 150,
  //       stagger: 0.3,
  //       duration: 1,
  //       ease: "power3.out",
  //     });
  //   }
  // }, [activeSlide, slideContainers]);

  return (
    <div className="container transition-all overflow-hidden h-[40vh] md:h-[60vh] lg:h-[80vh] mx-auto rounded-xl">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        className=" mySwiper "
      >
        {count.map((car, ind) => (
          <SwiperSlide key={ind}>
            <div
              // ref={slideContainers}
              className=" relative overflow-hidden rounded-xl h-full w-full"
            >
              <div className="relative  h-full w-full">
                <div className="img-info left-[50px] z-10 absolute">
                  <div className=" mt-[2vw] line overflow-hidden">
                    <h1 className=" w-fit text-left transition-all duration-200 font-clicky text-[6vw] leading-none font-semibold text-white">
                      {car.title}
                    </h1>
                  </div>
                  <div className=" mt-[2vw] line overflow-hidden">
                    <h1 className=" w-fit text-left font-clicky text-[3vw] lg:text-[2vw] leading-none tracking-wide text-white">
                      {car.short_functionality}
                    </h1>
                  </div>
                </div>

                <img
                  className="  md:w-full md:h-full lg:w-full lg:h-full -z-10 object-center object-cover"
                  src={car.image}
                  alt={car.title}
                />

                <div className="line overflow-hidden">
                  <h1 className=" leading-none absolute right-9 bottom-[40px] px-4 py-2 z-20 bg-white text-black rounded-full">
                    Browse Collection
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
