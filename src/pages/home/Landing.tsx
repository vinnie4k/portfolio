import profile from "/src/assets/profile.png";

function Landing() {
  return (
    <div className="h-[calc(100vh-160px)] sm:h-[100vh-224px)] flex items-center justify-center">
      <div className="flex flex-col max-sm:text-center sm:flex-row sm:items-center">
        <img
          src={profile}
          alt="Image of Vin Bui"
          className="w-52 mx-auto pb-8 sm:hidden"
        />
        <div className="sm:mr-8">
          <h1 className="font-bold text-4xl max-sm:pb-2 sm:text-5xl sm:pb-4 lg:text-7xl">
            Hi. I'm Vin.
          </h1>
          <p className="text-base text-gray sm:text-xl lg:text-2xl">
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
        <img
          src={profile}
          alt="Image of Vin Bui"
          className="w-52 mx-auto pb-8 sm:w-56 sm:h-56 max-sm:hidden lg:w-72 lg:h-72"
        />
      </div>
    </div>
  );
}

export default Landing;
