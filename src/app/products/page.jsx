"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext"; 

const ProductPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    if (user) {
      fetch("https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, [user]);

  if (loading || !user) {
    return <p className="text-center py-20 text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition flex flex-col"
            >
              <img
                src={product.image || "/placeholder.png"}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">
                {product.shortDesc || "No description"}
              </p>
              <p className="font-bold text-pink-500 mb-4">${product.price}</p>
              <Link
                href={`/products/${product._id}`}
                className="mt-auto px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-center transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
