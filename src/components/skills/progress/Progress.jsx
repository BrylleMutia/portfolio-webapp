import React, { useState } from "react";
import classes from "./Progress.module.css";

import Bar from "./bar/Bar";

function Progress() {
    const [skills] = useState([
        {
            name: "HTML5",
            mastery: 89,
            color: "rgb(228, 77, 38)",
        },
        {
            name: "CCS3",
            mastery: 87,
            color: "rgb(21, 114, 182)",
        },
        {
            name: "JAVASCRIPT",
            mastery: 90,
            color: "rgb(247, 223, 30)",
        },
        {
            name: "REACT",
            mastery: 93,
            color: "rgb(96, 217, 251)",
        },
        {
            name: "REDUX",
            mastery: 87,
            color: "rgb(118, 74, 188)",
        },
        {
            name: "SASS",
            mastery: 91,
            color: "rgb(207, 100, 154)",
        },
        {
            name: "MATERIAL UI",
            mastery: 85,
            color: "rgb(0, 176, 255)",
        },
        {
            name: "BOOTSTRAP",
            mastery: 77,
            color: "rgb(107, 59, 177)",
        },
        {
            name: "NODE.JS",
            mastery: 70,
            color: "rgb(109, 167, 93)",
        },
        {
            name: "EXPRESS",
            mastery: 74,
            color: "rgb(176, 176, 176)",
        },
        {
            name: "MONGODB",
            mastery: 76,
            color: "rgb(83, 152, 70)",
        },
        {
            name: "PYTHON",
            mastery: 91,
            color: "rgb(255, 202, 29)",
        },
    ]);

    return (
        <div className={classes.progress}>
            <div className={classes.columns}>
                <div className={classes.column1}>
                    {skills.slice(0, skills.length / 2).map((skill, index) => (
                        <Bar key={index} barColor={skill.color} barLabel={skill.name} barWidth={skill.mastery.toString()} />
                    ))}
                </div>
                <div className={classes.column2}>
                    {skills.slice(skills.length / 2, skills.length).map((skill, index) => (
                        <Bar key={index} barColor={skill.color} barLabel={skill.name} barWidth={skill.mastery.toString()} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Progress;
