import { useLocation } from "react-router-dom";
import ProductCard from "../../component/productCard/ProductCard";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import { TProduct } from "../../Types/Types";
import Filter from "../../utils/filter/filter";
import Loading from "../../utils/Loading/Loading";
import { Input } from "@material-tailwind/react";

const AllProducts = () => {
  const { data, isLoading, isError } = useGetAllproductsQuery(undefined);
  const location = useLocation();
  console.log(location);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <h1>Something went wrong</h1>;
  }
  console.log(data);

  return (
    <div className=" min-h-screen  ">
      <h1 className=" relative  allProduct container mx-auto mt-[10vh] text-5xl">
        All Products
      </h1>
      <div
        className="
        flex mt-[10%]  mx-auto
      container"
      >
        <div className=" filter_options w-[30%] h-[100vh] ">
          <div className=" text-2xl cursor-pointer flex items-center gap-3">
            <Filter></Filter>
            <h1>Filter</h1>
          </div>
          <div>
            <Input
              variant="standard"
              label="Standard"
              placeholder="Standard"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
        </div>
        <div className=" products w-[70%] grid md:grid-cols-2 gap-y-6 grid-cols-1 gap-2 lg:grid-cols-3 place-items-center ">
          {data?.map((keyboard: TProduct) => (
            <ProductCard key={keyboard?._id} keyboard={keyboard}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
