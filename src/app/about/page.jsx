"use client";

import React from "react";
import { FaHeart } from "react-icons/fa";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Our Product Showcase
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Welcome to our Product Showcase Platform — a modern, fast, and secure
          web application built to help users browse, add, and manage products
          effortlessly. Our goal is to provide a clean user experience with a
          smart interface, real-time features, and seamless navigation. Whether
          you are exploring new items or managing your own products, this
          platform ensures everything stays organized and efficient.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Responsive
            </h3>
            <p className="text-gray-600 text-sm">
              Every page loads quickly with smooth, responsive design across
              all devices.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Secure Access
            </h3>
            <p className="text-gray-600 text-sm">
              Protected routes & authentication ensure your data stays safe.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Management
            </h3>
            <p className="text-gray-600 text-sm">
              Add, edit, and manage products through a simple and intuitive
              dashboard.
            </p>
          </div>
        </div>

        <p className="flex justify-center items-center gap-2 mt-16 text-gray-500 text-sm">
          Built with <FaHeart className="text-red-500" /> using Next.js, TailwindCSS, MongoDB & JWT Authentication.
        </p>

      </div>
    </div>
  );
};

export default Page;
