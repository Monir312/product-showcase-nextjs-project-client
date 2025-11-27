"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { GiShakingHands } from "react-icons/gi";
import { toast } from "react-toastify";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { signIn, googleSignIn } = useAuth(); 
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      toast.success("Logged in successfully");
      router.push("/"); 
    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error(err.message || "Invalid email or password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Logged in with Google");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Google sign-in failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600 mr-2">
            Welcome Back
          </h2>
          <GiShakingHands className="text-yellow-500 text-4xl" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          <div className="text-right">
            <Link href="/auth/forget-password" className="text-sm text-indigo-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-indigo-500 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
