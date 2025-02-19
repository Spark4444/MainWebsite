import React from "react";
import { Outlet, Link } from "react-router-dom";

function Main() {
    return (
        <>
            <header>
                Main page
            </header>
            <Outlet />
        </>
    )   
}

export default Main;