import Blog from "./pages/blog/Blog";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

// Projects
import Grabbit from "./pages/work/Grabbit";
import Savvy from "./pages/work/Savvy";
import Scribbly from "./pages/work/Scribbly";
import Status from "./pages/work/Status";
import Uplift from "./pages/work/Uplift";
import Volume from "./pages/work/Volume";

// Blogs
import Post1 from "./pages/posts/Post1";
import Post2 from "./pages/posts/Post2";
import Post3 from "./pages/posts/Post3";
import Post4 from "./pages/posts/Post4";
import Post5 from "./pages/posts/Post5";
import Post6 from "./pages/posts/Post6";
import Post7 from "./pages/posts/Post7";
import Post8 from "./pages/posts/Post8";

function App() {
  return (
    <div className="text-black font-rhdisplay bg-white max-sm:px-[32px] sm:px-[64px]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
        {/* Blog Posts */}
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/blog/intro-to-ios/variables-and-constants"
          element={<Post1 />}
        ></Route>
        <Route path="/blog/intro-to-ios/data-types" element={<Post2 />}></Route>
        <Route path="/blog/intro-to-ios/operators" element={<Post3 />}></Route>
        <Route
          path="/blog/intro-to-ios/data-structures"
          element={<Post4 />}
        ></Route>
        <Route
          path="/blog/intro-to-ios/conditionals"
          element={<Post5 />}
        ></Route>
        <Route path="/blog/intro-to-ios/loops" element={<Post6 />}></Route>
        <Route path="/blog/intro-to-ios/functions" element={<Post7 />}></Route>
        <Route path="/blog/intro-to-ios/optionals" element={<Post8 />}></Route>
        {/* Projects */}
        <Route path="/work/grabbit" element={<Grabbit />}></Route>
        <Route path="/work/savvy" element={<Savvy />}></Route>
        <Route path="/work/volume" element={<Volume />}></Route>
        <Route path="/work/scribbly" element={<Scribbly />}></Route>
        <Route path="/work/uplift" element={<Uplift />}></Route>
        <Route path="/work/status" element={<Status />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
