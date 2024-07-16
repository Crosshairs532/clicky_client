import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "../Header/Header";
import Hero from "../../component/hero/Hero";
import { Toaster } from "sonner";

const MainLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Toaster />
      <div
        className={`bg-[#1a1a1a] ${
          location.pathname === "/" ? "mix-blend-multiply min-h-screen" : ""
        }   ${location.pathname === "/all-products" ? "" : ""} space-y-6`}
      >
        <Header></Header>
        {location.pathname === "/" ? <Hero></Hero> : ""}
      </div>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
