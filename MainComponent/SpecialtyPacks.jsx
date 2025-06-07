import React from 'react';
import ProductCard from '../Component/SmallComp/ProductCard';

const SpecialtyPacks = () => {
  const packs = [
    {
      title: "Maharashtrian Starter Pack",
      price: "29.99",
      weight: "500g",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Festival Special Pack",
      price: "39.99",
      weight: "750g",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Coastal Cuisine Pack",
      price: "34.99",
      weight: "600g",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Vegetarian Essentials",
      price: "24.99",
      weight: "400g",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Non-Veg Special Pack",
      price: "44.99",
      weight: "800g",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      title: "Gift Collection Box",
      price: "49.99",
      weight: "1kg",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    }
  ];

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log('Added to cart');
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[#5D4037] mb-8 text-center">Specialty Packs</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center text-gray-700">
          Discover our curated collection of specialty spice packs, perfect for gifting or starting your
          authentic Maharashtrian cooking journey. Each pack is thoughtfully assembled to bring you the
          perfect combination of flavors.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 rounded-full bg-[#BF360C] text-white hover:bg-[#a32e09] transition">
          All Packs
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Gift Boxes
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Starter Kits
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Festival Specials
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {packs.map((pack, index) => (
          <ProductCard
            key={index}
            title={pack.title}
            price={pack.price}
            weight={pack.weight}
            rating={pack.rating}
            image={pack.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialtyPacks;
