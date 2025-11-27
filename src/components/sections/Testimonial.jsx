
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Entrepreneur",
      feedback:
        "Amazing products and smooth experience! The platform is easy to use and highly reliable.",
      avatar: "/cute_1.jpg",
      rating: 5,
    },
    {
      name: "Jane Smith",
      title: "Small Business Owner",
      feedback:
        "Great support and fast delivery. I can manage my products efficiently here.",
      avatar: "/cute_2.jpg",
      rating: 4,
    },
    {
      name: "Michael Lee",
      title: "Shop Owner",
      feedback:
        "Very helpful customer service and high-quality products. Highly recommended!",
      avatar: "/cute_3.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="bg-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-pink-400 text-3xl mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full mb-2"
                priority={true} 
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.title}</p>
              <div className="flex gap-1">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
