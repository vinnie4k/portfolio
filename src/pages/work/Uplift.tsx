import WorkHeader from "./WorkHeader";
import WorkTech from "./WorkTech";
import uplift_1 from "/src/assets/projects/uplift/uplift_1.png";
import uplift_2 from "/src/assets/projects/uplift/uplift_2.png";
import uplift_3 from "/src/assets/projects/uplift/uplift_3.png";
import uplift_4 from "/src/assets/projects/uplift/uplift_4.png";
import Fade from "react-reveal/Fade";
import { useState } from "react";

// Other Projects
import savvy from "/src/assets/projects/savvy.png";
import scribbly from "/src/assets/projects/scribbly.png";
import status from "/src/assets/projects/status.png";
import volume from "/src/assets/projects/volume.png";

function Uplift() {
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
          type="iOS Application"
          title="Uplift"
          appstoreURL="https://apps.apple.com/us/app/uplift-cornell-fitness/id1439374374"
          githubURL="https://github.com/cuappdev/uplift-ios-swiftui"
        />

        {/* Description */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-32">
          <div className="flex flex-col gap-4 sm:gap-8">
            <div className="flex max-sm:flex-row max-sm:gap-10">
              <p className="sm:text-xl lg:text-2xl">
                Staying fit at Cornell is easier than ever! Our vision is to
                provide the best college fitness and wellness resource for the
                Cornell community.
              </p>
              <div className="sm:hidden">
                <WorkTech techs="SwiftUI, Combine, GraphQL, PostgreSQL, Firebase" />
              </div>
            </div>
            <p className="sm:text-xl lg:text-2xl">
              With Uplift, you can check gym hours and capacity, explore nearby
              activities, and view all fitness classes. Start your fitness
              journey today and download the app!
            </p>
          </div>
          <div className="max-sm:hidden">
            <WorkTech techs="SwiftUI, Combine, GraphQL, PostgreSQL, Firebase" />
          </div>
        </div>
      </Fade>

      {/* Screenshots */}
      <div className="flex flex-col gap-16 py-8 items-center text-center">
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:gap-16">
            <img
              src={uplift_1}
              alt="Uplift - View facility hours"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <p className="font-montserrat text-2xl sm:text-3xl lg:text-5xl">
              View facility <span className="font-bold">hours</span>
            </p>
          </div>
        </Fade>
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-4 items-center sm:flex-row-reverse sm:gap-16">
            <img
              src={uplift_2}
              alt="Uplift - Avoid packed gyms"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <p className="font-montserrat text-2xl sm:text-3xl lg:text-5xl">
              Avoid <span className="font-bold">packed</span> gyms
            </p>
          </div>
        </Fade>
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:gap-16">
            <img
              src={uplift_3}
              alt="Uplift - Discover fitness classes"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <p className="font-montserrat text-2xl sm:text-3xl lg:text-5xl">
              <span className="font-bold">Discover</span> fitness classes
            </p>
          </div>
        </Fade>
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-4 items-center sm:flex-row-reverse sm:gap-16">
            <img
              src={uplift_4}
              alt="Uplift - Explore nearby activities"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <p className="font-montserrat text-2xl sm:text-3xl lg:text-5xl">
              <span className="font-bold">Explore</span> nearby activities
            </p>
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
                <a href="/work/status" className="w-72 lg:w-96">
                  <img
                    src={status}
                    alt="Image of Status Page"
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

export default Uplift;
