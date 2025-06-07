import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-[#e65100] py-16 px-4 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
        Join the Zingari Family
      </h2>
      <p className="text-lg mb-8 text-orange-100">
        Get recipes, offers, and spice wisdom delivered to your inbox
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Handle submission logic here
        }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-full px-6 py-3 text-gray-800 w-full sm:w-[400px] focus:outline-none bg-[#ffffff]"
          required
        />
        <button
          type="submit"
          className="bg-[#bf360c] hover:bg-[#a43209] text-white rounded-full px-6 py-3 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeSection;
