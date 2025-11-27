import React from "react";
import { FaStar, FaBoxes, FaTruck, FaHeadset } from "react-icons/fa";

const Features = () => {
  const featureList = [
    {
      icon: <FaStar className="text-pink-500 text-3xl mb-3" />,
      title: "Quality Products",
      description: "We ensure top-quality products curated from trusted sellers.",
    },
    {
      icon: <FaBoxes className="text-pink-500 text-3xl mb-3" />,
      title: "Easy Management",
      description: "Add, update, or manage your products with a few clicks.",
    },
    {
      icon: <FaTruck className="text-pink-500 text-3xl mb-3" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery for all your imported products.",
    },
    {
      icon: <FaHeadset className="text-pink-500 text-3xl mb-3" />,
      title: "24/7 Support",
      description: "Our customer support team is always ready to help you.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-pink-50 rounded-lg shadow-md hover:shadow-xl transition"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
