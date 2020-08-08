import React from "react";
import classes from "./Portfolio.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imgOne from "../img/portfolio/todo_today-1.png";
import imgTwo from "../img/portfolio/todo_today-2.png";

function Portfolio() {
    return (
        <aside>
            <div>
                <Carousel>
                    <div>
                        <img src={imgOne} alt="image-one" />
                        <a className="legend">Todo Today (#1) <br/> <a href="https://todotoday-1.herokuapp.com/">https://todotoday-1.herokuapp.com/</a></a>
                    </div>
                    <div>
                        <img src={imgTwo} alt="image-two" />
                        <p className="legend">Todo Today (#2) <br/> <a href="https://todotoday-1.herokuapp.com/">https://todotoday-1.herokuapp.com/</a></p>
                    </div>
                </Carousel>
            </div>
        </aside>
    );
}

export default Portfolio;
