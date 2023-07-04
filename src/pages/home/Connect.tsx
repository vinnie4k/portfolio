import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { InlineWidget } from "react-calendly";

function Connect() {
  return (
    <div className="bg-offWhite1 mx-[-32px] py-16 px-8 sm:mx-[-64px] sm:px-16 sm:flex sm:flex-row sm:gap-16 sm:py-[120px] lg:mx-[calc(calc(-100vw+1000px)/2)] lg:px-[calc(calc(100vw-1000px)/2)]">
      <div className="flex flex-col gap-6 mb-6 sm:gap-9">
        <div>
          <h2 className="text-3xl font-bold mb-1 sm:mb-2 sm:text-4xl lg:text-5xl">
            Connect
          </h2>
          <div className="underline-mobile lg:underline-desktop"></div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-7">
          <p className="text-gray text-sm sm:text-base lg:text-xl">
            Check out my socials below or schedule a coffee chat!
          </p>
          <div className="flex flex-row place-content-evenly sm:flex-col sm:gap-7 sm:items-start">
            <a
              href="https://www.instagram.com/vin.bui/"
              className="flex flex-col items-center gap-1 url-link"
            >
              <div className="flex flex-col items-center sm:flex sm:flex-row sm:gap-6 sm:items-center">
                <FaInstagram className="text-instagram w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                <p className="text-gray text-sm sm:text-xl lg:text-2xl">
                  @vin.bui
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vinhan-bui/"
              className="flex flex-col items-center gap-1 url-link"
            >
              <div className="flex flex-col items-center sm:flex sm:flex-row sm:gap-6 sm:items-center">
                <FaLinkedin className="text-linkedin w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                <p className="text-gray text-sm sm:text-xl lg:text-2xl">
                  /vinhan-bui
                </p>
              </div>
            </a>
            <div>
              <a
                href="https://github.com/vinnie4k"
                className="flex flex-col items-center gap-1 url-link"
              >
                <div className="flex flex-col items-center sm:flex sm:flex-row sm:gap-6 sm:items-center">
                  <FaGithub className="text-github w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                  <p className="text-gray text-sm sm:text-xl lg:text-2xl">
                    @vinnie4k
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2">
        <InlineWidget
          url={"https://calendly.com/vinbui/chat-w-vin"}
          styles={{
            height: "500px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default Connect;
