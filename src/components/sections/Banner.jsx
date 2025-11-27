import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">


        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Exclusive Offers for You!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Check out our special promotions and limited-time discounts. Grab your favorite products before they run out!
          </p>
          <Link
            href="/products"
            className="inline-flex justify-center items-center gap-2 bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
          >
            Shop Now <FaShoppingCart />
          </Link>
        </div>


        <div className="flex justify-center md:justify-end">
          <Image
            src="/banner.jpg"
            alt="Special Offer"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
