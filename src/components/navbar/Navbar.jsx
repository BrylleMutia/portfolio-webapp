import React from "react";
import classes from "./Navbar.module.scss";

import HomeIcon from "../img/ic_home_white_24dp.png";
import BioIcon from "../img/ic_person_white_24dp.png";
import SkillsIcon from "../img/ic_equalizer_white_24dp.png";
import PortfolioIcon from "../img/ic_folder_white_24dp.png";
import ContactIcon from "../img/ic_mail_white_24dp.png";

import { withRouter, Link } from "react-router-dom";

function Navbar({ location }) {
    return (
        <nav className={classes.nav}>
            <Link to="/" className={classes.link} style={{ background: location.pathname === "/" ? "#45A28E" : null }}>
                <img src={HomeIcon} alt="home" />
                HOME
            </Link>
            <Link to="/bio" className={classes.link} style={{ background: location.pathname === "/bio" ? "#45A28E" : null }}>
                <img src={BioIcon} alt="home" />
                BIO
            </Link>
            <Link to="/skills" className={classes.link} style={{ background: location.pathname === "/skills" ? "#45A28E" : null }}>
                <img src={SkillsIcon} alt="home" />
                SKILLS
            </Link>

            <Link to="/portfolio" className={classes.link} style={{ background: location.pathname === "/portfolio" ? "#45A28E" : null }}>
                <img src={PortfolioIcon} alt="home" />
                PORTFOLIO
            </Link>
            <Link to="/contact" className={classes.link} style={{ background: location.pathname === "/contact" ? "#45A28E" : null }}>
                <img src={ContactIcon} alt="home" />
                CONTACT
            </Link>
        </nav>
    );
}

export default withRouter(Navbar);
