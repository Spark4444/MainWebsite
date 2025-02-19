import React from "react";
import { Outlet, Link } from "react-router-dom";

function Projects() {
    return (
        <>
            <header>
                Projects
            </header>

            <Outlet />
        </>
    )   
}

export default Projects;