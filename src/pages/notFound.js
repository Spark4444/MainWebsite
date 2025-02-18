import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { getRandomNumber } from "../function";
import * as index from "./../index";

let changeThemeInterval;

function NotFound() {
    let theme = getRandomNumber(0, index.variations.length - 1);
    function updateTheme() {
        index.changeTheme((theme % index.variations.length));
        theme++;
    }
    updateTheme()

    useEffect(() => {
        changeThemeInterval = setInterval(() => {
            updateTheme();
        }, 3000);

        return () => clearInterval(changeThemeInterval);
    }, []);

    return (
        <div className="notFound">
            <nav className="notFoundNav">
                <Link to="/">Go back to the main page →</Link>
            </nav>
            Error 404
            <br />
            <br />
            Page not found

            <Outlet />
        </div>
    )   
}

export default NotFound;