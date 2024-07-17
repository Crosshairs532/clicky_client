import { CiTrash } from "react-icons/ci";
import Swal from "sweetalert2";
import { useDeleteSingleProductMutation } from "../../redux/features/productApi/productApi";
const Delete = ({ item }: any) => {
  const [deleteFunc, result] = useDeleteSingleProductMutation();

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteFunc(item?._id);
        if (res.data) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        <CiTrash></CiTrash>{" "}
      </button>
    </div>
  );
};

export default Delete;
