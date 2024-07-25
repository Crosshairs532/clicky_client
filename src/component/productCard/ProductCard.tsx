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
            ? " w-[60vw] md:w-[40vw] h-[30vh] lg:w-[20vw] lg:h-[30vh]"
            : "w-[320px] lg:w-[350px]"
        } `}
      >
        <CardHeader
          color="blue-gray"
          className=" relative h-[25vh] overflow-hidden"
        >
          <img
            className=" h-full w-full absolute top-0 left-0 object-center object-cover"
            src={keyboard?.image1}
            alt="card-image"
          />
          <img
            className="bottom-img w-full h-full object-center object-cover absolute top-0 left-0"
            src={keyboard?.image2}
            alt=""
          />
          <button className="card-detail mx-auto">
            <Link
              className=" flex items-center gap-1 justify-between"
              to={`/all-products/details/${keyboard._id}`}
            >
              <TiArrowForward></TiArrowForward>
              <p className=" leading-none text-[2vw] lg:text-[1vw]">
                see Details
              </p>
            </Link>
          </button>
        </CardHeader>
        <CardBody className=" px-2 py-4">
          <div className=" flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-1 text-[2.8vw] md:text-[2vw] lg:text-[1.1vw] leading-none font-semibold text-[#1a1a1a]"
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
