import logo from "../assets/logo.png";
import NavDropdown from "./NavDropdown";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { useMatch, useResolvedPath, useNavigate } from "react-router-dom";

function NavBar() {
  const [showDropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!showDropdown);
  };

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <nav className="py-6 sm:py-8">
      <div className="flex flex-row justify-between items-center">
        <a href="/">
          <img
            src={logo}
            alt="Vin Bui's Logo"
            className="h-9 sm:h-10 lg:h-12 cell-link"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="max-sm:hidden flex flex-row sm:gap-12 lg:gap-16">
          <li
            className="font-bold lg:text-xl cell-link hover:opacity-80"
            onClick={refreshPage}
          >
            <a
              href="/"
              className={`${
                useMatch({ path: useResolvedPath("/").pathname, end: true })
                  ? "text-primary"
                  : null
              }`}
            >
              Home
            </a>
          </li>
          <li
            className="font-bold lg:text-xl cell-link hover:opacity-80"
            onClick={refreshPage}
          >
            <a
              href="/blog"
              className={`${
                useMatch({
                  path: useResolvedPath("/blog").pathname,
                  end: false,
                })
                  ? "text-primary"
                  : null
              }`}
            >
              Blog{" "}
            </a>
          </li>
          <li className="font-bold lg:text-xl cell-link hover:opacity-80">
            <a>Resume</a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <button className="cursor-pointer sm:hidden" onClick={toggleDropdown}>
          {" "}
          <Hamburger size={32} />{" "}
        </button>
      </div>
      <div className="sm:hidden">
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
      </div>
    </nav>
  );
}

export default NavBar;
