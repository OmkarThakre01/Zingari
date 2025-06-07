import React from 'react';
import ProductCard from '../Component/SmallComp/ProductCard';

const MasalaMixes = () => {
  const masalas = [
    {
      title: "Garam Masala",
      price: "8.99",
      weight: "100g",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Pav Bhaji Masala",
      price: "7.99",
      weight: "100g",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Chicken Masala",
      price: "8.99",
      weight: "100g",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Sambhar Masala",
      price: "6.99",
      weight: "100g",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Chaat Masala",
      price: "5.99",
      weight: "100g",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Kitchen King Masala",
      price: "7.99",
      weight: "100g",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    }
  ];

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log('Added to cart');
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[#5D4037] mb-8 text-center">Masala Mixes</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center text-gray-700">
          Experience the authentic taste of Maharashtra with our signature masala blends.
          Each mix is crafted using traditional recipes passed down through generations.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 rounded-full bg-[#BF360C] text-white hover:bg-[#a32e09] transition">
          All Masalas
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Vegetarian
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Non-Vegetarian
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Regional
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {masalas.map((masala, index) => (
          <ProductCard
            key={index}
            title={masala.title}
            price={masala.price}
            weight={masala.weight}
            rating={masala.rating}
            image={masala.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MasalaMixes;
