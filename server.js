const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

require('./database/connect')

const userRoutes = require('./routes/userRoutes')
app.use(userRoutes)

const productRoutes = require('./routes/productRoute')
app.use(productRoutes)

const server = http.createServer(app);
server.listen(5000, () => {
    console.log("Server Started on Port: "+ process.env.PORT)
})