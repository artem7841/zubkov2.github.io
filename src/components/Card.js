import React from "react";
import './Card.css';

function Card(props) {
    return(
        <div class="card">
            <img src={props.img}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}
export default Card;