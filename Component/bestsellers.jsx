import React from "react";
import organicturmeric from "../src/assets/mainImg/organicturmeric.jpg";
const bestsellers = [
  {
    title: "Premium Garam Masala",
    price: "₹299",
    image: organicturmeric,
  },
  {
    title: "Authentic Turmeric",
    price: "₹199",
    image: organicturmeric,
  },
  {
    title: "Spice Mix Collection",
    price: "₹499",
    image: organicturmeric,
  },
  {
    title: "Whole Spices Set",
    price: "₹399",
       image: organicturmeric,
  },
];

const BestSellers = () => {
  return (
    <div className="px-4 py-12  mx-auto bg-[#FFF8F0]">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Our Bestsellers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {bestsellers.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.price}</p>
              <button className="bg-orange-600 text-white px-4 py-1 rounded-full hover:bg-orange-700 transition">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
