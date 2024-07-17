import { MdEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import { useForm } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} from "../../redux/features/productApi/productApi";
import { toast } from "sonner";

const Edit = ({ item, refetch }: any) => {
  const [updateProduct, result] = useUpdateSingleProductMutation();
  const { data } = useGetSingleProductQuery(item?._id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      await updateProduct({ id: item?._id, data });
      if (result.isSuccess) {
        toast("data updated");
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
          id={`my_modal_${item._id}`}
          className="modal modal-bottom backdrop-blur-md duration-100 transition-all ease-in-out sm:modal-middle"
        >
          <div className="modal-box py-10 mt-16">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className=" md:pb-14 pb-10 lg:pb-16 grid md:grid-cols-2 grid-cols lg:grid-cols-2 gap-6">
                <input
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  defaultValue={item?.title}
                  {...register("Name")}
                  placeholder="Clicky"
                />

                <input
                  value={item?.price}
                  defaultValue={item?.price}
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  {...register("price", { required: true })}
                />
                <input
                  defaultValue={item?.brand}
                  className="transition-all duration-300 ease-in-out focus:outline-none border-b-2 focus:border-b-2 focus:border-blue-400  border-gray-300 px-4 py-2 "
                  {...register("Brand", { required: true })}
                />
                {errors.Brand && <span>This field is required</span>}
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
