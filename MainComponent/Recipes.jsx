import React from 'react';

const RecipeCard = ({ title, time, difficulty, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#5D4037] mb-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span>⏰ {time}</span>
          <span>📊 {difficulty}</span>
        </div>
      </div>
    </div>
  );
};

const Recipes = () => {
  const recipes = [
    {
      title: "Traditional Maharashtrian Misal Pav",
      time: "45 mins",
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979"
    },
    {
      title: "Spicy Masala Vada",
      time: "30 mins",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979"
    },
    {
      title: "Authentic Malvani Fish Curry",
      time: "60 mins",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979"
    },
    {
      title: "Kolhapuri Chicken",
      time: "75 mins",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979"
    },
    {
      title: "Masala Bhaat",
      time: "40 mins",
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979"
    },
    {
      title: "Kanda Poha",
      time: "20 mins",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[#5D4037] mb-8 text-center">Traditional Recipes</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center text-gray-700">
          Discover authentic Maharashtrian recipes that showcase the rich flavors of our spices. 
          Each recipe has been carefully crafted to help you create delicious dishes at home.
        </p>
      </div>

      {/* Recipe Filters */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 rounded-full bg-[#BF360C] text-white hover:bg-[#a32e09] transition">
          All Recipes
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Vegetarian
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Non-Vegetarian
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-[#5D4037] border border-[#5D4037] hover:bg-gray-50 transition">
          Quick & Easy
        </button>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
