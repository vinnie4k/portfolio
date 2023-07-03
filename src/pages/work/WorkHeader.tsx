import appstore from "/src/assets/appstore.png";
import { FaGithub } from "react-icons/fa";

function WorkHeader(workHeaderProp: WorkHeaderProp) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-gray text-sm sm:text-xl">{workHeaderProp.type}</p>
        <h1 className="text-3xl leading-9 font-bold sm:text-6xl">
          {workHeaderProp.title}
        </h1>
        <div className="underline-mobile sm:underline-desktop"></div>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        <a
          href={workHeaderProp.appstoreURL}
          className={`${workHeaderProp.appstoreURL === "" ? "hidden" : null}`}
        >
          <img
            src={appstore}
            className="w-24 sm:w-36 sm:rounded-md cell-link lg:w-40 lg:rounded-lg"
          />
        </a>
        <a href={workHeaderProp.githubURL}>
          <div className="flex flex-row gap-2 items-center justify-center w-24 h-7 bg-offWhite2 rounded cell-link sm:w-36 sm:h-10 sm:rounded-md lg:w-40 lg:h-12 lg:rounded-lg">
            <FaGithub className="w-4 h-4 sm:w-6 sm:h-6" />
            <p className="text-xs font-bold sm:text-base">GitHub</p>
          </div>
        </a>
      </div>
    </div>
  );
}

interface WorkHeaderProp {
  type: string;
  title: string;
  appstoreURL: string;
  githubURL: string;
}

export default WorkHeader;
