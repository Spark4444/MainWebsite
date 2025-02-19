import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as functions from "./function";
import Navigation from "./pages/navigation";
import Main from "./pages/main";
import About from "./pages/about";
import Projects from "./pages/projects";
import Services from "./pages/services";
import NotFound from "./pages/notFound";
import ChudjakAndDefenceOfAgartha from "./projects/games/ChudjakAndDefenceOfAgartha";
import "./css/style.css";

export function changeMainColors(bgColor, textColor, outlineColor) {
  document.documentElement.style.setProperty("--main-bg-color", bgColor);
  document.documentElement.style.setProperty("--main-text-color", textColor);
  document.documentElement.style.setProperty("--outline-color", outlineColor);
}

export let variations = functions.permute(["black", "red", "white"]);

export function changeTheme(themeId){
  changeMainColors(variations[themeId][0], variations[themeId][1], variations[themeId][2]);
}


function App() {
  useEffect(() => {
    document.querySelectorAll("*").forEach( element => element.style.transition = "0.5s linear");
  }, []);

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
          <Route path="ChudjakAndDefenceOfAgartha" element={<ChudjakAndDefenceOfAgartha/>}/>
        </Route>
        <Route path="/projects/tools">
          <Route path="CreateATable" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);