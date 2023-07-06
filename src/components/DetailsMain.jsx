import React from "react";
import Details from "./Details";
import "./DetailsMain.css";

const DetailsMain = (props) =>{
    return(
         <ul id = "concepts">
              <Details title = {props.concepts[0].title}  
              description = {props.concepts[0].description}
              img1 = {props.concepts[0].image} />

             <Details title = {props.concepts[1].title}  
             description = {props.concepts[1].description} 
             img1 = {props.concepts[1].image}/>

             <Details title = {props.concepts[2].title}  
             description = {props.concepts[2].description}
             img1 = {props.concepts[2].image}/>
         </ul>
    )
}

export default DetailsMain;
