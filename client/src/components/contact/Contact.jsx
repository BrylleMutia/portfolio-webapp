import React, { useState } from "react";
import classes from "./Contact.module.css";

import fbIcon from "../img/contact/facebook.png";
import twitterIcon from "../img/contact/twitter.png";
import linkedinIcon from "../img/contact/linkedin.png";
import mailIcon from "../img/contact/gmail.png";
import phoneIcon from "../img/contact/phone.png";

import axios from "axios";

import { Alert } from "@material-ui/lab";

function Contact() {
    const [sendSuccess, setSendSuccess] = useState(false);
    const [displayAlert, setDisplayAlert] = useState(false);

    const sendMail = (e) => {
        e.preventDefault();

        const headers = {
            "Content-Type": "application/json",
        };

        const body = JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            description: e.target.description.value,
            budget: e.target.budget.value,
        });

        console.log(body);

        axios
            .post("/sendmail", body, headers)
            .then((response) => setSendSuccess(true))
            .catch((error) => setSendSuccess(false));

        // show alert for 5 seconds after every request
        setDisplayAlert(true);
        setTimeout(hideAlert, 5000);
    };

    const hideAlert = () => setDisplayAlert(false);

    // style of alert component to show / hide
    const alertDisplay = () => {
        if (!displayAlert) {
            return {
                display: "none",
            };
        } else return null;
    };

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

                <div className={classes.alert}>
                    <Alert color={sendSuccess ? "success" : "error"} variant="standard" style={alertDisplay()}>
                        {sendSuccess ? "SUCCESS! Request Sent" : "ERROR: Request not sent"}
                    </Alert>
                </div>

                <form className={classes.input_form} onSubmit={sendMail} method="POST">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="number" name="budget" placeholder="Budget" required />
                    <textarea name="description" placeholder="Project description" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <hr />
            <div className={classes.contact_info}>
                <p>You can also reach me in the following platforms:</p>
                <ul>
                    <li>
                        <img src={fbIcon} alt="facebook-contact" />
                        <h4>
                            <a href="https://www.facebook.com/brylle03">Brylle Mutia (Facebook)</a>
                        </h4>
                    </li>
                    <li>
                        <img src={twitterIcon} alt="twitter-contact" />
                        <h4>
                            <a href="https://www.twitter.com/bryllemutia3">Brylle Mutia (Twitter)</a>
                        </h4>
                    </li>
                    <li>
                        <img src={linkedinIcon} alt="linkedin-contact" />
                        <h4>
                            <a href="https://www.linkedin.com/in/isidro-brylle-mutia-526a66163">Brylle Mutia (LinkedIn)</a>
                        </h4>
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
