import { useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import resume from "/src/assets/resume.pdf";

function NavDropdown() {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <div className="py-6 absolute w-full bg-white">
      <ul className="flex flex-col items-center text-center gap-4">
        <li className="font-bold text-base" onClick={refreshPage}>
          <a
            href="/"
            className={`${
              useMatch({ path: useResolvedPath("/").pathname, end: true })
                ? "text-primary"
                : null
            } inline-block w-screen`}
          >
            Home
          </a>
        </li>
        <li className="font-bold text-base" onClick={refreshPage}>
          <a
            href="/blog"
            className={`${
              useMatch({ path: useResolvedPath("/blog").pathname, end: false })
                ? "text-primary"
                : null
            } inline-block w-screen`}
          >
            Blog{" "}
          </a>
        </li>
        <li className="font-bold text-base">
          <a href={resume} className="inline-block w-screen">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavDropdown;
