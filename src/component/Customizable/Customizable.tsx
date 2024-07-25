import { useGSAP } from "@gsap/react";
import cus from "../../assets/reveal.webp";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Customizable = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const infoRef = useRef(null);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      width: "100%",
      height: "100%",
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
    gsap.from(infoRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: infoRef.current,
        scroller: "body",
        scrub: true,
        start: "top 50%",
        end: "top 0%",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className=" customize p-[2vw] container mx-auto  min-h-screen  "
    >
      <h1
        ref={infoRef}
        className=" text-[#f0f0f0] mix-blend-difference font-bold font-clicky absolute left-[50%] whitespace-nowrap top-[50%] -translate-y-[50%]  -translate-x-[50%] z-40 text-[5vw]"
      >
        Customizable Keymap with QMK/VIA
      </h1>

      <img
        ref={imgRef}
        className=" rounded-lg relative left-[50%] top-[50%] -translate-y-[50%]  -translate-x-[50%] w-1/2 h-1/2 object-cover object-center "
        src={cus}
        alt=""
      />
    </div>
  );
};

export default Customizable;
