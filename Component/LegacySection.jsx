import React from "react";
import legacyImage from "../src/assets/mainImg/legacy.png"; // Replace with actual image path

const LegacySection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-16 bg-white">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={legacyImage}
          alt="Legacy of Flavors"
          className="rounded-2xl w-full h-auto object-cover shadow-lg"
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          A <span className="font-black">Legacy</span> of Flavors
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          For generations, our family has been crafting authentic Maharashtrian
          spices using traditional methods. Every blend tells a story of
          heritage, passion, and the finest ingredients sourced from local
          farmers.
        </p>
        <a
          href="#"
          className="text-orange-600 font-semibold inline-flex items-center hover:underline"
        >
          Read Our Story <span className="ml-1">➜</span>
        </a>
      </div>
    </div>
  );
};

export default LegacySection;
