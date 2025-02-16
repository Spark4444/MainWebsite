import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
    return (
        <>


            <Outlet />
        </>
    )   
}

export default Navigation;