import React from "react";
import Hero from "../../component/hero/Hero";
import Header from "../../component/Header/Header";
import Service from "../../component/Service/Service";
import TopProducts from "../../component/TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#1a1a1a] h-screen space-y-6">
        <Header></Header>
        <Hero></Hero>
      </div>
      <div>
        <Service></Service>
      </div>
      <TopProducts></TopProducts>
    </div>
  );
};

export default Home;
