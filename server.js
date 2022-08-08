const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const server = http.createServer(app);
server.listen(process.env.PORT || 5000, () => {
    console.log("Server Started on Port: "+ process.env.PORT)
})