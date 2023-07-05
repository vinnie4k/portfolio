import profile from "/src/assets/profile.png";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Landing() {
  const [fadeTwo, setFadeTwo] = useState(false);
  setTimeout(() => {
    if (!fadeTwo) {
      setFadeTwo(!fadeTwo);
    }
  }, 500);

  const [fadeThree, setFadeThree] = useState(false);
  setTimeout(() => {
    if (!fadeThree) {
      setFadeThree(!fadeThree);
    }
  }, 1000);

  const [fadeFour, setFadeFour] = useState(false);
  setTimeout(() => {
    if (!fadeFour) {
      setFadeFour(!fadeFour);
    }
  }, 1500);

  return (
    <div className="h-[calc(100vh-160px)] sm:h-[100vh-224px)] flex items-center justify-center">
      <div className="flex flex-col max-sm:text-center sm:flex-row sm:items-center">
        <Zoom>
          <img
            src={profile}
            alt="Image of Vin Bui"
            className="w-52 mx-auto pb-8 sm:hidden"
          />
        </Zoom>
        <div className="sm:mr-8">
          <Fade when={fadeTwo}>
            <h1 className="font-bold text-4xl max-sm:pb-2 sm:text-5xl sm:pb-4 lg:text-7xl">
              Hi. I'm Vin.
            </h1>
          </Fade>
          <Fade when={fadeThree}>
            <p className="text-base text-gray sm:text-xl lg:text-2xl">
              A student and full-stack developer with a serious passion for
              improving user experience and developing new technologies.
              Currently developing for{" "}
              <span className="text-appdev font-medium">
                <a href="https://www.cornellappdev.com/" className="url-link">
                  Cornell AppDev
                </a>
              </span>
              .
            </p>
          </Fade>
        </div>
        <Zoom when={fadeFour}>
          <img
            src={profile}
            alt="Image of Vin Bui"
            className="w-52 mx-auto pb-8 sm:w-56 sm:h-56 max-sm:hidden lg:w-72 lg:h-72"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default Landing;
