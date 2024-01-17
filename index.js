const express = require('express');
const { createServer } = require('http');
// const { join } = require('node:path');
const { Server } = require('socket.io');
require('dotenv').config();

//Initialise HTTP Server
const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server listening at port: " + port)
});

//Initialise Socket.io
const io = new Server(server);

app.use('/', express.static('public')); // Serve index.html via Express

// Serve AboutOther Pages via Express
app.use('/portal', express.static('public/portal.html'));
app.use('/welcome', express.static('public/welcome.html'));
app.use('/formula', express.static('public/formula.html'));

// Body Parser to Parse JSON Data
app.use(express.json());

// Connect to MongoDB via QuickMongo
// const { Database } = require('quickmongo');


// // New Key using environment variable
// const db = new Database(process.env.mongodburl);

// db.on("ready", () => {
//   console.log("db ready!");
// }
// );

// db.connect();
// console.log("db connected!");