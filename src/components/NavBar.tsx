import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState } from "react";

function NavBar() {
  return (
    <div className="py-6 flex flex-row justify-between items-center">
      <img src={logo} alt="Vin Bui's Logo" className="h-8" />
      <FaBars size={24} />
    </div>
  );
}

export default NavBar;
