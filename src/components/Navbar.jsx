"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth(); 
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    pathname === path ? "text-pink-500 font-semibold" : "text-gray-700";

  const navLinks = (
    <>
      <li>
        <Link href="/" className={`px-2 py-1 rounded hover:bg-pink-50 ${isActive("/")}`}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/products" className={`px-2 py-1 rounded hover:bg-pink-50 ${isActive("/products")}`}>
          Products
        </Link>
      </li>
      <li>
        <Link href="/about" className={`px-2 py-1 rounded hover:bg-pink-50 ${isActive("/about")}`}>
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" className={`px-2 py-1 rounded hover:bg-pink-50 ${isActive("/contact")}`}>
          Contact
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link href="/add-product" className={`px-2 py-1 rounded hover:bg-pink-50 ${isActive("/add-product")}`}>
              Add Product
            </Link>
          </li>
          <li>
            <Link href="/manage-products" className={`px-2 py-1 rounded hover:bg-pink-50 ${isActive("/manage-products")}`}>
              Manage Products
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex items-center gap-4">

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>


            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" width={40} height={40} alt="Logo" className="rounded" />
              <span className="text-2xl font-bold text-pink-600">ProductShow</span>
            </Link>
          </div>


          <div className="hidden md:flex">
            <ul className="flex space-x-4">{navLinks}</ul>
          </div>


          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative group">
                <button className="flex items-center focus:outline-none">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      width={40}
                      height={40}
                      alt="User"
                      unoptimized={true} 
                      className="rounded-full border-2 border-pink-400 hover:scale-105 transition-transform"
                    />
                  ) : (
                    <FaUserCircle className="text-3xl text-gray-600" />
                  )}
                </button>

                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <li>
                    <Link href="/add-product" className="block px-4 py-2 hover:bg-pink-50">Add Product</Link>
                  </li>
                  <li>
                    <Link href="/manage-products" className="block px-4 py-2 hover:bg-pink-50">Manage Products</Link>
                  </li>
                  <li>
                    <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-pink-50">Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link href="/auth/login" className="px-3 py-1 rounded bg-pink-500 text-white hover:bg-pink-600">Login</Link>
                <Link href="/auth/register" className="px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden px-2 pb-3">
          <ul className="space-y-2">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
