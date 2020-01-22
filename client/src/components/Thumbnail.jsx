import React from "react";
import '../App.css';

export default function Thumbnail(props) {

    return (
        <img
            src={props.src}
            onClick={props.onClick}
            className="img-thumbnail"
            alt="NFL Teams"
        />
    );
}