"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { GiJusticeStar } from "react-icons/gi";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const photoURL = form.photoURL.value.trim();

    // Password Validation
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter");
    }

    setError("");

    try {

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, photoURL }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        toast.error(data.message || "Invalid information");
        return;
      }

      toast.success("Registration successful!");

      await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        <div className="flex items-center justify-center text-3xl mb-4">
          <h2 className="font-bold text-indigo-600">Create an Account</h2>
          <GiJusticeStar className="text-yellow-500 ml-2" />
        </div>

        <p className="text-center text-gray-500 mb-6">
          Join ProductShow — Connect, Trade, and Explore!
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Paste your photo link"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {error && <p className="text-red-600 text-center mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Register
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
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-indigo-500 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
