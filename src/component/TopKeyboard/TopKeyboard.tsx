import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import ProductCard from "../productCard/ProductCard";
import Loading from "../../utils/Loading/Loading";
import { TProduct } from "../../Types/Types";
const TopKeyboard = () => {
  const { data, isLoading, isFetching } = useGetAllproductsQuery(undefined);
  console.log(data);
  if (isLoading || isFetching || !data) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className=" container mx-auto mb-[100px]">
        <div className=" space-y-2 mb-[60px]">
          <h1 className=" text-6xl text-[#1a1a1a]">Best Selling</h1>
          <p className=" text-[#5e5e5e]">Our Most Popular Products</p>
        </div>
        <div className=" gap-y-3 grid place-items-center mg:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {data?.slice(0, 6).map((keyboard: TProduct) => (
            <ProductCard key={keyboard?._id} keyboard={keyboard}></ProductCard>
          ))}
        </div>
        <div className=" group mx-auto w-[300px] flex justify-center items-center my-10">
          <Link to={"/all-products"}>
            <button className=" group-hover:gap-6 duration-100  gap-4 flex item-center text-center text-2xl">
              See More
              <MdOutlineKeyboardArrowRight
                className="w-8 h-8 rounded-full bg-[#5e5e5e]"
                size={15}
              ></MdOutlineKeyboardArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopKeyboard;
