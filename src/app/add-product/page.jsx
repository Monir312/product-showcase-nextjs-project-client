'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext'; 

const AddProductPage = () => {
const router = useRouter();
const { user, loading: authLoading } = useAuth(); 
const [formData, setFormData] = useState({
title: '',
shortDesc: '',
fullDesc: '',
price: '',
date: '',
priority: '',
image: '',
});
const [loading, setLoading] = useState(false);
const [defaultDate, setDefaultDate] = useState('');


useEffect(() => {
if (!authLoading && !user) {
toast.info('You must login to access this page');
router.push('/auth/login');
}
}, [user, authLoading, router]);

useEffect(() => {
setDefaultDate(new Date().toISOString().split('T')[0]);
}, []);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
e.preventDefault();
if (!formData.title || !formData.fullDesc || !formData.price) {
toast.error('Please fill all required fields: Title, Full Description, Price.');
return;
}

setLoading(true);
try {
  const res = await fetch('https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formData,
      price: Number(formData.price),
      priority: Number(formData.priority) || 1,
      date: formData.date || defaultDate,
    }),
  });
  if (!res.ok) throw new Error('Failed to add product');

  toast.success('Product added successfully!');
  setTimeout(() => router.push('/'), 1500);
} catch (err) {
  console.error(err);
  toast.error('Error adding product. Please try again.');
} finally {
  setLoading(false);
}


};


if (authLoading || !user) {
return <p className="text-center py-20 text-gray-500 text-lg">Loading...</p>;
}

return ( <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"> <ToastContainer position="top-right" /> <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2> <form onSubmit={handleSubmit} className="space-y-4"> <div> <label className="block font-semibold mb-1">Title*</label> <input
         type="text"
         name="title"
         value={formData.title}
         onChange={handleChange}
         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
       /> </div> <div> <label className="block font-semibold mb-1">Short Description</label> <input
         type="text"
         name="shortDesc"
         value={formData.shortDesc}
         onChange={handleChange}
         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
       /> </div> <div> <label className="block font-semibold mb-1">Full Description*</label> <textarea
         name="fullDesc"
         value={formData.fullDesc}
         onChange={handleChange}
         rows={5}
         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
       ></textarea> </div> <div> <label className="block font-semibold mb-1">Price*</label> <input
         type="number"
         name="price"
         value={formData.price}
         onChange={handleChange}
         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
       /> </div> <div> <label className="block font-semibold mb-1">Date</label>
<input
type="date"
name="date"
value={formData.date || defaultDate}
onChange={handleChange}
className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
/> </div> <div> <label className="block font-semibold mb-1">Priority</label> <input
         type="number"
         name="priority"
         value={formData.priority}
         onChange={handleChange}
         min={1}
         max={5}
         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
       /> </div> <div> <label className="block font-semibold mb-1">Image URL</label> <input
         type="text"
         name="image"
         value={formData.image}
         onChange={handleChange}
         className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
       /> </div> <button
       type="submit"
       disabled={loading}
       className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 mt-4"
     >
{loading ? 'Adding...' : 'Add Product'} </button> </form> </div>
);
};

export default AddProductPage;
