import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./css/style.css";
import htmlContent from "./index.html";

function ChudjakAndDefenceOfAgartha(){
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

            <Outlet />
        </>
    )
}

export default ChudjakAndDefenceOfAgartha;