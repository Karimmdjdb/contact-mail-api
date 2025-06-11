
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer from 'multer';
import dotenv from 'dotenv';

const port = 3010;

const upload = multer();
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

let transporter = nodemailer.createTransport({
        host: 'smtp.ionos.fr',
        port: 465,
        secure: true,
        auth: {
            user: process.env.TRANSPORTER_USER,
            pass: process.env.TRANSPORTER_PASS,
        }
});

app.post('/', upload.none(), (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        sendMail(name, email, subject, message);
        sendConfirmationMail(name, email, subject, message);
        res.status(200).send("Message sended successfully.")
    } catch(error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

function sendMail(name, email, subject, message) {

    let mailOptions = {
        from: 'bot@medjdoub-karim.fr',
        to: 'contact@medjdoub-karim.fr',
        subject: `New message from <${name}>`,
        text: `From: ${name} \n<${email}>\nSubject: ${subject}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) throw error;
    });
}

function sendConfirmationMail (name, email, subject, message) {

    let mailOptions = {
        from: 'bot@medjdoub-karim.fr',
        to: email,
        subject: 'Thanks for reaching out to me!',
        text: `Hello ${name}\n\nI have recieved your message:\n\nSubject: ${subject}\nMessage:\n${message}\n\nI will get back to you as soon as possible.\n\nBest regards,\nKarim MEDJDOUB\nmedjdoub-karim.fr`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) throw error;
    });
}