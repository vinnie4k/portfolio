import WorkHeader from "./WorkHeader";
import WorkTech from "./WorkTech";
import Lottie from "react-lottie";
import { useState } from "react";
import scribblyAnimation from "../../assets/lottie/scribbly.json";
import Fade from "react-reveal/Fade";

// Other Projects
import grabbit from "/src/assets/projects/grabbit.png";
import savvy from "/src/assets/projects/savvy.png";
import volume from "/src/assets/projects/volume.png";

// Images
import scribbly_1 from "../../assets/projects/scribbly/scribbly_1.png";
import scribbly_2 from "../../assets/projects/scribbly/scribbly_2.png";
import scribbly_3 from "../../assets/projects/scribbly/scribbly_3.png";
import scribbly_4 from "../../assets/projects/scribbly/scribbly_4.png";

function Scribbly() {
  const lottieSettings = {
    loop: false,
    autoplay: true,
    animationData: scribblyAnimation,
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
          height={window.innerWidth > 640 ? 600 : 300}
          eventListeners={[
            { eventName: "complete", callback: () => toggleIsStopped() },
          ]}
          isClickToPauseDisabled={true}
        />
      </div>

      <div className="flex flex-col gap-8 lg:w-[1000px] lg:mx-auto sm:py-16 lg:py-24 sm:gap-16">
        <Fade bottom when={isStopped} distance="75px">
          {/* Header */}
          <WorkHeader
            type="iOS Application"
            title="Scribbly"
            appstoreURL=""
            githubURL="https://github.com/vinnie4k/scribbly-ios"
          />

          {/* Description */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-32">
            <div className="flex flex-col gap-4 sm:gap-8">
              <div className="flex max-sm:flex-row max-sm:gap-10">
                <p className="sm:text-xl lg:text-2xl">
                  An app on a mission to make improving one's art skills a
                  social and playful experience. Express your internal Picasso
                  and share your artwork with friends! Discover their art. Be
                  inspired!
                </p>
                <div className="sm:hidden">
                  <WorkTech techs="UIKit, NodeJS, Firebase" />
                </div>
              </div>
              <p className="sm:text-xl lg:text-2xl">
                Spend around 10 minutes creating your piece of art for a random
                prompt every day. Like, comment, and share your friends' artwork
                to keep each other accountable. Build your own personal art
                journal through your profile and see how much you have improved
                from practicing daily!
              </p>
            </div>
            <div className="max-sm:hidden">
              <WorkTech techs="UIKit, NodeJS, Firebase" />
            </div>
          </div>
        </Fade>

        {/* Screenshots */}
        <div className="flex flex-col gap-16 py-8 items-center text-center">
          <Fade bottom distance="75px">
            <div className="flex flex-col gap-4 items-center sm:flex-row sm:gap-16">
              <img
                src={scribbly_1}
                alt="Scribbly - new prompt everyday"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <div>
                <p className="text-2xl sm:text-3xl lg:text-5xl sm:mb-2 font-semibold">
                  new prompt everyday
                </p>
                <p className="text-2xl sm:text-3xl lg:text-5xl text-gray">
                  start anytime you want
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom distance="75px">
            <div className="flex flex-col gap-4 items-center sm:flex-row-reverse sm:gap-16">
              <img
                src={scribbly_2}
                alt="Scribbly - discover other artwork"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <div>
                <p className="text-2xl sm:text-3xl lg:text-5xl sm:mb-2 font-semibold">
                  discover other artwork
                </p>
                <p className="text-2xl sm:text-3xl lg:text-5xl text-gray">
                  keep them accountable
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom distance="75px">
            <div className="flex flex-col gap-4 items-center mb-8 sm:flex-row sm:gap-16">
              <img
                src={scribbly_3}
                alt="Scribbly - your art journey"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <div>
                <p className="text-2xl sm:text-3xl lg:text-5xl sm:mb-2 font-semibold">
                  your art journey
                </p>
                <p className="text-2xl sm:text-3xl lg:text-5xl text-gray">
                  all in one place
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom distance="75px">
            <div className="flex flex-col gap-4 items-center mb-8 sm:flex-row-reverse sm:gap-16">
              <img
                src={scribbly_4}
                alt="Scribbly - form a community"
                className="h-[256px] sm:h-80 lg:h-96"
              />
              <div>
                <p className="text-2xl sm:text-3xl lg:text-5xl sm:mb-2 font-semibold">
                  form a community
                </p>
                <p className="text-2xl sm:text-3xl lg:text-5xl text-gray">
                  interact with others
                </p>
              </div>
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
              <a href="/work/volume" className="w-72 lg:w-96">
                <img src={volume} alt="Image of Volume" className="cell-link" />
              </a>
              <a href="/work/savvy" className="w-72 lg:w-96">
                <img src={savvy} alt="Image of Savvy" className="cell-link" />
              </a>
              <a href="/work/grabbit" className="w-72 lg:w-96">
                <img
                  src={grabbit}
                  alt="Image of Grabbit"
                  className="cell-link"
                />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Scribbly;
