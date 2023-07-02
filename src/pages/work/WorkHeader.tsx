import appstore from "/src/assets/appstore.png";
import { FaGithub } from "react-icons/fa";

function WorkHeader(workHeaderProp: WorkHeaderProp) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-gray text-sm">{workHeaderProp.type}</p>
        <h1 className="text-3xl leading-9 font-bold">{workHeaderProp.title}</h1>
        <div className="underline-mobile"></div>
      </div>
      <div className="flex flex-col gap-2">
        <a href={workHeaderProp.appstoreURL}>
          <img src={appstore} className="w-24" />
        </a>
        <a href={workHeaderProp.githubURL}>
          <div className="flex flex-row gap-2 items-center justify-center w-24 h-7 bg-offWhite2 rounded">
            <FaGithub size={16} />
            <p className="text-xs font-bold">GitHub</p>
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
