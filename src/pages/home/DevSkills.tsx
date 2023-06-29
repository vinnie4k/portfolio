import iosDev from "/src/assets/ios_dev.png";
import webDev from "/src/assets/web_dev.png";

function DevSkills() {
  return (
    <div className="flex flex-col gap-16 mt-[-96px]">
      <div>
        <div className="mt-24">
          <img
            src={webDev}
            alt="Image of a screen doing web development"
            className="h-56 mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold pt-8">Web Development</h2>
        <p className="text-base text-gray pt-2">
          Proficient in creating full-stack web applications using HTML/CSS/JS,
          ReactJS, Tailwind CSS and NodeJS.
        </p>
      </div>

      <div>
        <div className="mt-24">
          <img
            src={iosDev}
            alt="Image of a screen doing iOS development"
            className="h-56 mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold pt-8">iOS Development</h2>
        <p className="text-base text-gray pt-2">
          Experienced in developing and publishing full-stack iOS applications
          using Swift and Xcode.
        </p>
      </div>
    </div>
  );
}

export default DevSkills;
