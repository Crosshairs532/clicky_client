import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SiClickup } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

gsap.registerPlugin(useGSAP);

const Header = () => {
  let items = [
    <li className=" font-semibold text-xl">
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home
      </NavLink>
    </li>,
    <li className=" font-semibold text-xl">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/products"
      >
        Products
      </NavLink>
    </li>,
    <li className=" font-semibold text-xl">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/about-us"
      >
        About us
      </NavLink>
    </li>,
    <li className=" font-semibold text-xl">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </li>,
  ];

  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  console.log(closeRef, menuRef);
  useGSAP(() => {
    const menu = menuRef?.current as HTMLDivElement;
    const close = closeRef?.current as HTMLDivElement;
    const full = fullRef?.current as HTMLDivElement;

    const tl = gsap.timeline();
    tl.to(fullRef.current, {
      right: "0",
    });
    tl.from(full.querySelectorAll("h4"), {
      x: 50,
      stagger: 0.1,
      opacity: 0,
    });

    tl.pause();

    const handleMenuClick = () => {
      tl.play();
    };

    const handleCloseClick = () => {
      tl.reverse();
    };

    menu.addEventListener("click", handleMenuClick);
    close.addEventListener("click", handleCloseClick);

    return () => {
      menu.removeEventListener("click", handleMenuClick);
      close.removeEventListener("click", handleCloseClick);
    };
  }, [closeRef, menuRef]);

  return (
    <div className=" container m-auto bg-transparent">
      <nav className=" text-[white] navbar flex justify-between" id="nav">
        <h1 className=" navbar-start text-5xl">
          {" "}
          <SiClickup></SiClickup>
        </h1>
        <h1 className=" navbar-end  text-[30px] font-semibold" ref={menuRef}>
          <GiHamburgerMenu />
        </h1>
      </nav>
      <div
        className=" h-full backdrop-filter w-[30%] absolute z-40 right-[-30%] top-0 bg-[#292929]"
        id="full"
        ref={fullRef}
      >
        <div className=" relative w-full">
          <h1
            className=" w-full right-[-80%] top-3 absolute text-[30px] font-semibold text-[#1a1a1a]"
            ref={closeRef}
          >
            <ImCross />
          </h1>
        </div>
        <div className=" mt-[20%] flex justify-center items-center flex-col gap-[20px]">
          <h4 className=" font-semibold text-[50px] text-white">Item 1</h4>
          <h4 className=" font-semibold text-[50px] text-white">Item 2</h4>
          <h4 className="  font-semibold text-[50px] text-white">Item 3</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;

// <div className=" container m-auto pt-5">
// <div className="navbar bg-transparent text-white">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className=" lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm bg-transparent dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
//       >
//         {items}
//       </ul>
//     </div>
//     <div className=" logo ">
//       <h1 className="text-6xl">
//         <SiClickup></SiClickup>
//       </h1>
//     </div>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal bg-transparent px-1">{items}</ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
// </div>
