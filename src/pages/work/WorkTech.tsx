function WorkTech(workTechProp: WorkTechProp) {
  return (
    <div className="flex flex-col gap-1 w-24">
      <div className="underline-mobile bg-gray"></div>
      <p className="font-bold text-xs">Technologies</p>
      <p className="text-xs text-gray">{workTechProp.techs}</p>
    </div>
  );
}

interface WorkTechProp {
  techs: string;
}

export default WorkTech;
