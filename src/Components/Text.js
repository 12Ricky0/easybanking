import React from "react";

function Text(props) {
    return (
        <article>
            {props.className}
            <h1>{props.h1}</h1>
            <span>{props.name}</span>
            <h2>{props.heading}</h2>
            <p>{props.article}</p>
        </article>
    )
}

export default Text;