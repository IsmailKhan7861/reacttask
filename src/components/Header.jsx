import React from "react";
import "./Header.css";
import keyConceptsImage from "../assets/images/key-concepts.png";
import Card from "./Card";
const Header = () =>{
    return(

        <Card className = "header">
            <img src = {keyConceptsImage} alt = "Medal badge with  a star" />
            <h1>Key React Concepts</h1>
            <p>Selected key React concepts you should know about</p>
        </Card>
    )
}

export default Header;

