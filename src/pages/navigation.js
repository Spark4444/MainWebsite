import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <nav>
                <a href="/">Main page</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/services">Services</a>
            </nav>

            <Outlet />
        </>
    )   
}

export default Navigation;