function NavDropdown() {
  return (
    <div className="py-6 absolute w-full bg-white">
      <ul className="flex flex-col items-center text-center gap-4">
        <li className="font-bold text-base">
          <a
            href="/"
            className={`${
              window.location.pathname === "/" ? "text-primary" : null
            }`}
          >
            Work
          </a>
        </li>
        <li className="font-bold text-base">
          <a
            href="/blog"
            className={`${
              window.location.pathname === "/blog" ? "text-primary" : null
            }`}
          >
            Blog{" "}
          </a>
        </li>
        <li className="font-bold text-base">
          <a>Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default NavDropdown;
