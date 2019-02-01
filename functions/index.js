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
const cors = require('cors')({origin: true});

app.use(cors);

// app.get('/bigben_html', (req, res) => {
//     const date = new Date();
//     const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
//     res.send(`
//     <!doctype html>
//     <head>
//       <title>Time</title>
//       <link rel="stylesheet" href="/style.css">
//       <script src="/script.js"></script>
//     </head>
//     <body>
//       <p>In London, the clock strikes:
//         <span id="bongs">${'BONG '.repeat(hours)}</span></p>
//       <button onClick="refresh(this)">Refresh</button>
//     </body>
//   </html>`);
// });

app.get('/bigben_api', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.json({bongs: 'BONG '.repeat(hours)});
});

app.get('/helloWorld', (req, res) => {
    res.send("Hello from Firebase!");
});

app.get('/send_mail', (req, res) => {
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'baneeishaque@gmail.com',
    //         pass: 'jefphbapsawogetw'
    //     }
    // });
    //
    // const mailOptions = {
    //     from: 'baneeishaque@gmail.com',
    //     to: 'k.baneeishaque@yahoo.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    // };
    //
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.log(error);
    //         res.send("0");
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //         res.send("1");
    //     }
    // });
    // const request = require('request');
    // request({url: 'http://139.59.65.128/athif/contact_api.php',
    //     form: {
    //         client_email: 'client_email@gmail.com',
    //         client_name: 'client_name',
    //         client_message: 'client_message',
    //         client_service: 'client_service'
    //     }
    // }, function (error, response, body) {
    //     console.log('error:', error); // Print the error if one occurred
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     console.log('body:', body); // Print the HTML for the Google homepage.
    //     if (error) {
    //         // console.log(error);
    //         res.send("0");
    //     } else {
    //         // console.log('Email sent: ' + info.response);
    //         res.send("1");
    //     }
    //
    // });

    const xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState === 4 && this.status === 200) {
    //         // document.getElementById("demo").innerHTML = this.responseText;
    //         // alert(this.responseText);
    //     }
    // };
    xhttp.open("POST", "http://139.59.65.128/athif/contact_api.php", true);
    // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("client_name=client_name&client_message=client_message&client_service=client_service&client_email=client_email@gmail.com");
    res.send("1");

    // request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ });
});

exports.app = functions.https.onRequest(app);

