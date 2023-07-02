import about from "/src/assets/about.png";

function About() {
  return (
    <div className="bg-offWhite1 mx-[-32px] py-16 px-8 flex flex-col gap-6 sm:mx-[-64px] sm:px-16 sm:py-[120px] lg:mx-[calc(calc(-100vw+1000px)/2)] lg:px-[calc(calc(100vw-1000px)/2)] lg:flex-row lg:gap-16 lg:items-center">
      <img
        src={about}
        alt="Three images of Vin Bui"
        className="w-72 mx-auto sm:w-80 lg:hidden"
      />
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-1 sm:mb-2 sm:text-4xl lg:text-5xl">
            About Me
          </h2>
          <div className="underline-mobile lg:underline-desktop"></div>
        </div>
        <p className="text-gray font text-base lg:text-xl">
          I'm a third-year student at{" "}
          <span className="text-cornell font-medium">
            <a href="https://www.cornell.edu/" className="url-link">
              Cornell University
            </a>
          </span>{" "}
          majoring in{" "}
          <span className="text-primary font-medium">
            <a
              href="https://infosci.cornell.edu/undergraduate/info-sci-majors/bs-information-science-systems-and-technology"
              className="url-link"
            >
              Information Science, Systems, and Technology
            </a>
          </span>{" "}
          in the College of Engineering specialized in interactive technologies
          and UX.
        </p>
        <p className="text-gray font text-base lg:text-xl">
          My journey began in high school where I took three years of computer
          science and two years of networking and cybersecurity. Those memorable
          years helped me discover the true purpose of writing programs:{" "}
          <span className="text-black">to solve real world problems</span>.
          Fast-forward to today, I have developed several projects with strong
          mission statements, all aimed to provide a simple and effective
          solution to real problems.
        </p>
        <p className="text-gray font text-base lg:text-xl">
          Aside from school and programming, you can see me live streaming video
          games on Twitch, working out at the gym 🏋️, and playing basketball 🏀
          or tennis 🎾 at the courts!
        </p>
      </div>
      <img
        src={about}
        alt="Three images of Vin Bui"
        className="lg:w-[420px] lg:h-[508px] max-lg:hidden"
      />
    </div>
  );
}

export default About;
