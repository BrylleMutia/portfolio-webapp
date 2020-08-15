import React from "react";
import classes from "./Contact.module.scss";

import fbIcon from "../img/contact/facebook.png";
import mailIcon from "../img/contact/gmail.png";
import phoneIcon from "../img/contact/phone.png";
import twitterIcon from "../img/contact/twitter.png";

function Contact() {
    return (
        <div className={classes.contact}>
            <div className={classes.contact_form}>
                <div className={classes.contact_message}>
                    <h1>Don't be a stranger.</h1>
                    <h2>Just say hello.</h2>
                    <p>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be a part
                        of your visions.
                    </p>
                </div>

                <form className={classes.input_form}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="number" name="budget" placeholder="Budget" />
                    <textarea placeholder="Project description"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <hr/>
            <div className={classes.contact_info}>
                <p>You can also reach me in the following platforms:</p>
                <ul>
                    <li>
                        <img src={fbIcon} alt="facebook-contact" />
                        <h4>facebook.com/brylle03</h4>
                    </li>
                    <li>
                        <img src={twitterIcon} alt="twitter-contact" />
                        <h4>twitter.com/bryllemutia3</h4>
                    </li>
                    <li>
                        <img src={mailIcon} alt="gmail-contact" />
                        <h4>bryllemutia3@gmail.com</h4>
                    </li>
                    <li>
                        <img src={phoneIcon} alt="phone-contact" />
                        <h4>+63963-960-7132</h4>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
