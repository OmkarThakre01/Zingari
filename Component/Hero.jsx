import React from "react";
import heroImg from "../src/assets/mainImg/FRAME.jpg"; // Adjust path if needed

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-black bg-no-repeat bg-cover bg-center min-h-[90vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight capitalize"
          style={{
           
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.6)",
          }}
        >
          Zingari – Zaikyaacha Khazana
        </h1>

        <p
          className="mt-4 text-white text-base sm:text-lg md:text-xl"
          style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)" }}
        >
          Authentic Maharashtrian Spices, Crafted with Heritage
        </p>

        <div className="mt-6 flex justify-center">
          <button className="w-full sm:w-auto bg-[#BF360C] text-white font-semibold py-3 px-6 rounded-4xl hover:bg-[#a32e09] transition duration-300">
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
