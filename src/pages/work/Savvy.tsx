import WorkHeader from "./WorkHeader";
import WorkTech from "./WorkTech";
import Fade from "react-reveal/Fade";
import { useState } from "react";

import savvy_1 from "/src/assets/projects/savvy/savvy_1.png";
import savvy_2 from "/src/assets/projects/savvy/savvy_2.png";
import savvy_3 from "/src/assets/projects/savvy/savvy_3.png";
import savvy_1_text from "/src/assets/projects/savvy/savvy_1_text.png";
import savvy_2_text from "/src/assets/projects/savvy/savvy_2_text.png";
import savvy_3_text from "/src/assets/projects/savvy/savvy_3_text.png";

// Other Projects
import grabbit from "/src/assets/projects/grabbit.png";
import scribbly from "/src/assets/projects/scribbly.png";
import volume from "/src/assets/projects/volume.png";

function Savvy() {
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
          title="Savvy"
          appstoreURL=""
          githubURL="https://github.com/vinnie4k/savvy-ios"
        />

        {/* Description */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-32">
          <div className="flex flex-col gap-4 sm:gap-8">
            <div className="flex max-sm:flex-row max-sm:gap-10">
              <p className="sm:text-xl lg:text-2xl">
                A mobile app where Cornell students can view job listings and
                opportunities centralized. Savvy is the next big step to
                creating a more convenient environment for job-seekers, bridging
                the gap between students and available jobs on campus.
              </p>
              <div className="sm:hidden">
                <WorkTech techs="SwiftUI, Flask, SQLAlchemy, Docker, Firebase" />
              </div>
            </div>
            <p className="sm:text-xl lg:text-2xl">
              Whether it’s your everyday cafe or library job, or research
              positions with your favorite professor, or even volunteer jobs and
              short positions posted by other student-led project teams, you can
              browse them all through the Savvy app.
            </p>
          </div>
          <div className="max-sm:hidden">
            <WorkTech techs="SwiftUI, Flask, SQLAlchemy, Docker, Firebase" />
          </div>
        </div>
      </Fade>

      {/* Screenshots */}
      <div className="flex flex-col gap-16 py-8 items-center text-center">
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-8 items-center sm:flex-row-reverse sm:gap-16">
            <img
              src={savvy_1}
              alt="Savvy - discover jobs for you"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <img
              src={savvy_1_text}
              alt="Savvy - discover jobs for you"
              className="h-[24px] sm:h-[32px] lg:h-[44px]"
            />
          </div>
        </Fade>
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-8 items-center sm:flex-row sm:gap-16">
            <img
              src={savvy_2}
              alt="Savvy - apply in a single tap"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <img
              src={savvy_2_text}
              alt="Savvy - apply in a single tap"
              className="h-[24px] sm:h-[32px] lg:h-[44px]"
            />
          </div>
        </Fade>
        <Fade bottom when={fadeTwo} distance="75px">
          <div className="flex flex-col gap-8 items-center sm:flex-row-reverse sm:gap-16">
            <img
              src={savvy_3}
              alt="Savvy - save jobs for later"
              className="h-[256px] sm:h-80 lg:h-96"
            />
            <img
              src={savvy_3_text}
              alt="Savvy - save jobs for later"
              className="h-[24px] sm:h-[32px] lg:h-[44px]"
            />
          </div>
        </Fade>
      </div>

      {/* See More */}
      <Fade bottom distance="75px">
        <div className="flex flex-col gap-8 items-center lg:gap-16 py-24">
          <h2 className="text-3xl font-bold text-center lg:text-4xl">
            More Projects
          </h2>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:justify-center">
            <a href="/work/grabbit" className="w-72 lg:w-96">
              <img src={grabbit} alt="Image of Grabbit" className="cell-link" />
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

export default Savvy;
