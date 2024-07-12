import React, { useState } from "react";
import im1 from "../../assets/m2.jpg";
import { FaStar } from "react-icons/fa";
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
        <Card key={idx} className="mt-6 w-[320px] lg:w-[350px]">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={im1} alt="card-image" />
          </CardHeader>
          <CardBody className=" px-2">
            <div className=" flex items-center">
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
            <Typography className=" text-[#5e5e5e]">Ducky</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TopKeyboard;
