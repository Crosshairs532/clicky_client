import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SiClickup } from "react-icons/si";
import { NavLink, redirect } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Cart from "../Cart/Cart";
import Cartdetails from "../Cart/Cartdetails";
import { useAppSelector } from "../../hook/hook";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const HomeRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const { cartProducts } = useAppSelector((state) => state.cart);
  const cartRef = useRef<HTMLDivElement>(null);
  let items = [
    <h4
      ref={HomeRef}
      id="Home"
      className=" cursor-pointer relative font-semibold text-[20px]"
    >
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home
      </NavLink>
    </h4>,
    <h4
      ref={productsRef}
      id="Products"
      className=" cursor-pointer relative font-semibold text-[20px]"
    >
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/all-products"
      >
        Products
      </NavLink>
    </h4>,
    <h4
      ref={aboutRef}
      id="About us"
      className=" cursor-pointer relative font-semibold text-[20px]"
    >
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/about"
      >
        About us
      </NavLink>
    </h4>,
    <h4
      ref={dashboardRef}
      id="Dashboard"
      className=" cursor-pointer relative font-semibold text-[20px]"
    >
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </h4>,
    <h4
      ref={contactRef}
      id="Contact Us"
      className=" cursor-pointer relative font-semibold text-[20px]"
    >
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/contact-us"
      >
        Contact Us
      </NavLink>
    </h4>,
  ];

  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  console.log(closeRef, menuRef);
  useGSAP(() => {
    const menu = menuRef?.current as HTMLDivElement;
    const close = closeRef?.current as HTMLDivElement;
    const full = fullRef?.current as HTMLDivElement;
    const home = HomeRef?.current as HTMLDivElement;
    const product = productsRef?.current as HTMLDivElement;
    const about = aboutRef?.current as HTMLDivElement;
    const dashboard = dashboardRef?.current as HTMLDivElement;
    const contact = contactRef?.current as HTMLDivElement;

    const tl = gsap.timeline();
    tl.to(fullRef.current, {
      right: 0,
    });
    tl.from(full.querySelectorAll("h4"), {
      x: 50,
      stagger: 0.1,
      opacity: 0,
    });

    tl.pause();

    const handleMenuClick = () => {
      full.classList.remove("hidden");
      full.classList.add("block");

      tl.play();
    };

    const handleCloseClick = async () => {
      await tl.reverse();
      full.classList.add("hidden");
      full.classList.remove("block");
    };

    const navClick = async () => {
      await tl.reverse();
      full.classList.add("hidden");
      full.classList.remove("block");
    };

    home.addEventListener("click", navClick);
    product.addEventListener("click", navClick);
    about.addEventListener("click", navClick);
    dashboard.addEventListener("click", navClick);
    contact.addEventListener("click", navClick);

    menu.addEventListener("click", handleMenuClick);
    close.addEventListener("click", handleCloseClick);

    return () => {
      menu.removeEventListener("click", handleMenuClick);
      close.removeEventListener("click", handleCloseClick);
    };
  }, [closeRef, menuRef]);

  useEffect(() => {
    console.log("loading");
    if (cartProducts.length > 0) {
      window.addEventListener("beforeunload", (event) => {
        event.preventDefault();
      });
    }
  }, []);
  return (
    <div className=" container overflow-hidden py-4 m-auto bg-transparent">
      <nav className="  text-[white] navbar flex justify-between" id="nav">
        <h1
          onClick={() => redirect("/")}
          className=" cursor-pointer flex-1 navbar-start w-[100px] text-5xl"
        >
          <SiClickup></SiClickup>
        </h1>
        <div className=" flex-1 hidden basis-[50%] lg:navbar-center  lg:flex justify-center items-center gap-4">
          {items}
        </div>
        <div className=" flex-1 gap-4 navbar-end">
          <Cart cartRef={cartRef}></Cart>
          <div>
            <h1
              className=" cursor-pointer lg:hidden w-auto navbar-end text-[30px] font-semibold"
              ref={menuRef}
            >
              <GiHamburgerMenu />
            </h1>
          </div>
        </div>
      </nav>

      <div
        className=" sidebar hidden min-h-screen overflow-hidden backdrop-filter w-[100%] lg:w-[30%] absolute z-40 right-[-100%] lg:right-[-30%] top-0 bg-[#292929]"
        id="full"
        ref={fullRef}
      >
        <div className="relative w-full">
          <h1
            className=" cursor-pointer w-full right-[-80%] top-3 absolute text-[30px] font-semibold text-[#1a1a1a]"
            ref={closeRef}
          >
            <ImCross />
          </h1>
        </div>
        <div className=" mt-[20%] text-[white] flex justify-center items-center flex-col gap-[50px]">
          {items}
        </div>
      </div>
      <div className=" w-full">
        <Cartdetails cartRef={cartRef}></Cartdetails>
      </div>
    </div>
  );
};

export default Header;
