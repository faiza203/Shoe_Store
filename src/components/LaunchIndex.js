import React from "react";
import { shoes } from "./index";
import { Link } from "react-router-dom"
export const LaunchIndexPage = () => {
    return <ul>
        {Object.entries(shoes).map(([slug, { name, img }]) => (
            <li key={slug}>
                <Link to={`/${slug}`}>
                    <h2>{name}</h2>
                    <img src={img} alt={name} />
                </Link>
            </li>
        ))}
    </ul >
}