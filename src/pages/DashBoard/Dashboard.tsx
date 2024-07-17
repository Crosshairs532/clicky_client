import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import Edit from "../../utils/Edit/Edit";
import Delete from "../../utils/Delete/Delete";
import Loading from "../../utils/Loading/Loading";
import Add from "../../utils/Add/Add";

const Dashboard = () => {
  const selector = useAppSelector((state) => state.product);
  const { data, isLoading, isFetching } = useGetAllproductsQuery(selector);

  // if (isLoading || isFetching) {
  //   return <Loading></Loading>;
  // }
  // console.log(data);

  return (
    <div className=" mt-[6%] mx-auto container">
      <h1 className=" relative mb-10 justify-between flex allProduct container mx-auto  text-5xl">
        All Products
        <Add></Add>
      </h1>
      <div className="overflow-x-auto ">
        <table className="table container mx-auto table-lg table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Add Product</td>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (item: any) =>
                item.isDeleted == "false" && (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.brand}</td>
                    <td className="  flex gap-7 items-center ">
                      <Delete item={item}></Delete>
                      <Edit item={item}></Edit>
                    </td>
                  </tr>
                )
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Brand</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
