import React from "react";

import Header from "../../component/Header/Header";
import Service from "../../component/Service/Service";
import TopProducts from "../../component/TopProducts/TopProducts";
import TopKeyboard from "../../component/TopKeyboard/TopKeyboard";
import PopularBrand from "../../component/PopularBrands/PopularBrand";
import String from "../../utils/animations/String";
import Reviews from "../../component/Reviews/Reviews";
import Mechanical from "../../component/Mechanical/Mechanical";

const Home = () => {
  return (
    <div>
      <String></String>
      <Service></Service>
      <TopKeyboard></TopKeyboard>
      <PopularBrand></PopularBrand>
      <Mechanical></Mechanical>

      <Reviews></Reviews>
      {/* <TopProducts></TopProducts> */}
    </div>
  );
};

export default Home;
