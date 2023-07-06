import React from "react";
import "./Details.css";
import Card from "./Card";

const Details = (props) =>{
    return (
       <Card className="concept">
           <img src = {props.img1} alt = "TO DO TITLE" />
           <h2>{props.title}</h2>
           <p>{props.description}</p>
       </Card>
    )
}

export default Details;

