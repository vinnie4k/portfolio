import WorkHeader from "./WorkHeader";

// Other Projects
import grabbit from "/src/assets/projects/grabbit.png";
import scribbly from "/src/assets/projects/scribbly.png";
import savvy from "/src/assets/projects/savvy.png";

function Volume() {
  return (
    <div className="flex flex-col gap-8 lg:w-[1000px] lg:mx-auto sm:py-16 lg:py-24 sm:gap-16">
      {/* Header */}
      <WorkHeader
        type="iOS Application"
        title="Volume"
        appstoreURL="https://apps.apple.com/us/app/volume-cornell-publications/id1547133564"
        githubURL="https://github.com/cuappdev/volume-ios"
      />

      <p className="text-4xl text-center">Coming soon!</p>

      {/* See More */}
      <div className="flex flex-col gap-8 items-center lg:gap-16 py-24">
        <h2 className="text-3xl font-bold text-center lg:text-4xl">
          More Projects
        </h2>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:justify-center">
          <a href="/work/grabbit" className="w-72 lg:w-96">
            <img src={grabbit} alt="Image of Grabbit" className="cell-link" />
          </a>
          <a href="/work/savvy" className="w-72 lg:w-96">
            <img src={savvy} alt="Image of Savvy" className="cell-link" />
          </a>
          <a href="/work/scribbly" className="w-72 lg:w-96">
            <img src={scribbly} alt="Image of Scribbly" className="cell-link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Volume;
