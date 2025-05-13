"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Login success:", data.message);
        router.push("/welcome"); // Redirect to the welcome page on successful login
      } else {
        const data = await res.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong");
    }
  };

  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">Login</h3>
          <p className="text-2xl mt-5">
            Welcome to the login page! Please enter your credentials to access
            your account.
          </p>
          <form onSubmit={handleSubmit} className="mt-5">
            {error && <p className="text-red-500">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 m-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 m-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 m-2 hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-5">
            Don't have an account?{" "}
            <Link href="/register" className="hover:underline text-blue-500">
              Register here
            </Link>
          </p>
        </div>
        <Footer />
      </Container>
    </main>
  );
}

export default Loginpage;
