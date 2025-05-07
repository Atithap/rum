import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Link from "next/link";

function Registerpage() {
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
          <form className="flex flex-col items-center mt-5">
            <input
              type="text"
              placeholder="Username"
              className="border p-2 m-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 m-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 m-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 m-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 m-2">
              Register
            </button>
          </form>
          <p className="mt-5">
            Already have an account? <Link href="/login" className='hover:underline text-blue-500'>Login here</Link>
          </p>
        </div>
        <Footer />
      </Container>
    </main>
  );
}

export default Registerpage;
