import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray h-[1px] w-[calc(100vw-64px)]"></div>

      <div className="flex flex-col items-center p-8">
        <div className="flex flex-row gap-8 mb-6">
          <a href="https://www.linkedin.com/in/vinhan-bui/">
            <FaLinkedinIn
              size={40}
              className="footer-icon hover:text-linkedin"
            />
          </a>
          <a href="https://www.instagram.com/vin.bui/">
            <FaInstagram
              size={40}
              className="footer-icon hover:text-instagram"
            />
          </a>
          <a href="https://github.com/vinnie4k">
            <FaGithub size={40} className="footer-icon hover:text-[#6cc644]" />
          </a>
          <a href="mailto:vdb23@cornell.edu">
            <FaEnvelope
              size={40}
              className="footer-icon hover:text-[#BB001B]"
            />
          </a>
        </div>
        <p className="text-xs">VIN BUI © 2023</p>
      </div>
    </>
  );
}

export default Footer;
