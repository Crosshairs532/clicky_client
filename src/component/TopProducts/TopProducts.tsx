import React from "react";

const TopProducts = () => {
  return (
    <div className=" container m-auto h-[100vh]">
      <h2>Best Selling Products</h2>
      <div className=" grid gap-2 grid-cols-5">
        <div className=" bg-red-500 w-full col-span-2 row-span-2 h-auto"></div>
        <div className=" flex gap-2 col-span-3">
          <div className=" flex-1 grid gap-2 grid-cols-1">
            <div className=" bg-yellow-500 w-full h-[300px]"></div>
            <div className=" bg-green-500 w-full  h-[300px]"></div>
          </div>
          <div className=" flex-1 gap-2 grid grid-cols-2">
            <div className=" bg-teal-500 w-full h-[300px]"></div>
            <div className=" bg-violet-600 w-full h-[300px]"></div>
            <div className=" bg-pink-600 col-span-2 row-span-2 w-auto h-[300px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
