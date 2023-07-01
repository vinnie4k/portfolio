import Blog from "./pages/blog/Blog";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/blog":
      component = <Blog />;
      break;
  }

  return (
    <div className="text-black font-rhdisplay bg-white px-[32px]">
      <NavBar />
      {component}
      <Footer />
    </div>
  );
}

export default App;
