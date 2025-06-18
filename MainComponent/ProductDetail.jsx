import React from 'react';

const ProductDetail = ({ product, onAddToCart }) => {
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-[#5D4037] mb-2">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">Rating: {product.rating}</p>
          <p className="text-gray-700 mb-6">
            This premium spice is sourced from the finest farms and carefully processed to preserve its authentic flavor and aroma.
          </p>
          <button
            onClick={onAddToCart}
            className="bg-[#BF360C] text-white px-6 py-2 rounded hover:bg-[#a32e09]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 