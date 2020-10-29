import React from "react";
import {Link} from "react-router-dom";
export const NavElement = () => {
    return <nav>
    <Link to="/">Home</Link>
    <Link to="/Launch">Launch</Link>
    </nav>
}