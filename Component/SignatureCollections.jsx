import React, { useRef, useEffect, useState } from "react";
import PremiumMasalas from "../src/assets/mainImg/PremiumMasalas.jpg";

const SignatureCollections = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const collections = [
    { title: "Premium Masalas", image: PremiumMasalas, link: "#" },
    { title: "Whole Spices", image: PremiumMasalas, link: "#" },
    { title: "Regional Blends", image: PremiumMasalas, link: "#" },
  ];

  const totalSlides = collections.length;

  const goToSlide = (index) => {
    if (!isMobile) return; // Prevent transform if not mobile
    const slider = sliderRef.current;
    const slideWidth = slider?.children[0]?.clientWidth || 0;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(newIndex);
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(newIndex);
    goToSlide(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      goToSlide(currentSlide); // Reset position on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  useEffect(() => {
    if (isMobile) {
      const autoSlide = setInterval(nextSlide, 3000);
      return () => clearInterval(autoSlide);
    }
  }, [currentSlide, isMobile]);

  return (
    <div className="text-black py-12 px-4 md:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#212121] mb-12">
        Our Signature Collections
      </h2>

      <div className="overflow-hidden relative max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          className={`flex transition-transform duration-500 ease-in-out ${
            isMobile ? "flex-nowrap" : "flex-wrap"
          }`}
        >
          {collections.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 ${
                isMobile ? "min-w-full" : "w-full sm:w-1/2 md:w-1/3"
              }`}
            >
              <div className="bg-white overflow-hidden text-start  ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-100 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    className="text-orange-500 font-semibold inline-flex items-center hover:underline"
                  >
                    Shop Now <span className="ml-1">➜</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show buttons only on mobile */}
        {isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 shadow rounded-full z-10 hover:bg-orange-100"
            >
              ⬅
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 shadow rounded-full z-10 hover:bg-orange-100"
            >
              ➡
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignatureCollections;
