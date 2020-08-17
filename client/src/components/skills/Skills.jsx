import React, { useState } from "react";
import classes from "./Skills.module.scss";

import Chart from "./chart/Chart";
import Bars from "./progress/Progress";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BarChartIcon from "@material-ui/icons/BarChart";

function Skills() {
    const [displayMode, setDisplayMode] = useState("bars");

    const handleModeChange = (event, mode) => {
        setDisplayMode(mode);
    };

    return (
        <div className={classes.skills}>
            <div className={classes.title}>
                <h2>MY SKILLS</h2>
                <hr />
            </div>
            <div className={classes.message}>
                <p>
                    <i>
                        "I'm passionate about my craft, so I hone my skills even to the depths of each, as long as I can still reach it. Every day is
                        a chance to learn something new. Numbers will just be numbers, but passion is what makes one a master".
                    </i>
                </p>
            </div>
            <div className={classes.data_display}>
                <div className={classes.toggle}>
                    <h4>DISPLAY MODE</h4>
                    <ToggleButtonGroup exclusive value={displayMode} onChange={handleModeChange}>
                        <ToggleButton style={{ backgroundColor: displayMode === "bars" ? "#66fcf1" : "#c5c6c7" }} value="bars">
                            <BarChartIcon style={{ transform: "rotate(90deg)" }} />
                        </ToggleButton>
                        <ToggleButton style={{ backgroundColor: displayMode === "chart" ? "#66fcf1" : "#c5c6c7" }} value="chart">
                            <BarChartIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className={classes.display}>{displayMode === "chart" ? <Chart /> : <Bars />}</div>
            </div>
        </div>
    );
}

export default Skills;
