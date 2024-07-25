import { MdEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import { useForm } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} from "../../redux/features/productApi/productApi";
import { toast } from "sonner";
import { useRef } from "react";

const Edit = ({ item }: any) => {
  const modalRef = useRef(null);
  const [updateProduct, result] = useUpdateSingleProductMutation();
  const { data } = useGetSingleProductQuery(item?._id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const res = await updateProduct({ id: item?._id, data });
      console.log(res);
      if (res) {
        toast("data updated");
        // document.getElementById(`my_modal_${item?.id}`).close();
        if (modalRef.current) {
          modalRef.current.close();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    data && (
      <>
        <button
          className="btn"
          onClick={() =>
            document.getElementById(`my_modal_${item?._id}`).showModal()
          }
        >
          <MdEdit></MdEdit>
        </button>
        <dialog
          ref={modalRef}
          id={`my_modal_${item._id}`}
          className="modal modal-bottom backdrop-blur-md duration-100 transition-all ease-in-out sm:modal-middle"
        >
          <div className="modal-box py-10 mt-16">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className=" md:pb-14 pb-10 lg:pb-16 grid md:grid-cols-2 grid-cols lg:grid-cols-2 gap-6">
                <input
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  defaultValue={item?.title}
                  {...register("title")}
                  placeholder="Clicky"
                />

                <input
                  defaultValue={item?.price}
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  {...register("price", { required: true })}
                />
                <input
                  defaultValue={item?.brand}
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  {...register("brand", { required: true })}
                />
                {errors.Brand && <span>This field is required</span>}
                <input
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  type="text"
                  placeholder={item?.available_quantity}
                  defaultValue={item?.available_quantity}
                  {...register("available_quantity", { required: true })}
                />
                <input
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  type="text"
                  defaultValue={item?.image1}
                  {...register("image1", { required: true })}
                />
                <input
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  defaultValue={item?.image2}
                  type="text"
                  {...register("image2", { required: true })}
                />

                <textarea
                  className=" outline-1 border-2 px-2 py-4 w-full lg:col-span-2"
                  defaultValue={item?.description}
                  placeholder="description"
                  {...register("description", { required: true })}
                />
              </div>

              <button
                type="submit"
                className=" absolute bottom-0 left-0 py-4 mt-4 bg-[#1a1a1a] text-[#f0f0f0] w-full"
              >
                update
              </button>
            </form>
            <form className=" absolute top-2 right-4" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="">
                <RxCross1 size={20} />
              </button>
            </form>
          </div>
        </dialog>
      </>
    )
  );
};

export default Edit;
