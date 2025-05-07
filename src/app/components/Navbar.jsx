import React from "react";
import Link from "next/link";
import logo from "../../../public/next.svg";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="shadow-xl py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 py-2 bg-white">
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Link>
          </div>
          <ul className="flex">
            <li className="mx-3">
              <Link href="/login">Login</Link>
            </li>
            <li className="mx-3">
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
