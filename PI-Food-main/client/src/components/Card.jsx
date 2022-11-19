import React from "react";
//import { Link  } from "react-router-dom"

export default function Card({name, image, diets}) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{diets}</h5>
            <img src={image} alt="img not found" />
        </div>
    );
}

