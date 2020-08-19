import React from "react";
import classes from "./Portfolio.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imgOne from "../img/portfolio/todo_today-1.png";
import imgTwo from "../img/portfolio/todo_today-2.png";

function Portfolio() {
    return (
        <div className={classes.portfolio}>
            <div className={classes.title}>
                <p>MY PROJECTS</p>
                <hr />
            </div>
            <Carousel>
                <div>
                    <img src={imgOne} alt="project-1" />
                    <p className="legend">
                        Todo Today (#1) <br /> <a href="https://todotoday-1.herokuapp.com/">https://todotoday-1.herokuapp.com/</a>
                    </p>
                </div>
                <div>
                    <img src={imgTwo} alt="project-2" />
                    <p className="legend">
                        Todo Today (#2) <br /> <a href="https://todotoday-1.herokuapp.com/">https://todotoday-1.herokuapp.com/</a>
                    </p>
                </div>
            </Carousel>
            <p>
                Source code of projects can be found here: <a href="https://www.github.com/BrylleMutia">Brylle Mutia on Github</a>
            </p>
        </div>
    );
}

export default Portfolio;
