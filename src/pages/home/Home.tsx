import About from "./About";
import Connect from "./Connect";
import DevSkills from "./DevSkills";
import Landing from "./Landing";
import TechSkills from "./TechSkills";
import Work from "./Work";
import RecentPosts from "./RecentPosts";

function Home() {
  return (
    <div className="flex flex-col gap-24 sm:gap-[120px] lg:w-[1000px] lg:mx-auto">
      <Landing />
      <DevSkills />
      <TechSkills />
      <Work />
      <About />
      <RecentPosts />
      <Connect />
    </div>
  );
}

export default Home;
