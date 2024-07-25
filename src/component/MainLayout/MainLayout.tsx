import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "../Header/Header";
import Hero from "../../component/hero/Hero";
import { Toaster } from "sonner";
import Filter from "../../utils/filter/Filter";
import FilterSmall from "../../utils/RawJs/index.js";
const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      <Toaster />
      <div
        className={`bg-[#1a1a1a] ${
          location.pathname === "/"
            ? "mix-blend-multiply md:min-h-screen min-h-[60vh] lg:min-h-screen"
            : ""
        }   ${location.pathname === "/all-products" ? "" : ""} space-y-6`}
      >
        <Header></Header>
        {location.pathname === "/" ? <Hero></Hero> : ""}
      </div>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <div
        id="add_filter"
        cursor-pointer
        onClick={FilterSmall.filter_sort}
        className={`${
          location.pathname == "/all-products" ? "block" : "hidden"
        } cursor-pointer flex rounded-full items-center gap-4 px-8 py-4 lg:hidden fixed z-[100] bottom-10 left-[calc(50%-50px)] bg-black text-[white]`}
      >
        <Filter></Filter>
        <h1 className="  font-semibold">add filter</h1>
      </div>
    </div>
  );
};

export default MainLayout;
