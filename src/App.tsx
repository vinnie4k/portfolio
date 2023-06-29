import DevSkills from "./pages/home/DevSkills";
import Landing from "./pages/home/Landing";
import NavBar from "./components/NavBar";
import TechSkills from "./pages/home/TechSkills";

function App() {
  return (
    <div className="text-black font-rhdisplay bg-white px-[32px]">
      <NavBar />
      <Landing />
      <DevSkills />
      <TechSkills />
    </div>
  );
}

export default App;
