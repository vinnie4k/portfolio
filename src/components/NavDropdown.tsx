import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";

function NavDropdown() {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <div className="py-6 absolute w-full bg-white">
      <ul className="flex flex-col items-center text-center gap-4">
        <li className="font-bold text-base" onClick={refreshPage}>
          <Link
            to="/"
            className={`${
              useMatch({ path: useResolvedPath("/").pathname, end: true })
                ? "text-primary"
                : null
            }`}
          >
            Work
          </Link>
        </li>
        <li className="font-bold text-base" onClick={refreshPage}>
          <Link
            to="/blog"
            className={`${
              useMatch({ path: useResolvedPath("/blog").pathname, end: true })
                ? "text-primary"
                : null
            }`}
          >
            Blog{" "}
          </Link>
        </li>
        <li className="font-bold text-base">
          <a>Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default NavDropdown;
