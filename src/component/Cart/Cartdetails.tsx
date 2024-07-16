import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ImCross } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import {
  deleteItem,
  minus,
  plus,
  totalItem,
} from "../../redux/features/productApi/cartSlice";
import { Link } from "react-router-dom";

const CartDetails = ({ cartRef }) => {
  const cartContainer = useRef(null);
  const cartClose = useRef(null);
  const { cartProducts, price } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cartProducts);
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(cartContainer.current, {
      right: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    const handleOpenCart = () => {
      cartContainer.current?.classList.remove("hidden");
      cartContainer.current?.classList.add("block");
      tl.play();
    };

    const handleCloseCart = async () => {
      await tl.reverse();
      cartContainer.current?.classList.add("hidden");
      cartContainer.current?.classList.remove("block");
    };
    dispatch(totalItem());
    cartRef.current.addEventListener("click", handleOpenCart);
    cartClose?.current.addEventListener("click", handleCloseCart);
  }, [cartRef]);

  return (
    <div
      ref={cartContainer}
      className="z-50  hidden rounded-lg bg-[#f0f0f065] backdrop-blur-3xl absolute w-[40%] h-[100%] top-4 right-[-40%]"
    >
      <div
        ref={cartClose}
        className="close cursor-pointer w-full right-[-80%] top-3 absolute text-[30px] font-semibold text-[#1a1a1a]"
      >
        <ImCross />
      </div>
      <div className="flex mt-10 justify-between flex-col gap-4 p-4">
        {cartProducts.length > 0 ? (
          cartProducts?.map((product) => (
            <>
              <div className=" space-y-2 px-4 py-2 bg-[#ffffff] rounded-xl">
                <div className=" flex items-center justify-between">
                  <h1 className=" text-xl">{product.title}</h1>
                  <button
                    onClick={() => {
                      dispatch(deleteItem(product.id));
                      dispatch(totalItem());
                    }}
                  >
                    <CiTrash size={25} />
                  </button>
                </div>
                <div className=" w-[15%] border-2 justify-between flex items-center ">
                  <button
                    onClick={() => {
                      dispatch(plus(product.id));
                      dispatch(totalItem());
                    }}
                    className=" "
                  >
                    <AiOutlinePlus size={20} />
                  </button>
                  <input
                    className=" text-center w-5 "
                    value={product?.total}
                    type="text"
                  />
                  <button
                    onClick={() => {
                      dispatch(minus(product.id));
                      dispatch(totalItem());
                    }}
                    className=""
                  >
                    <AiOutlineMinus size={20} />
                  </button>
                </div>
              </div>
            </>
          ))
        ) : (
          <div>
            <h1 className="text-center text-2xl font-semibold">
              No products in cart
            </h1>
          </div>
        )}
      </div>
      <div className="w-full bottom-0 right-0 absolute h-[20%] bg-[#1a1a1a]">
        <Link to="/payment">
          {" "}
          <h1 className=" mt-5 flex justify-around px-5 py-2 bg-[#f0f0f0] rounded-lg">
            CheckOut - $ {price.toFixed(2)}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
