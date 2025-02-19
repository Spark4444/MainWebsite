import React from "react";
import { Outlet, Link } from "react-router-dom";

function Services() {
    return (
        <>
            <header>
                Services
            </header>

            <Outlet />
        </>
    )   
}

export default Services;