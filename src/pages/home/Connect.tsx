import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { InlineWidget } from "react-calendly";

function Connect() {
  return (
    <div className="bg-offWhite1 mx-[-32px] py-16 px-8 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold mb-1">Connect</h2>
        <div className="underline-mobile"></div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-gray text-sm">
          Check out my socials below or schedule a coffee chat!
        </p>
        <div className="flex flex-row place-content-evenly">
          <a
            href="https://www.instagram.com/vin.bui/"
            className="flex flex-col items-center gap-1 url-link"
          >
            <FaInstagram size={24} className="text-instagram" />
            <p className="text-gray text-sm">@vin.bui</p>
          </a>
          <a
            href="https://www.linkedin.com/in/vinhan-bui/"
            className="flex flex-col items-center gap-1 url-link"
          >
            <FaLinkedin size={24} className="text-linkedin" />
            <p className="text-gray text-sm">/vinhan-bui</p>
          </a>
          <a
            href="https://github.com/vinnie4k"
            className="flex flex-col items-center gap-1 url-link"
          >
            <FaGithub size={24} className="text-github" />
            <p className="text-gray text-sm">@vinnie4k</p>
          </a>
        </div>
      </div>
      <InlineWidget
        url={"https://calendly.com/vinbui/chat-w-vin"}
        styles={{
          height: "500px",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Connect;
