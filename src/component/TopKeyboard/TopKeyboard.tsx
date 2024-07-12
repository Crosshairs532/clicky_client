import React, { useState } from "react";
import im1 from "../../assets/m2.jpg";
import im2 from "../../assets/mechanical.jpg";
import { FaStar } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
const TopKeyboard = () => {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      <div className=" space-y-2 mb-8 container m-auto">
        <h1 className=" text-6xl text-[#1a1a1a]">Best Selling</h1>
        <p className=" text-[#5e5e5e]">Our Most Popular Products</p>
      </div>
      <div className=" grid place-items-center mg:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {count?.map((idx) => (
          <Card
            key={idx}
            className="card cursor-pointer mt-2 w-[320px] lg:w-[350px]"
          >
            <CardHeader color="blue-gray" className="relative overflow-hidden">
              <img src={im1} alt="card-image" />
              <img
                className="bottom-img absolute top-0 left-0"
                src={im2}
                alt=""
              />
              <button className="card-detail">
                <TiArrowForward></TiArrowForward>
                see Details
              </button>
            </CardHeader>
            <CardBody className=" px-2 py-4">
              <div className=" flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-1 font-semibold text-[#1a1a1a]"
                >
                  Mechanical Keyboard
                </Typography>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className=" flex items-center justify-between w-[120px]">
                <Typography className=" text-[#5e5e5e]">Ducky</Typography>
                <h4 className=" text-[#000000]">$2.55</h4>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className=" group m-auto w-[300px] flex justify-center items-center my-4">
        <Link to={"/"}>
          <button className=" group-hover:gap-6 duration-100 m-auto gap-4 flex item-center text-center text-2xl">
            See More
            <MdOutlineKeyboardArrowRight
              className="w-8 h-8 rounded-full bg-[#5e5e5e]"
              size={15}
            ></MdOutlineKeyboardArrowRight>
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopKeyboard;
