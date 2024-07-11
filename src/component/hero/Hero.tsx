import * as React from "react";
import "../../styles/styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Heloslider from "./Heloslider";
import img2 from "../../assets/mechanical.jpg";
export default function App() {
  const [count, setCount] = React.useState([1, 2]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [Heloslider]
  );

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider container mx-auto rounded-xl "
      >
        {count.map(() => (
          <div className="keen-slider__slide  rounded-xl h-[30vh] md:h-[50vh]  lg:h-[80vh]  w-full ">
            <div className="relative h-full w-full">
              <div className="img-info left-[50px] z-10 absolute">
                <h1 className=" text-[6vw]  font-semibold  text-white">
                  Get Your Ducky now
                </h1>
                <h1 className=" text-3xl tracking-wide text-white">
                  Ducky Keyboard
                </h1>
              </div>
              <div className="image -z-10 ">
                <img
                  className=" w-full h-full object-contain"
                  src={img2}
                  alt=""
                />
              </div>
              <button className=" absolute right-9 bottom-[40px]  px-4 py-2 z-20  bg-white text-black rounded-full ">
                Browse Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
