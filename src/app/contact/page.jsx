"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-16 px-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have any questions? We would love to hear from you.  
          Feel free to reach out anytime.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-primary text-3xl mb-3" />
            <h4 className="font-semibold text-gray-700">Phone</h4>
            <p className="text-gray-500">+880 1234 567 890</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-primary text-3xl mb-3" />
            <h4 className="font-semibold text-gray-700">Email</h4>
            <p className="text-gray-500">support@example.com</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-primary text-3xl mb-3" />
            <h4 className="font-semibold text-gray-700">Location</h4>
            <p className="text-gray-500">Dhaka, Bangladesh</p>
          </div>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Your Full Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-300 text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
