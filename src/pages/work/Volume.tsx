import WorkHeader from "./WorkHeader";
import WorkTech from "./WorkTech";
import Lottie from "react-lottie";
import { useState } from "react";
import volumeAnimation from "../../assets/lottie/volume.json";
import Fade from "react-reveal/Fade";

// Other Projects
import grabbit from "/src/assets/projects/grabbit.png";
import scribbly from "/src/assets/projects/scribbly.png";
import status from "/src/assets/projects/status.png";
import uplift from "/src/assets/projects/uplift.png";

// Images
import volume_1 from "../../assets/projects/volume/volume_1.png";
import volume_2 from "../../assets/projects/volume/volume_2.png";
import volume_3 from "../../assets/projects/volume/volume_3.png";
import volume_4 from "../../assets/projects/volume/volume_4.png";
import volume_1_text from "../../assets/projects/volume/volume_1_text.png";
import volume_2_text from "../../assets/projects/volume/volume_2_text.png";
import volume_3_text from "../../assets/projects/volume/volume_3_text.png";
import volume_4_text from "../../assets/projects/volume/volume_4_text.png";

function Volume() {
  const lottieSettings = {
    loop: false,
    autoplay: true,
    animationData: volumeAnimation,
  };

  const [isStopped, setIsStopped] = useState(false);
  const toggleIsStopped = () => {
    setIsStopped(!isStopped);
  };

  return (
    <>
      {/* Lottie */}
      <div
        className={`h-[calc(100vh-200px)] sm:h-[calc(100vh-224px)] flex items-center justify-center`}
      >
        <Lottie
          options={lottieSettings}
          height={window.innerWidth > 640 ? 350 : 250}
          eventListeners={[
            { eventName: "complete", callback: () => toggleIsStopped() },
          ]}
          isClickToPauseDisabled={true}
        />
      </div>

      <div className="flex flex-col gap-8 lg:w-[1000px] lg:mx-auto sm:py-16 lg:py-24 sm:gap-16">
        {/* Header */}
        <Fade bottom when={isStopped} distance="75px">
          <WorkHeader
            type="iOS Application"
            title="Volume"
            appstoreURL="https://apps.apple.com/us/app/volume-cornell-publications/id1547133564"
            githubURL="https://github.com/cuappdev/volume-ios"
          />

          {/* Description */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-32">
            <div className="flex flex-col gap-4 sm:gap-8">
              <div className="flex max-sm:flex-row max-sm:gap-10">
                <p className="sm:text-xl lg:text-2xl">
                  Looking to explore what your fellow students are writing about
                  on campus? Want to see all upcoming events hosted by student
                  organizations? Volume is here for you!
                </p>
                <div className="sm:hidden">
                  <WorkTech techs="SwiftUI, Combine, GraphQL, MongoDB, Firebase" />
                </div>
              </div>
              <p className="sm:text-xl lg:text-2xl">
                Explore, share, save, and enjoy content created by a variety of
                student publications and organizations at Cornell. From food to
                law and society, Volume highlights diverse voices on content by
                providing a platform to view them all in one place.
              </p>
            </div>
            <div className="max-sm:hidden">
              <WorkTech techs="SwiftUI, Combine, GraphQL, MongoDB, Firebase" />
            </div>
          </div>
        </Fade>

        {/* Screenshots */}
        <div className="flex flex-col gap-16 py-8 items-center text-center">
          <Fade bottom distance="75px">
            <div className="flex flex-col gap-8 items-center sm:flex-row sm:gap-16">
              <img
                src={volume_1}
                alt="Volume - Catch up on trending Cornell news"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <img
                src={volume_1_text}
                alt="Volume - Catch up on trending Cornell news"
                className="h-[86px] sm:h-[107px] lg:h-[128px]"
              />
            </div>
            <div className="flex flex-col gap-8 items-center sm:flex-row-reverse sm:gap-16">
              <img
                src={volume_2}
                alt="See what’s happening around campus with Flyers"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <img
                src={volume_2_text}
                alt="See what’s happening around campus with Flyers"
                className="h-[86px] sm:h-[107px] lg:h-[128px]"
              />
            </div>
            <div className="flex flex-col gap-8 items-center sm:flex-row sm:gap-16">
              <img
                src={volume_3}
                alt="Follow dozens of student publications"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <img
                src={volume_3_text}
                alt="Follow dozens of student publications"
                className="h-[86px] sm:h-[107px] lg:h-[128px]"
              />
            </div>
            <div className="flex flex-col gap-8 items-center mb-8 sm:flex-row-reverse sm:gap-16">
              <img
                src={volume_4}
                alt="Shoutout, bookmark and share your favorite content"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <img
                src={volume_4_text}
                alt="Shoutout, bookmark and share your favorite content"
                className="h-[86px] sm:h-[107px] lg:h-[128px]"
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
            <div className="flex flex-col max-sm:gap-8 max-sm:items-center sm:flex-row sm:gap-8 sm:justify-center">
              <div className="flex flex-col max-sm:gap-8 sm:gap-8">
                <Fade bottom distance="75px">
                  <a href="/work/uplift" className="w-72 lg:w-96">
                    <img
                      src={uplift}
                      alt="Image of Uplift"
                      className="cell-link"
                    />
                  </a>
                  <a href="/work/grabbit" className="w-72 lg:w-96">
                    <img
                      src={grabbit}
                      alt="Image of Grabbit"
                      className="cell-link"
                    />
                  </a>
                </Fade>
              </div>
              <div className="flex flex-col max-sm:gap-8 sm:gap-8">
                <Fade bottom distance="75px">
                  <a href="/work/status" className="w-72 lg:w-96">
                    <img
                      src={status}
                      alt="Image of Status Page"
                      className="cell-link"
                    />
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

      {isStopped ? null : <div className="h-screen w-screen"></div>}
    </>
  );
}

export default Volume;
