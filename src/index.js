import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation";
import Main from "./pages/main";
import About from "./pages/about";
import Projects from "./pages/projects";
import Services from "./pages/services";
import NotFound from "./pages/notFound";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/projects/games">
             {/* Route here */}
          </Route>
          <Route path="/projects/tools">
            {/* Route here */}
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(< App />);