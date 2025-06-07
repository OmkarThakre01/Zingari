import React from 'react';
import ProductCard from '../Component/SmallComp/ProductCard';

const Spices = () => {
  const spices = [
    {
      title: "Premium Turmeric Powder",
      price: "5.99",
      weight: "100g",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7"
    },
    {
      title: "Organic Red Chilli Powder",
      price: "6.99",
      weight: "100g",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7"
    },
    {
      title: "Black Pepper Powder",
      price: "7.99",
      weight: "100g",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7"
    },
    {
      title: "Cumin Powder",
      price: "4.99",
      weight: "100g",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7"
    },
    {
      title: "Coriander Powder",
      price: "4.99",
      weight: "100g",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7"
    },
    {
      title: "Cardamom Powder",
      price: "9.99",
      weight: "50g",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7"
    }
  ];

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log('Added to cart');
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[#5D4037] mb-8 text-center">Premium Spices</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center text-gray-700">
          Discover our collection of premium, hand-ground spices sourced directly from the finest farms of Maharashtra.
          Each spice is carefully processed to preserve its authentic flavor and aroma.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 rounded-full bg-[#BF360C] text-white hover:bg-[#a32e09] transition">
          All Spices
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Ground Spices
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Whole Spices
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Organic
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {spices.map((spice, index) => (
          <ProductCard
            key={index}
            title={spice.title}
            price={spice.price}
            weight={spice.weight}
            rating={spice.rating}
            image={spice.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Spices;
