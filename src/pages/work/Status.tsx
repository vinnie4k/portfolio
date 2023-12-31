import WorkHeader from "./WorkHeader";
import WorkTech from "./WorkTech";
import uplift_1 from "/src/assets/projects/uplift/uplift_1.png";
import uplift_2 from "/src/assets/projects/uplift/uplift_2.png";
import uplift_3 from "/src/assets/projects/uplift/uplift_3.png";
import uplift_4 from "/src/assets/projects/uplift/uplift_4.png";
import Fade from "react-reveal/Fade";
import { useState } from "react";

// Other Projects
import grabbit from "/src/assets/projects/grabbit.png";
import savvy from "/src/assets/projects/savvy.png";
import scribbly from "/src/assets/projects/scribbly.png";
import volume from "/src/assets/projects/volume.png";

function Status() {
  const [fadeTwo, setFadeTwo] = useState(false);
  setTimeout(() => {
    if (!fadeTwo) {
      setFadeTwo(!fadeTwo);
    }
  }, 500);

  return (
    <div className="flex flex-col gap-8 lg:w-[1000px] lg:mx-auto sm:py-16 lg:py-24 sm:gap-16">
      <Fade bottom distance="75px">
        {/* Header */}
        <WorkHeader
          type="Web Application"
          title="AppDev Status"
          appstoreURL=""
          githubURL="https://github.com/cuappdev/app-status"
        />

        {/* Description */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-32">
          <div className="flex flex-col gap-4 sm:gap-8">
            <div className="flex max-sm:flex-row max-sm:gap-10">
              <p className="sm:text-xl lg:text-2xl">
                Are any of our apps currently down? Are there any bugs that you
                would like for us to know? Visit our{" "}
                <span className="text-appdev font-medium">
                  <a href="https://cuapp.dev/status/" className="url-link">
                    status page
                  </a>
                </span>{" "}
                to view the status of our apps and report bugs, all in one
                place!
              </p>
              <div className="sm:hidden">
                <WorkTech techs="MongoDB, ExpressJS, ReactJS, NodeJS" />
              </div>
            </div>
            <p className="sm:text-xl lg:text-2xl">
              On our status page, you can view all of our app's status in the
              past 72 hours. If you are experiencing any bugs, our status page
              has a form that you can fill out to report to us right away. You
              can also subscribe for email alerts regarding updates for our
              apps.
            </p>
          </div>
          <div className="max-sm:hidden">
            <WorkTech techs="MongoDB, Express, ReactJS, NodeJS" />
          </div>
        </div>
      </Fade>

      {/* Screenshots */}
      <div className="flex flex-col gap-16 py-8 items-center text-center">
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-4 items-center sm:flex-row-reverse sm:gap-16">
            <p className="text-2xl sm:text-3xl lg:text-5xl">Coming soon...</p>
          </div>
        </Fade>
      </div>

      {/* See More */}
      <Fade bottom distance="75px" when={fadeTwo}>
        <div className="flex flex-col gap-8 items-center lg:gap-16 py-24">
          <h2 className="text-3xl font-bold text-center lg:text-4xl">
            More Projects
          </h2>
          <div className="flex flex-col max-sm:gap-8 max-sm:items-center sm:flex-row sm:gap-8 sm:justify-center">
            <div className="flex flex-col max-sm:gap-8 sm:gap-8">
              <Fade bottom distance="75px">
                <a href="/work/grabbit" className="w-72 lg:w-96">
                  <img
                    src={grabbit}
                    alt="Image of Grabbit"
                    className="cell-link"
                  />
                </a>
                <a href="/work/volume" className="w-72 lg:w-96">
                  <img
                    src={volume}
                    alt="Image of Volume"
                    className="cell-link"
                  />
                </a>
              </Fade>
            </div>
            <div className="flex flex-col max-sm:gap-8 sm:gap-8">
              <Fade bottom distance="75px">
                <a href="/work/savvy" className="w-72 lg:w-96">
                  <img src={savvy} alt="Image of Savvy" className="cell-link" />
                </a>
                <a href="/work/scribbly" className="w-72 lg:w-96">
                  <img
                    src={scribbly}
                    alt="Image of Scribbly"
                    className="cell-link"
                  />
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Status;
