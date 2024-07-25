import { useAppSelector } from "../../hook/hook";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import Edit from "../../utils/Edit/Edit";
import Delete from "../../utils/Delete/Delete";

import Add from "../../utils/Add/Add";
import Loading from "../../utils/Loading/Loading";

const Dashboard = () => {
  const selector = useAppSelector((state) => state.product);
  const { data, isLoading, isFetching } = useGetAllproductsQuery(selector);

  if (isLoading || isFetching || !data) {
    return <Loading></Loading>;
  }
  console.log(data);

  return (
    <div className=" mt-[6%] mx-auto container min-h-screen">
      <div className=" relative mb-10 justify-between flex allProduct container mx-auto  text-5xl">
        <h1>
          All Products <span className=" text-2xl">({data?.length})</span>
        </h1>
        <Add></Add>
      </div>
      <div className="overflow-x-auto relative">
        <table className="table container mx-auto table-lg table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Add Product</td>
            </tr>
          </thead>
          <tbody className="">
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
