import About from "./pages/home/About";
import Connect from "./pages/home/Connect";
import DevSkills from "./pages/home/DevSkills";
import Landing from "./pages/home/Landing";
import NavBar from "./components/NavBar";
import TechSkills from "./pages/home/TechSkills";
import Work from "./pages/home/Work";
import RecentPosts from "./pages/home/RecentPosts";

function App() {
  return (
    <div className="text-black font-rhdisplay bg-white px-[32px]">
      <NavBar />
      <div className="flex flex-col gap-24">
        <Landing />
        <DevSkills />
        <TechSkills />
        <Work />
        <About />
        <RecentPosts />
        <Connect />
      </div>
    </div>
  );
}

export default App;
