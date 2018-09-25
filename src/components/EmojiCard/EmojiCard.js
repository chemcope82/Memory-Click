import React from "react";
import "./EmojiCard.css";

const EmojiCard = props => {
    return (
        <div 
            className = "card"
            onClick = { () => props.handleClick(props.id) }
        >
            <div className = "imgContainer">
                <img alt={props.name} src={props.image} value={props.id}
                />
            </div>
        </div>
    );
};

export default EmojiCard;