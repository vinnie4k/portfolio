import Blog from "./pages/blog/Blog";
import Footer from "./components/Footer";
import Grabbit from "./pages/work/Grabbit";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import Post1 from "./pages/posts/Post1";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="text-black font-rhdisplay bg-white px-[32px]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/variables-and-constants" element={<Post1 />}></Route>
        <Route path="/work/grabbit" element={<Grabbit />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
