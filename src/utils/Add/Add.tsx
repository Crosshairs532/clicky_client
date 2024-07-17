import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../redux/features/productApi/productApi";
import { TProduct } from "../../Types/Types";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [add, result] = useAddProductMutation();

  const onSubmit = async (data) => {
    const newData: TProduct = {
      ...data,
      add_to_cart_button: "Add to Cart",
      isDeleted: "false",
    };
    console.log(newData);
    try {
      const result = await add(newData);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    document.getElementById("add_product_modal").close();
  };

  return (
    <>
      <button
        className=" text-xl text-[#f0f0f0] bg-[#1a1a1a] px-3"
        onClick={() => document.getElementById("add_product_modal").showModal()}
      >
        Add Product
      </button>
      <dialog id="add_product_modal" className="modal">
        <div className="modal-box py-10 mt-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() =>
                document.getElementById("add_product_modal").close()
              }
            >
              ✕
            </button>
            <h3 className="font-bold text-lg mb-4">Add New Product</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                {...register("title")}
                className="input input-bordered w-full"
                placeholder="Product Name"
                required
              />

              <input
                {...register("price", { required: true })}
                className="input input-bordered w-full"
                placeholder="Price"
              />

              <textarea
                {...register("description")}
                className="textarea textarea-bordered w-full"
                placeholder="Description"
              />
              <input
                type="text"
                {...register("available_quantity", { required: true })}
                className="input input-bordered w-full"
                placeholder="Available Quantity"
              />

              <input
                type="text"
                {...register("image1", { required: true })}
                className="input input-bordered w-full"
                placeholder="Image URL 1"
              />

              <input
                type="text"
                {...register("image2", { required: true })}
                className="input input-bordered w-full"
                placeholder="Image URL 2"
              />

              <input
                type="number"
                {...register("rating", { required: true })}
                className="input input-bordered w-full"
                placeholder="Rating"
                min="0"
                max="5"
                step="0.1"
              />

              <input
                type="text"
                {...register("brand", { required: true })}
                className="input input-bordered w-full"
                placeholder="Brand"
              />
            </div>
            <button
              type="submit"
              className=" text-xl text-[#f0f0f0] py-2 duration-300 transition-all hover:bg-[#23429d] bg-[#1c2d5f] mt-4 w-full"
            >
              Add Product
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Add;
