import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return   <header className="fixed w-full bg-primary-900  top-0  z-[1000]">
      <div className=" py-6 flex justify-between items-center text-secondary-50 container ">
        <Link to="/">
          <Logo />
        </Link>
        <Navbar />
      </div>
    </header>
}

export default Header;
