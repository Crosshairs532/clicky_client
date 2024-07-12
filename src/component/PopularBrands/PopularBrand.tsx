import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const PopularBrand = () => {
  const popularRef = useRef(null);
  const popularBodyRef = useRef(null);

  useGSAP(() => {
    gsap.from(popularRef.current, {
      transform: "translateX(-50%)",
      scrollTrigger: {
        trigger: popularBodyRef.current,
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scroller: "body",
        pin: true,
        scrub: 3,
      },
    });
  }, []);
  return (
    <div ref={popularBodyRef} className="h-[70vh] container m-auto">
      <h1 className="popular   text-center text-[10vw]">Popular Brands</h1>
      <div
        ref={popularRef}
        id="popular"
        className="relative flex justify-center items-center gap-4 text-[40vw]"
      >
        <div className=" mt-[5%] w-56 h-56 bg-black"></div>
        <div className=" mt-[5%] w-56 h-56 bg-black"></div>
        <div className=" mt-[5%] w-56 h-56 bg-black"></div>
        <div className=" mt-[5%] w-56 h-56 bg-black"></div>
      </div>
    </div>
  );
};

export default PopularBrand;
