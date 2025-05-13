"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Link from "next/link";
import { set } from "mongoose";

function Registerpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password })
      })
      if (res.ok){
        const form = e.target ;
        setError("");
        form.reset();
      }else {
        console.log("Error in registration");
      }
    } catch (err) {
      console.error("Error register", err);
    }
    // Handle registration logic here
    console.log("Registered:", { name, email, password });
  };

  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow text-center p-10">
          <h3 className="text-5xl">Register</h3>
          <p className="text-2xl mt-5">
            Welcome to the registration page! Please fill out the form below to
            create an account.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-5"
          >
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-2 m-2">
                {error}
              </div>
            )}
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Username"
              className="border p-2 m-2"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="border p-2 m-2"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="border p-2 m-2"
            />
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="border p-2 m-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 m-2">
              Register
            </button>
          </form>
          <p className="mt-5">
            Already have an account?{" "}
            <Link href="/login" className="hover:underline text-blue-500">
              Login here
            </Link>
          </p>
        </div>
        <Footer />
      </Container>
    </main>
  );
}

export default Registerpage;
