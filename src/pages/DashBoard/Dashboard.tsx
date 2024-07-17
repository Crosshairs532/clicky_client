import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import Edit from "../../utils/Edit/Edit";
import Delete from "../../utils/Delete/Delete";
import Loading from "../../utils/Loading/Loading";

const Dashboard = () => {
  const selector = useAppSelector((state) => state.product);
  const { data, isLoading, isFetching, refetch } =
    useGetAllproductsQuery(selector);

  if (isLoading || isFetching) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto mx-auto container">
        <table className="table container mx-auto table-lg table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Brand</td>
              <td></td>
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
                      <Edit item={item} refetch={refetch}></Edit>
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
