// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import About from "./components/About/About";
import ContactUs from "./components/Contact Us/ContactUs";
import Blog from "./components/Blog/blog";
import FlatProjects from "./components/All Projects/flatProjects";
import PlotProjects from "./components/All Projects/plotProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/flatProject" element={<FlatProjects />} />
        <Route path="/plotProject" element={<PlotProjects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
