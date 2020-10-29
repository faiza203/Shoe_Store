import React from "react";
export const LaunchIndexPage = (shoes) => {
    return <ul>
     {shoes.map((shoe) => {
         <li>{shoe}</li>
     })}
    </ul>
}