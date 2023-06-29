import profile from "/src/assets/profile.png";

function Landing() {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center">
      <div className="flex flex-col text-center">
        <img
          src={profile}
          alt="profile"
          className="w-[200px] mx-auto pb-[32px]"
        />
        <h1 className="font-bold text-[36px] pb-[8px]">Hi. I'm Vin.</h1>
        <p className="font-regular text-[16px] text-gray">
          A student and full-stack developer with a serious passion for
          improving user experience and developing new technologies. Currently
          developing for{" "}
          <span className="text-appdev font-medium">
            <a href="https://www.cornellappdev.com/" className="url-link">
              Cornell AppDev
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Landing;
