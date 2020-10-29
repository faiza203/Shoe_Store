import React from "react";
import { shoes } from "./index";
export const LaunchIndexPage = () => {
    return <ul>
        {Object.entries(shoes).map(([slug, { name, img }]) => (
            <li key={slug}>
                    <h2>{name}</h2>
                    <img src={img} alt={name} />
                    </li>
        ))}
    </ul >
}