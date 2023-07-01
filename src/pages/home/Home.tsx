import About from "/src/pages/home/About";
import Connect from "/src/pages/home/Connect";
import DevSkills from "/src/pages/home/DevSkills";
import Landing from "/src/pages/home/Landing";
import TechSkills from "/src/pages/home/TechSkills";
import Work from "/src/pages/home/Work";
import RecentPosts from "/src/pages/home/RecentPosts";

function Home() {
  return (
    <div className="flex flex-col gap-24">
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
