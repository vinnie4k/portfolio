import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useMatch, useResolvedPath } from "react-router-dom";

function Footer() {
  return (
    <div
      className={`${
        useMatch({
          path: useResolvedPath("/").pathname,
          end: true,
        })
          ? "bg-offWhite1"
          : null
      } mx-[-32px] flex flex-col items-center sm:mx-[-64px]`}
    >
      <div className="bg-gray h-[1px] w-[calc(100vw-64px)] sm:h-[2px] sm:w-[calc(100vw-128px)]"></div>

      <div className="flex flex-col items-center p-8 sm:py-12">
        <div className="flex flex-row gap-8 mb-6 sm:gap-16 sm:mb-10">
          <a href="https://www.linkedin.com/in/vinhan-bui/">
            <FaLinkedinIn className="footer-icon hover:text-linkedin w-10 h-10 sm:w-11 sm:h-11" />
          </a>
          <a href="https://www.instagram.com/vin.bui/">
            <FaInstagram className="footer-icon hover:text-instagram w-10 h-10 sm:w-11 sm:h-11" />
          </a>
          <a href="https://github.com/vinnie4k">
            <FaGithub className="footer-icon hover:text-[#6cc644] w-10 h-10 sm:w-11 sm:h-11" />
          </a>
          <a href="mailto:vdb23@cornell.edu">
            <FaEnvelope className="footer-icon hover:text-[#BB001B] w-10 h-10 sm:w-11 sm:h-11" />
          </a>
        </div>
        <p className="text-xs sm:text-base">VIN BUI © 2023</p>
      </div>
    </div>
  );
}

export default Footer;
