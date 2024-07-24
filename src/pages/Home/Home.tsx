import Service from "../../component/Service/Service";
import TopKeyboard from "../../component/TopKeyboard/TopKeyboard";
import PopularBrand from "../../component/PopularBrands/PopularBrand";
import String from "../../utils/animations/String";
import Reviews from "../../component/Reviews/Reviews";
import Mechanical from "../../component/Mechanical/Mechanical";
import Customizable from "../../component/Customizable/Customizable";

const Home = () => {
  return (
    <div>
      <String></String>
      <Service></Service>
      <PopularBrand></PopularBrand>
      <TopKeyboard></TopKeyboard>
      <Mechanical></Mechanical>
      <Customizable></Customizable>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
