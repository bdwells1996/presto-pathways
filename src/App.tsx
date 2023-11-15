import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./views/AboutUs/AboutUs";
import { Blog } from "./views/Blog/Blog";
import { BrowseDestinations } from "./views/BrowseDestinations/BrowseDestinations";
import { GetInTouch } from "./views/GetInTouch/GetInTouch";
import { Home } from "./views/Home/Home";
import Layout from "./views/Layout/Layout";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/browse-destinations" element={<BrowseDestinations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Route>
    </Routes>
  );
}

export default App;
