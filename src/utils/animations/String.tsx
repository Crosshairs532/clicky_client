import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const String = () => {
  const stringRef = useRef(null);
  const bodyPathRef = useRef(null);

  React.useEffect(() => {
    const pathRef = stringRef?.current;
    const bodyRef = bodyPathRef?.current;
    let finalPath = `M 10 100 Q 500 100  990 100 `;
    bodyRef.addEventListener("mousemove", function (dets) {
      let path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
      gsap.to(pathRef, {
        attr: {
          d: path,
        },
        duration: 0.3,
        ease: "power3.out",
      });
    });
    bodyRef.addEventListener("mouseleave", function () {
      gsap.to(pathRef, {
        attr: {
          d: finalPath,
        },
        duration: 0.5,
        ease: "elastic.out",
      });
    });
  }, []);

  return (
    <div
      className=" flex justify-center items-center"
      ref={bodyPathRef}
      id="string"
    >
      <svg width="1000" height="200" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={stringRef}
          d="M 10 100 Q 500 100  990 100 "
          stroke="black"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default String;
