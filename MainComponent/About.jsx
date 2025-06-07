import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[#5D4037] mb-8 text-center">About Zingari</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#5D4037] mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Zingari was born from a passion for authentic Maharashtrian spices and a desire to share our rich culinary heritage with the world. Our journey began in the heart of Maharashtra, where traditional spice-blending techniques have been passed down through generations.
          </p>
          <p className="text-gray-700 mb-6">
            Today, we continue to honor these time-tested methods while embracing modern quality standards to bring you the finest spices and masala blends.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#5D4037] mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            We are committed to preserving and sharing the authentic flavors of Maharashtra while ensuring the highest quality standards in our products. Every blend we create is a testament to our dedication to authenticity and excellence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#5D4037] mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#5D4037] mb-2">Authenticity</h3>
              <p className="text-gray-700">Staying true to traditional recipes and methods</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#5D4037] mb-2">Quality</h3>
              <p className="text-gray-700">Using only the finest ingredients and processes</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#5D4037] mb-2">Sustainability</h3>
              <p className="text-gray-700">Committed to eco-friendly practices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
