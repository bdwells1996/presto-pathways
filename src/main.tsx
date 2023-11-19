import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { scrollSpy, scroller } from "react-scroll";
import App from "./App.tsx";
import "./index.scss";

// Initialize scroll spy
scrollSpy.update();

// Add event listener to handle scroll snapping
const scrollConfig = {
  duration: 800,
  delay: 0,
  smooth: "easeInOutQuart",
};

function scrollToSection(section) {
  scroller.scrollTo(section, scrollConfig);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
