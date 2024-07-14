import { sort } from "../../redux/features/productApi/productSlice";

const Sort = ({ dispatch }) => {
  return (
    <div>
      <details className="dropdown">
        <summary className=" list-none text-ls m-1">Sort By:</summary>
        <ul className="menu dropdown-content bg-[#ffffff] rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <p onClick={() => dispatch(sort("low"))}>Low to High</p>
          </li>
          <li>
            <p onClick={() => dispatch(sort("high"))}>High To Low</p>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Sort;
