import React from "react";
import Navbar from "../User/components/userNav";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Link from "next/link";

function Welcomepage() {
  return (
    <main>
      <Container>
        <Navbar />
        <div className="flex-grow shadow-xl p-10 m-5 rounded-lg bg-sky-200 ">
          <div className="flex justify-center items-center flex-col">
            <div>
              <h3 className="text-5xl">Welcome</h3>
              <p className="text-2xl mt-5">looking for new PC?? </p>
            </div>
            <div>
              {/* Data */}
              <div className="shadow-xl my-5 mx-5 p-5 rounded-lg flex flex-col items-center w-200 h-60 bg-green-500 ">
                <h4 className="text-2xl">slide Adds</h4>
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
        <Footer />
      </Container>
    </main>
  );
}

export default Welcomepage;
