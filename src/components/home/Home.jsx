import React from "react";
import classes from "./Home.module.scss";


function Home() {
    return (
        <main>
            <div className={classes.firstline}><h5>Hello. I'm</h5><hr/></div>
            <div className={classes.secondline}><h3>BRYLLE MUTIA</h3></div>
            <div className={classes.thirdline}><hr/><h6>FULLSTACK WEB DEVELOPER</h6></div>
            <div className={classes.fourthline}><button>GET TO KNOW ME</button></div>
        </main>
    )
}

export default Home;