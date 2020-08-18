import React from "react";
import classes from "./Home.module.css";

import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <div className={classes.firstline}>
                <h5>Hello. I'm</h5>
                <hr />
            </div>
            <div className={classes.secondline}>
                <h3 className={classes.name}>BRYLLE MUTIA</h3>
            </div>
            <div className={classes.thirdline}>
                <hr />
                <h6>WEB DEVELOPER</h6>
            </div>
            <div className={classes.fourthline}>
                <Link to="/bio" className={classes.button_primary}>
                    WHO'S THIS GUY?
                </Link>
            </div>

            <div className={classes.slant_left}></div>
            <div className={classes.slant_right}></div>
        </main>
    );
}

export default Home;
