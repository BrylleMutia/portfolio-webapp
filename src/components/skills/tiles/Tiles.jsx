import React from "react";

import html5 from "../../img/skills/html5.jpg";
import css3 from "../../img/skills/css3.jpg";
import js from "../../img/skills/js.jpg";
import react from "../../img/skills/react.jpg";
import redux from "../../img/skills/redux.jpg";
import sass from "../../img/skills/sass.jpg";
import materialui from "../../img/skills/material-ui.png";
import bootstrap from "../../img/skills/bootstrap.jpg";
import nodejs from "../../img/skills/nodejs.jpg";
import express from "../../img/skills/express.png";
import mongodb from "../../img/skills/mongodb.jpg";
import python from "../../img/skills/python.jpg";

import classes from "./Tiles.module.scss";

function Tiles() {
    return (
        <article>
            <div className={classes.container}>
                <div className={classes.column_1}>
                    <div style={{ backgroundImage: `url(${html5})` }}><h5>HTML5</h5></div>
                    <div style={{ backgroundImage: `url(${css3})` }}><h5>CCS3</h5></div>
                    <div style={{ backgroundImage: `url(${js})` }}><h5>JAVASCRIPT</h5></div>
                </div>
                <div className={classes.column_2}>
                    <div style={{ backgroundImage: `url(${react})` }}><h5>REACT</h5></div>
                    <div style={{ backgroundImage: `url(${redux})` }}><h5>REDUX</h5></div>
                    <div style={{ backgroundImage: `url(${sass})` }}><h5>SASS</h5></div>
                </div>
                <div className={classes.column_3}>
                    <div style={{ backgroundImage: `url(${materialui})` }}><h5>MATERIAL UI</h5></div>
                    <div style={{ backgroundImage: `url(${bootstrap})` }}><h5>BOOTSTRAP</h5></div>
                    <div style={{ backgroundImage: `url(${nodejs})` }}><h5>NODE.JS</h5></div>
                </div>
                <div className={classes.column_4}>
                    <div style={{ backgroundImage: `url(${express})` }}><h5>EXPRESS</h5></div>
                    <div style={{ backgroundImage: `url(${mongodb})` }}><h5>MONGODB</h5></div>
                    <div style={{ backgroundImage: `url(${python})` }}><h5>PYTHON</h5></div>
                </div>
            </div>
        </article>
    );
}

export default Tiles;
