import React from "react";
import classes from "./Skills.module.css";

import Chart from "./chart/Chart";

function Skills() {
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
                <div className={classes.display}><Chart /></div>
            </div>
        </div>
    );
}

export default Skills;
