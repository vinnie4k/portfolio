import Blog from "./pages/blog/Blog";
import Footer from "./components/Footer";
import Grabbit from "./pages/work/Grabbit";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

// Blogs
import Post1 from "./pages/posts/Post1";
import Post2 from "./pages/posts/Post2";

function App() {
  return (
    <div className="text-black font-rhdisplay bg-white max-sm:px-[32px] sm:px-[64px]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* Blog Posts */}
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/variables-and-constants" element={<Post1 />}></Route>
        <Route path="/blog/data-types" element={<Post2 />}></Route>
        {/* Projects */}
        <Route path="/work/grabbit" element={<Grabbit />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
