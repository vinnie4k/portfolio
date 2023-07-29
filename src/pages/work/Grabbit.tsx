import WorkHeader from "./WorkHeader";
import WorkTech from "./WorkTech";
import grabbit_1 from "/src/assets/projects/grabbit/grabbit_1.png";
import grabbit_2 from "/src/assets/projects/grabbit/grabbit_2.png";
import grabbit_3 from "/src/assets/projects/grabbit/grabbit_3.png";
import Fade from "react-reveal/Fade";
import { useState } from "react";

// Other Projects
import savvy from "/src/assets/projects/savvy.png";
import scribbly from "/src/assets/projects/scribbly.png";
import volume from "/src/assets/projects/volume.png";

function Grabbit() {
  const [fadeTwo, setFadeTwo] = useState(false);
  setTimeout(() => {
    if (!fadeTwo) {
      setFadeTwo(!fadeTwo);
    }
  }, 500);

  return (
    <div className="flex flex-col gap-8 lg:w-[1000px] lg:mx-auto sm:py-16 lg:py-24 sm:gap-16">
      <Fade>
        {/* Header */}
        <WorkHeader
          type="iOS Application"
          title="Grabbit"
          appstoreURL="https://apps.apple.com/us/app/grabbit/id6450518666"
          githubURL="https://github.com/vinnie4k/Grabbit"
        />

        {/* Description */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-32">
          <div className="flex flex-col gap-4 sm:gap-8">
            <div className="flex max-sm:flex-row max-sm:gap-10">
              <p className="sm:text-xl lg:text-2xl">
                Pre-enroll didn't go so well? Are all of your classes full?
                Grabbit is here to help!
              </p>
              <div className="sm:hidden">
                <WorkTech techs="SwiftUI, Express, Firebase" />
              </div>
            </div>
            <p className="sm:text-xl lg:text-2xl">
              Search for your course through the app to begin tracking. Grabbit
              will notify you when a spot opens up, and you can quickly copy the
              section code and go to Student Center through the app. Sit back,
              relax, and enable push notifications!
            </p>
          </div>
          <div className="max-sm:hidden">
            <WorkTech techs="SwiftUI, NodeJS, Express, Firebase" />
          </div>
        </div>
      </Fade>

      {/* Screenshots */}
      <div className="flex flex-col gap-16 py-8 items-center text-center">
        <Fade bottom when={fadeTwo}>
          <div className="flex flex-col gap-4 items-center sm:flex-row-reverse sm:gap-16">
            <img
              src={grabbit_1}
              alt="Grabbit - search for your courses"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <p className="text-2xl sm:text-3xl lg:text-5xl">
              <span className="font-bold">search</span> for your courses
            </p>
          </div>
        </Fade>
        <Fade bottom when={fadeTwo}>
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:gap-16">
            <img
              src={grabbit_2}
              alt="Grabbit - one tap to track"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <p className="text-2xl sm:text-3xl lg:text-5xl">
              one tap to <span className="font-bold">track</span>
            </p>
          </div>
        </Fade>
        <Fade bottom when={fadeTwo}>
          <div className="flex flex-col gap-4 items-center mb-8 sm:flex-row-reverse sm:gap-16">
            <img
              src={grabbit_3}
              alt="Grabbit - get notified instantly, copy code in one tap"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <div>
              <p className="text-2xl sm:text-3xl lg:text-5xl sm:mb-2">
                get notified <span className="font-bold">instantly</span>,{" "}
              </p>
              <p className="text-2xl sm:text-3xl lg:text-5xl">
                copy code in <span className="font-bold">one tap</span>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* See More */}
      <Fade when={fadeTwo}>
        <div className="flex flex-col gap-8 items-center lg:gap-16 py-24">
          <h2 className="text-3xl font-bold text-center lg:text-4xl">
            More Projects
          </h2>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:justify-center">
            <a href="/work/savvy" className="w-72 lg:w-96">
              <img src={savvy} alt="Image of Savvy" className="cell-link" />
            </a>
            <a href="/work/volume" className="w-72 lg:w-96">
              <img src={volume} alt="Image of Volume" className="cell-link" />
            </a>
            <a href="/work/scribbly" className="w-72 lg:w-96">
              <img
                src={scribbly}
                alt="Image of Scribbly"
                className="cell-link"
              />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Grabbit;
