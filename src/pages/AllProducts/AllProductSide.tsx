import { Input } from "@material-tailwind/react";
import { BiDollar } from "react-icons/bi";
import {
  minPrice,
  productName,
} from "../../redux/features/productApi/productSlice";

const AllProductSide = ({ dispatch }) => {
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
      <div className=" price_range">
        <h1>Price</h1>
        <label className="input input-bordered flex items-center gap-2">
          <BiDollar></BiDollar>
          <input
            onChange={(event) => dispatch(minPrice(event.target.value))}
            type="text"
            className="grow"
            placeholder={``}
          />
        </label>
      </div>
    </div>
  );
};

export default AllProductSide;
