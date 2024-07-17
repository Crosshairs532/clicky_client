import { CiTrash } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { useGetAllproductsQuery } from "../../redux/features/productApi/productApi";
import Edit from "../../utils/Edit/Edit";

const Dashboard = () => {
  const selector = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, refetch } =
    useGetAllproductsQuery(selector);

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
            {data?.map((item: any) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td className="  flex gap-7 items-center ">
                  <CiTrash></CiTrash>
                  <Edit item={item} refetch={refetch}></Edit>
                </td>
              </tr>
            ))}
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
