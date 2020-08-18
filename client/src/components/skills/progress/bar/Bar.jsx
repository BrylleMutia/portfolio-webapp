import React from "react";
import classes from "./Bar.module.css";

function Bar({ barWidth, barColor, barLabel }) {
    const barStyle = {
        "--width": `${barWidth}`,
        "--color": `${barColor}`,
    };

    return (
        <React.Fragment>
            <div className={classes.progress_bar} style={barStyle} data-content={`${barLabel} (${barWidth}%)`}></div>
        </React.Fragment>
    );
}

export default Bar;
