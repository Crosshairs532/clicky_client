import React from "react";
import Hero from "../../component/hero/Hero";
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
      <div className=" bg-[#1a1a1a] h-screen space-y-6">
        <Header></Header>
        <Hero></Hero>
      </div>
      <String></String>
      <Service></Service>
      <TopKeyboard></TopKeyboard>
      <PopularBrand></PopularBrand>
      <Reviews></Reviews>
      <Mechanical></Mechanical>
      {/* <TopProducts></TopProducts> */}
    </div>
  );
};

export default Home;
