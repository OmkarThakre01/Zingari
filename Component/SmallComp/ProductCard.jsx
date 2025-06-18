import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ image, title, price, weight = "200g", rating = 4.5, onAddToCart, onViewDetails }) => {
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
    <div className="border p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">${price}</p>
      <p className="text-gray-700">Rating: {rating}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onAddToCart}
          className="bg-[#BF360C] text-white px-4 py-2 rounded hover:bg-[#a32e09]"
        >
          Add to Cart
        </button>
        <button
          onClick={onViewDetails}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
