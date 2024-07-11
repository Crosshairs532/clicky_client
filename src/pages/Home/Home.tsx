import React from "react";
import Hero from "../../component/hero/Hero";
import Header from "../../component/Header/Header";

const Home = () => {
  return (
    <div>
      <div className=" h-screen space-y-6">
        <Header></Header>
        <Hero></Hero>
      </div>
    </div>
  );
};

export default Home;
