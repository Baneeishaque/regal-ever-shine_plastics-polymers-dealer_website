const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });

// exports.send_mail = functions.https.onRequest((request, response) => {
//     const nodemailer = require('nodemailer');
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'baneeishaque@gmail.com',
//             pass: 'jefphbapsawogetw'
//         }
//     });
//
//     const mailOptions = {
//         from: 'baneeishaque@gmail.com',
//         to: 'k.baneeishaque@yahoo.com',
//         subject: 'Sending Email using Node.js',
//         text: 'That was easy!'
//     };
//
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// });

// exports.bigben = functions.https.onRequest((req, res) => {
//     const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
//     res.status(200).send(`<!doctype html>
//     <head>
//       <title>Time</title>
//     </head>
//     <body>
//       ${'BONG '.repeat(hours)}
//     </body>
//   </html>`);
// });

const express = require('express');
const app = express();

app.get('/bigben_html', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${'BONG '.repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

app.get('/bigben_api', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.json({bongs: 'BONG '.repeat(hours)});
});

app.get('/helloWorld', (req, res) => {
    res.send("Hello from Firebase!");
});

exports.app = functions.https.onRequest(app);

