import iosDev from "/src/assets/ios_dev.png";
import webDev from "/src/assets/web_dev.png";
import Fade from "react-reveal/Fade";

function DevSkills() {
  return (
    <div className="flex flex-col gap-16">
      <Fade left>
        <div className="sm:flex sm:flex-row sm:gap-12 sm:items-center lg:gap-24">
          <img
            src={webDev}
            alt="Image of a screen doing web development"
            className="max-lg:h-56 mx-auto lg:w-[340px]"
          />
          <div>
            <h2 className="text-3xl font-bold pt-8 sm:text-4xl">
              Web Development
            </h2>
            <p className="text-base text-gray pt-2 sm:text-xl">
              Proficient in creating full-stack web applications using
              HTML/CSS/JS, ReactJS, Tailwind CSS and NodeJS.
            </p>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="sm:flex sm:flex-row sm:gap-12 sm:items-center lg:gap-24">
          <img
            src={iosDev}
            alt="Image of a screen doing iOS development"
            className="h-56 mx-auto mt-16 sm:hidden"
          />
          <div>
            <h2 className="text-3xl font-bold pt-8 sm:text-4xl">
              iOS Development
            </h2>
            <p className="text-base text-gray pt-2 sm:text-xl">
              Experienced in developing and publishing full-stack iOS
              applications using Swift and Xcode.
            </p>
          </div>
          <img
            src={iosDev}
            alt="Image of a screen doing iOS development"
            className="max-lg:h-56 mx-auto mt-16 max-sm:hidden lg:w-[340px]"
          />
        </div>
      </Fade>
    </div>
  );
}

export default DevSkills;
