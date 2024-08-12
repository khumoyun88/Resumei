"use client";
import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <div>
      <TypeAnimation
        className=" text-white inline-block bg-gradient-to-r from-[#f79] to-[#f06] bg-clip-text text-transparent text-4xl md:text-7xl"
        sequence={["Khumoyun", 1000, "Web developer", 1000]}
        wrapper="span"
        speed={50}
        style={{
          display: "inline-block",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        repeat={Infinity}
      />
    </div>
  );
};
export default Animation;
