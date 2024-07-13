import { useEffect, useState } from "react";
import im1 from "../../assets/m2.jpg";
import { Link, NavLink } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";

const TopProducts = () => {
  const [pro, setPro] = useState();

  useEffect(() => {
    fetch("../../assets/top.json")
      .then((res) => res.json())
      .then((data) => setPro(data));
  });

  return (
    <div className="container  mx-auto h-[80vh]">
      <h2 className="text-center text-3xl font-bold">Best Selling Products</h2>
      <div className=" p-2 flex flex-col gap-2 lg:flex-row lg:h-[700px]  ">
        <div className=" w-full lg:h-full h-[200px] lg:flex-1 bg-red-500">
          <img className=" w-full h-full object-cover" src={im1} alt="" />
        </div>
        <div className=" flex flex-col gap-2 lg:flex-1">
          <div className=" grid grid-cols-2 gap-2">
            <div className=" cursor-pointer group relative w-[97%] md:w-[375px] lg:w-[310px] border-2 border-red-500 h-[180px] ">
              <img
                className=" -z-10 w-full h-full object-cover"
                src={im1}
                alt=""
              />
              <div className=" z-20 opacity-0 absolute overflow-hidden top-0 left-0 w-full h-full  bg-gradient-to-t group-hover:top-0 group-hover:from-black group-hover:to-transparent transition-all ease-in-out group-hover:opacity-100 duration-200 text-[#f0f0f0]">
                <h4 className="text-xl font-bold ">Mechanical Keyboard</h4>
                <p className="text-sm">Ducky</p>
                <p className="text-sm">Available Quantity: 10</p>
                <p className="text-sm"> $99.99</p>
                <p className="text-sm">Rating: ⭐⭐⭐⭐⭐</p>
                <button className=" relative ">
                  <Link to="/">details</Link>
                </button>
              </div>
            </div>
            <div className=" relative w-[97%] md:w-[375px] lg:w-[310px] h-[180px] bg-green-500">
              <img className=" w-full h-full object-cover" src={im1} alt="" />
              <div className=" absolute"></div>
            </div>
            <div className=" relative w-[97%] md:w-[375px] lg:w-[310px] h-[180px] bg-blue-500">
              <img className=" w-full h-full object-cover" src={im1} alt="" />
              <div className=" absolute"></div>
            </div>
            <div className=" relative w-[97%] md:w-[375px] lg:w-[310px] h-[180px] bg-slate-500">
              <img className=" w-full h-full object-cover" src={im1} alt="" />
              <div className=" absolute"></div>
            </div>
          </div>
          <div className=" relative w-full h-[200px] lg:h-[300px] bg-violet-900">
            <img className=" w-full h-full object-cover" src={im1} alt="" />
            <div className=" absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
