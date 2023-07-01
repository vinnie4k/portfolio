import logo from "../assets/logo.png";
import NavDropdown from "./NavDropdown";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

function NavBar() {
  const [showDropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!showDropdown);
  };

  return (
    <nav className="py-6">
      <div className="flex flex-row justify-between items-center">
        <a href="/">
          <img src={logo} alt="Vin Bui's Logo" className="h-9" />
        </a>
        <button className="cursor-pointer" onClick={toggleDropdown}>
          {" "}
          <Hamburger size={32} />{" "}
        </button>
      </div>
      <Transition
        show={showDropdown}
        enter="transition-all ease-in-out duration-500 delay-[100ms]"
        enterFrom="opacity-0 translate-y-[-24px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-24px]"
      >
        <NavDropdown />
      </Transition>
    </nav>
  );
}

export default NavBar;
