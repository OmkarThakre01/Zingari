import React from 'react';
import ProductCard from './SmallComp/ProductCard';

const MainCards = () => {
  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      <ProductCard
        image="https://images.unsplash.com/photo-1604908177260-e763f2c4019d"
        title="Authentic Garam Masala"
        price="12.99"
        rating={4.5}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default MainCards;
