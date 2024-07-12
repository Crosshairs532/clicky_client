import React, { useState } from "react";
import im1 from "../../assets/m2.jpg";
import im2 from "../../assets/mechanical.jpg";
import { FaStar } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const TopKeyboard = () => {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6]);
  return (
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
  );
};

export default TopKeyboard;
