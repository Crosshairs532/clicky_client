import { SiClickup } from "react-icons/si";
import { redirect } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" text-[#1c2d5f] bg-[#f0f0f0] footer footer-center p-10">
        <aside>
          <h1
            onClick={() => redirect("/")}
            className=" flex justify-center items-center cursor-pointer flex-1 navbar-start w-[100px] text-5xl"
          >
            <SiClickup></SiClickup>
          </h1>
          <p className="font-bold">
            CLICKY
            <br />
            Providing reliable Mechanical Keyboards
          </p>
          <p>
            Created by Md. Samusl Arefin (Crosshairs532) © $
            {new Date().getFullYear()}
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href="https://www.facebook.com/zidan.tanzim">
              <FaFacebookF size={20} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-samsul-arefin/"
            >
              <FaLinkedinIn size={20}></FaLinkedinIn>
            </a>
            <a target="_blank" href="https://github.com/Crosshairs532">
              <FaGithub size={20}></FaGithub>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
