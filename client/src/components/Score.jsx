import React from "react";
import "../App.css";

export default function Score(props) {
    return (
        <div className="scoreboard row sticky-top">
            <h3 className="col-12 mx-auto"> HUT-HUT-CLICK</h3>
            <div className="row">
                <div className="col-sm-4">
                    <p>Click each team without clicking the same team</p>
                </div>
                <div className="col-sm-4 text-center">
                    Score: {props.score} | Top Score: {props.topScore}
                </div>
                <p className="col-sm-4">{props.message}</p>
            </div>

        </div>
    );
}