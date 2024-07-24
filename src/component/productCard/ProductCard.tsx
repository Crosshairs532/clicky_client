import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { FaStar } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ keyboard }) => {
  const location = useLocation();

  return (
    <div key={keyboard?._id}>
      <Card
        className={`card cursor-pointer mt-2 ${
          location.pathname === "/all-products"
            ? "w-[280px]"
            : "w-[320px] lg:w-[350px]"
        } `}
      >
        <CardHeader
          color="blue-gray"
          className=" relative h-[200px] overflow-hidden"
        >
          <img
            className=" h-full w-full object-cover"
            src={keyboard?.image1}
            alt="card-image"
          />
          <img
            className="bottom-img w-full h-full object-cover absolute top-0 left-0"
            src={keyboard?.image2}
            alt=""
          />
          <button className="card-detail">
            <Link to={`/all-products/details/${keyboard._id}`}>
              <TiArrowForward></TiArrowForward>
              see Details
            </Link>
          </button>
        </CardHeader>
        <CardBody className=" px-2 py-4">
          <div className=" flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-1 font-semibold text-[#1a1a1a]"
            >
              {keyboard?.title}
            </Typography>
            <div className="rating flex  h-full flex-col justify-between">
              <div className=" flex pt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          <div className=" flex gap-4 items-center justify-between w-max ">
            <Typography className=" leading-none tracking-normal text-[#5e5e5e]">
              {keyboard?.brand}
            </Typography>
            <h4 className=" text-[#000000]">{keyboard?.price}</h4>
            <h4>{keyboard?.available_quantity}</h4>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
