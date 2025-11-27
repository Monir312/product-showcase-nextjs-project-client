import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center justify-between">


        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Welcome to ProductShow
          </h1>
          <p className="text-gray-600 mb-6 text-lg sm:text-xl">
            Explore top-quality products, manage your collection, and discover new trends with ease.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href='/products' className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition">
              Get Started
            </Link>
            <Link href='/about' className="px-6 py-3 border border-pink-500 text-pink-500 rounded-lg font-medium hover:bg-pink-50 transition flex items-center gap-2">
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>


        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/laptop.jpg"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
