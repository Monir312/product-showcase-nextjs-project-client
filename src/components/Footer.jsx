"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

 
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MiniShop</h2>
          <p className="text-gray-400 leading-relaxed">
            Your trusted mini marketplace for simple and quality products.
            Browse, buy, and enjoy a smooth shopping experience.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with new products and offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none text-white"
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg">
              Join
            </button>
          </div>
        </div>
      </div>


      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} MiniShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
