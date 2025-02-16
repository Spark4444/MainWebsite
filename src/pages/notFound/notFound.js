import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
    return (
        <>


            <Outlet />
        </>
    )   
}

export default NotFound;