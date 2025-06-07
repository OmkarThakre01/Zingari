import React, { useEffect, useRef } from "react";
import "../src/App.css"; // Make sure this has the .hide-scrollbar styles

import hero from "../src/assets/mainImg/organicturmeric.jpg";
import spice1 from "../src/assets/mainImg/organicturmeric.jpg";
import spice2 from "../src/assets/mainImg/organicturmeric.jpg";

const images = [hero, spice1, spice2, hero, hero, hero];

const SpiceSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
        Follow Us <span className="italic font-serif">@ZingariSpices</span>
      </h2>

      <div
        className="flex overflow-x-auto space-x-4 hide-scrollbar"
        ref={scrollRef}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Spice ${index + 1}`}
            className="w-[300px] h-[200px] object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default SpiceSlider;
