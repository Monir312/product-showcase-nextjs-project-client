'use client';

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails() {
  const { product_id } = useParams();
  const router = useRouter();
  const { user, loading } = useAuth(); 
  const [product, setProduct] = useState(null);


  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
      toast.info("Please login to view product details");
    }
  }, [user, loading, router]);


  useEffect(() => {
    if (!user) return;

    fetch(`https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products/${product_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.userId && data.userId !== user.uid) {
          toast.error("You are not allowed to view this product");
          router.push('/');
          return;
        }
        setProduct(data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch product");
      });
  }, [product_id, user, router]);

  if (loading || !user) 
    return <p className="text-center py-20 text-gray-500 text-lg">Loading...</p>;

  if (!product)
    return <p className="text-center py-20 text-gray-500 text-lg">Loading Product...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-start mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
        >
          <span className="text-lg">←</span>
          Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.title}
            className="rounded-3xl shadow-lg w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-start space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700">
            {product.title}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            {product.fullDesc || product.shortDesc || "No description available."}
          </p>

          <div className="space-y-2">
            <p className="text-lg font-semibold">
              Price: <span className="text-green-600">${product.price?.toFixed(2)}</span>
            </p>
            <p className="text-lg font-semibold">
              Date: <span className="text-blue-600">{product.date || "N/A"}</span>
            </p>
            <p className="text-lg font-semibold">
              Priority: <span className="text-blue-600">{product.priority || "normal"}</span>
            </p>
          </div>

          <button
            onClick={() => router.back()}
            className="flex justify-center items-center gap-2 w-full max-w-xs mx-auto px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
          >
            <span className="text-lg">←</span>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
