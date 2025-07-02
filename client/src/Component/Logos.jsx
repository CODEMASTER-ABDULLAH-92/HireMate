import React, { useRef } from "react";
import { data } from "../assets/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logos = () => {
  const logoRef = useRef();

  const companies = [
    { image: data.compnayLogo1 },
    { image: data.compnayLogo2 },
    { image: data.compnayLogo3 },
    { image: data.compnayLogo4 },
    { image: data.compnayLogo5 },
  ];

  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      { x: "0" },
      {
        x: "-100%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      }
    );
  });

  return (
    <div className="overflow-hidden w-full bg-white">
      <div ref={logoRef} className="flex items-center gap-20 w-max">
        {[...companies, ...companies].map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Company logo ${index + 1}`}
            className="h-40 w-40 grayscale object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
