import React from "react";
import classes from "./Home.module.scss";

import { Link } from "react-router-dom";


function Home() {
    return (
        <main>
            <div className={classes.firstline}><h5>Hello. I'm</h5><hr/></div>
            <div className={classes.secondline}><h3>BRYLLE MUTIA</h3></div>
            <div className={classes.thirdline}><hr/><h6>FULLSTACK WEB DEVELOPER</h6></div>
            <div className={classes.fourthline}><Link to="/bio" className={classes.button_primary}>GET TO KNOW ME</Link></div>

            <div className={classes.slant_left}></div>
            <div className={classes.slant_right}></div>
        </main>
    )
}

export default Home;