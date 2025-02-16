import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Services from "./pages/services/services";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="games">
             {/* Route here */}
          </Route>
          <Route path="tools">
            {/* Route here */}
          </Route>
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(< App />);