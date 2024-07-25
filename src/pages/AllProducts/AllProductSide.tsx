import { Input } from "@material-tailwind/react";
import { BiCross, BiDollar } from "react-icons/bi";
import {
  maxPrice,
  minPrice,
  productName,
  reset,
} from "../../redux/features/productApi/productSlice";
import { useAppSelector } from "../../hook/hook";
import FilterSmall from "../../utils/RawJs/index.js";
import { useEffect, useState } from "react";
import useDebounce from "../../utils/DeBounce/useDebounce.js";

const AllProductSide = ({ dispatch }) => {
  const [searchVal, setSearchVal] = useState("");
  const selector = useAppSelector((state) => state.product);

  const deBouncedVal = useDebounce(searchVal);

  console.log(selector);

  useEffect(() => {
    FilterSmall.filter_sort();
    FilterSmall.close();
    // if (selector) {
    //   setMinprice(selector?.minPrice);
    //   setMaxprice(selector?.maxPrice);
    //   setName(selector?.productName);
    // }
    console.log("debounce git");
    dispatch(productName(deBouncedVal));
  }, [deBouncedVal]);

  return (
    <>
      <div
        id="cross"
        className="cursor-pointer hidden items-center translate-x-[-50%] justify-center transition-all duration-1000 w-12 h-12 bg-white rounded-full left-[50%] top-[40%] cross fixed z-[155]"
      >
        <BiCross />
      </div>
      <div
        id="filterOverlay"
        className="overlay hidden transition-all z-[150] fixed backdrop-blur-md duration-1000 w-full h-full bg-black/20 top-0 left-0"
      ></div>
      <div
        id="filterSide"
        className=" hidden lg:block transition-all ease-in-out lg:px-0 lg:py-0 px-8 py-4 lg:bg-transparent z-[160] bg-[#f0f0f0] lg:z-0 w-[90%] lg:rounded-none rounded-xl  lg:bottom-0 left-[50%] lg:left-[0%] lg:translate-x-0 translate-x-[-50%] fixed bottom-[-50%]
           lg:static filter_options lg:w-[30%] lg:h-[100vh]  delay-150 duration-1000"
      >
        <div className="divider lg:block hidden"></div>
        <div className="mt-2">
          <Input
            onChange={(event) => setSearchVal(event.target.value)}
            defaultValue={selector?.productName as string}
            variant="standard"
            label="Search"
            placeholder="Search Products"
          />
        </div>
        <div className="divider"></div>
        <div className="price_range space-y-3">
          <h1 className="text-xl">Price</h1>
          <div className="w-[100%]">
            <label className="input border-2 input-bordered flex items-center gap-2">
              <BiDollar />
              <input
                onChange={(event) => {
                  dispatch(minPrice(event.target.value));
                }}
                defaultValue={selector?.minPrice as number}
                name="minPrice"
                type="text"
                className="grow"
                placeholder={`0`}
              />
            </label>
            <div className="divider divider-horizontal">to</div>
            <label className="input input-bordered flex items-center gap-2">
              <BiDollar />
              <input
                onChange={(event) => dispatch(maxPrice(event.target.value))}
                type="text"
                name="maxPrice"
                className="grow"
                defaultValue={selector?.maxPrice as number}
                placeholder={`1000`}
              />
            </label>
          </div>
        </div>

        <p
          onClick={() => dispatch(reset())}
          className="hover:border-b-2 duration-150 w-max border-[#1c2d5f] text-lg mt-2 cursor-pointer"
        >
          Reset to default
        </p>
      </div>
    </>
  );
};

export default AllProductSide;
