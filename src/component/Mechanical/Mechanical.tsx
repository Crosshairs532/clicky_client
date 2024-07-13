import React from "react";
import key_caps from "../../assets/key_caps.webp";
import mechanical from "../../assets/premium.webp";
import stylish from "../../assets/stylish.webp";
import Mvideo from "../../assets/video.mp4";
const Mechanical = () => {
  return (
    <div className=" bg-[#e5e5e5] relative h-screen p-5 rounded-2xl container mx-auto">
      <h1 className=" my-4 mg:text-[2xl] lg:text-[5vw]">
        Why Choose Mechanical keyboard?
      </h1>
      <div className=" h-[600px] flex border-2 border-amber-600  gap-2">
        <div className=" w-full rounded-2xl bg-black ">
          <video src={Mvideo} autoPlay={true}></video>
        </div>
        <div className=" flex gap-2 flex-col">
          <div className=" flex gap-3">
            <div className=" overflow-hidden rounded-2xl w-[300px] h-[250px] bg-red-500 ">
              <img
                className=" object-cover w-full h-full object-center "
                src={mechanical}
                alt=""
              />
            </div>
            <div className=" overflow-hidden rounded-2xl w-[300px] h-[250px] bg-blue-500">
              <img
                className=" object-cover w-full h-full object-center "
                src={stylish}
                alt=""
              />
            </div>
          </div>
          <div className="  rounded-2xl w-full h-full overflow-hidden bg-yellow-500 ">
            <img
              src={key_caps}
              className=" w-full h-full object-center object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mechanical;
