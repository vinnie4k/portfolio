function WorkTech(workTechProp: WorkTechProp) {
  return (
    <div className="flex flex-col gap-1 w-24 sm:w-36">
      <div className="underline-mobile bg-gray sm:w-36"></div>
      <p className="font-bold text-xs sm:text-lg">Technologies</p>
      <p className="text-xs text-gray sm:text-base">{workTechProp.techs}</p>
    </div>
  );
}

interface WorkTechProp {
  techs: string;
}

export default WorkTech;
