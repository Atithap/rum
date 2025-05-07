import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

function Welcomepage() {
  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow shadow-xl p-10 m-5 rounded-lg ">
          <div className="flex justify-between ">
            <div>
              <h3 className="text-5xl">Profile</h3>
              <p className="text-2xl mt-5">Welcome </p>
            </div>
            <div>
              <Link
                href="/creat"
                className="bg-blue-500 text-white border py-2 px-3 rounded-md text-lg my-3"
              >
                Post
              </Link>
            </div>
          </div>
          <div>
            {/* Data */}
            <div className="shadow-xl my-5 p-5 rounded-lg">
              <h4 className="text-2xl">Post title</h4>
              <Image
                className="my-3 rounded-md"
                src="https://plus.unsplash.com/premium_photo-1701193525975-6c4c01ae8ca2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
                width={100}
                height={0}
                alt="Post Image"
              ></Image>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                impedit quisquam dolore quam repellat atque, harum perspiciatis,
                odio incidunt eum mollitia excepturi necessitatibus, assumenda
                est animi alias. Commodi, eum adipisci.
              </p>
              <div className="mt-5">
                <Link className="bg-gray-500 text-white px-3 py-2 mx-2" href="/edit">Edite</Link>
                <Link className="bg-red-500 text-white px-3 py-2 mx-2" href="/delete">Delete</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </main>
  );
}

export default Welcomepage;
