import ProductCard from "../../component/productCard/ProductCard";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import { TProduct } from "../../Types/Types";
import Sort from "./Sort";
import Filter from "../../utils/filter/Filter";
import Loading from "../../utils/Loading/Loading";
import AllProductSide from "./AllProductSide";
import { useAppDispatch, useAppSelector } from "../../hook/hook";

const AllProducts = () => {
  const selector = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetAllproductsQuery(selector);
  // console.log(data);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className=" min-h-screen container mx-auto ">
      <h1 className=" relative allProduct container mx-auto mt-[10vh] text-5xl">
        All Products
      </h1>
      <div className=" mt-[10%] text-2xl cursor-pointer justify-between flex items-center gap-3">
        <div className=" flex items-center gap-3">
          <Filter></Filter>
          <h1>Filter</h1>
        </div>
        <Sort dispatch={dispatch}></Sort>
      </div>
      <div
        className="
        lg:flex lg:gap-20 mt-[4%]  mx-auto
      container "
      >
        <AllProductSide dispatch={dispatch}></AllProductSide>
        <div className=" mb-10 mt-[50px] products lg:w-[70%] place-items-center grid md:grid-cols-2  grid-cols-1 gap-[4vw] lg:grid-cols-3 ">
          {data ? (
            data?.map(
              (keyboard: TProduct) =>
                keyboard.isDeleted == "false" && (
                  <ProductCard
                    key={keyboard?._id}
                    keyboard={keyboard}
                  ></ProductCard>
                )
            )
          ) : (
            <h1 className=" text-7xl text-black">no product to show</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
