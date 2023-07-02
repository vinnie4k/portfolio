import profile from "/src/assets/profile.png";

function Credits() {
  return (
    <div className="flex flex-row gap-6">
      <img src={profile} className="w-16" />
      <div className="flex flex-col gap-1">
        <p>
          Written by <span className="font-bold">Vin Bui</span>
        </p>
        <p className="text-gray text-xs">
          Student at Cornell University, College of Engineering
        </p>
      </div>
    </div>
  );
}

export default Credits;
