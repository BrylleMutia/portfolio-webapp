import React from "react";
import classes from "./Contact.module.scss";

function Contact() {
    return (
        <aside>
            <div className={classes.contact_form}>
                <div>
                    <h1>Don't be a stranger.</h1>
                    <h2>Just say hello.</h2>
                </div>
                <p>
                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be a part of
                    your visions.
                </p>

                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="number" name="budget" placeholder="Budget" />
                    <textarea placeholder="Project description"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className={classes.contact_info}>f</div>
        </aside>
    );
}

export default Contact;
