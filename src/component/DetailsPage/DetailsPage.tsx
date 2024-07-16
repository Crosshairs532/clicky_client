import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/productApi/productApi";
import Loading from "../../utils/Loading/Loading";
import { CiStar } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { addProduct } from "../../redux/features/productApi/cartSlice";
import { toast } from "sonner";

const DetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isFetching } = useGetSingleProductQuery(id);
  const selector = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  if (isLoading || isFetching) {
    return <Loading></Loading>;
  }
  console.log(data);

  return (
    <div className=" container mx-auto mt-[60px]">
      <div className=" grid grid-cols-1 gap-9 lg:grid-cols-2">
        <div className=" card overflow-hidden relative rounded-xl">
          <img
            className=" h-full w-full object-cover"
            src={data?.image1}
            alt="card-image"
          />
          <img
            className=" bottom-img w-full h-full object-cover absolute top-0 left-0"
            src={data?.image2}
            alt=""
          />
        </div>
        <div>
          <h1 className=" text-4xl font-semibold mb-3">{data.title}</h1>
          <div className="">
            <h3 className=" text-xl mb-1">{data.brand}</h3>
            <h4 className=" flex text-lg mb-4 items-center gap-3">
              Rating: <small>{data.rating}</small>
              <CiStar className="  text-yellow-800"></CiStar>
            </h4>
          </div>
          <p className=" text-4xl mb-6 font-bold">${data.price}</p>
          <div className=" mb-[60px] flex gap-2 justify-between">
            <h2 className=" flex-1 outline w-max px-4 py-2">
              Quantity Available: {data.available_quantity}
            </h2>
            <button
              onClick={() => {
                toast.success("product added", {
                  position: "top-center",
                });
                dispatch(
                  addProduct({
                    id: data._id,
                    title: data.title,
                    price: data.price,
                    quantity: data.available_quantity,
                  })
                );
              }}
              className=" flex-1 outline "
            >
              Add to cart
            </button>
          </div>
          <div>
            <h1 className=" text-lg font-semibold">{data.title}</h1>
            <p className=" text-[#5e5e5e]">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
