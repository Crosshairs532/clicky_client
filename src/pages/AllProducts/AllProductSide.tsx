import { Input } from "@material-tailwind/react";
import { BiDollar } from "react-icons/bi";
import {
  maxPrice,
  minPrice,
  productName,
  reset,
} from "../../redux/features/productApi/productSlice";
import { useAppSelector } from "../../hook/hook";

const AllProductSide = ({ dispatch }) => {
  const selector = useAppSelector((state) => state.product);
  console.log(selector);
  return (
    <div className=" filter_options w-[30%] h-[100vh] ">
      <div className="divider"></div>
      <div className=" mt-2">
        <Input
          onChange={(event) => dispatch(productName(event.target.value))}
          variant="standard"
          label="Search"
          placeholder="Search Products"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </div>
      <div className="divider"></div>
      <div className=" price_range space-y-3">
        <h1 className=" text-xl">Price</h1>
        <div className=" w-[100%]">
          <label className="input border-2 input-bordered flex items-center gap-2">
            <BiDollar></BiDollar>
            <input
              onChange={(event) => {
                dispatch(minPrice(event.target.value));
              }}
              value={selector.minPrice ?? ""}
              name="minPrice"
              type="text"
              className="grow"
              placeholder={`0`}
            />
          </label>
          <div className="divider divider-horizontal">to</div>
          <label className="input input-bordered flex items-center gap-2">
            <BiDollar></BiDollar>
            <input
              onChange={(event) => dispatch(maxPrice(event.target.value))}
              type="text"
              name="maxPrice"
              className="grow"
              value={selector.maxPrice ?? ""}
              placeholder={`1000`}
            />
          </label>
        </div>
      </div>

      <p
        onClick={() => dispatch(reset())}
        className=" hover:border-b-2 duration-150 w-max border-[#1c2d5f] text-lg mt-2 cursor-pointer"
      >
        Reset to default
      </p>
    </div>
  );
};

export default AllProductSide;
