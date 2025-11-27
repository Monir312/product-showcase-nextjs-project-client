'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext'; 

const ManageProductsPage = () => {
const router = useRouter();
const { user, loading: authLoading } = useAuth();
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(() => {
if (!authLoading && !user) {
toast.info('You must login to access this page');
router.push('/auth/login');
}
}, [user, authLoading, router]);

const fetchProducts = async () => {
try {
const res = await fetch('https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products');
const data = await res.json();
setProducts(data);
} catch (err) {
console.error(err);
toast.error('Failed to fetch products');
}
};

useEffect(() => {
if (user) fetchProducts();
}, [user]);

const deleteProduct = async (productId) => {
if (!confirm('Are you sure you want to delete this product?')) return;


setLoading(true);
try {
  const res = await fetch(`https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products/${productId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Delete failed');
  setProducts(products.filter((p) => p._id !== productId));
  toast.success('Product deleted successfully!');
} catch (err) {
  console.error(err);
  toast.error('Failed to delete product');
} finally {
  setLoading(false);
}

};

const viewProduct = (productId) => {
router.push(`/products/${productId}`);
};

const editProduct = (productId) => {
router.push(`/products/edit/${productId}`);
};

if (authLoading || !user) {
return <p className="text-center py-20 text-gray-500 text-lg">Loading...</p>;
}

return ( <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"> <ToastContainer position="top-right" /> <h2 className="text-2xl font-bold mb-6 text-center">Manage Products</h2>


  {products.length === 0 ? (
    <p className="text-center text-gray-500">No products found.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Priority</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{product.title}</td>
              <td className="px-4 py-2 border">${product.price}</td>
              <td className="px-4 py-2 border">{product.priority}</td>
              <td className="px-4 py-2 border">{product.date || 'N/A'}</td>
              <td className="px-4 py-2 border space-x-2">
                <button
                  onClick={() => viewProduct(product._id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View
                </button>
                <button
                  onClick={() => editProduct(product._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  disabled={loading}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

);
};

export default ManageProductsPage;
