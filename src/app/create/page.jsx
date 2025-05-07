import React from "react";
import Navbar from "../User/components/userNav";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Link from "next/link";

function UserCreatepage() {
  return (
    <main>
      <Container>
        <Navbar></Navbar>
        <div className="flex-grow shadow-xl p-10 m-5 rounded-lg bg-sky-200 ">
          <div className="flex justify-center items-center flex-col">
            <div className="text-center">
              <h3 className="text-5xl">Select your power in your pc.</h3>
            </div>
            <div>
              {/* Data */}
              <div className="shadow-xl my-5 mx-5 p-5 rounded-lg flex flex-col items-center w-200 h-60 bg-green-500 ">
                <div className="flex flex-col ">
                  <h4 className="text-l">select cpu</h4>
                  <input type="text" className="bg-white " />
                  <h4 className="text-l">select gpu</h4>
                  <input type="text" className="bg-white " />
                  <h4 className="text-l">select ram</h4>
                  <input type="text" className="bg-white " />
                </div>
                <div>
                  <button
                    type="sumit"
                    className="bg-stone-900 text-white border py-1 px-3 rounded-md text-lg my-3 hover:bg-yellow-600 transition duration-300"
                  >
                    Let't go
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Link
                href="/create"
                className="bg-stone-900 text-white border py-2 px-3 rounded-md text-lg my-3 hover:bg-yellow-600 transition duration-300"
              >
                Create your new PC
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default UserCreatepage;
