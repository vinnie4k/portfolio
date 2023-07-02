import WorkHeader from "./WorkHeader";
import WorkTech from "./WorkTech";
import grabbit_1 from "/src/assets/projects/grabbit/grabbit_1.png";
import grabbit_2 from "/src/assets/projects/grabbit/grabbit_2.png";
import grabbit_3 from "/src/assets/projects/grabbit/grabbit_3.png";

function Grabbit() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <WorkHeader
        type="iOS Application"
        title="Grabbit"
        appstoreURL=""
        githubURL="https://github.com/vinnie4k/Grabbit"
      />

      {/* Description */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-10">
          <p>
            Pre-enroll didn't go so well? Are all of your classes full? Grabbit
            is here to help!
          </p>
          <WorkTech techs="SwiftUI, Express, Firebase" />
        </div>
        <p>
          Search for your course through the app to begin tracking. Grabbit will
          notify you when a spot opens up, and you can quickly copy the section
          code and go to Student Center through the app. Sit back, relax, and
          enable push notifications!
        </p>
      </div>

      {/* Screenshots */}
      <div className="flex flex-col gap-16 py-8 items-center text-center">
        <div className="flex flex-col gap-4 items-center">
          <img src={grabbit_1} className="h-[256px]" />
          <p className="text-2xl">
            <span className="font-bold">search</span> for your courses
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src={grabbit_2} className="h-[256px]" />
          <p className="text-2xl">
            one tap to <span className="font-bold">track</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center mb-8">
          <img src={grabbit_3} className="h-[256px]" />
          <div>
            <p className="text-2xl">
              get notified <span className="font-bold">instantly</span>,{" "}
            </p>
            <p className="text-2xl">
              copy code in <span className="font-bold">one tap</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grabbit;
