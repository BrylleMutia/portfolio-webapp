const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const config = require("config");
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.post("/sendmail", (req, res) => {
    // instantiate SMTP server
    const smtpTrans = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: config.get("GMAIL_USER"),
            pass: config.get("GMAIL_PASS"),
        },
    });

    // specify how the email will look like
    const mailOpts = {
        from: "Sender info here",
        to: config.get("GMAIL_USER"),
        subject: "New Message from bryllemutia.ml",
        text: `--SENDER: ${req.body.name} --EMAIL: ${req.body.email} --MESSAGE: ${req.body.description} --BUDGET: ${req.body.budget}`,
    };

    // attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.status(400).json({ messageSent: false, error });
        } else {
            res.json({ messageSent: true });
        }
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connected to port ${port}...`));
