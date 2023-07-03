import profile from "/src/assets/profile.png";

function Credits() {
  return (
    <div className="flex flex-row gap-6 items-center">
      <img src={profile} className="w-16 lg:w-24" />
      <div className="flex flex-col gap-1">
        <p className="lg:text-2xl">
          Written by <span className="font-bold">Vin Bui</span>
        </p>
        <p className="text-gray text-xs lg:text-xl">
          Student at Cornell University, College of Engineering
        </p>
      </div>
    </div>
  );
}

export default Credits;
