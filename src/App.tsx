import NavBar from "./components/NavBar";
import Landing from "./pages/home/Landing";
import DevSkills from "./pages/home/DevSkills";

function App() {
  return (
    <div className="text-black font-rhdisplay bg-white px-[32px]">
      <NavBar />
      <Landing />
      <DevSkills />
    </div>
  );
}

export default App;
