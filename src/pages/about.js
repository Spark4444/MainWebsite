import React from "react";
import { Outlet, Link } from "react-router-dom";

function About() {
    return (
        <>
            <header>
                About
            </header>

            <Outlet />
        </>
    )   
}

export default About;