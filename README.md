# 📬 Contact Form Mail API

This is a personal backend service built with Node.js and Express. It acts as a mail server for my portfolio’s contact form. When someone submits the contact form, this API receives the form data and performs two actions:

1. Sends me an email with the message details.
2. Sends a confirmation email back to the sender.

The API is deployed at:  
👉 [https://api.medjdoub-karim.fr/send](https://api.medjdoub-karim.fr/send)

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- Nodemailer  
- SMTP server (hosted by IONOS)  
- Multer (for parsing form data)  
- dotenv (for managing sensitive credentials)

## 📮 How It Works

- Exposes a `POST /` endpoint that accepts contact form data (`name`, `email`, `subject`, `message`) via the request body.
- Uses `nodemailer` to send an email to me (`contact@medjdoub-karim.fr`) and a confirmation message to the sender.
- The API expects credentials (`TRANSPORTER_USER`, `TRANSPORTER_PASS`) to be stored in a `.env` file.

## 📦 Local Setup

1. Clone the repository:  
```bash
git clone https://github.com/yourusername/contact-mail-api.git  
cd contact-mail-api
```

2. Install dependencies:  
```bash
npm install
```

3. Create a `.env` file with the following variables:  
```env
TRANSPORTER_USER=your_email@yourdomain.com  
TRANSPORTER_PASS=your_password
```

4. Start the server:  
```bash
node index.js
```

The API will be running at `http://localhost:3010/`

## 🔐 POST Request Format

**Endpoint:** `POST /`  
**Content-Type:** `application/json` or `application/x-www-form-urlencoded`

**Body parameters:**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "subject": "Hello",
  "message": "Just wanted to say hi!"
}
```

## 📤 What It Sends

- A message to: `contact@medjdoub-karim.fr` with the sender’s info and message
- A confirmation email to the sender's email address

## 📄 License

MIT License

---

This API is used exclusively for my personal website’s contact form to handle message delivery and confirmation automatically 📥
