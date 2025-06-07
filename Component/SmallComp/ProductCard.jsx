import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ image, title, price, weight = "200g", rating = 4.5, onAddToCart }) => {
  // Render stars based on rating
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} className="text-orange-500 text-sm" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-orange-500 text-sm" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-orange-300 text-sm" />);
    }
  }

  return (
    <div className="max-w-xs bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition duration-300 hover:shadow-md font-serif text-center p-4">
      <img
        src={image}
        alt={title}
        className="w-[150px] h-[150px] mx-auto object-contain mb-4"
      />

      <h2 className="text-md font-semibold text-gray-900 mb-1">{title}</h2>

      <div className="flex justify-center items-center space-x-2 text-sm text-gray-600 mb-1">
        <div className="flex">{stars}</div>
        <span className="ml-1 text-[13px]">{rating}</span>
      </div>

      <p className="text-[13px] text-gray-600 mb-1">{weight}</p>
      <p className="text-[15px] font-semibold text-gray-800 mb-4">${price}</p>

      <button
        onClick={onAddToCart}
        className="bg-[#b13916] hover:bg-[#9e2f0d] text-white px-6 py-2 rounded-full text-sm transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
