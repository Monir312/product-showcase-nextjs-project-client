'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditProductPage() {
const router = useRouter();
const { id } = useParams(); 
const [loading, setLoading] = useState(false);
const [product, setProduct] = useState({
title: '',
shortDesc: '',
fullDesc: '',
price: '',
date: '',
priority: 'normal',
image: ''
});

useEffect(() => {
const fetchProduct = async () => {
try {
const res = await fetch(`https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products/${id}`);
if (!res.ok) throw new Error('Product not found');
const data = await res.json();
setProduct({
title: data.title || '',
shortDesc: data.shortDesc || '',
fullDesc: data.fullDesc || '',
price: data.price || '',
date: data.date || '',
priority: data.priority || 'normal',
image: data.image || ''
});
} catch (err) {
console.error(err);
toast.error('Failed to load product');
}
};

fetchProduct();

}, [id]);

const handleChange = (e) => {
const { name, value } = e.target;
setProduct((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
try {
const res = await fetch(`https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products/${id}`, {
method: 'PATCH',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(product)
});


  if (!res.ok) throw new Error('Update failed');

  toast.success('Product updated successfully!');
  router.push('/manage-products'); 
} catch (err) {
  console.error(err);
  toast.error('Failed to update product');
} finally {
  setLoading(false);
}


};

return ( <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"> <ToastContainer position="top-right" /> <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>

  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="font-semibold">Title:</label>
      <input
        type="text"
        name="title"
        value={product.title}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
    </div>

    <div>
      <label className="font-semibold">Short Description:</label>
      <textarea
        name="shortDesc"
        value={product.shortDesc}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
    </div>

    <div>
      <label className="font-semibold">Full Description:</label>
      <textarea
        name="fullDesc"
        value={product.fullDesc}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
    </div>

    <div>
      <label className="font-semibold">Price:</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
    </div>

    <div>
      <label className="font-semibold">Date:</label>
      <input
        type="date"
        name="date"
        value={product.date}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
    </div>

    <div>
      <label className="font-semibold">Priority:</label>
      <select
        name="priority"
        value={product.priority}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="normal">Normal</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
    </div>

    <div>
      <label className="font-semibold">Image URL:</label>
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors duration-200"
    >
      {loading ? 'Updating...' : 'Update Product'}
    </button>
  </form>
</div>


);
}
