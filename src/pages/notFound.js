import React from "react";
import { Outlet, Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notFound">
            Error 404

            <Outlet />
        </div>
    )   
}

export default NotFound;