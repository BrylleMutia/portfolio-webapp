import React from "react";
import classes from "./Bio.module.scss";
import bioImg from "../img/bio/bio.jpg";

import { Link } from "react-router-dom";

function Bio() {
    return (
        <div className={classes.bio}>
            <div className={classes.row_one}>
                <div className={classes.column_one}>
                    <h3>OVERVIEW</h3>
                    <p>
                        Hi there! I'm Isidro Brylle Mutia, and I work as a web developer. I spent 5 years completing my Computer Engineering
                        degree where I was exposed to both the hardware and software fields of technology, with a bit of math (like 60% of it). Then
                        as I immerse myself to different technologies, I realized that the software field is where I want to be, where I can help
                        those people in need and give as much impact to the world as a whole.
                    </p>
                </div>
                <div className={classes.column_two}>
                    <img src={bioImg} alt="brylle" />
                </div>
            </div>
            <div className={classes.row_two}>
                <div className={classes.column_three}>
                    <div className={classes.cell}>
                        <h3>EXPERIENCE</h3>
                        <p>
                            I've dabbled with multiple programming languages throughout those 5 years, such as C++, C#, Python and JavaScript. I also
                            tried different fields of programming such as game development, machine learning, embedded systems, programmable logic
                            controllers, and eventually settled with web development.
                        </p>
                        <p>
                            I took online courses which you can check at my{" "}
                            <a href="https://www.linkedin.com/in/isidro-brylle-mutia-526a66163">LinkedIn</a> profile. I made also made some personal
                            projects, showcased at the portfolio section. I am currently freelancing at <a href="https://www.upwork.com">Upwork</a> as
                            a Fullstack Web Developer.
                        </p>
                    </div>
                    <div className={classes.buttons}>
                        <Link to="/contact" className={classes.button_secondary}>
                            CONTACT ME
                        </Link>
                        <button className={classes.button_primary}>
                            <a href="https://drive.google.com/file/d/1R9iicG4XZU4hrySiwyVDXsE6RXD6gJ8S/view?usp=sharing">DOWNLOAD CV</a>
                        </button>
                    </div>
                </div>
                <div className={classes.column_four}>
                    <h3>SERVICES</h3>
                    <p>
                        I aim to provide services that will help solve problems, simplify processes and methods, and help speedup our transition
                        towards modernization all with the help of code.
                    </p>
                    <ul>
                        <li>Build responsive websites that look great on any device.</li>
                        <li>Build web applications that utilize modern tech to deploy apps to the web.</li>{" "}
                        <li>Harness the power of data through the use of APIs</li>
                    </ul>
                    <p>
                        I'm always interested in a challenge, and to learn something new everyday. So if you've got some ideas in mind, let's build
                        those together! You can reach me at <a href="mailto:bryllemutia3@gmail.com">bryllemutia3@gmail.com</a> any time of the day!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bio;
