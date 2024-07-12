import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";

const Service = () => {
  return (
    <div className="  lg:h-[80vh] my-2">
      <div className=" service-title m-auto flex items-center flex-col my-10">
        <h1 className=" s_title text-[6vw] font-semibold ">WHAT WE OFFER</h1>
      </div>
      <div className=" container m-auto grid  rounded-md bg-[#ffffff] grid-cols-1 place-items-center lg:grid-cols-3  s-body">
        <div className=" gap-5 flex flex-col justify-center items-center lg:w-[300px] h-[300px]">
          <FaShippingFast size={50} />

          <h1 className=" text-[20px] font-bold">Free Shipping</h1>
          <p className=" text-[16px] text-[#5e5e5e]">
            {" "}
            On qualifying products $70+ within the USA
          </p>
        </div>
        <div className=" gap-5 flex flex-col justify-center items-center  lg:w-[300px] h-[300px]">
          <RiCustomerService2Fill size={50}></RiCustomerService2Fill>
          <h1 className="text-[20px] font-bold">Free Shipping</h1>
          <p className=" text-[16px] text-[#5e5e5e]">
            On qualifying products $70+ within the USA
          </p>
        </div>
        <div className=" gap-5 flex flex-col justify-center items-center  lg:w-[300px] h-[300px]">
          <RiSecurePaymentFill size={50} />

          <h1 className=" text-[20px] font-bold">Free Shipping</h1>
          <p className=" text-[16px] text-[#5e5e5e]">
            {" "}
            On qualifying products $70+ within the USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
