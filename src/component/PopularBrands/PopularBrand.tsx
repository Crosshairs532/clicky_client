import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brand1 from "../../assets/keychron.jpeg";
import brand2 from "../../assets/brand2.png";
import k1 from "../../assets/k1.webp";
import d1 from "../../assets/ducky.png";
import brand3 from "../../assets/bran3.svg";
import r1 from "../../assets/rk.webp";
import { IoIosArrowForward } from "react-icons/io";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import { Bars } from "react-loader-spinner";

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
        start: "top 0%",
        end: "top -100%",
        scroller: "body",
        pin: true,
        scrub: 3,
      },
    });
  }, []);

  return (
    <div ref={popularBodyRef} className="   min-h-screen container mx-auto">
      <h1 className="popular text-center text-[10vw]">Popular Brands</h1>
      <h2 className=" text-[#1a1a1a]  text-center font-semibold text-[2.5vw]">
        Premium Keyboards
      </h2>
      <p className=" text-wrap w-[50%] m-auto text-[#5e5e5e] text-center">
        Our Freebird Collection brings you high quality mechanical keyboards in
        60%, 75% and TKL layouts. The Freebird keyboards boasts a premium
        aluminum case, stylish designs and are hot swappable. Available in
        various color options.
      </p>
      <div
        ref={popularRef}
        id="popular"
        className="relative flex justify-center items-center gap-4 text-[40vw]"
      >
        <div className=" group  rounded-sm overflow-hidden relative cursor-pointer mt-[5%] w-[30%] h-[30vh] bg-black">
          <div className="  overlay absolute top-0 left-0 w-full h-full bg-white/30"></div>
          <img className=" w-full h-full object-cover" src={k1} alt="" />
          <img
            className=" group-hover:translate-y-[-80%] duration-300 transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mix-blend-multiply"
            src={brand1}
            alt=""
          />
          <button className=" flex justify-center items-center  rounded-full w-6 h-6 bg-white opacity-0 group-hover:opacity-100 duration-300 transition-all absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  group-hover:translate-y-[10%]">
            <IoIosArrowForward size={20} />
          </button>
        </div>
        <div className=" group  rounded-sm overflow-hidden relative cursor-pointer mt-[5%] w-[30%] h-[30vh] bg-black">
          <div className="  overlay absolute top-0 left-0 w-full h-full bg-black/30"></div>
          <img className=" w-full h-full object-cover" src={brand2} alt="" />
          <img
            className=" group-hover:translate-y-[-90%] duration-300 transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
            src={d1}
            alt=""
          />
          <button className=" flex justify-center items-center  rounded-full w-6 h-6 bg-white opacity-0 group-hover:opacity-100 duration-300 transition-all absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  group-hover:translate-y-[15%]">
            <IoIosArrowForward size={20} />
          </button>
        </div>
        <div className=" group  rounded-sm overflow-hidden relative cursor-pointer mt-[5%] w-[30%] h-[30vh] bg-black">
          <div className="  overlay absolute top-0 left-0 w-full h-full bg-black/30"></div>
          <img className=" w-full h-full object-cover" src={r1} alt="" />
          <img
            className=" w-[30%] h-[30%] group-hover:translate-y-[-100%] duration-300 transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
            src={brand3}
            alt=""
          />
          <button className=" flex justify-center items-center  rounded-full w-6 h-6 bg-white opacity-0 group-hover:opacity-100 duration-300 transition-all absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  group-hover:translate-y-[10%]">
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularBrand;
