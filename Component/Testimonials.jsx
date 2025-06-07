import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "The spices are incredibly aromatic and have transformed my cooking completely!",
  },
  {
    name: "Rajesh Kumar",
    location: "Pune",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "Best spices I've ever used. The quality is unmatched and the flavors are authentic.",
  },
  {
    name: "Meera Patel",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    feedback:
      "These spices bring back memories of my grandmother's kitchen. Pure nostalgia!",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-[#FFF8F0]">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-md p-6 flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
